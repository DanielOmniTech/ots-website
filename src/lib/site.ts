export const site = {
  name: "Omni Tech Solutions",
  shortName: "OTS",
  title: "Omni Tech Solutions - Odoo Partner In Belgium and Luxembourg",
  description:
    "Odoo implementation, customization, and ERP consulting for businesses in Belgium and Luxembourg. Engineering meets business.",
  portal: "https://portal.omnitechsolutions.eu/nl/web/login",
  bookDemo: "https://portal.omnitechsolutions.eu/book/086557a7",
  email: "info@omnitechsolutions.eu",
  linkedin: "https://www.linkedin.com/company/omni-tech-solutions-bv/",
  facebook:
    "https://www.facebook.com/people/Omni-Tech-Solutions-BV/61555464762476/",
  offices: [
    {
      label: "Antwerp (BE)",
      lines: ["Jan vanhoenackerstraat 16", "2000 Antwerpen"],
    },
    {
      label: "Bertrange (LU)",
      lines: ["8 Rue des Mérovingiens", "L-8070 Bertrange"],
    },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#implementation", label: "Implementation" },
      { href: "/services#development", label: "Development" },
      { href: "/services#migration", label: "Migration" },
      { href: "/services#training", label: "Training" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
] as const;

export const odooApps = [
  {
    title: "Website Builder",
    description:
      "Create stunning websites with drag-and-drop functionality and professional templates.",
    image: "/images/app-website.png",
  },
  {
    title: "eCommerce",
    description:
      "Build powerful online stores with integrated payment processing and inventory management.",
    image: "/images/app-ecommerce.png",
  },
  {
    title: "Blog",
    description:
      "Engage your audience with powerful blogging tools and SEO optimization features.",
    image: "/images/app-blog.png",
  },
  {
    title: "E-learning",
    description:
      "Manage and publish online courses effortlessly, and track learner progress all within Odoo.",
    image: "/images/app-elearning.png",
  },
  {
    title: "Forum",
    description:
      "Manage a Q&A or community forum to support visitors, build engagement and collect feedback.",
    image: "/images/app-forum.png",
  },
  {
    title: "Livechat",
    description:
      "Chat in real time with your website visitors to answer questions or convert opportunities.",
    image: "/images/app-livechat.png",
  },
] as const;

export const homeServices = [
  {
    title: "Odoo Implementation",
    description:
      "Full-cycle implementation: requirement gathering, setup, configuration, deployment.",
  },
  {
    title: "Odoo Migration",
    description:
      "Migrating from legacy systems or older Odoo versions to the latest.",
  },
  {
    title: "Odoo Customization",
    description:
      "Custom modules tailored to specific client workflows and industries.",
  },
  {
    title: "Odoo Training & Support",
    description: "Post-deployment support, internal training, documentation.",
  },
] as const;

export const coreServices = [
  {
    id: "implementation",
    title: "Implementation",
    cta: "Implement Now",
    paragraphs: [
      "We'll analyze your business processes and set up a personalized Odoo environment, digitizing your business processes.",
      "This includes building your new website, setting up your billing methods, CRM, planning, inventory, accountancy.",
      "In a nutshell, all your business needs will be implemented in your Odoo system.",
    ],
  },
  {
    id: "development",
    title: "Development",
    cta: "Develop Now",
    paragraphs: [
      "Looking to integrate functionalities beyond the standard offerings in Odoo?",
      "Our seasoned engineers specialise in tailoring existing Odoo apps and developing entirely new, custom applications that align perfectly with your unique business requirements.",
      "Looking to integrate other software with Odoo via the REST API or any other API method? Our team has the expertise to design and implement seamless, reliable integrations tailored to your business needs.",
    ],
  },
  {
    id: "migration",
    title: "Migration",
    cta: "Migrate Now",
    paragraphs: [
      "If you're currently using a different ERP or Business system, rest assured, we excel in seamlessly migrating all your data from your existing system to your new Odoo platform! Worried about migrating your accounting setup? Our consultants are experienced in accounting data migrations and work closely with multiple accounting partners to ensure a smooth and successful transition.",
      "Additionally, if your data is currently stored in Excel or text files, we have the expertise to efficiently migrate it to Odoo, ensuring a smooth transition and continuity of your operations.",
    ],
  },
  {
    id: "training",
    title: "Training",
    cta: "Get Trained Now",
    paragraphs: [
      "We not only set up your ideal Odoo system but also train all your employees in its usage!",
      "We believe that for any system transition to succeed, it’s essential that everyone in your company is on board. That’s why we make sure your entire team is fully trained to use — and love — Odoo, so your business efficiency can reach its full potential.",
      "Trainings can be given in person, online, or through personalised tutorial videos.",
    ],
  },
] as const;

export const jobs = [
  {
    title: "Senior Odoo Developer",
    tags: ["Python", "Odoo framework"],
    meta: ["Full Time", "Remote", "3+ Years"],
    description:
      "Lead complex Odoo customizations and develop tailored solutions for business-critical systems.",
  },
  {
    title: "Solutions Architect",
    tags: ["ERP Consulting", "Odoo Certified", "Project Management"],
    meta: ["Full Time", "On-Site/Remote", "3+ Years"],
    description:
      "As an Odoo Solutions Architect, you will design the overarching digitalization architecture, leveraging your deep understanding of both Odoo’s full-stack development and its core functional side. You will take full ownership of Odoo implementation projects, acting as the single point of contact (SPOC) for clients. From initial analysis and planning to configuration, rollout, and follow-up, you will guide both clients and internal teams to ensure every project is delivered on time, on budget, and in line with business goals.",
  },
  {
    title: "ERP Consultant",
    tags: ["ERP Consulting", "Odoo Certified"],
    meta: ["Full Time", "On-Site/Remote", "2+ Years"],
    description:
      "Help businesses digitalize and optimize their operations. You’ll analyze workflows, configure Odoo to match client needs, and guide them from setup to success.",
  },
] as const;
