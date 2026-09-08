import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';

// Exercise the real handlers with isolated mail/storage adapters; never send enquiries.
function load(file, dependencies, globals = {}) {
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const context = { exports: {}, require: (name) => {
    if (!(name in dependencies)) throw new Error(`Unexpected dependency: ${name}`);
    return dependencies[name];
  }, ...globals };
  vm.runInNewContext(code, context, { filename: file });
  return context.exports;
}

const next = { NextResponse: { json: (body, options) => ({ body, status: options?.status || 200 }) } };
const helpers = load('src/lib/api.ts', { 'next/server': next }, {
  crypto: { randomUUID: () => 'isolated-test' }, console: { log() {}, info() {}, error() {}, warn() {} },
});
const minimum = { name: 'Test Reader', email: 'reader@example.invalid', company: 'Example' };

async function checkApi(body, expectedStatus, mailFails = false) {
  const saved = [], sent = [];
  const api = load('src/app/api/send-contact-email/route.ts', {
    'next/server': next,
    '@/lib/api': helpers,
    '@/lib/admin-store': {
      saveContactSubmission: async (value) => saved.push(value),
      saveReferralUse: async () => { throw new Error('Unexpected referral write'); },
      findReferralOwnerByCode: async () => null,
    },
    resend: { Resend: class {
      emails = { send: async (message) => {
        sent.push(message);
        return mailFails ? { error: { message: 'Simulated failure' } } : { data: { id: 'mock-mail' } };
      } };
    } },
  }, { process: { env: { RESEND_API_KEY: 'mock-only', RESEND_FROM_EMAIL: 'sender@example.invalid', EMAIL_TO: 'team@example.invalid' } } });
  const result = await api.POST({ json: async () => body });
  assert.equal(result.status, expectedStatus);
  if (expectedStatus === 400) {
    assert.equal(saved.length, 0);
    assert.equal(sent.length, 0);
  } else {
    assert.equal(sent.length, 1);
    assert.equal(saved.length, 1);
    assert.equal(result.body.success, expectedStatus === 200);
    if (!body.phone) assert.equal(saved[0].phone, '');
    assert.ok(!sent[0].html.includes('href="tel:"'));
  }
}

await checkApi(minimum, 200);
await checkApi({ ...minimum, phone: '', industry: '', message: '' }, 200);
await checkApi({ ...minimum, phone: '   ', industry: 'consulting' }, 200);
await checkApi({ ...minimum, phone: '+44 1234567890', industry: 'procurement' }, 200);
for (const field of ['name', 'email', 'company']) await checkApi({ ...minimum, [field]: ' ' }, 400);
await checkApi({ ...minimum, email: 'invalid' }, 400);
await checkApi({ ...minimum, phone: 'invalid' }, 400);
await checkApi(minimum, 502, true);
console.log('PASS API: three required fields, omitted optional fields, validation, delivery failure, isolated storage/mail');

async function checkClient(file, props, outcome) {
  const events = [], requests = [], states = [];
  let stateIndex = 0, finish;
  const pending = new Promise((resolve) => { finish = resolve; });
  const formState = { ...minimum, phone: '', industry: '', message: '', referralCode: '' };
  const jsx = (type, elementProps) => ({ type, props: elementProps });
  const copy = { form: { placeholder: {}, industries: {} }, messages: { validation: 'Required', success: 'Success', error: 'Failed' } };
  const component = load(file, {
    'react/jsx-runtime': { jsx, jsxs: jsx }, 'next/link': { default: 'a' },
    react: { useId: () => 'test', useRef: (value) => ({ current: value }), useState: (initial) => {
      const index = stateIndex++;
      const value = initial?.name !== undefined ? formState : initial;
      states[index] = value;
      return [value, (nextValue) => { states[index] = nextValue; }];
    } },
    '@/contexts/LanguageContext': { useLanguage: () => ({ language: 'en', t: { contact: copy } }) },
    '@/lib/analytics': { trackEvent: (name, params) => events.push({ name, params }) },
  }, {
    console: { error() {} },
    fetch: async (url, options) => {
      requests.push({ url, body: JSON.parse(options.body) });
      await pending;
      if (outcome === 'network') throw new Error('offline');
      return { ok: outcome !== 'http-error', json: async () => ({ success: outcome === 'success' }) };
    },
  });
  const walk = (node) => !node || typeof node !== 'object' ? [] : Array.isArray(node) ? node.flatMap(walk) : [node, ...walk(node.props?.children)];
  const nodes = walk(component.default(props));
  const fields = nodes.filter((node) => ['input', 'select', 'textarea'].includes(node.type));
  assert.deepEqual(fields.filter((node) => node.props.required).map((node) => node.props.name).sort(), ['company', 'email', 'name']);
  const form = nodes.find((node) => node.type === 'form');
  const first = form.props.onSubmit({ preventDefault() {} });
  await form.props.onSubmit({ preventDefault() {} });
  assert.equal(requests.length, 1, 'duplicate submit while pending');
  assert.equal(events.length, 0, 'no success event before confirmation');
  finish();
  await first;
  assert.equal(requests[0].url, '/api/send-contact-email');
  assert.equal(events.length, outcome === 'success' ? 2 : 0);
  if (outcome === 'success') {
    assert.deepEqual(events.map((event) => event.name), ['contact_form_submit', 'demo_request_submit']);
    for (const event of events) assert.deepEqual(Object.keys(event.params), ['form']);
    assert.equal(events[0].params.form, props.source || 'referral_program');
    assert.equal(states.find((value) => value?.name !== undefined).name, '');
  }
}
for (const outcome of ['success', 'http-error', 'rejected', 'network']) {
  for (const source of ['homepage_contact', 'contact_page']) {
    await checkClient('src/components/ContactForm.tsx', { source }, outcome);
  }
  await checkClient('src/components/ReferralProgramContactForm.tsx', { isZh: false }, outcome);
}
console.log('PASS forms: required fields, request payload, duplicate prevention, success-only events without PII, failure and retry state');
