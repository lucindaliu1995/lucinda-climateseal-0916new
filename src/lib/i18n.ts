// 国际化配置和翻译数据
export type Language = 'en' | 'zh' | 'de' | 'fr' | 'ja' | 'ko' | 'it' | 'es';
export type TranslationLocale = 'en' | 'zh';

export interface TranslationData {
  // 导航栏
  nav: {
    home: string;
    products: string;
    resources: string;
    about: string;
    contact: string;
    pricing: string;
    login: string;
  };
  
  // 主页标题和描述
  hero: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    workflowCta: string;
    learnMore: string;
    trustedBy: string;
  };

  standardsCoverage: {
    eyebrow: string;
    title: string;
    description: string;
    groups: Array<{
      label: string;
      items: Array<{
        mark: string;
        name: string;
      }>;
    }>;
  };

  resourcesPage: {
    whitepapers: {
      title: string;
      subtitle: string;
      cta: string;
    };
    articles: {
      title: string;
      subtitle: string;
    };
    form: {
      title: string;
      description: string;
      successTitle: string;
      successDescription: string;
      downloadCta: string;
    };
  };

  // 页面部分
  sections: {
    whatWeDo: {
      title: string;
      subtitle: string;
      scrollingText1: string;
      scrollingText2: string;
    };
    personas: {
      title: string;
      carbonExpert: {
        title: string;
        role: string;
        needs: string;
        stat: string;
        statDescription: string;
        secondStatDescription: string;
        thirdStatDescription: string;
        fourthStat: string;
        fourthStatDescription: string;
        painPoints: (string | { title: string; description: string })[];
        testimonial: string;
        author: string;
        position: string;
      };
      brandOwner: {
        title: string;
        role: string;
        needs: string;
        stat: string;
        statDescription: string;
        secondStatDescription: string;
        thirdStatDescription: string;
        fourthStat: string;
        fourthStatDescription: string;
        painPoints: (string | { title: string; description: string })[];
        testimonial: string;
        author: string;
        position: string;
      };
      supplyChain: {
        title: string;
        role: string;
        needs: string;
        stat: string;
        statDescription: string;
        secondStatDescription: string;
        thirdStatDescription: string;
        fourthStat: string;
        fourthStatDescription: string;
        painPoints: (string | { title: string; description: string })[];
        testimonial: string;
        author: string;
        position: string;
      };
    };
    aiAssistants: {
      title: string;
      subtitle: string;
      comingSoon: string;
      getStarted: string;
      trustCenter: string;
      assistants: {
        carbonExpert: {
          [key: string]: {
            title: string;
            description: string;
          };
        };
        brandOwner: {
          [key: string]: {
            title: string;
            description: string;
          };
        };
        supplyChain: {
          [key: string]: {
            title: string;
            description: string;
          };
        };
      };
    };
    difference: {
      title: string;
      cards: {
        flexible: {
          title: string;
          description: string;
        };
        products: {
          title: string;
          description: string;
        };
        fastValue: {
          title: string;
          description: string;
        };
      };
    };
    scenarios: {
      title: string;
      whyNeed: {
        title: string;
        export: {
          title: string;
          description: string;
        };
        procurement: {
          title: string;
          description: string;
        };
        government: {
          title: string;
          description: string;
        };
      };
              scenarioCards: {
          marketAccess: {
            title: string;
            companyType: string;
            industries: string;
            coreDescription: string;
            detailDescription: string;
            miniCards: {
              cbam: {
                title: string;
                description: string;
              };
              batteryRelated: {
                title: string;
                description: string;
              };
              esprDpp: {
                title: string;
                description: string;
              };
              passiveVerification: {
                title: string;
                description: string;
              };
            };
          };
          supplyChain: {
            title: string;
            companyType: string;
            industries: string;
            coreConcept: string;
            detailDescription: string;
            miniCards: {
              sbti: {
                title: string;
                description: string;
              };
              biddingEntry: {
                title: string;
                description: string;
              };
              supplyChainPerformance: {
                title: string;
                description: string;
              };
              dataExchangeStandards: {
                title: string;
                description: string;
              };
            };
          };
          governmentProcurement: {
            title: string;
            companyType: string;
            industries: string;
            coreDescription: string;
            detailDescription: string;
            miniCards: {
              governmentBuyClean: {
                title: string;
                description: string;
              };
              greenBuilding: {
                title: string;
                description: string;
              };
              industryRequirements: {
                title: string;
                description: string;
              };
            };
          };
        };
      painPoints: {
        title: string;
        highBarrier: {
          title: string;
          description: string;
        };
        highCost: {
          title: string;
          description: string;
        };
        longCycle: {
          title: string;
          description: string;
        };
        supplyChainPressure: {
          title: string;
          description: string;
        };
        hiddenCost: {
          title: string;
          description: string;
        };
      };
      painSection: {
        title: string;
        solutionTitle: string;
        cards: {
          costHigh: {
            title: string;
            description: string;
          };
          cycleLong: {
            title: string;
            description: string;
          };
          barrierHigh: {
            title: string;
            description: string;
          };
          supplyChainPressure: {
            title: string;
            description: string;
          };
          hiddenCost: {
            title: string;
            description: string;
          };
          rework: {
            title: string;
            description: string;
          };
        };
        solution: {
          costReduction: {
            title: string;
            description: string;
          };
          zeroBarrier: {
            title: string;
            description: string;
          };
          preValidation: {
            title: string;
            description: string;
          };
        };
      };
      ourSolution: {
        title: string;
        zeroBarrier: {
          title: string;
          description: string;
        };
        lowCost: {
          title: string;
          description: string;
        };
        preValidation: {
          title: string;
          description: string;
        };
      };
    };
    comparison: {
      title: string;
      subtitle: string;
    };
    valueForUser: {
      title: string;
      subtitle: string;
    };
    aboutUs: {
      title: string;
      subtitle1: string;
      subtitle2: string;
      subtitle3: string;
      highlightText: string;
    };
    pricing: {
      title: string;
      subtitle: string;
      plans: {
        free: {
          title: string;
          description: string;
          price: string;
          features: string[];
          button: string;
        };
        standard: {
          title: string;
          description: string;
          price: string;
          features: string[];
          button: string;
        };
        enterprise: {
          title: string;
          description: string;
          price: string;
          features: string[];
          button: string;
        };
      };
    };
    value: {
      cards: {
        cost: {
          title: string;
          subtitle: string;
          description: string;
        };
        time: {
          title: string;
          subtitle: string;
          description: string;
        };
        barrier: {
          title: string;
          subtitle: string;
          description: string;
        };
        trusted: {
          title: string;
          subtitle: string;
          description: string;
        };
      };
    };
    moreInfo: string;
  };
  
  // 功能特性卡片
  features: {
    card1: {
      title: string;
      description: string;
      detail: string;
    };
    card2: {
      title: string;
      description: string;
      detail: string;
    };
    card3: {
      title: string;
      description: string;
      detail: string;
    };
    card4: {
      title: string;
      description: string;
      detail: string;
    };
    card5: {
      title: string;
      description: string;
      detail: string;
    };
  };
  
  // 对比部分
  comparison: {
    title: string;
    subtitle: string;
    aiAgent: {
      title: string;
      time?: string;
      steps: string;
      cost?: string;
      team?: string;
      stepList: string[];
    };
    consultant: {
      title: string;
      time?: string;
      steps: string;
      cost?: string;
      team?: string;
      stepList: string[];
    };
    traditional: {
      title: string;
      time?: string;
      steps: string;
      cost?: string;
      team?: string;
      stepList: string[];
    };
    savings?: {
      costReduction: string;
      timeReduction: string;
      expertiseRequired: string;
    };
  };
  
  // 联系表单
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      industry: string;
      message: string;
      submit: string;
      submitting: string;
      privacyDisclaimer: string;
      placeholder: {
        name: string;
        email: string;
        phone: string;
        company: string;
        industry: string;
        message: string;
      };
      industries: {
        automotive: string;
        electronics: string;
        textiles: string;
        chemicals: string;
        foodBeverage: string;
        construction: string;
        metals: string;
        plastics: string;
        packaging: string;
        pharmaceuticals: string;
        energy: string;
        manufacturing: string;
        furniture: string;
        cosmetics: string;
        toys: string;
        agriculture: string;
        transportation: string;
        retail: string;
        other: string;
      };
    };
    messages: {
      success: string;
      error: string;
      validation: string;
    };
  };
  
  // 页脚
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    copyright: string;
    privacyPolicy: string;
  };
  
  // 其他页面
  pages: {
    about: {
      title: string;
      content: string;
    };
    products: {
      title: string;
      content: string;
    };
    pricing: {
      title: string;
      content: string;
    };
  };

  // 隐私政策
  privacy: {
    title: string;
    subtitle: string;
    backToHome: string;
    lastUpdated: string;
    updateDate: string;
    sections: {
      introduction: {
        title: string;
        content: string;
      };
      dataCollection: {
        title: string;
        personalInfo: string;
        items: {
          name: string;
          email: string;
          company: string;
          usage: string;
        };
      };
      dataUsage: {
        title: string;
        items: {
          service: string;
          communication: string;
          improvement: string;
          legal: string;
        };
      };
      dataSharing: {
        title: string;
        content: string;
      };
      security: {
        title: string;
        content: string;
      };
      rights: {
        title: string;
        intro: string;
        items: {
          access: string;
          correct: string;
          delete: string;
          portability: string;
        };
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };

  // FAQ 页面
  faq: {
    title: string;
    seo: {
      title: string;
      description: string;
      indexable: boolean;
    };
    groups: Array<{
      name: string;
      items: Array<{
        q: string;
        a: string[];
      }>;
    }>;
  };
}

// 英文翻译
export const translations: Record<TranslationLocale, TranslationData> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      resources: 'Resources',
      about: 'About',
      contact: 'Contact',
      pricing: 'Pricing',
      login: 'login'
    },
    hero: {
      title: 'The AI Workspace for Credible Carbon Accounting',
      subtitle: 'Climate Seal uses professional-grade AI to help teams model, review, and document product carbon, corporate carbon, Scope 3, and project carbon workflows with transparent evidence trails.',
      description: 'Product, corporate, and project carbon - Support multiple carbon accounting workflows in one flexible platform.\nCredible and transparent by design - Preserve assumptions, factor choices, data gaps, and evidence trails for review.\nISO 14067 and GHG Protocol aligned - Built for standards-aligned delivery with more frameworks coming.',
      getStarted: 'Book a Demo',
      workflowCta: 'See How the Workflow Works',
      learnMore: 'Learn More',
      trustedBy: 'Trusted by'
    },

    standardsCoverage: {
      eyebrow: 'SUPPORTED REGULATIONS & METHODOLOGIES',
      title: 'One workspace for different sustainability requirements.',
      description: 'Use the same structured workflow across corporate reporting, product requirements, market access rules, and industry methodologies. Climate Seal organizes the relevant requirements, data, calculations, evidence, and review steps for each supported package.',
      groups: [
        {
          label: 'Product & life-cycle standards',
          items: [
            { mark: 'GHG', name: 'GHG Protocol Corporate Inventory' },
            { mark: 'ISO', name: 'ISO 14067 (2018)' },
            { mark: 'ISO', name: 'ISO 14040 / 14044' },
            { mark: 'PAS', name: 'PAS 2050 (2011)' },
            { mark: 'EPD', name: 'International EPD System GPI 5.0.1' },
            { mark: 'AI', name: 'AI Compute & Token Lifecycle' },
          ],
        },
        {
          label: 'Corporate reporting & due diligence',
          items: [
            { mark: 'ESRS', name: 'CSRD / current ESRS' },
            { mark: 'EU', name: 'EU Corporate Sustainability Due Diligence Directive' },
          ],
        },
        {
          label: 'Market access & product requirements',
          items: [
            { mark: 'CBAM', name: 'EU CBAM Installation Communication' },
            { mark: 'BAT', name: 'EU Battery Regulation 2023/1542' },
            { mark: 'DPP', name: 'EU ESPR & Digital Product Passport' },
            { mark: 'PPWR', name: 'EU Packaging & Packaging Waste 2025/40' },
            { mark: 'EPR', name: 'Textile & Footwear EPR' },
            { mark: 'EU', name: 'EU Forced Labour Product Prohibition' },
          ],
        },
        {
          label: 'Industry methodologies',
          items: [
            { mark: 'BRM', name: 'Higg BRM 2026' },
            { mark: 'FEM', name: 'Higg FEM 2025' },
            { mark: 'FSLM', name: 'Higg FSLM / SLCP CAF 1.7.1' },
            { mark: 'MSI', name: 'Higg MSI (2024)' },
            { mark: 'PM', name: 'Higg PM (2024)' },
          ],
        },
      ],
    },

    resourcesPage: {
      whitepapers: {
        title: 'Whitepapers',
        subtitle: 'Deeper playbooks, compliance kits, and operating documents for teams building credible carbon workflows.',
        cta: 'Download the whitepaper'
      },
      articles: {
        title: 'Articles & Insights',
        subtitle: 'Practical guides, regulatory breakdowns, and operating notes from the Climate Seal team.'
      },
      form: {
        title: 'Get the whitepaper',
        description: 'Tell us a little about your team so we can send the whitepaper link and follow up with relevant updates.',
        successTitle: 'Download unlocked',
        successDescription: 'Thanks! Your whitepaper download link is below, and a copy is headed to your inbox.',
        downloadCta: 'Download whitepaper'
      }
    },

    sections: {
      whatWeDo: {
        title: 'What tech solution we are offering？',
        subtitle: 'Get a credible carbon footprint at 1% of the cost and time',
        scrollingText1: 'Gain Credibility At Low Cost',
        scrollingText2: 'Use Credit At Low Cost'
      },
      personas: {
        title: 'Carbon Accounting, Supercharged for Every Team',
        carbonExpert: {
          title: 'Carbon/ESG Professionals',
          role: 'ESG/Sustainability/Carbon/Consulting Expert',
          needs: 'Reduce repetitive LCA and carbon reporting work with structured AI support for data preparation, factor matching, modeling, risk review, and evidence organization.',
          stat: 'Structured AI-Assisted LCA Workflow',
          statDescription: 'Reduce repetitive setup and review work',
          secondStatDescription: 'Auto Batch Factor Matching',
          thirdStatDescription: 'Ensure Auditable & Comparable Data',
          fourthStat: 'DQR+ Industry Data & Field Validation',
          fourthStatDescription: 'Accelerating the entire compliance process.',
          painPoints: [
            {
              title: 'Inconsistent Carbon Calculations',
              description: 'Fluctuating results from misaligned rules and emission factors create unreliable data, making it impossible to track progress or report accurately.'
            },
            {
              title: 'Poor Carbon Data Quality',
              description: 'Delayed and incorrect data forces teams to waste time on cleanup instead of analysis, stalling your sustainability initiatives.'
            },
            {
              title: 'Slow Product Carbon Footprinting',
              description: 'Manually matching emission factors for each SKU takes days, creating a major bottleneck that slows down product development and reporting.'
            },
            {
              title: 'Unidentified Carbon Risk',
              description: 'Without a formal process to assess carbon data, hidden risks in your supply chain and operations remain undetected until it\'s too late.'
            },
            {
              title: 'Costly Carbon Verification',
              description: 'Scattered evidence and slow checks make carbon audits expensive and delay critical reports, draining time and resources.'
            }
          ],
          testimonial: '"Climate Seal isn\'t just another calculation tool, but an intelligent operating system that supports our need for precision and efficiency at scale."',
          author: 'Dr. Sarah Chen',
          position: 'Senior ESG Consultant, EcoStrategy'
        },
        brandOwner: {
          title: 'Brands & Procurement Leaders',
          role: 'Sustainability Leader',
          needs: 'Streamline supply chain carbon management with structured data collection, Scope 3 tracking, supplier engagement, and evidence for target-setting and reduction planning.',
          stat: '≈$100 / 4 Hours per SKU',
          statDescription: 'Slash Compliance Cost & Time',
          secondStatDescription: 'Built-in Data Quality Gates',
          thirdStatDescription: 'Ensure Consistent & Comparable Data',
          fourthStat: 'A Streamlined Process for Suppliers',
          fourthStatDescription: 'Rigorous Decarbonization & Sourcing',
          painPoints: [
            {
              title: 'Lack of In-House Sustainability Expertise',
              description: 'Limited internal carbon expertise makes navigating complex supply chain regulations like CSRD slow and expensive, increasing compliance risks.'
            },
            {
              title: 'Fragmented Emissions Data',
              description: 'Chasing dozens of suppliers for data is a manual nightmare, causing delays and leaving you with incomplete, late information.'
            },
            {
              title: 'Poor Supplier Data Quality',
              description: 'Bad supplier data gives a false picture of your footprint, leading to misdirected investments and ineffective carbon reduction efforts.'
            },
            {
              title: 'Securing Decarbonization Funding',
              description: 'Without transparent assumptions, cost estimates, and emissions impact, decarbonization proposals are difficult for leadership to review, compare, and fund.'
            }
          ],
          testimonial: '"Climate Seal transformed our supply chain carbon management from a compliance burden into a competitive advantage."',
          author: 'Michael Rodriguez',
          position: 'Chief Sustainability Officer, GreenTech Corp'
        },
        supplyChain: {
          title: 'Suppliers & Exporters',
          role: 'Export Enterprise Compliance Manager',
          needs: 'Deliver credible carbon footprint reports to importers and customers with cost-effective PCF automation, ensuring compliance and maintaining competitive advantage in global markets.',
          stat: '3 Files & One Simple Workflow.',
          statDescription: 'Reduce Compliance Cost Significantly',
          secondStatDescription: 'Auto-Matching & Built-in Validation',
          thirdStatDescription: 'Review Risks Before Submission',
          fourthStat: 'Traceable PCF Delivery Package',
          fourthStatDescription: 'Structured for buyer and verifier review',
          painPoints: [
            {
              title: 'Missed Tender Deadlines',
              description: 'PCF reporting timelines of 4-8 weeks cause you to miss critical RFQ and tender windows, directly resulting in lost bids and revenue.'
            },
            {
              title: 'Carbon Data Delaying Shipments',
              description: 'Lengthy rework cycles for carbon data push back shipment dates and increase the risk of costly customs delays or compliance holds.'
            },
            {
              title: 'Expensive Consultants & Tools',
              description: 'Lacking in-house expertise creates a costly dependency on consultants, while most carbon management platforms remain expensive and difficult to implement.'
            }
          ],
          testimonial: '"With Climate Seal, we can now provide world-class carbon footprint reports at a fraction of the cost and time."',
          author: 'Li Wei',
          position: 'Compliance Director, Global Manufacturing Ltd'
        }
      },
      aiAssistants: {
        title: 'Meet Your AI Carbon Expert And Assistants',
        subtitle: 'Choose your role and unlock AI-powered carbon solutions that eliminate manual calculations, reduce compliance costs, and accelerate your sustainability goals with expert guidance.',
        comingSoon: 'Coming soon',
        getStarted: 'Book a Demo with First Report Free',
        trustCenter: 'Visit our resource session',
        assistants: {
          carbonExpert: {
            carbonCalculator: {
              title: 'Regulations Navigator',
              description: 'Auto-map your business to the right standards and lock the rule set so you clear compliance faster and accurately.'
            },
            complianceTracker: {
              title: 'Data Intake Orchestrator', 
              description: 'Auto-standardize and parse BOM and other complex data, so data arrives on time and usable—no manual cleaning or cross-checking.'
            },
            climateSeal: {
              title: 'PCF Modeler & Factor Matcher',
              description: 'Batch-match factors and compute PCF from BOM/energy/logistics—shift from line-by-line factor hunting to bulk output, freeing your expert time.'
            },
            supplyChainAnalyzer: {
              title: 'Risk & Quality Sentinel',
              description: 'Field-level quality and risk checks, uncertainty signals, and fix hints help experts identify issues before third-party review.'
            },
            reportGenerator: {
              title: 'Report & Evidence Packager',
              description: 'Organizes calculations, factor records, assumptions, supporting evidence, and review status into a traceable report draft and handoff package.'
            },
            dataValidator: {
              title: 'Review Risk Screener',
              description: 'Flags material data gaps, weak assumptions, uncertain factor matches, and other review risks, then organizes them into a prioritized expert follow-up list.'
            }
          },
          brandOwner: {
            brandAnalyzer: {
              title: 'Supplier Intake & Dispatch',
              description: 'Push tasks and AI tools across your supply chain to capture Scope 3 emissions data at source—zero‑friction supplier workflows reduce burden and cost.'
            },
            scopeTracker: {
              title: 'Supplier Risk & Scoring',
              description: 'Score both the calculation process and the results, flag risks, and see at a glance whether supplier-submitted emissions meet your quality standards.'
            },
            sustainabilityReporter: {
              title: 'Milestone Tracker',
              description: 'Auto-chase data collection against plan to secure accurate, on-time data, so decarbonization and compliance timelines stay on track.'
            },
            goalManager: {
              title: 'Reduction Planning Workspace',
              description: 'Use supplier and product carbon data to compare reduction options and document assumptions, cost estimates, and emissions impact for review.'
            }
          },
          supplyChain: {
            supplierAssessment: {
              title: 'PCF Builder',
              description: 'Drop your BOM, product specs, and utility data to generate a credible PCF, so you don’t miss RFQ/tender or export deadlines.'
            },
            exportCompliance: {
              title: 'Quality & Risk Reviewer',
              description: 'Rigorous emissions calculation with process quality scoring and verification-risk assessment, reducing rejections and holds for steadier shipments.'
            },
            costOptimizer: {
              title: 'Evidence Pack & Submission',
              description: 'Organize data and evidence into buyer or reviewer formats, with assumptions, review status, and missing items visible before submission.'
            },
            marketAnalyzer: {
              title: 'Market Analyzer',
              description: 'Analyzes market trends and\ncarbon requirements, proactively.'
            }
          }
        }
      },
      difference: {
        title: 'What makes Climate Seal different',
        cards: {
          flexible: {
            title: 'AI handles more than factor matching',
            description: 'Climate Seal automates much more of the carbon accounting workload, including document parsing, methodology support, LCA modeling, factor matching, and structured review work that teams usually push manually.'
          },
          products: {
            title: 'Support across regulations and methodologies', 
            description: 'The platform supports work across standards, accounting requirements, and lifecycle boundaries, so teams can move through different carbon accounting scenarios in one system instead of rebuilding the process each time.'
          },
          fastValue: {
            title: 'Risk analysis and audit-ready review built in',
            description: 'Climate Seal flags weak inputs, missing data, inconsistent logic, and higher-risk points early, while preserving traceability down to every data point and packaging the final report and supporting data into a verification-ready handoff.'
          }
        }
      },
      scenarios: {
        title: 'Scenarios you need carbon footprint',
        whyNeed: {
          title: 'Why Do You Need Product Carbon Footprint (PCF)?',
          export: {
            title: 'Export',
            description: 'CBAM default values are costly\nESPR/DPP: Multiple categories require "product passports"\nDisclosure: Rough disclosure faces passive verification (satellite)\nBattery-related: "Product-level carbon footprint + electronic passport"'
          },
          procurement: {
            title: 'Procurement/Green Supply Chain',
            description: 'Brands: SBTi requires 67% Scope 3 coverage\nBrands: Carbon performance written into supplier terms\nSupply chain pressure: High data quality requirements, high costs, poor carbon foundation'
          },
          government: {
            title: 'Government Green Procurement & Green Building EPD',
            description: 'Government green procurement: Cannot participate without PCF/LCA\nEngineering/Building materials: Cannot bid or lose points without EPD'
          }
        },
        scenarioCards: {
          marketAccess: {
            title: 'Market Access & Cross-Border Compliance',
            companyType: 'Export-oriented enterprises',
            industries: 'Steel, aluminum, cement, fertilizer, batteries, textiles, furniture, tires, hydrogen',
            coreDescription: 'Entry barriers, compliance costs; policy review risks;',
            detailDescription: 'A product carbon footprint report and data package that can be accepted by customs and customers can reduce compliance costs, compliance risks, improve competitiveness/listing speed, and avoid returns and fines.',
            miniCards: {
              cbam: {
                title: 'CBAM',
                description: 'High cost using default values<br/>Fines for misreporting and omissions'
              },
              batteryRelated: {
                title: 'Battery Related',
                description: 'Battery upstream and downstream require "product-level carbon<br/>footprint + digital passport"'
              },
              esprDpp: {
                title: 'ESPR/DPP',
                description: 'Multi-category European sales require "digital<br/>product passport"'
              },
              passiveVerification: {
                title: 'Passive Verification',
                description: 'Extensive leakage subject to passive satellite verification/fines (EUDR)'
              }
            }
          },
          supplyChain: {
            title: 'Supply Chain & Major Brand Procurement',
            companyType: 'Brands and supply chains',
            industries: 'Automotive, chemicals & materials, electronics, fuels, steel & aluminum commodities, medical devices;',
            coreConcept: 'Bidding entry; customer priority;',
            detailDescription: 'A PCF product carbon footprint report + traceable/exchangeable data package that can be accepted by customers becomes an RFI/RFQ entry ticket, which can meet national-level, enterprise-level, and low-carbon absolute letter requirements, improving supply chain carbon competitiveness and reducing carbon compliance costs.',
            miniCards: {
              sbti: {
                title: 'SBTi',
                description: 'SBTi requires brands to cover<br/>67% Scope 3'
              },
              biddingEntry: {
                title: 'Bidding Entry',
                description: 'Suppliers lack compliance with bidding requirements<br/>Supplier terms (highly mandatory)'
              },
              supplyChainPerformance: {
                title: 'Supply Chain Carbon Performance',
                description: 'Brands have high data quality requirements<br/>High supply chain carbon compliance costs<br/>Poor carbon foundation<br/>Poor data quality'
              },
              dataExchangeStandards: {
                title: 'Data Exchange Standards',
                description: 'Submit carbon data according to industry standards<br/>Automotive Catena-X<br/>Chemical TfS<br/>Cross-industry: WBCSD PACT'
              }
            }
          },
          governmentProcurement: {
            title: 'Government Procurement & Industry Requirements',
            companyType: 'Engineering enterprises and specific industries',
            industries: 'Construction, engineering, healthcare, electronics ICT, furniture office, photovoltaic, logistics;',
            coreDescription: 'Government buy clean bidding entry; green pricing; sales revenue;',
            detailDescription: 'A PCF/EPD product carbon footprint report + data package that can be accepted by the government becomes a key resource for government green procurement or industry procurement. Public and institutional procurement can be scored, and without compliance, there is no opportunity to participate in bidding.',
            miniCards: {
              governmentBuyClean: {
                title: 'Government Buy Clean',
                description: 'Mandatory submission of Type III EPD<br/>Set GWP thresholds/priorities'
              },
              greenBuilding: {
                title: 'Green Building',
                description: 'Green building product EPD;<br/>EU/US applications/European references in bid documents,<br/>as bidding thresholds'
              },
              industryRequirements: {
                title: 'Industry Requirements',
                description: 'ICT hardware = EPEAT climate standards<br/>Aviation fuel = SAF<br/>Healthcare & Life Sciences = UK NHS<br/>Furniture & Office = BIFMA LEVEL<br/>Fashion/Textiles = French AGEC/ESPR/DPP'
              }
            }
          }
        },
        painPoints: {
          title: 'Pain Points in Completing Product Carbon Footprint (PCF)',
          highBarrier: {
            title: 'High Barrier',
            description: 'Requires carbon experts who understand both methodology and delivery\nMany carbon regulations and standards'
          },
          highCost: {
            title: 'High Cost',
            description: 'PCF or LCA reports require tens of thousands of dollars'
          },
          longCycle: {
            title: 'Long Cycle',
            description: 'PCF takes 1-3 months / EPD takes 3-6 months'
          },
          supplyChainPressure: {
            title: 'High Supply Chain Pressure',
            description: 'Supply chain companies have poor carbon foundation, poor data quality, high costs\nBrands have high carbon management costs'
          },
          hiddenCost: {
            title: 'Hidden Costs',
            description: 'CBAM default values are costly\nPCF missing items rejected by verification agencies for rework'
          }
        },
        painSection: {
          title: 'We Understand Your Carbon Footprint Pain',
          solutionTitle: 'Climate Seal Hopes to Change All This',
          cards: {
            costHigh: {
              title: 'High Cost',
              description: 'Complete LCA/EPD requires<br/>thousands to tens of thousands of dollars<br/><br/>'
            },
            cycleLong: {
              title: 'Long Cycle',
              description: 'PCF 1-3 months<br/>EPD 3-6 months<br/>Easy to exceed deadlines and unreliable'
            },
            barrierHigh: {
              title: 'High Barrier',
              description: 'Multiple standards and regulations<br/>Regulations update rapidly<br/>Requires experts who understand methodology + delivery'
            },
            supplyChainPressure: {
              title: 'High Supply Chain Pressure',
              description: 'Brand supply chain management pressure (covers 67% Scope 3)<br/>Suppliers have poor carbon foundation (high outsourcing costs)<br/>Poor supplier data quality/credibility'
            },
            hiddenCost: {
              title: 'Hidden Costs',
              description: '(CBAM)<br/>Using default values is costly<br/>Easy to miss reports and errors - fines<br/>Yearly increases require budget assessment'
            },
            rework: {
              title: 'Repeated Rework',
              description: 'Data caliber deviates from verification agencies<br/>Data gaps or inconsistent calibers<br/>Repeated rejections and revisions'
            }
          },
          solution: {
            costReduction: {
              title: '↓99%',
              description: 'Cost (hundred-dollar level)<br/>Cycle (hour level)'
            },
            zeroBarrier: {
              title: 'Zero Barrier',
              description: 'Expert-level carbon consultant guidance<br/>No professional background required'
            },
            preValidation: {
              title: 'Pre-validation',
              description: 'Expert-level pre-validation<br/>Reject rework & hidden costs'
            }
          }
        },
        ourSolution: {
          title: 'What we are offering?\nOur Solution',
          zeroBarrier: {
            title: 'Zero Barrier',
            description: 'Expert-level guidance\nNo professional background required'
          },
          lowCost: {
            title: 'Cost (Hundreds) / Cycle (Hours)',
            description: '99% reduction'
          },
          preValidation: {
            title: 'Expert "Pre-validation"',
            description: 'Reject rework & hidden costs'
          }
        }
      },
      comparison: {
        title: 'Compare With Traditional Way',
        subtitle: 'Why Choose Climate Seal AI?'
      },
      valueForUser: {
        title: 'Value for Teams and the Business',
        subtitle: 'Choose the right plan to start your carbon footprint journey'
      },
      aboutUs: {
        title: 'About Us',
        subtitle1: 'Gain Credibility At Low Cost',
        subtitle2: 'Use Credit At Low Cost',
        subtitle3: 'Leave More Time And Budget To',
        highlightText: 'Decarbonization'
      },
      pricing: {
        title: 'Pricing Plans',
        subtitle: 'Choose the right plan to start your carbon footprint journey',
        plans: {
          free: {
            title: 'Free Start',
            description: 'For teams that want to try Climate Seal with a simple product carbon footprint before committing',
            price: 'Limited report credits',
            features: ['Includes a limited amount of credits to complete one simple PCF workflow', 'Best for testing data readiness, report structure, and process fit', 'All trials start after speaking with our team'],
            button: 'Contact Sales'
          },
          standard: {
            title: 'Professional',
            description: 'For consultants, experts, and small teams delivering recurring carbon accounting work with AI',
            price: 'From $99 / month',
            features: ['Access the full Climate Seal accounting workflow across multiple regulations, standards, and methodologies', 'Pricing is based on token / credit usage so teams can scale by project volume', 'Best for increasing delivery capacity without adding more manual workload'],
            button: 'Contact Sales'
          },
          enterprise: {
            title: 'Enterprise',
            description: 'For corporates managing carbon data across products, suppliers, business units, or compliance programs',
            price: 'Custom',
            features: ['Built for supplier management, internal data governance, multi-product reporting, and cross-team review', 'Includes supplier data collection, custom factor databases, approval controls, traceability packages, and reusable product data models', 'Best for companies that need a long-term carbon compliance operating system'],
            button: 'Contact Sales'
          }
        }
      },
      value: {
        cards: {
          cost: {
            title: 'Reduce reporting cost to ~1%',
            subtitle: 'Cost reduce',
            description: 'For finance and sustainability teams: less than $70 per credible report'
          },
          time: {
            title: 'From months to hours',
            subtitle: 'Time saving',
            description: 'For operations teams: move from multi‑month cycles to hours'
          },
          barrier: {
            title: 'Zero expertise required',
            subtitle: 'Zero barrier',
            description: 'For any role: guided flows produce credible, consistent results'
          },
          trusted: {
            title: 'Verification‑grade credibility',
            subtitle: 'Audit-ready',
            description: 'For compliance & buyers: auditable outputs with evidence'
          }
        }
      },
      moreInfo: 'Get More Information'
    },
    features: {
      card1: {
        title: 'Auto Regulation Match & LCA Build',
        description: 'In just 30 seconds, simply enter the product name and sales region, and the system will build the compliance boundary and base model according to regulations such as the latest EU Battery Directive or ISO 14067.',
        detail: '**Value:** This helps users reduce regulatory research by 90%, enabling rapid understanding and matching of regulations across different sales regions.'
      },
      card2: {
        title: 'BOM Parsing in Seconds',
        description: 'Simply provide BOM information or a BOM file, and the system will instantly extract hierarchical structure, quantity, and material information without requiring line-by-line entry.',
        detail: '**Value:** Assemblies with thousands of parts can be calculated in minutes, allowing engineering, finance, and carbon emission teams to work from the same structured spreadsheet.'
      },
      card3: {
        title: 'Intelligent Emission Factor Matching',
        description: 'The engine matches BOM lines, energy, and logistics data in real time, and compares it with ecoinvent and other databases to return highly accurate factors and factor sources.',
        detail: '**Value:** This reduces manual research time from weeks to minutes, while providing fully traceable, accurate factor data for immediate approval by audits or customer spot checks.'
      },
      card4: {
        title: 'Quality & Risk Analytics',
        description: 'One-click creation of data quality radars, ±95% Monte Carlo bands, and heatmaps highlighting high-impact and low-quality items. The overall confidence score is then aggregated to avoid rejections and rework by verification agencies.',
        detail: '**Value:** This module helps users gain insight into the largest emission hotspots, sources of uncertainty, and data quality risks, providing users and auditors with quantifiable risk assessments based on the Confidence Indicator (CI).'
      },
      card5: {
        title: 'End-to-End Customization',
        description: 'The supply chain module invites second- and third-tier suppliers in batches, calculates their carbon footprints without any barriers, and performs pre-verification and assessment of the results to ensure their credibility. Data can be automatically synchronized with ERP/SRM suites. This module helps users obtain high-quality carbon emissions data and package it into carbon assets for low-cost green loan applications.',
        detail: '**Value:** Suppliers can save 99% of time and costs. Through the intelligent advisor, they can easily complete audit-level reports and submit them to brands. Brands can receive highly trusted results and reduce their supply chain carbon management costs by over 90%. Credit-approved data can be monetized as carbon assets or collateral for green loans, unlocking the value of carbon reduction efforts early.'
      }
    },
    comparison: {
      title: 'What makes Climate Seal different',
      subtitle: 'Compare Climate Seal AI with traditional carbon accounting: we automate the heavy lifting, so your compliance and carbon targets stay on track.',
      consultant: {
        title: 'Carbon Software + Experts',
        time: '1-2 months',
        steps: '11 steps',
        stepList: [
          'user training',
          'building calculation models',
          'document lookup & regulation mapping',
          'manual emission factor matching',
          'data collection checklist',
          'submission to verifier',
          'data structuring and cleansing',
          'pre-audit issue list',
          'manual data gap filling',
          'supplementary corrections',
          'verification and certification'
        ]
      },
      traditional: {
        title: 'Traditional Consultancy',
        time: '3-6 months',
        steps: '12 steps',
        cost: '$50K-100K',
        team: '3-5 experts',
        stepList: [
          'kickoff and training',
          'factor matching and calculation',
          'information search & regulatory comparison',
          'Draft report',
          'data list preparation',
          'internal review and revision',
          'data cleaning and interviews',
          'delivery to verifier',
          'calculation model',
          'pre-audit issue feedback',
          'information supplementation and correction',
          'verification and certification'
        ]
      },
      aiAgent: {
        title: 'Climate Seal AI Agent Platform',
        time: '4 hours',
        steps: '4 steps',
        cost: '$100',
        team: 'Just you',
        stepList: [
          'Upload BOM Data',
          'AI Auto-Processing',
          'Review & Confirm',
          'Get Audit-Ready Report'
        ]
      },
      savings: {
        costReduction: '99%',
        timeReduction: '95%',
        expertiseRequired: '0'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get your first audit-ready report. Schedule a call with our team to discover how simple carbon accounting can be.',
      description: 'Get in touch with our team',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company Name',
        industry: 'Industry',
        message: 'Message',
        submit: 'Send Message',
        submitting: 'Sending...',
        privacyDisclaimer: '*I disclose my information to Climate Seal. I have read and agree to Climate Seal\'s Privacy Policy',
        placeholder: {
          name: 'Please enter your name',
          email: 'Please enter your email',
          phone: 'Please enter your phone number',
          company: 'Please enter company name',
          industry: 'Please select your industry',
          message: 'Please describe your needs or questions'
        },
        industries: {
          automotive: 'Automotive Manufacturing',
          electronics: 'Electronics & Electrical',
          textiles: 'Textiles & Apparel',
          chemicals: 'Chemicals & Chemical Engineering',
          foodBeverage: 'Food & Beverage',
          construction: 'Construction & Building Materials',
          metals: 'Steel & Metals',
          plastics: 'Plastics & Rubber',
          packaging: 'Packaging & Printing',
          pharmaceuticals: 'Pharmaceuticals & Medical',
          energy: 'Energy & Power',
          manufacturing: 'Mechanical Manufacturing',
          furniture: 'Furniture & Home',
          cosmetics: 'Cosmetics & Personal Care',
          toys: 'Toys & Consumer Goods',
          agriculture: 'Agriculture & Food',
          transportation: 'Transportation & Logistics',
          retail: 'Retail & Trade',
          other: 'Other'
        }
      },
      messages: {
        success: 'Message sent successfully! We will reply to you soon.',
        error: 'Send failed, please try again later or send email directly to xuguang.ma@climate-seal.net',
        validation: 'Please fill in all required fields'
      }
    },
    footer: {
      description: 'AI-powered carbon accounting platform for sustainable business solutions.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      copyright: '© 2024 Climate Seal. All rights reserved.',
      privacyPolicy: 'Privacy Policy'
    },
    pages: {
      about: {
        title: 'About Climate Seal',
        content: 'About page content is under construction...'
      },
      products: {
        title: 'Our Products',
        content: 'Products page content is under construction...'
      },
      pricing: {
        title: 'Pricing Plans',
        content: 'Pricing page content is under construction...'
      }
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is important to us',
      backToHome: 'Back to Home',
      lastUpdated: 'Last Updated',
      updateDate: 'December 2024',
      sections: {
        introduction: {
          title: '1. Introduction',
          content: 'Climate Seal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our carbon footprint services.'
        },
        dataCollection: {
          title: '2. Information We Collect',
          personalInfo: 'Personal Information',
          items: {
            name: 'Name and contact information',
            email: 'Email address',
            company: 'Company information',
            usage: 'Usage data and analytics'
          }
        },
        dataUsage: {
          title: '3. How We Use Your Information',
          items: {
            service: 'To provide and maintain our services',
            communication: 'To communicate with you about our services',
            improvement: 'To improve our website and services',
            legal: 'To comply with legal obligations'
          }
        },
        dataSharing: {
          title: '4. Information Sharing',
          content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.'
        },
        security: {
          title: '5. Data Security',
          content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        rights: {
          title: '6. Your Rights',
          intro: 'You have the right to:',
          items: {
            access: 'Access your personal information',
            correct: 'Correct inaccurate information',
            delete: 'Request deletion of your information',
            portability: 'Data portability'
          }
        },
        contact: {
          title: '7. Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us at:'
        }
      }
    }
    ,
    faq: {
      title: 'Frequently Asked Questions about Climate Seal',
      seo: {
        title: 'Carbon Accounting Software FAQ | Climate Seal',
        description: 'Learn how Climate Seal supports AI-powered product carbon footprints, Scope 1–3 accounting, CBAM reporting, supplier data processing, emission-factor matching, and audit-ready carbon reporting.',
        indexable: true,
      },
      groups: [
        {
          name: 'Getting Started',
          items: [
            {
              q: 'What does Climate Seal do, and how is it different from traditional consulting?',
              a: [
                'Climate Seal is an AI-powered carbon management workspace supporting organization-, product-, project-, and supply-chain-level accounting and compliance workflows. It turns professional methodologies and regulatory requirements into structured, repeatable workflows while keeping experts in control of methodology, review, and final approval.'
              ]
            },
            {
              q: 'How do I get started with Climate Seal?',
              a: [
                'Select the accounting or compliance workflow you need and provide basic information about your organization, product, project, reporting objective, and applicable requirements. Climate Seal asks guided questions to identify the minimum required data and documents. After you upload the available files, the platform organizes the data, identifies gaps, builds the accounting model, and prepares calculations and a traceable report draft for expert review.'
              ]
            },
            {
              q: 'Who is Climate Seal designed for?',
              a: [
                'Climate Seal is designed for sustainability teams, carbon consultants, LCA practitioners, manufacturers, exporters, brands, procurement teams, and organizations managing carbon data across products, suppliers, projects, or business units.'
              ]
            },
            {
              q: 'How quickly can a first product carbon footprint report be generated?',
              a: [
                'For a standard product with sufficiently complete data, Climate Seal can typically parse the files, build the model, perform calculations, and generate a first report draft within 2–4 hours. More time may be required when applicable requirements call for additional evidence or when missing, inconsistent, or unclear information must be resolved.'
              ]
            }
          ]
        },
        {
          name: 'Standards & Compliance',
          items: [
            {
              q: 'What carbon accounting standards and regulatory workflows does Climate Seal support?',
              a: [
                'Climate Seal supports configurable workflows for product, organizational, project, and supply-chain carbon accounting. These can include ISO 14067, ISO 14064, the GHG Protocol, CBAM, and data preparation for EPD, PEF, and Digital Product Passport requirements. Applicable requirements should be confirmed for each project, jurisdiction, and reporting program.'
              ]
            },
            {
              q: 'Can Climate Seal calculate product carbon footprints under ISO 14067 and the GHG Protocol?',
              a: [
                'Climate Seal helps teams prepare product carbon footprint calculations and documentation aligned with ISO 14067 and the GHG Protocol Product Standard. It structures boundaries, functional units, activity data, emission factors, allocation methods, assumptions, calculations, and evidence for professional review.'
              ]
            },
            {
              q: 'Does Climate Seal support Scope 1, Scope 2, and Scope 3 accounting?',
              a: [
                'Yes. Climate Seal can support organizational greenhouse-gas accounting workflows across Scope 1, Scope 2, and relevant Scope 3 categories. The platform helps organize activity data, define calculation methods, select factors, document assumptions, and maintain traceable calculation records.'
              ]
            },
            {
              q: 'How does Climate Seal support CBAM reporting?',
              a: [
                'Climate Seal helps organize product and production data, calculate relevant embedded emissions, document emission factors and methodologies, identify missing evidence, and prepare structured outputs for review. Final CBAM responsibilities and submissions remain with the authorised declarant and relevant professional advisers.'
              ]
            }
          ]
        },
        {
          name: 'Data & AI Workflow',
          items: [
            {
              q: 'What data do I need to provide?',
              a: [
                'Required data depends on the selected standard, regulation, product, and system boundary. Typical inputs include BOMs, specifications, energy records, procurement data, transport information, supplier documents, process data, invoices, and supporting evidence. Climate Seal identifies the minimum requirements for each workflow.'
              ]
            },
            {
              q: 'How does Climate Seal process BOM and supplier files?',
              a: [
                'Climate Seal extracts carbon-relevant information from spreadsheets, PDFs, specifications, and supporting documents. It organizes materials, quantities, units, suppliers, locations, energy use, transport, and evidence into structured project data while preserving the source record for review.'
              ]
            },
            {
              q: 'How are emission factors selected and reviewed?',
              a: [
                'Climate Seal suggests factors using available context such as material, process, geography, technology, reporting period, standard, and database source. Each suggestion can include its source, selection rationale, match quality, risk level, and review status. Experts can review, replace, or approve the factor.'
              ]
            },
            {
              q: 'What happens when carbon data is incomplete?',
              a: [
                'Climate Seal flags missing, inconsistent, or unclear information and generates clarification questions or data requests. Where an applicable methodology permits assumptions or default values, these can be documented with their limitations and risks. The platform does not treat uncertain data as confirmed evidence.'
              ]
            }
          ]
        },
        {
          name: 'Review & Deliverables',
          items: [
            {
              q: 'Can Climate Seal results be independently verified?',
              a: [
                'Climate Seal prepares structured calculations, factor records, assumptions, data-quality signals, and supporting evidence that can make third-party review more efficient. Climate Seal does not issue independent assurance or certification. Final verification is performed by an appropriately qualified independent body.'
              ]
            },
            {
              q: 'What is included in the audit ledger?',
              a: [
                'The audit ledger records source data, conversions, emission factors, selection rationale, formulas, assumptions, evidence, risk levels, results, and review status. It provides a traceable working record behind the final report rather than presenting only a final carbon figure.'
              ]
            },
            {
              q: 'What deliverables and export formats are available?',
              a: [
                'Climate Seal can generate PDF report drafts, structured CSV and JSON exports, and audit-ledger packages. Outputs can be adapted to customer-defined templates and formats, with QR codes available for sharing and reuse. These deliverables can support CBAM, PEF, EPD, and DPP workflows, subject to applicable requirements and final professional review.'
              ]
            }
          ]
        },
        {
          name: 'Security & Pricing',
          items: [
            {
              q: 'Who owns my data, and how is it protected?',
              a: [
                'Customer data and calculation results remain the customer’s property. Data access, retention, export, deletion, residency, and deployment requirements can be addressed according to the selected service plan and agreement.'
              ]
            },
            {
              q: 'How do pricing and trials work?',
              a: [
                'Climate Seal uses a credit-based pricing model, with usage determined by the AI processing required for each task. Monthly subscriptions start at 200 credits, and additional credits can be purchased as needed. We offer one free trial report. Please contact us to discuss trial access and the right plan for your workflow.'
              ]
            }
          ]
        }
      ]
    }
  },
  
  // 中文翻译
  zh: {
    nav: {
      home: '首页',
      products: '产品',
      resources: '资源中心',
      about: '关于我们',
      contact: '联系我们',
      pricing: '价格',
      login: '登录'
    },
    hero: {
      title: '可信碳核算的 AI 工作台',
      subtitle: 'Climate Seal 用专业级 AI 帮助团队建模、复核和记录产品碳、企业碳、Scope 3 与项目碳工作流，并保留透明证据链。',
      description: '产品碳、企业碳与项目碳——在同一套灵活平台中支持多类碳核算工作流。\n可信且透明——保留假设、因子选择、数据缺口与证据链，便于复核。\n对齐 ISO 14067 与 GHG Protocol——围绕主流标准交付，并持续扩展更多框架。',
      getStarted: '预约演示',
      workflowCta: '查看工作流程',
      learnMore: '了解更多',
      trustedBy: '信赖我们的客户'
    },

    standardsCoverage: {
      eyebrow: '支持的法规与方法学',
      title: '一套工作空间，适配不同的可持续发展要求',
      description: '同一套结构化工作流程可以用于企业报告、产品要求、市场准入法规和行业方法学。Climate Seal 会围绕每个支持的法规或方法学，组织相关要求、数据、计算、证据和复核步骤。',
      groups: [
        {
          label: '产品与生命周期标准',
          items: [
            { mark: 'GHG', name: 'GHG Protocol 企业温室气体核算' },
            { mark: 'ISO', name: 'ISO 14067（2018）' },
            { mark: 'ISO', name: 'ISO 14040 / 14044' },
            { mark: 'PAS', name: 'PAS 2050（2011）' },
            { mark: 'EPD', name: 'International EPD System GPI 5.0.1' },
            { mark: 'AI', name: 'AI 计算与 Token 生命周期' },
          ],
        },
        {
          label: '企业报告与尽职调查',
          items: [
            { mark: 'ESRS', name: 'CSRD / 当前 ESRS' },
            { mark: 'EU', name: '欧盟企业可持续发展尽职调查指令' },
          ],
        },
        {
          label: '市场准入与产品要求',
          items: [
            { mark: 'CBAM', name: '欧盟 CBAM 装置通信模板' },
            { mark: 'BAT', name: '欧盟电池法规 2023/1542' },
            { mark: 'DPP', name: '欧盟 ESPR 与数字产品护照' },
            { mark: 'PPWR', name: '欧盟包装与包装废弃物法规 2025/40' },
            { mark: 'EPR', name: '纺织品与鞋类 EPR' },
            { mark: 'EU', name: '欧盟强迫劳动产品禁令' },
          ],
        },
        {
          label: '行业方法学',
          items: [
            { mark: 'BRM', name: 'Higg BRM 2026' },
            { mark: 'FEM', name: 'Higg FEM 2025' },
            { mark: 'FSLM', name: 'Higg FSLM / SLCP CAF 1.7.1' },
            { mark: 'MSI', name: 'Higg MSI（2024）' },
            { mark: 'PM', name: 'Higg PM（2024）' },
          ],
        },
      ],
    },

    resourcesPage: {
      whitepapers: {
        title: '白皮书',
        subtitle: '深度行动手册与合规工具包。填写表单即可获取下载链接，并收到最新更新与配套资源。',
        cta: '下载白皮书'
      },
      articles: {
        title: '博客与洞察',
        subtitle: 'Climate Seal 团队输出的实操指南、法规解读与产品碳足迹最佳实践。'
      },
      form: {
        title: '领取白皮书',
        description: '留下您的信息，我们会立即推送下载链接，并发送相关更新与配套材料。',
        successTitle: '下载已解锁',
        successDescription: '感谢提交！白皮书下载链接已生成，同时我们也会发送一份邮件副本。',
        downloadCta: '立即下载白皮书'
      }
    },

    sections: {
      whatWeDo: {
        title: '我们的服务',
        subtitle: '以1%的成本和时间获得可信的碳足迹',
        scrollingText1: 'Gain Credibility At Low Cost',
        scrollingText2: 'Use Credit At Low Cost'
      },
      personas: {
        title: '为每个团队升级碳核算',
        carbonExpert: {
          title: '碳/ESG专业人士',
          role: 'ESG/可持续/碳/咨询专家',
          needs: '通过结构化 AI 支持减少 LCA 与碳报告中的重复工作，包括数据准备、因子匹配、建模、风险复核和证据整理。',
          stat: '结构化 AI 辅助 LCA 工作流',
          statDescription: '减少重复搭建与复核工作',
          secondStatDescription: '自动批量因子匹配',
          thirdStatDescription: '确保可审计 & 可比较数据',
          fourthStat: 'DQR+行业数据 & 字段验证',
          fourthStatDescription: '加速整个合规流程。',
          painPoints: [
            {
              title: '不一致的碳计算',
              description: '规则和排放因子不一致导致结果波动，产生不可靠的数据，无法跟踪进度或准确报告。'
            },
            {
              title: '碳数据质量差',
              description: '延迟和错误的数据迫使团队浪费时间进行清理而不是分析，阻碍了您的可持续发展计划。'
            },
            {
              title: '产品碳足迹计算缓慢',
              description: '手动匹配每个SKU的排放因子需要数天时间，造成重大瓶颈，减缓产品开发和报告速度。'
            },
            {
              title: '未识别的碳风险',
              description: '没有正式流程来评估碳数据，供应链和运营中的隐藏风险直到为时已晚才被发现。'
            },
            {
              title: '昂贵的碳验证',
              description: '分散的证据和缓慢的检查使碳审计成本高昂，并延迟关键报告，消耗时间和资源。'
            }
          ],
          testimonial: '"Climate Seal不仅仅是另一个计算工具，而是一个支持我们大规模精确高效需求的智能操作系统。"',
          author: '陈博士',
          position: 'EcoStrategy高级ESG顾问'
        },
        brandOwner: {
          title: '品牌方和采购负责人',
          role: '可持续负责人',
          needs: '我需要更高效地收集供应商数据、跟踪 Scope 3，并使用产品和供应链碳数据支持目标设定与减排规划。',
          stat: '≈$100 / 4 小时 / 每个SKU',
          statDescription: '降低合规成本与时间',
          secondStatDescription: '内置数据质量门槛',
          thirdStatDescription: '确保一致与可比较的数据',
          fourthStat: '为供应商精简的一体化流程',
          fourthStatDescription: '支撑严格的减碳与采购',
          painPoints: [
            {
              title: '缺乏内部可持续发展专业知识',
              description: '内部碳专业知识有限，使应对CSRD等复杂供应链法规变得缓慢且昂贵，增加了合规风险。'
            },
            {
              title: '分散的排放数据',
              description: '向数十家供应商追讨数据是手动噩梦，导致延误，使您获得不完整、过时的信息。'
            },
            {
              title: '供应商数据质量差',
              description: '糟糕的供应商数据会给出错误的碳足迹图景，导致投资方向错误和无效的碳减排努力。'
            },
            {
              title: '获得脱碳资金',
              description: '如果缺少透明的假设、成本估算和排放影响，管理层很难复核、比较并为减排方案提供资源。'
            }
          ],
          testimonial: '"Climate Seal将我们的供应链碳管理从合规负担转变为竞争优势。"',
          author: '王明',
          position: 'GreenTech Corp首席可持续官'
        },
        supplyChain: {
          title: '供应商和出口商',
          role: '出口企业合规负责人',
          needs: '我需要低成本、高效率的向进口方和下游客户提供可信碳足迹报告，确保销售不受影响',
          stat: '3 个文件与一个简单流程',
          statDescription: '显著降低合规成本',
          secondStatDescription: '自动匹配与内置验证',
          thirdStatDescription: '提交前复核质量风险',
          fourthStat: '可追溯 PCF 交付包',
          fourthStatDescription: '便于买方与核验机构审查',
          painPoints: [
            {
              title: '错过投标截止日期',
              description: 'PCF报告需要4-8周的时间，导致您错过关键的RFQ和投标窗口，直接造成投标失败和收入损失。'
            },
            {
              title: '碳数据延迟出货',
              description: '碳数据的冗长返工周期推迟了出货日期，增加了昂贵的海关延误或合规扣留的风险。'
            },
            {
              title: '昂贵的咨询顾问和工具',
              description: '缺乏内部专业知识造成对咨询顾问的昂贵依赖，而大多数碳管理平台仍然昂贵且难以实施。'
            }
          ],
          testimonial: '"通过Climate Seal，我们现在能够以传统成本和时间的一小部分提供世界级的碳足迹报告。"',
          author: '李伟',
          position: '全球制造有限公司合规总监'
        }
      },
      aiAssistants: {
        title: '遇见您的AI碳足迹专家团队',
        subtitle: '选择您的角色，您的AI碳足迹专家和助手已准备好为您提供24/7全天候支持。',
        comingSoon: '即将推出',
        getStarted: '预约演示，首份报告免费',
        trustCenter: '访问资源中心',
        assistants: {
          carbonExpert: {
            carbonCalculator: {
              title: '合规导航助手',
              description: '智能匹配您的业务到正确标准，自动锁定规则集，让合规检查更快更准确。'
            },
            complianceTracker: {
              title: '数据管理助手',
              description: '自动整理和解析BOM等复杂数据，确保数据及时可用，无需人工清理和核对。'
            },
            climateSeal: {
              title: 'PCF建模专家',
              description: '智能批量匹配排放因子，从BOM、能源、物流数据自动计算PCF，让您从繁琐的逐行查找中解脱出来。'
            },
            supplyChainAnalyzer: {
              title: '质量风险分析师',
              description: '提供字段级质量检查、不确定性信号与修复建议，帮助专家在第三方审查前识别问题。'
            },
            reportGenerator: {
              title: '报告与证据包整理助手',
              description: '把计算、因子记录、假设、支撑证据和复核状态整理成可追溯的报告草稿与交付包。'
            },
            dataValidator: {
              title: '复核风险筛查器',
              description: '标记关键数据缺口、薄弱假设、不确定的因子匹配和其他复核风险，并整理成按优先级排序的专家跟进清单。'
            }
          },
          brandOwner: {
            brandAnalyzer: {
              title: '供应商接取和调度',
              description: '在您的整个供应链中推送任务和AI工具——供应商零摩擦运行AI计算，无额外成本，减少供应商负担。'
            },
            scopeTracker: {
              title: '供应商风险和评分',
              description: '对计算过程和结果进行评分，标记风险，一目了然地看到供应商提交的排放是否符合您的质量标准。'
            },
            sustainabilityReporter: {
              title: '里程碑追踪器',
              description: '自动追踪数据收集进度，确保准确、按时的数据，使去碳和合规时间表保持正轨。'
            },
            goalManager: {
              title: '减排规划工作台',
              description: '使用供应商与产品碳数据比较减排方案，并记录假设、成本估算和排放影响，便于复核。'
            }
          },
          supplyChain: {
            supplierAssessment: {
              title: 'PCF构建器',
              description: '上传您的BOM、产品规格和公用事业数据，生成可信的PCF，让您不错过RFQ/招标或出口截止日期。'
            },
            exportCompliance: {
              title: '质量和风险审查员',
              description: '严格的排放计算，包含过程质量评分和验证风险评估，减少拒绝和持留，让货物运输更稳定。'
            },
            costOptimizer: {
              title: '证据包装和提交',
              description: '把数据与证据整理成买方或审查方要求的格式，并在提交前展示假设、复核状态和缺失项。'
            },
            marketAnalyzer: {
              title: '市场分析器',
              description: '主动分析市场趋势\n和碳要求。'
            }
          }
        }
      },
      difference: {
        title: 'Climate Seal 有什么不同',
        cards: {
          flexible: {
            title: 'AI 自动化的不只是因子匹配',
            description: 'Climate Seal 自动化的不只是单点匹配，而是把文件解析、方法学支持、LCA 建模、因子匹配和结构化复核等大量碳核算工作一起交给 AI 处理。'
          },
          products: {
            title: '支持多法规与多方法学场景', 
            description: '平台支持不同标准、核算要求和生命周期边界，让团队可以在同一系统里推进不同类型的碳核算工作，而不需要每次重建流程。'
          },
          fastValue: {
            title: '风险分析与审计就绪复核内置',
            description: 'Climate Seal 会提前识别缺失数据、薄弱输入、逻辑不一致和高风险点，同时保留逐数据点的完整留痕，并把最终报告与支撑数据打包成可直接发送给第三方核证的交付包。'
          }
        }
      },
      scenarios: {
        title: '场景与价值',
        whyNeed: {
          title: '为什么需要产品碳足迹CPF？',
          export: {
            title: '出口',
            description: 'CBAM 采用默认值成本高\nESPR/DPP: 多品类要"产品护照"\n以披露: 粗披露遭遇被动核查(卫星)\n电池相关: "产品级碳足迹+电子护照"'
          },
          procurement: {
            title: '采购/绿色供应链',
            description: '品牌方: SBTi要覆盖67%Scope 3\n品牌方: 碳表现写进供方条款\n供应链压力: 数据质量要求高、成本高、碳基础差'
          },
          government: {
            title: '政府绿色采购 & 绿建EPD',
            description: '政府绿色采购：无PCF/LCA不能参与\n工程/建材：无EPD不能投标或减分'
          }
        },
        scenarioCards: {
          marketAccess: {
            title: '市场准入与跨境合规',
            companyType: '出口型企业',
            industries: '钢铁、铝材、水泥、化肥、电池、纺织、家具、轮胎、氢',
            coreDescription: '准入门槛、合规成本；政策核查风险；',
            detailDescription: '一份能够被续及客户接受的准确、核验级）PCF产品碳足迹报告与数据包，能降低合规成本、合规风险、提高竞争力/上架速度，避免退运与罚款。',
            miniCards: {
              cbam: {
                title: 'CBAM',
                description: '采用默认值成本高<br/>错报漏报产生罚款'
              },
              batteryRelated: {
                title: '电池相关',
                description: '电池相关上下游需要"产品级碳<br/>足迹 + 电子护照"'
              },
              esprDpp: {
                title: 'ESPR/DPP',
                description: '多品类欧洲销售需要"产品数字<br/>护照"'
              },
              passiveVerification: {
                title: '被动核查',
                description: '粗放露漏遭被动卫星核查/产生罚款 (EUDR)'
              }
            }
          },
          supplyChain: {
            title: '供应链与大品牌采购',
            companyType: '品牌方和供应链',
            industries: '汽车、化工与材料、电子、燃料、钢铁铝大宗、医疗器械；',
            coreConcept: '招标准入；客户优先；',
            detailDescription: '一份能够按照客户接受的PCF产品碳足迹报告+可追溯/可交换的数据包，成为RFI/RFQ入场券，可以满足国家级、企业级、低碳绝对字母代，提高供应链碳竞争力，降低碳合规成本。',
            miniCards: {
              sbti: {
                title: 'SBTi',
                description: 'SBTi 要求品牌方覆盖<br/>67%Scope 3'
              },
              biddingEntry: {
                title: '投标入口',
                description: '供应商缺乏现与进招标要求<br/>供方条款（高性强制）'
              },
              supplyChainPerformance: {
                title: '供应链碳表现',
                description: '品牌方的数据质量要求高<br/>供应链碳合规成本高<br/>碳基础差<br/>数据质量差'
              },
              dataExchangeStandards: {
                title: '数据交换标准',
                description: '按照行业标准提交碳数据<br/>汽车Catena-X<br/>化学TfS<br/>跨行业：WBCSD PACT'
              }
            }
          },
          governmentProcurement: {
            title: '政府采购与行业要求',
            companyType: '工程企业和特定行业',
            industries: '建筑、工程、医疗卫生、电子ICT、家具办公、光伏、物流；',
            coreDescription: '政府buy clean招标准入；绿色选价；销售收入；',
            detailDescription: '一份能够政府该商的PCF/EPD产品碳足迹报告+数据包，成为政府绿色采购或行业采购的关键资源，公共与机构采购或比可打分，没有合规就没有机会参与投标。',
            miniCards: {
              governmentBuyClean: {
                title: '政府Buy Clean',
                description: '强制提交第三类EPD<br/>设置GWP门槛/优先'
              },
              greenBuilding: {
                title: '绿色建筑',
                description: '绿建产品EPD；<br/>欧美申方力/欧引用到投标文件，<br/>作为招标门槛'
              },
              industryRequirements: {
                title: '行业要求',
                description: 'ICT硬件=EPEAT 气候标准<br/>航空燃油=SAF<br/>医疗与生命科学=英国NHS<br/>家具与办公用品=BIFMA LEVEL<br/>时装/纺织=法国AGEC/ESPR/DPP'
              }
            }
          }
        },
        painPoints: {
          title: '完成产品碳足迹CPF过程中的痛点',
          highBarrier: {
            title: '门槛高',
            description: '需要懂方法+懂交付的碳专家参与\n碳法规和标准多'
          },
          highCost: {
            title: '成本高',
            description: 'PCF或LCA报告需要数万美金'
          },
          longCycle: {
            title: '周期长',
            description: 'PCF1-3个月/EPD 需要 3-6个月'
          },
          supplyChainPressure: {
            title: '供应链压力大',
            description: '供应链企业碳基础差、数据质量差、成本高\n品牌方碳管理成本高'
          },
          hiddenCost: {
            title: '隐形成本',
            description: 'CBAM用默认值成本高\nPCF缺项被核验机构打回返工'
          }
        },
        painSection: {
          title: '我们理解你完成碳足迹的痛苦',
          solutionTitle: 'Climate Seal希望改变这一切',
          cards: {
            costHigh: {
              title: '成本高',
              description: '完整LCA/EPD需要<br/>几千到几万美金<br/><br/>'
            },
            cycleLong: {
              title: '周期长',
              description: 'PCF1-3个月<br/>EPD 3-6个月<br/>容易超期且不可靠'
            },
            barrierHigh: {
              title: '门槛高',
              description: '标准法规多头<br/>法规动态更新变化快<br/>需要懂方法+懂交付专家参与'
            },
            supplyChainPressure: {
              title: '供应链压力大',
              description: '品牌方供应链管理压力大<br/>(覆盖67%Scope 3)<br/>供应商碳基础差（外采服务成本高）<br/>供应商数据质量/可信度差'
            },
            hiddenCost: {
              title: '隐形成本',
              description: '(CBAM)<br/>用默认值成本高<br/>容易漏报和错报-罚款<br/>逐年增加需要评估预算'
            },
            rework: {
              title: '反复返工',
              description: '数据口径与核查机构偏差<br/>出现数据缺漏或者口径不一致<br/>重复打回和修改'
            }
          },
          solution: {
            costReduction: {
              title: '↓99%',
              description: '成本（百元级）<br/>周期（小时级）'
            },
            zeroBarrier: {
              title: '0门槛',
              description: '专家级碳顾问全程引导<br/>无需专业背景'
            },
            preValidation: {
              title: '预核验',
              description: '专家级预先核验<br/>拒绝返工&隐形成本'
            }
          }
        },
        ourSolution: {
          title: '我们能为您提供什么？\n我们提供的方案',
          zeroBarrier: {
            title: '0门槛',
            description: '专家级碳顾问和认证顾问全程引导/无需专业背景'
          },
          lowCost: {
            title: '成本(百元) / 周期(小时)',
            description: '99%'
          },
          preValidation: {
            title: '专家级"预核验"',
            description: '拒绝返工/隐形成本'
          }
        }
      },
      comparison: {
        title: '与传统方式对比',
        subtitle: '为什么选择Climate Seal AI？'
      },
      valueForUser: {
        title: '用户与企业价值',
        subtitle: '选择合适的方案开始您的碳足迹之旅'
      },
      aboutUs: {
        title: '关于我们',
        subtitle1: '低成本获得可信度',
        subtitle2: '低成本使用信用',
        subtitle3: '留出更多时间和预算用于',
        highlightText: '脱碳化'
      },
      pricing: {
        title: '价格方案',
        subtitle: '选择合适的方案开始您的碳足迹之旅',
        plans: {
          free: {
            title: '免费开始',
            description: '适合先用一个简单产品碳足迹工作流试用 Climate Seal，再决定是否继续',
            price: '有限报告点数',
            features: ['包含有限点数，可完成一个简单 PCF 工作流', '适合测试数据准备度、报告结构和流程适配方式', '所有试用都需要先与团队沟通'],
            button: '联系销售'
          },
          standard: {
            title: '专业版',
            description: '适合顾问、专家和小团队用 AI 持续交付碳核算工作',
            price: '$99 / 月起',
            features: ['访问完整 Climate Seal 核算工作流，支持多种法规、标准和方法学', '价格基于 token / credit 使用量，可按实际项目量扩展', '适合提升交付能力并减少人工负担'],
            button: '联系销售'
          },
          enterprise: {
            title: '企业版',
            description: '适合管理产品、供应商、业务单元或合规项目碳数据的企业',
            price: '定制',
            features: ['面向供应商管理、内部数据治理、多产品报告和跨团队复核', '包含供应商数据收集、自定义因子库、审批控制、追溯包和可复用产品数据模型', '适合需要长期碳合规操作系统，而不只是单份报告的企业'],
            button: '联系销售'
          }
        }
      },
      value: {
        cards: {
          cost: {
            title: '将报告成本降至约1%',
            subtitle: '成本降低',
            description: '面向财务与可持续团队：每份可信报告低于70美元'
          },
          time: {
            title: '从数月到数小时',
            subtitle: '时间节省',
            description: '面向运营团队：将多月周期压缩到小时级'
          },
          barrier: {
            title: '零经验要求',
            subtitle: '零门槛',
            description: '面向任何角色：在引导下生成一致可信的结果'
          },
          trusted: {
            title: '验证级可信度',
            subtitle: '审计就绪',
            description: '面向合规与买方：附证据链的可审计输出'
          }
        }
      },
      moreInfo: '获取更多信息'
    },
    features: {
      card1: {
        title: '自动法规匹配与LCA构建',
        description: '输入产品名称和销售地区，引擎获取最新的EU电池法规2023/1542和ISO 14067要求，然后在30秒内生成合规边界和基础LCA。',
        detail: '消除90%的法规研究工作量，提供多标准就绪模型，轻松通过审计和客户审查。'
      },
      card2: {
        title: 'BOM秒级解析',
        description: '拖放Excel或ERP BOM，系统立即提取层次结构、数量和材料——无需逐行输入。',
        detail: '数千零件的装配在几分钟内即可准备计算，工程、财务和碳排放团队可基于同一结构化表格工作。'
      },
      card3: {
        title: '智能排放因子匹配',
        description: '引擎实时匹配BOM行项、能源和物流数据与ecoinvent等数据库，返回最优因子和来源。',
        detail: '节省数周的手动查找时间，完全可追溯的因子可即时通过审计或客户抽查。'
      },
      card4: {
        title: '质量与风险分析',
        description: '一键构建数据质量雷达图、±95%蒙特卡洛区间和热力图，标记高影响、低质量项目——汇总整体信任评分。',
        detail: '团队可看到驱动80%不确定性的关键20%输入，量化的置信区间为投资者、审计师和保险公司提供可靠的风险指标。'
      },
      card5: {
        title: '端到端定制服务',
        description: '供应链模块批量邀请2/3级供应商，让AI自动计算其碳足迹，并与SAP Green Ledger、Oracle NetSuite等ERP/SRM套件双向同步。经信用评分的高质量数据可打包为碳资产并关联金融合作伙伴。',
        detail: '供应商能以通常成本的1%创建审计级报告，只共享最终数字以保持安全；品牌获得高信任度结果并将供应链碳管理成本削减90%+。经信贷审核的数据可货币化为碳资产或绿色贷款抵押品，提前释放气候价值。'
      }
    },
    comparison: {
      title: 'Climate Seal的优势',
      subtitle: '从数月到数小时，从昂贵到实惠',
      consultant: {
        title: 'Carbon 软件 + 专家',
        time: '1-2个月',
        steps: '11个步骤',
        stepList: [
          '用户培训',
          '建立计算模型',
          '查阅文档与法规口径映射',
          '手工因子匹配',
          '数据收集清单',
          '提交核验机构',
          '数据结构化与清洗',
          '预审问题清单',
          '手动补齐数据缺口',
          '补充修正',
          '核验与出具证明'
        ]
      },
      traditional: {
        title: '传统方法',
        time: '3-6个月',
        steps: '12个步骤',
        cost: '5-10万美元',
        team: '3-5名专家',
        stepList: [
          '启动会议',
          '团队培训',
          '数据收集',
          '数据清理',
          '缺口分析',
          '模型构建',
          '因子匹配',
          '计算过程',
          '报告草案',
          '审查流程',
          '修正工作',
          '最终认证'
        ]
      },
      aiAgent: {
        title: 'Climate Seal AI Agent Platform',
        time: '4小时',
        steps: '4个步骤',
        cost: '100美元',
        team: '只需你',
        stepList: [
          '上传BOM数据',
          'AI自动处理',
          '审查确认',
          '获得认证报告'
        ]
      },
      savings: {
        costReduction: '99%',
        timeReduction: '95%',
        expertiseRequired: '0'
      }
    },
    contact: {
      title: '联系我们',
      subtitle: '获取您的第一份核验级报告。预约与我们团队的通话，了解碳核算可以多么简单。',
      description: '联系我们的团队',
      form: {
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        company: '公司名称',
        industry: '行业',
        message: '留言',
        submit: '发送消息',
        submitting: '发送中...',
        privacyDisclaimer: '*我向 Climate Seal 披露我的信息。我已阅读并同意 Climate Seal 的隐私政策',
        placeholder: {
          name: '请输入您的姓名',
          email: '请输入您的邮箱',
          phone: '请输入您的电话号码',
          company: '请输入公司名称',
          industry: '请选择您的行业',
          message: '请描述您的需求或问题'
        },
        industries: {
          automotive: '汽车制造业',
          electronics: '电子电器',
          textiles: '纺织服装',
          chemicals: '化工化学',
          foodBeverage: '食品饮料',
          construction: '建筑建材',
          metals: '钢铁金属',
          plastics: '塑料橡胶',
          packaging: '包装印刷',
          pharmaceuticals: '医药医疗',
          energy: '能源电力',
          manufacturing: '机械制造',
          furniture: '家具家居',
          cosmetics: '美妆个护',
          toys: '玩具用品',
          agriculture: '农业食品',
          transportation: '交通运输',
          retail: '零售贸易',
          other: '其他'
        }
      },
      messages: {
        success: '消息发送成功！我们会尽快回复您。',
        error: '发送失败，请稍后重试或直接发送邮件至 xuguang.ma@climate-seal.net',
        validation: '请填写所有必需字段'
      }
    },
    footer: {
      description: 'AI驱动的碳核算平台，为可持续商业解决方案提供支持。',
      quickLinks: '快速链接',
      contact: '联系方式',
      followUs: '关注我们',
      copyright: '© 2024 Climate Seal. 保留所有权利。',
      privacyPolicy: '隐私政策'
    },
    pages: {
      about: {
        title: '关于Climate Seal',
        content: '关于页面内容正在建设中...'
      },
      products: {
        title: '我们的产品',
        content: '产品页面内容正在建设中...'
      },
      pricing: {
        title: '价格方案',
        content: '价格页面内容正在建设中...'
      }
    },
    privacy: {
      title: '隐私政策',
      subtitle: '您的隐私对我们很重要',
      backToHome: '返回首页',
      lastUpdated: '最后更新',
      updateDate: '2024年12月',
      sections: {
        introduction: {
          title: '1. 简介',
          content: 'Climate Seal（"我们"、"我们的"或"本公司"）致力于保护您的隐私。本隐私政策说明了当您访问我们的网站并使用我们的碳足迹服务时，我们如何收集、使用、披露和保护您的信息。'
        },
        dataCollection: {
          title: '2. 我们收集的信息',
          personalInfo: '个人信息',
          items: {
            name: '姓名和联系信息',
            email: '电子邮件地址',
            company: '公司信息',
            usage: '使用数据和分析信息'
          }
        },
        dataUsage: {
          title: '3. 我们如何使用您的信息',
          items: {
            service: '提供和维护我们的服务',
            communication: '就我们的服务与您沟通',
            improvement: '改进我们的网站和服务',
            legal: '遵守法律义务'
          }
        },
        dataSharing: {
          title: '4. 信息共享',
          content: '未经您同意，我们不会向第三方出售、交易或以其他方式转让您的个人信息，除非本政策中所述或法律要求。'
        },
        security: {
          title: '5. 数据安全',
          content: '我们实施适当的安全措施来保护您的个人信息免受未经授权的访问、更改、披露或破坏。'
        },
        rights: {
          title: '6. 您的权利',
          intro: '您有权：',
          items: {
            access: '访问您的个人信息',
            correct: '更正不准确的信息',
            delete: '要求删除您的信息',
            portability: '数据可携性'
          }
        },
        contact: {
          title: '7. 联系我们',
          content: '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：'
        }
      }
    }
    ,
    faq: {
      title: '关于 Climate Seal 的常见问题',
      seo: {
        title: '碳核算软件常见问题 | Climate Seal',
        description: '了解 Climate Seal 如何支持 AI 产品碳足迹、Scope 1–3 核算、CBAM 报告、供应商数据处理、排放因子匹配和可审核的碳报告。',
        indexable: true,
      },
      groups: [
        {
          name: '开始使用',
          items: [
            {
              q: 'Climate Seal 是做什么的，与传统咨询有什么不同？',
              a: [
                'Climate Seal 是一个 AI 驱动的碳管理工作台，支持组织、产品、项目和供应链层面的核算与合规工作流程。它将专业方法和法规要求转化为结构化、可重复使用的工作流程，同时让专家保留对方法、复核和最终审批的控制权。'
              ]
            },
            {
              q: '如何开始使用 Climate Seal？',
              a: [
                '选择所需的碳核算或合规工作流程，并提供组织、产品、项目、报告目标和适用要求等基本信息。Climate Seal 会通过引导式问题识别最低数据与文件要求。上传现有文件后，平台会整理数据、识别缺口、搭建核算模型，并准备计算结果和可追溯的报告草稿，供专家复核。'
              ]
            },
            {
              q: 'Climate Seal 适合哪些用户？',
              a: [
                'Climate Seal 适合可持续发展团队、碳咨询顾问、LCA 专业人员、制造商、出口企业、品牌方、采购团队，以及需要管理跨产品、供应商、项目或业务单元碳数据的组织。'
              ]
            },
            {
              q: '多快能生成首份产品碳足迹报告？',
              a: [
                '对于数据较完整的标准产品，Climate Seal 通常可在 2–4 小时内完成文件解析、模型搭建和计算，并生成首份报告草稿。如适用要求需要更多证据，或必须解决数据缺失、不一致或含义不清等问题，所需时间可能更长。'
              ]
            }
          ]
        },
        {
          name: '标准与合规',
          items: [
            {
              q: 'Climate Seal 支持哪些碳核算标准和法规工作流程？',
              a: [
                'Climate Seal 支持可配置的产品、组织、项目和供应链碳核算工作流程，包括 ISO 14067、ISO 14064、GHG Protocol、CBAM，以及针对 EPD、PEF 和数字产品护照要求的数据准备。每个项目的适用要求应根据所在司法管辖区和报告项目进行确认。'
              ]
            },
            {
              q: 'Climate Seal 能否按照 ISO 14067 和 GHG Protocol 计算产品碳足迹？',
              a: [
                'Climate Seal 帮助团队准备与 ISO 14067 和 GHG Protocol Product Standard 对齐的产品碳足迹计算与文件。平台会结构化系统边界、功能单位、活动数据、排放因子、分配方法、假设、计算和证据，供专业人员复核。'
              ]
            },
            {
              q: 'Climate Seal 是否支持 Scope 1、Scope 2 和 Scope 3 核算？',
              a: [
                '支持。Climate Seal 可支持覆盖 Scope 1、Scope 2 和相关 Scope 3 类别的组织温室气体核算工作流程。平台帮助整理活动数据、定义计算方法、选择排放因子、记录假设，并保留可追溯的计算记录。'
              ]
            },
            {
              q: 'Climate Seal 如何支持 CBAM 报告？',
              a: [
                'Climate Seal 帮助整理产品和生产数据、计算相关嵌入排放、记录排放因子与方法、识别缺失证据，并准备供复核的结构化输出。最终 CBAM 责任和申报仍由授权 CBAM 申报人及相关专业顾问承担。'
              ]
            }
          ]
        },
        {
          name: '数据与 AI 工作流程',
          items: [
            {
              q: '我需要提供哪些数据？',
              a: [
                '所需数据取决于所选标准、法规、产品和系统边界。常见输入包括 BOM、产品规格、能源记录、采购数据、运输信息、供应商文件、工艺数据、发票和支撑证据。Climate Seal 会识别每个工作流程的最低要求。'
              ]
            },
            {
              q: 'Climate Seal 如何处理 BOM 和供应商文件？',
              a: [
                'Climate Seal 从电子表格、PDF、规格文件和支撑材料中提取与碳核算相关的信息。平台将材料、数量、单位、供应商、地点、能源使用、运输和证据整理为结构化项目数据，同时保留源记录供复核。'
              ]
            },
            {
              q: '排放因子是如何选择和复核的？',
              a: [
                'Climate Seal 会结合材料、工艺、地理位置、技术、报告期、标准和数据库来源等上下文建议排放因子。每个建议可包含因子来源、选择理由、匹配质量、风险等级和复核状态。专家可以复核、替换或批准因子。'
              ]
            },
            {
              q: '碳数据不完整时怎么办？',
              a: [
                'Climate Seal 会标记缺失、不一致或含义不清的信息，并生成澄清问题或数据请求。如适用方法允许使用假设或默认值，平台会同时记录其局限性和风险。平台不会将不确定数据视为已确认证据。'
              ]
            }
          ]
        },
        {
          name: '复核与交付',
          items: [
            {
              q: 'Climate Seal 的结果能否接受独立核验？',
              a: [
                'Climate Seal 会整理结构化计算、因子记录、假设、数据质量信号和支撑证据，从而帮助第三方审查更高效。Climate Seal 不提供独立鉴证或认证。最终核验应由具备相应资质的独立机构完成。'
              ]
            },
            {
              q: '审计底稿包含哪些内容？',
              a: [
                '审计底稿记录源数据、换算、排放因子、选择理由、公式、假设、证据、风险等级、结果和复核状态。它提供最终报告背后可追溯的工作记录，而不只是展示最终碳数值。'
              ]
            },
            {
              q: '可以生成哪些交付物和导出格式？',
              a: [
                'Climate Seal 可生成 PDF 报告草稿、结构化 CSV 和 JSON 导出，以及审计底稿包。输出也可根据客户指定的模板和格式进行调整，并可提供二维码便于分享和复用。这些交付物可支持 CBAM、PEF、EPD 和 DPP 工作流程，但仍需遵循适用要求并完成最终专业复核。'
              ]
            }
          ]
        },
        {
          name: '安全与价格',
          items: [
            {
              q: '我的数据归谁，如何受到保护？',
              a: [
                '客户数据和计算结果归客户所有。数据访问、保留、导出、删除、驻留和部署要求，可根据所选服务方案和协议进行安排。'
              ]
            },
            {
              q: '价格与试用如何安排？',
              a: [
                'Climate Seal 采用额度制计费模式，额度用量取决于每项任务所需的 AI 处理量。月度订阅起步为 200 个额度，如有需要可购买额外额度。我们提供一份免费试用报告。请联系我们，了解试用方式并选择适合您工作流程的方案。'
              ]
            }
          ]
        }
      ]
    }
  }
};

// 默认语言
export const DEFAULT_LANGUAGE: Language = 'en';
