export const serviceGroups = [
  {
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
    id: "process",
    title: "Business process analysis",
    href: "/services/business-process-audit",
  },
  {
    id: "implementation",
    title: "Odoo Implementation",
    href: "/services/erp-implementation",
  },
  {
    id: "development",
    title: "Custom Odoo Development",
    href: "/services",
  },
  {
    id: "migration",
    title: "Data migration",
    href: "/services",
  },
  {
    id: "support",
    title: "Support & User Adoption",
    href: "/services",
  },
  {
    id: "api",
    title: "API development",
    href: "/services",
  },
  {
    id: "dashboard",
    title: "Custom Dashboarding",
    href: "/services",
  },
  {
    id: "accounting",
    title: "Accounting Optimization and migration",
    href: "/services/accounting-finance-reporting",
  },
] as const;

export const jobs = [
  {
    title: "Odoo Developer",
    location: "Belgium / Luxembourg · Hybrid",
    type: "Full-time",
  },
  {
    title: "ERP Consultant",
    location: "Belgium / Luxembourg · Hybrid",
    type: "Full-time",
  },
];
