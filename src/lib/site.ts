export const serviceGroups = [
  {
    id: "odoo" as const,
    title: "Odoo Services",
    items: [
      {
        href: "/services/erp-implementation",
        label: "ERP Implementation",
      },
      {
        href: "/services/business-process-audit",
        label: "Business Process Audit",
      },
      {
        href: "/services/accounting-finance-reporting",
        label: "Accounting & Finance Reporting",
      },
    ],
  },
  {
    id: "industry" as const,
    title: "Industry Verticals",
    items: [
      {
        href: "/services/real-estate",
        label: "Real Estate",
        description: "Turn Odoo into a real estate ERP",
      },
    ],
  },
] as const;

export const homeServices = [
  {
    id: "implementation",
    title: "Odoo Implementation",
    href: "/services/erp-implementation",
  },
  {
    id: "process",
    title: "Business Process Analysis",
    href: "/services/business-process-audit",
  },
  {
    id: "migration",
    title: "Data Migration",
    href: "/services",
  },
  {
    id: "development",
    title: "Custom Development",
    href: "/services",
  },
  {
    id: "api",
    title: "API Connections",
    href: "/services",
  },
  {
    id: "accounting",
    title: "Accounting setup & migration",
    href: "/services/accounting-finance-reporting",
  },
] as const;

export const jobs = [
  {
    id: "developer" as const,
    title: "Odoo Developer",
    location: "Belgium / Luxembourg · Hybrid",
    type: "Full-time",
  },
  {
    id: "consultant" as const,
    title: "ERP Consultant",
    location: "Belgium / Luxembourg · Hybrid",
    type: "Full-time",
  },
];
