'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calculator,
  Check,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  Database,
  FileArchive,
  FileSpreadsheet,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Library,
  MessageSquareText,
  MoreHorizontal,
  PanelRight,
  Search,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Table2,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Language } from '@/lib/i18n';

type WorkflowCapability = {
  number: string;
  title: string;
  description: string;
};

type WorkflowContent = {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  cta: string;
  capabilities: WorkflowCapability[];
};

type WorkflowStagePanelProps = {
  stage: number;
  language: Language;
  compact?: boolean;
};

const interfaceCopy = {
  en: {
    project: 'Demo project · Insulated bottle',
    live: 'AI workflow active',
    review: 'Expert review required',
    sourceFiles: 'Source files',
    parsed: 'Parsed',
    intakeTitle: 'Requirement-relevant data extracted',
    intakeBody: 'Materials, quantities, energy, transport, suppliers, and evidence are mapped back to their source files.',
    records: ['18 material records', '4 energy records', '7 evidence links'],
    questionsTitle: 'Clarifications prepared',
    questionsBody: 'The workflow pauses where project requirements or source data need confirmation.',
    questions: ['Confirm recycled content for steel body', 'Provide supplier country for silicone seal', 'Validate transport distance and mode'],
    modelTitle: 'Assessment model and methodology review',
    modelBody: 'Scope, sources, methods, and review risks remain visible to the expert.',
    factorRows: [
      ['Stainless steel', 'Worldsteel 2024', 'Strong'],
      ['Silicone seal', 'Industry proxy', 'Review'],
      ['Electricity', 'Regional grid', 'Strong'],
    ],
    reportTitle: 'Report draft and evidence ledger',
    reportBody: 'Every result remains connected to source data, calculations, assumptions, and evidence.',
    outputs: ['Compliance report draft', 'Evidence ledger', 'Evidence package'],
    complete: '12 of 14 review checks complete',
    stages: ['File intake', 'Clarify gaps', 'Build assessment', 'Report & evidence'],
    visualLabels: ['Structured inputs', 'Clarification queue', 'Methodology review', 'Review package'],
    workflowLabel: 'Live compliance workflow',
    workspaceTitle: 'From source files to review-ready compliance data',
  },
  zh: {
    project: '演示项目 · 保温水杯',
    live: 'AI 工作流程运行中',
    review: '需要专家复核',
    sourceFiles: '源文件',
    parsed: '已解析',
    intakeTitle: '已提取与要求相关的数据',
    intakeBody: '材料、数量、能源、运输、供应商和证据都可追溯到源文件。',
    records: ['18 条材料记录', '4 条能源记录', '7 个证据链接'],
    questionsTitle: '已整理澄清问题',
    questionsBody: '当项目要求或源数据需要确认时，工作流程会暂停等待复核。',
    questions: ['确认不锈钢杯身的再生材料含量', '补充硅胶密封圈的供应商国家', '确认运输距离和方式'],
    modelTitle: '评估模型与方法学复核',
    modelBody: '范围、数据来源、方法和复核风险始终对专家可见。',
    factorRows: [
      ['不锈钢', 'Worldsteel 2024', '强匹配'],
      ['硅胶密封圈', '行业代理因子', '需复核'],
      ['电力', '区域电网', '强匹配'],
    ],
    reportTitle: '报告草稿与证据台账',
    reportBody: '每个结果都与源数据、计算、假设和证据保持关联。',
    outputs: ['合规报告草稿', '证据台账', '证据包'],
    complete: '14 项复核检查中已完成 12 项',
    stages: ['文件接入', '澄清缺口', '搭建评估模型', '报告与证据'],
    visualLabels: ['结构化输入', '澄清队列', '方法学复核', '复核交付包'],
    workflowLabel: '实时合规工作流程',
    workspaceTitle: '从源文件到可复核的合规数据',
  },
};

const dashboardCopy = {
  en: {
    workspace: 'Sustainability workspace',
    navigation: ['Overview', 'Source data', 'Assessment model', 'Methodology library', 'Reports', 'Evidence trail'],
    breadcrumb: 'Projects / Sustainability assessment',
    title: 'Insulated bottle · Assessment',
    standard: 'ISO 14067 · Cradle-to-gate',
    search: 'Search project data',
    metrics: [
      ['Data readiness', '86%', '+12% after AI review'],
      ['Requirements mapped', '12', '4 require review'],
      ['Evidence coverage', '78%', '23 linked records'],
      ['Review readiness', '84%', '2 checks remain'],
    ],
    tableLabels: ['Structured source data', 'Clarification queue', 'Assessment model', 'Delivery workspace'],
    tableCounts: ['29 records', '3 open items', '12 requirements', '3 deliverables'],
    tableHeaders: [
      ['Data item', 'Source', 'Value', 'Status'],
      ['Clarification', 'Owner', 'Priority', 'Status'],
      ['Assessment item', 'Input data', 'Method / source', 'Review'],
      ['Deliverable', 'Progress', 'Review status', 'Output'],
    ],
    rows: [
      [
        ['Stainless steel body', 'BOM_v4.xlsx', '0.34 kg', 'Parsed'],
        ['Polypropylene lid', 'BOM_v4.xlsx', '0.08 kg', 'Parsed'],
        ['Assembly electricity', 'Energy_2025.pdf', '0.62 kWh', 'Parsed'],
        ['Inbound transport', 'Transport.csv', '860 km', 'Review'],
      ],
      [
        ['Confirm recycled steel content', 'Procurement', 'High', 'Waiting'],
        ['Add silicone supplier country', 'Supplier', 'Medium', 'Waiting'],
        ['Validate transport mode', 'Logistics', 'Medium', 'Drafted'],
        ['Confirm packaging allocation', 'Consultant', 'Low', 'Resolved'],
      ],
      [
        ['Stainless steel', '0.34 kg', 'Worldsteel 2024', 'Strong'],
        ['Polypropylene', '0.08 kg', 'ecoinvent 3.10', 'Strong'],
        ['Silicone seal', '0.03 kg', 'Industry proxy', 'Review'],
        ['Regional electricity', '0.62 kWh', 'IEA 2025', 'Strong'],
      ],
      [
        ['Compliance report draft', '100%', 'Ready for expert', 'PDF'],
        ['Evidence ledger', '86%', '2 checks open', 'XLSX'],
        ['Evidence package', '78%', '6 files pending', 'ZIP'],
        ['Client data request', '100%', 'Ready to send', 'XLSX'],
      ],
    ],
    assistant: 'AI compliance assistant',
    assistantStatus: 'Reviewing this project',
    assistantSummaries: [
      '29 requirement-relevant records were extracted and connected to their source files.',
      'Three questions need confirmation before the model can be finalized.',
      'Two methodology matches require expert review because supplier-specific data is unavailable.',
      'The report draft is ready. Two audit checks remain open before delivery.',
    ],
    assistantItems: [
      ['Source lineage', '23 evidence links recorded'],
      ['Methodology check', 'Boundary aligned to ISO 14067'],
      ['Review priority', 'Resolve transport and silicone data'],
    ],
    reviewAction: 'Review flagged items',
    ask: 'Ask about this project',
  },
  zh: {
    workspace: '可持续发展工作台',
    navigation: ['概览', '源数据', '评估模型', '方法学库', '报告', '证据链'],
    breadcrumb: '项目 / 可持续发展评估',
    title: '保温水杯 · 评估项目',
    standard: 'ISO 14067 · 从摇篮到大门',
    search: '搜索项目数据',
    metrics: [
      ['数据准备度', '86%', 'AI 复核后提升 12%'],
      ['已映射要求', '12', '4 项需要复核'],
      ['证据覆盖率', '78%', '23 条关联记录'],
      ['复核准备度', '84%', '2 项检查待完成'],
    ],
    tableLabels: ['结构化源数据', '澄清问题队列', '评估模型', '交付工作区'],
    tableCounts: ['29 条记录', '3 个待处理项', '12 项要求', '3 项交付物'],
    tableHeaders: [
      ['数据项', '来源', '数值', '状态'],
      ['澄清问题', '负责人', '优先级', '状态'],
      ['评估项目', '输入数据', '方法 / 来源', '复核'],
      ['交付物', '进度', '复核状态', '输出'],
    ],
    rows: [
      [
        ['不锈钢杯身', 'BOM_v4.xlsx', '0.34 kg', '已解析'],
        ['聚丙烯杯盖', 'BOM_v4.xlsx', '0.08 kg', '已解析'],
        ['组装用电', 'Energy_2025.pdf', '0.62 kWh', '已解析'],
        ['入厂运输', 'Transport.csv', '860 km', '需复核'],
      ],
      [
        ['确认再生钢含量', '采购团队', '高', '等待确认'],
        ['补充硅胶供应商国家', '供应商', '中', '等待确认'],
        ['确认运输方式', '物流团队', '中', '已起草'],
        ['确认包装分配逻辑', '顾问', '低', '已解决'],
      ],
      [
        ['不锈钢', '0.34 kg', 'Worldsteel 2024', '强匹配'],
        ['聚丙烯', '0.08 kg', 'ecoinvent 3.10', '强匹配'],
        ['硅胶密封圈', '0.03 kg', '行业代理因子', '需复核'],
        ['区域电力', '0.62 kWh', 'IEA 2025', '强匹配'],
      ],
      [
        ['合规报告草稿', '100%', '待专家复核', 'PDF'],
        ['证据台账', '86%', '2 项检查待完成', 'XLSX'],
        ['证据包', '78%', '6 个文件待补充', 'ZIP'],
        ['客户数据请求', '100%', '可发送', 'XLSX'],
      ],
    ],
    assistant: 'AI 合规助手',
    assistantStatus: '正在复核本项目',
    assistantSummaries: [
      '已提取 29 条与要求相关的记录，并关联到对应源文件。',
      '模型最终确认前仍有 3 个问题需要补充。',
      '由于缺少供应商特定数据，2 个方法学匹配需要专家复核。',
      '报告草稿已经准备完成，交付前仍有 2 项审计检查待处理。',
    ],
    assistantItems: [
      ['数据溯源', '已记录 23 个证据链接'],
      ['方法学检查', '系统边界符合 ISO 14067'],
      ['复核优先级', '处理运输与硅胶数据'],
    ],
    reviewAction: '复核风险项目',
    ask: '询问本项目',
  },
};

function StageStatus({ children, tone = 'green' }: { children: React.ReactNode; tone?: 'green' | 'amber' | 'blue' }) {
  const classes = {
    green: 'bg-[#dcebe3] text-[#1f625b]',
    amber: 'bg-[#fff0c9] text-[#875b00]',
    blue: 'bg-[#dce8ef] text-[#345f73]',
  };

  return <span className={`rounded-[0.35rem] px-2 py-1 text-[10px] font-semibold ${classes[tone]}`}>{children}</span>;
}

function WorkflowStagePanel({ stage, language, compact = false }: WorkflowStagePanelProps) {
  const copy = interfaceCopy[language === 'zh' ? 'zh' : 'en'];
  const reduceMotion = useReducedMotion();
  const panelMotion = reduceMotion ? {} : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 } };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage}
        {...panelMotion}
        transition={{ duration: 0.32, ease: 'easeOut' }}
        className={`flex h-full flex-col ${compact ? 'p-4 sm:p-5' : 'p-5 sm:p-6'}`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#dbe3de] pb-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#58716d]">{copy.visualLabels[stage]}</p>
            <h3 className={`mt-1 font-semibold text-[#123f3d] ${compact ? 'text-[1rem]' : 'text-[1.15rem]'}`}>
              {[copy.intakeTitle, copy.questionsTitle, copy.modelTitle, copy.reportTitle][stage]}
            </h3>
          </div>
          {stage === 1 ? <StageStatus tone="amber">{copy.review}</StageStatus> : <StageStatus>{copy.live}</StageStatus>}
        </div>

        {stage === 0 ? (
          <div className="grid flex-1 gap-4 pt-4 md:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-2">
              {[
                ['BOM_v4.xlsx', FileSpreadsheet],
                ['Energy_2025.pdf', FileText],
                ['Transport.csv', FileArchive],
              ].map(([name, Icon]) => {
                const FileIcon = Icon as typeof FileText;
                return (
                  <div key={name as string} className="flex items-center gap-3 border-b border-[#e5eae6] bg-white px-3 py-2.5 last:border-b-0">
                    <FileIcon className="h-4 w-4 text-[#2f7770]" strokeWidth={1.8} />
                    <span className="min-w-0 flex-1 truncate text-xs font-medium text-[#274b48]">{name as string}</span>
                    <span className="text-[10px] font-semibold text-[#2f7770]">{copy.parsed}</span>
                  </div>
                );
              })}
            </div>
            <div className="border-l border-[#e0e6e2] pl-4">
              <p className="text-sm leading-6 text-[#5e706d]">{copy.intakeBody}</p>
              <div className="mt-4 space-y-2">
                {copy.records.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-[#274b48]">
                    <Check className="h-3.5 w-3.5 text-[#2f7770]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {stage === 1 ? (
          <div className="flex-1 pt-4">
            <p className="max-w-2xl text-sm leading-6 text-[#5e706d]">{copy.questionsBody}</p>
            <div className="mt-4 space-y-2">
              {copy.questions.map((question, index) => (
                <div key={question} className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-3 border-b border-[#e5eae6] bg-white px-3 py-3 last:border-b-0">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0c9] text-[11px] font-semibold text-[#875b00]">{index + 1}</span>
                  <span className="text-xs font-medium leading-5 text-[#274b48]">{question}</span>
                  <StageStatus tone="amber">{copy.review}</StageStatus>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {stage === 2 ? (
          <div className="flex-1 pt-4">
            <p className="text-sm leading-6 text-[#5e706d]">{copy.modelBody}</p>
            <div className="mt-4 overflow-hidden border border-[#dbe3de] bg-white">
              <div className="grid grid-cols-[1.1fr_1fr_auto] gap-3 bg-[#edf4f0] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#58716d]">
                <span>{language === 'zh' ? '评估项目' : 'Assessment item'}</span>
                <span>{language === 'zh' ? '方法 / 来源' : 'Method / source'}</span>
                <span>{language === 'zh' ? '状态' : 'Status'}</span>
              </div>
              {copy.factorRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-[1.1fr_1fr_auto] items-center gap-3 border-t border-[#e5eae6] px-3 py-3 text-xs text-[#274b48]">
                  <span className="font-semibold">{row[0]}</span>
                  <span className="truncate text-[#5e706d]">{row[1]}</span>
                  <StageStatus tone={row[2] === 'Review' || row[2] === '需复核' ? 'amber' : 'green'}>{row[2]}</StageStatus>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {stage === 3 ? (
          <div className="flex flex-1 flex-col pt-4">
            <p className="text-sm leading-6 text-[#5e706d]">{copy.reportBody}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {copy.outputs.map((output, index) => {
                const icons = [FileText, ClipboardCheck, Database];
                const OutputIcon = icons[index];
                return (
                  <div key={output} className="border border-[#dbe3de] bg-white p-3">
                    <OutputIcon className="h-4 w-4 text-[#2f7770]" strokeWidth={1.8} />
                    <p className="mt-3 text-xs font-semibold text-[#274b48]">{output}</p>
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-[#2f7770]">
                      <Check className="h-3 w-3" />
                      {language === 'zh' ? '已准备' : 'Prepared'}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto pt-4">
              <div className="flex items-center justify-between gap-4 text-[11px] font-semibold text-[#58716d]">
                <span>{copy.complete}</span>
                <span>86%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#dbe3de]">
                <motion.div
                  className="h-full bg-[#2f7770]"
                  initial={reduceMotion ? { width: '86%' } : { width: 0 }}
                  animate={{ width: '86%' }}
                  transition={{ duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}

export function HeroWorkflowPreview({ language }: { language: Language }) {
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const copy = interfaceCopy[language === 'zh' ? 'zh' : 'en'];
  const dashboard = dashboardCopy[language === 'zh' ? 'zh' : 'en'];
  const navigationIcons = [LayoutDashboard, Table2, Calculator, Library, FileText, ShieldCheck];
  const activeNavigation = [1, 1, 2, 4][activeStage];

  const statusTone = (status: string) => {
    const normalized = status.toLowerCase();
    if (
      normalized.includes('review') ||
      normalized.includes('waiting') ||
      normalized.includes('high') ||
      normalized.includes('pending') ||
      normalized.includes('待') ||
      normalized.includes('需复核') ||
      normalized === '高'
    ) {
      return 'border-[#ead59e] bg-[#fff7df] text-[#7a5911]';
    }

    if (
      normalized.includes('parsed') ||
      normalized.includes('strong') ||
      normalized.includes('ready') ||
      normalized.includes('resolved') ||
      normalized.includes('100%') ||
      normalized.includes('已解析') ||
      normalized.includes('强匹配') ||
      normalized.includes('已解决') ||
      normalized.includes('可发送')
    ) {
      return 'border-[#4b8c7d] bg-[#193f3e] text-[#9fe1c5]';
    }

    return 'border-[#527284] bg-[#1a3641] text-[#a8c8d8]';
  };

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActiveStage((current) => (current + 1) % copy.stages.length), 4400);
    return () => window.clearInterval(timer);
  }, [copy.stages.length, reduceMotion]);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
      className="mx-auto w-full max-w-[1240px]"
    >
      <div className="overflow-hidden border border-[#315d58] bg-[#0f2b2d] shadow-[0_30px_90px_rgba(8,35,36,0.32)]">
        <div className="flex h-10 items-center justify-between border-b border-white/10 bg-[#0b2325] px-3 sm:px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#5b7772]" />
            <span className="h-2 w-2 rounded-full bg-[#5b7772]" />
            <span className="h-2 w-2 rounded-full bg-[#5b7772]" />
          </div>
          <div className="hidden min-w-[300px] items-center justify-center gap-2 border border-white/10 bg-[#122f31] px-3 py-1 text-[9px] text-white/45 sm:flex">
            <ShieldCheck className="h-3 w-3 text-[#8ed9bd]" />
            app.climate-seal.com/workspace/assessment-024
          </div>
          <PanelRight className="h-3.5 w-3.5 text-white/45" />
        </div>

        <div className="grid min-h-[560px] lg:grid-cols-[176px_minmax(0,1fr)]">
          <aside className="hidden flex-col bg-[#0c2527] text-white lg:flex">
            <div className="flex h-[68px] items-center gap-2.5 border-b border-white/10 px-4">
              <div className="flex h-8 w-8 items-center justify-center bg-[#9fe1c5] text-[#0c2527]">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[12px] font-semibold">Climate Seal</p>
                <p className="mt-0.5 text-[9px] text-white/45">{dashboard.workspace}</p>
              </div>
            </div>

            <nav className="flex-1 px-2 py-4">
              {dashboard.navigation.map((label, index) => {
                const NavigationIcon = navigationIcons[index];
                const isActive = index === activeNavigation;
                return (
                  <div
                    key={label}
                    className={`mb-1 flex items-center gap-2.5 border-l-2 px-3 py-2.5 text-[11px] font-medium ${
                      isActive ? 'border-[#8ed9bd] bg-[#173b3c] text-white' : 'border-transparent text-white/48'
                    }`}
                  >
                    <NavigationIcon className={`h-3.5 w-3.5 ${isActive ? 'text-[#8ed9bd]' : 'text-white/36'}`} strokeWidth={1.8} />
                    <span>{label}</span>
                  </div>
                );
              })}
            </nav>

            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2.5 px-2 py-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2f7770] text-[9px] font-semibold">CS</div>
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-semibold">Sustainability team</p>
                  <p className="mt-0.5 text-[9px] text-white/48">Professional workspace</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0 bg-[#102f31]">
            <header className="border-b border-white/10 bg-[#123638] px-4 py-3 sm:px-5">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-[9px] font-medium text-white/42">
                    <FolderKanban className="h-3 w-3" />
                    <span className="truncate">{dashboard.breadcrumb}</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-[#8ed9bd]">ASSESSMENT-024</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-[15px] font-semibold text-white sm:text-[17px]">{dashboard.title}</h3>
                    <span className="border border-[#477b71] bg-[#193f3e] px-2 py-0.5 text-[9px] font-semibold text-[#9fe1c5]">{dashboard.standard}</span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <div className="hidden h-8 items-center gap-2 border border-white/10 bg-[#0e292b] px-3 text-[10px] text-white/42 md:flex">
                    <Search className="h-3.5 w-3.5" />
                    <span>{dashboard.search}</span>
                  </div>
                  <button type="button" aria-label={language === 'zh' ? '通知' : 'Notifications'} className="flex h-8 w-8 items-center justify-center border border-white/10 bg-[#0e292b] text-white/55">
                    <Bell className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </header>

            <div className="flex gap-1 overflow-x-auto border-b border-white/10 bg-[#0d292b] px-3 py-2 sm:px-5">
              {copy.stages.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  className={`flex shrink-0 items-center gap-2 border px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                    activeStage === index
                      ? 'border-[#4d9684] bg-[#2f7770] text-white'
                      : 'border-transparent bg-transparent text-white/45 hover:bg-white/5'
                  }`}
                  aria-pressed={activeStage === index}
                >
                  <span className={activeStage === index ? 'text-white/72' : 'text-white/28'}>{String(index + 1).padStart(2, '0')}</span>
                  {label}
                </button>
              ))}
              <div className="ml-auto hidden items-center gap-2 pl-4 text-[9px] font-semibold text-[#8ed9bd] sm:flex">
                <span className="relative flex h-1.5 w-1.5">
                  {!reduceMotion ? <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8ed9bd] opacity-50" /> : null}
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8ed9bd]" />
                </span>
                {copy.workflowLabel}
              </div>
            </div>

            <div className="p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
                {dashboard.metrics.map(([label, value, note], index) => {
                  const MetricIcon = [BarChart3, Database, ShieldCheck, Calculator][index];
                  return (
                    <div key={label} className="border border-white/10 bg-[#143739] p-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#a9c7bd]">{label}</p>
                        <MetricIcon className="h-3.5 w-3.5 text-[#8ed9bd]" strokeWidth={1.7} />
                      </div>
                      <p className="mt-2 font-mono text-[18px] font-semibold leading-none text-[#9fe1c5]">{value}</p>
                      <p className="mt-2 truncate text-[9px] text-[#a9c7bd]">{note}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_250px]">
                <section className="min-w-0 border border-white/10 bg-[#143739]">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-3">
                    <div>
                      <p className="text-[12px] font-semibold text-[#e3f0ea]">{dashboard.tableLabels[activeStage]}</p>
                      <p className="mt-0.5 text-[9px] text-[#a9c7bd]">{dashboard.tableCounts[activeStage]}</p>
                    </div>
                    <button type="button" aria-label={language === 'zh' ? '更多操作' : 'More actions'} className="flex h-7 w-7 items-center justify-center text-white/45">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <div className="min-w-[640px]">
                      <div className="grid grid-cols-[1.25fr_1fr_.78fr_.68fr] gap-3 bg-[#102f31] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#a9c7bd]">
                        {dashboard.tableHeaders[activeStage].map((header) => <span key={header}>{header}</span>)}
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeStage}
                          initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                          transition={{ duration: 0.22 }}
                        >
                          {dashboard.rows[activeStage].map((row) => (
                            <div key={row[0]} className="grid grid-cols-[1.25fr_1fr_.78fr_.68fr] items-center gap-3 border-t border-white/10 px-3 py-2.5 text-[10px] text-[#c0d5cd] first:border-t-0">
                              <span className="font-semibold text-[#e3f0ea]">{row[0]}</span>
                              <span className="truncate text-[#c0d5cd]">{row[1]}</span>
                              <span className="truncate text-[#c0d5cd]">{row[2]}</span>
                              <span className={`w-fit border px-2 py-0.5 text-[8px] font-semibold ${statusTone(row[3])}`}>{row[3]}</span>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 px-3 py-2 text-[8px] text-[#a9c7bd]">
                    <span>{language === 'zh' ? '显示 1–4 条' : 'Showing 1–4'}</span>
                    <span>{language === 'zh' ? '最近由 AI 更新' : 'Last updated by AI just now'}</span>
                  </div>
                </section>

                <aside className="hidden border border-[#3d746c] bg-[#122f31] lg:flex lg:flex-col">
                  <div className="flex items-center gap-2.5 border-b border-white/10 px-3 py-3">
                    <div className="flex h-7 w-7 items-center justify-center bg-[#8ed9bd] text-[#0c2527]">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-white/90">{dashboard.assistant}</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[8px] text-[#8ed9bd]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8ed9bd]" />
                        {dashboard.assistantStatus}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStage}
                      initial={reduceMotion ? false : { opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, x: -4 }}
                      transition={{ duration: 0.22 }}
                      className="flex-1 px-3 py-3"
                    >
                      <p className="text-[10px] leading-5 text-white/70">{dashboard.assistantSummaries[activeStage]}</p>
                      <div className="mt-3 divide-y divide-white/10 border-y border-white/10">
                        {dashboard.assistantItems.map(([label, value], index) => (
                          <div key={label} className="flex gap-2 py-2.5">
                            {index === 2 ? <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f2c66d]" /> : <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8ed9bd]" />}
                            <div>
                              <p className="text-[9px] font-semibold text-white/82">{label}</p>
                              <p className="mt-0.5 text-[8px] leading-4 text-white/55">{value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="border-t border-white/10 p-3">
                    <button type="button" className="flex w-full items-center justify-center gap-2 bg-[#2f7770] px-3 py-2 text-[9px] font-semibold text-white transition hover:bg-[#3a8b82]">
                      <ScanSearch className="h-3.5 w-3.5" />
                      {dashboard.reviewAction}
                    </button>
                    <div className="mt-2 flex items-center gap-2 border border-white/10 bg-[#0e292b] px-2.5 py-2 text-[8px] text-white/38">
                      <MessageSquareText className="h-3.5 w-3.5" />
                      <span>{dashboard.ask}</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HomeWorkflowStory({ language, content }: { language: Language; content: WorkflowContent }) {
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const copy = interfaceCopy[language === 'zh' ? 'zh' : 'en'];

  return (
    <section id="workspace-flow" className="bg-[#eef4f0] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="cs-section-eyebrow">{content.sectionEyebrow}</p>
          <h2 className="mt-4 max-w-[28ch] font-lora text-[2.3rem] font-bold leading-[1.05] text-[#123f3d] sm:text-[2.8rem] lg:text-[3.15rem]">
            {content.sectionTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-[16px] leading-8 text-[#5e706d] sm:text-[17px]">{content.sectionSubtitle}</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#215b57] transition hover:text-[#123f3d]">
            {content.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(520px,1.14fr)] lg:items-start lg:gap-16">
          <div className="relative">
            <div className="absolute left-[18px] top-4 hidden h-[calc(100%-2rem)] w-px bg-[#c5d5cc] sm:block" />
            <div className="space-y-16 sm:space-y-24 lg:space-y-28">
              {content.capabilities.map((item, index) => (
                <motion.article
                  key={item.number}
                  onViewportEnter={() => setActiveStage(index)}
                  viewport={{ amount: 0.55 }}
                  initial={reduceMotion ? false : { opacity: 0.55 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative min-h-[320px] pl-0 sm:pl-16 lg:min-h-[360px]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={`absolute left-0 top-0 hidden h-9 w-9 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors sm:flex ${
                      activeStage === index
                        ? 'border-[#215b57] bg-[#215b57] text-white'
                        : 'border-[#afc4b9] bg-[#eef4f0] text-[#58716d]'
                    }`}
                    aria-label={`${copy.stages[index]} ${item.number}`}
                  >
                    {item.number}
                  </button>
                  <div className="flex items-center gap-3 sm:hidden">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#215b57] text-[11px] font-semibold text-white">{item.number}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#58716d]">{copy.stages[index]}</span>
                  </div>
                  <h3 className="mt-5 max-w-xl text-[1.45rem] font-semibold leading-tight text-[#123f3d] sm:mt-0 sm:text-[1.7rem]">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#5e706d] sm:text-[16px] sm:leading-8">{item.description}</p>
                  <div className="mt-7 overflow-hidden border border-[#c8d7cf] bg-[#f8faf8] shadow-[0_18px_45px_rgba(18,63,61,0.08)] lg:hidden">
                    <WorkflowStagePanel stage={index} language={language} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="sticky top-32 hidden lg:block">
            <div className="min-h-[410px] overflow-hidden border border-[#b8cbc1] bg-[#f8faf8] shadow-[0_28px_70px_rgba(18,63,61,0.12)]">
              <div className="flex items-center justify-between gap-4 bg-[#123f3d] px-5 py-3 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <Sparkles className="h-4 w-4 text-[#9fd5c1]" />
                  {copy.workspaceTitle}
                </div>
                <span className="text-[10px] text-white/65">{copy.project}</span>
              </div>
              <WorkflowStagePanel stage={activeStage} language={language} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
