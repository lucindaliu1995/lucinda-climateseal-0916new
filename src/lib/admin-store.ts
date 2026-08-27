import fs from 'node:fs/promises';
import path from 'node:path';
import { neon } from '@neondatabase/serverless';

export type ContactSubmission = {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
  referralCode?: string;
  referralOwnerId?: string;
  referralOwnerName?: string;
};

export type WhitepaperSubmission = {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  whitepaperId: string;
  whitepaperTitle: string;
  instantDownloadAvailable: boolean;
  deliveryMode: 'download' | 'email' | 'manual';
};

export type UploadedAsset = {
  id: string;
  uploadedAt: string;
  filename: string;
  originalFilename: string;
  url: string;
  contentType: string;
  size: number;
};

export type ReferralOwner = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  role: 'expert' | 'consultant' | 'brand_manager' | 'procurement_manager' | 'other';
  company: string;
  referralCode: string;
  status: 'active' | 'inactive';
  notes?: string;
};

export type ReferralUse = {
  id: string;
  createdAt: string;
  referralCode: string;
  referralOwnerId: string;
  referralOwnerName: string;
  referredName: string;
  referredEmail: string;
  referredCompany: string;
  source: 'contact_form';
  contactSubmissionId: string;
  status: 'new' | 'qualified' | 'converted' | 'credited' | 'rejected';
  rewardValueUsd: number;
  notes?: string;
};

export type ConsultantPartnerApplication = {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  company: string;
  countryRegion: string;
  consultantType: 'carbon' | 'esg' | 'lca' | 'sustainability' | 'boutique_firm' | 'other';
  teamSize: string;
  clientIndustries: string[];
  projectTypes: string[];
  expectedProjectsNext3Months: string;
  wantsReferralAccess: boolean;
  website?: string;
  linkedin?: string;
  message?: string;
  status: 'new' | 'reviewing' | 'accepted' | 'rejected';
};

export type NewsletterSubscriber = {
  id: string;
  subscribedAt: string;
  email: string;
  source: string;
};

export type PcfResponsePackRequest = {
  id: string;
  submittedAt: string;
  email: string;
  company: string;
  role: string;
  industry: string;
  marketingOptIn: boolean;
};

const ADMIN_DATA_DIR = path.join(process.cwd(), 'data', 'admin');
const CONTACTS_FILE = path.join(ADMIN_DATA_DIR, 'contact-submissions.json');
const WHITEPAPERS_FILE = path.join(ADMIN_DATA_DIR, 'whitepaper-submissions.json');
const ASSETS_FILE = path.join(ADMIN_DATA_DIR, 'uploaded-assets.json');
const REFERRAL_OWNERS_FILE = path.join(ADMIN_DATA_DIR, 'referral-owners.json');
const REFERRAL_USES_FILE = path.join(ADMIN_DATA_DIR, 'referral-uses.json');
const CONSULTANT_APPLICATIONS_FILE = path.join(ADMIN_DATA_DIR, 'consultant-partner-applications.json');
const NEWSLETTER_SUBSCRIBERS_FILE = path.join(ADMIN_DATA_DIR, 'newsletter-subscribers.json');
const PCF_RESPONSE_PACK_REQUESTS_FILE = path.join(ADMIN_DATA_DIR, 'pcf-response-pack-requests.json');

let cachedDatabaseUrl = '';
let cachedSql: ReturnType<typeof neon> | null = null;
let ensureContactTablesPromise: Promise<void> | null = null;

function getDatabaseUrl() {
  return process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL || '';
}

function getSqlClient() {
  const databaseUrl = getDatabaseUrl();

  if (!databaseUrl) {
    return null;
  }

  if (cachedSql && cachedDatabaseUrl === databaseUrl) {
    return cachedSql;
  }

  cachedDatabaseUrl = databaseUrl;
  cachedSql = neon(databaseUrl);
  ensureContactTablesPromise = null;
  return cachedSql;
}

async function ensureContactTables() {
  const sql = getSqlClient();

  if (!sql) {
    return null;
  }

  ensureContactTablesPromise ??= (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id text PRIMARY KEY,
        submitted_at timestamptz NOT NULL,
        name text NOT NULL,
        email text NOT NULL,
        phone text NOT NULL,
        company text NOT NULL,
        industry text NOT NULL,
        message text NOT NULL,
        referral_code text,
        referral_owner_id text,
        referral_owner_name text,
        payload jsonb NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS referral_uses (
        id text PRIMARY KEY,
        created_at timestamptz NOT NULL,
        referral_code text NOT NULL,
        referral_owner_id text NOT NULL,
        referral_owner_name text NOT NULL,
        referred_name text NOT NULL,
        referred_email text NOT NULL,
        referred_company text NOT NULL,
        source text NOT NULL,
        contact_submission_id text NOT NULL,
        status text NOT NULL,
        reward_value_usd integer NOT NULL,
        notes text,
        payload jsonb NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        email text PRIMARY KEY,
        subscribed_at timestamptz NOT NULL,
        source text NOT NULL,
        payload jsonb NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS pcf_response_pack_requests (
        id text PRIMARY KEY,
        submitted_at timestamptz NOT NULL,
        email text NOT NULL,
        company text NOT NULL,
        role text NOT NULL,
        industry text NOT NULL,
        marketing_opt_in boolean NOT NULL,
        payload jsonb NOT NULL
      )
    `;
  })();

  await ensureContactTablesPromise;
  return sql;
}

async function saveNewsletterSubscriberToDatabase(subscriber: NewsletterSubscriber): Promise<boolean> {
  const sql = await ensureContactTables();

  if (!sql) {
    return false;
  }

  await sql`
    INSERT INTO newsletter_subscribers (email, subscribed_at, source, payload)
    VALUES (
      ${subscriber.email},
      ${subscriber.subscribedAt},
      ${subscriber.source},
      ${JSON.stringify(subscriber)}::jsonb
    )
    ON CONFLICT (email) DO UPDATE SET
      subscribed_at = EXCLUDED.subscribed_at,
      source = EXCLUDED.source,
      payload = EXCLUDED.payload
  `;

  return true;
}

async function savePcfResponsePackRequestToDatabase(request: PcfResponsePackRequest): Promise<boolean> {
  const sql = await ensureContactTables();

  if (!sql) {
    return false;
  }

  await sql`
    INSERT INTO pcf_response_pack_requests (
      id, submitted_at, email, company, role, industry, marketing_opt_in, payload
    )
    VALUES (
      ${request.id},
      ${request.submittedAt},
      ${request.email},
      ${request.company},
      ${request.role},
      ${request.industry},
      ${request.marketingOptIn},
      ${JSON.stringify(request)}::jsonb
    )
  `;

  return true;
}

function normalizePayload<T>(payload: unknown): T {
  return (typeof payload === 'string' ? JSON.parse(payload) : payload) as T;
}

function logStoreWarning(event: string, error: unknown) {
  console.info(`[admin-store] ${event}`, {
    message: error instanceof Error ? error.message : 'unknown error',
  });
}

async function saveContactSubmissionToDatabase(submission: ContactSubmission): Promise<boolean> {
  const sql = await ensureContactTables();

  if (!sql) {
    return false;
  }

  await sql`
    INSERT INTO contact_submissions (
      id,
      submitted_at,
      name,
      email,
      phone,
      company,
      industry,
      message,
      referral_code,
      referral_owner_id,
      referral_owner_name,
      payload
    )
    VALUES (
      ${submission.id},
      ${submission.submittedAt},
      ${submission.name},
      ${submission.email},
      ${submission.phone},
      ${submission.company},
      ${submission.industry},
      ${submission.message},
      ${submission.referralCode ?? null},
      ${submission.referralOwnerId ?? null},
      ${submission.referralOwnerName ?? null},
      ${JSON.stringify(submission)}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      submitted_at = EXCLUDED.submitted_at,
      name = EXCLUDED.name,
      email = EXCLUDED.email,
      phone = EXCLUDED.phone,
      company = EXCLUDED.company,
      industry = EXCLUDED.industry,
      message = EXCLUDED.message,
      referral_code = EXCLUDED.referral_code,
      referral_owner_id = EXCLUDED.referral_owner_id,
      referral_owner_name = EXCLUDED.referral_owner_name,
      payload = EXCLUDED.payload
  `;

  return true;
}

async function listContactSubmissionsFromDatabase(): Promise<ContactSubmission[] | null> {
  const sql = await ensureContactTables();

  if (!sql) {
    return null;
  }

  const rows = await sql`
    SELECT payload
    FROM contact_submissions
    ORDER BY submitted_at DESC
  ` as Array<{ payload: unknown }>;

  return rows.map((row) => normalizePayload<ContactSubmission>(row.payload));
}

async function saveReferralUseToDatabase(referralUse: ReferralUse): Promise<boolean> {
  const sql = await ensureContactTables();

  if (!sql) {
    return false;
  }

  await sql`
    INSERT INTO referral_uses (
      id,
      created_at,
      referral_code,
      referral_owner_id,
      referral_owner_name,
      referred_name,
      referred_email,
      referred_company,
      source,
      contact_submission_id,
      status,
      reward_value_usd,
      notes,
      payload
    )
    VALUES (
      ${referralUse.id},
      ${referralUse.createdAt},
      ${referralUse.referralCode},
      ${referralUse.referralOwnerId},
      ${referralUse.referralOwnerName},
      ${referralUse.referredName},
      ${referralUse.referredEmail},
      ${referralUse.referredCompany},
      ${referralUse.source},
      ${referralUse.contactSubmissionId},
      ${referralUse.status},
      ${referralUse.rewardValueUsd},
      ${referralUse.notes ?? null},
      ${JSON.stringify(referralUse)}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      created_at = EXCLUDED.created_at,
      referral_code = EXCLUDED.referral_code,
      referral_owner_id = EXCLUDED.referral_owner_id,
      referral_owner_name = EXCLUDED.referral_owner_name,
      referred_name = EXCLUDED.referred_name,
      referred_email = EXCLUDED.referred_email,
      referred_company = EXCLUDED.referred_company,
      source = EXCLUDED.source,
      contact_submission_id = EXCLUDED.contact_submission_id,
      status = EXCLUDED.status,
      reward_value_usd = EXCLUDED.reward_value_usd,
      notes = EXCLUDED.notes,
      payload = EXCLUDED.payload
  `;

  return true;
}

async function listReferralUsesFromDatabase(): Promise<ReferralUse[] | null> {
  const sql = await ensureContactTables();

  if (!sql) {
    return null;
  }

  const rows = await sql`
    SELECT payload
    FROM referral_uses
    ORDER BY created_at DESC
  ` as Array<{ payload: unknown }>;

  return rows.map((row) => normalizePayload<ReferralUse>(row.payload));
}

async function ensureAdminDir() {
  await fs.mkdir(ADMIN_DATA_DIR, { recursive: true });
}

async function readJsonFile<T>(filePath: string): Promise<T[]> {
  await ensureAdminDir();

  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content) as T[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeJsonFile<T>(filePath: string, rows: T[]) {
  await ensureAdminDir();
  await fs.writeFile(filePath, JSON.stringify(rows, null, 2), 'utf8');
}

async function appendJsonRow<T>(filePath: string, row: T) {
  const rows = await readJsonFile<T>(filePath);
  rows.unshift(row);
  await writeJsonFile(filePath, rows);
}

export async function saveContactSubmission(submission: ContactSubmission) {
  let savedToDatabase = false;

  try {
    savedToDatabase = await saveContactSubmissionToDatabase(submission);
  } catch (error) {
    logStoreWarning('contact database save failed', error);
  }

  try {
    await appendJsonRow(CONTACTS_FILE, submission);
  } catch (error) {
    logStoreWarning('contact file save failed', error);

    if (!savedToDatabase) {
      throw error;
    }
  }
}

export async function saveWhitepaperSubmission(submission: WhitepaperSubmission) {
  await appendJsonRow(WHITEPAPERS_FILE, submission);
}

export async function saveUploadedAsset(asset: UploadedAsset) {
  await appendJsonRow(ASSETS_FILE, asset);
}

export async function listContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const databaseRows = await listContactSubmissionsFromDatabase();
    if (databaseRows) {
      return databaseRows;
    }
  } catch (error) {
    logStoreWarning('contact database list failed', error);
  }

  return readJsonFile<ContactSubmission>(CONTACTS_FILE);
}

export async function listWhitepaperSubmissions(): Promise<WhitepaperSubmission[]> {
  return readJsonFile<WhitepaperSubmission>(WHITEPAPERS_FILE);
}

export async function listUploadedAssets(): Promise<UploadedAsset[]> {
  return readJsonFile<UploadedAsset>(ASSETS_FILE);
}

export async function saveReferralOwner(owner: ReferralOwner) {
  const owners = await readJsonFile<ReferralOwner>(REFERRAL_OWNERS_FILE);
  owners.unshift(owner);
  await writeJsonFile(REFERRAL_OWNERS_FILE, owners);
}

export async function listReferralOwners(): Promise<ReferralOwner[]> {
  return readJsonFile<ReferralOwner>(REFERRAL_OWNERS_FILE);
}

export async function findReferralOwnerByCode(referralCode: string): Promise<ReferralOwner | null> {
  const owners = await listReferralOwners();
  const normalized = referralCode.trim().toUpperCase();
  return owners.find((owner) => owner.referralCode.toUpperCase() === normalized && owner.status === 'active') ?? null;
}

export async function updateReferralOwner(
  ownerId: string,
  updates: Partial<Omit<ReferralOwner, 'id' | 'createdAt'>>
) {
  const owners = await listReferralOwners();
  const nextOwners = owners.map((owner) => (owner.id === ownerId ? { ...owner, ...updates } : owner));
  await writeJsonFile(REFERRAL_OWNERS_FILE, nextOwners);
}

export async function saveReferralUse(referralUse: ReferralUse) {
  let savedToDatabase = false;

  try {
    savedToDatabase = await saveReferralUseToDatabase(referralUse);
  } catch (error) {
    logStoreWarning('referral use database save failed', error);
  }

  try {
    await appendJsonRow(REFERRAL_USES_FILE, referralUse);
  } catch (error) {
    logStoreWarning('referral use file save failed', error);

    if (!savedToDatabase) {
      throw error;
    }
  }
}

export async function listReferralUses(): Promise<ReferralUse[]> {
  try {
    const databaseRows = await listReferralUsesFromDatabase();
    if (databaseRows) {
      return databaseRows;
    }
  } catch (error) {
    logStoreWarning('referral use database list failed', error);
  }

  return readJsonFile<ReferralUse>(REFERRAL_USES_FILE);
}

export async function updateReferralUse(
  referralUseId: string,
  updates: Partial<Omit<ReferralUse, 'id' | 'createdAt'>>
) {
  const uses = await listReferralUses();
  const nextUses = uses.map((use) => (use.id === referralUseId ? { ...use, ...updates } : use));
  await writeJsonFile(REFERRAL_USES_FILE, nextUses);
}

export async function saveConsultantPartnerApplication(application: ConsultantPartnerApplication) {
  await appendJsonRow(CONSULTANT_APPLICATIONS_FILE, application);
}

export async function saveNewsletterSubscriber(subscriber: NewsletterSubscriber) {
  let savedToDatabase = false;

  try {
    savedToDatabase = await saveNewsletterSubscriberToDatabase(subscriber);
  } catch (error) {
    logStoreWarning('newsletter subscriber database save failed', error);
  }

  try {
    const subscribers = await readJsonFile<NewsletterSubscriber>(NEWSLETTER_SUBSCRIBERS_FILE);
    const nextSubscribers = [subscriber, ...subscribers.filter((item) => item.email !== subscriber.email)];
    await writeJsonFile(NEWSLETTER_SUBSCRIBERS_FILE, nextSubscribers);
  } catch (error) {
    logStoreWarning('newsletter subscriber file save failed', error);

    if (!savedToDatabase) {
      throw error;
    }
  }
}

export async function savePcfResponsePackRequest(request: PcfResponsePackRequest) {
  let savedToDatabase = false;

  try {
    savedToDatabase = await savePcfResponsePackRequestToDatabase(request);
  } catch (error) {
    logStoreWarning('PCF response pack request database save failed', error);
  }

  try {
    await appendJsonRow(PCF_RESPONSE_PACK_REQUESTS_FILE, request);
  } catch (error) {
    logStoreWarning('PCF response pack request file save failed', error);

    if (!savedToDatabase) {
      throw error;
    }
  }
}

export async function listConsultantPartnerApplications(): Promise<ConsultantPartnerApplication[]> {
  return readJsonFile<ConsultantPartnerApplication>(CONSULTANT_APPLICATIONS_FILE);
}

export async function updateConsultantPartnerApplication(
  applicationId: string,
  updates: Partial<Omit<ConsultantPartnerApplication, 'id' | 'submittedAt'>>
) {
  const applications = await listConsultantPartnerApplications();
  const nextApplications = applications.map((application) =>
    application.id === applicationId ? { ...application, ...updates } : application
  );
  await writeJsonFile(CONSULTANT_APPLICATIONS_FILE, nextApplications);
}
