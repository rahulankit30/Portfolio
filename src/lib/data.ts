import type {
  Project,
  Experience,
  Education,
  Award,
  SkillCategory,
  Stat,
  NavItem,
  SocialLink,
} from "@/types";

// ── Personal info ─────────────────────────────────────────────────────────────
export const personal = {
  name: "Rahul Ankit",
  title: "Full Stack Technical Lead",
  tagline: "Building scalable systems that matter",
  summary:
    "Full Stack Technical Lead with 8+ years of experience architecting distributed systems, leading cross-functional engineering teams, and shipping AI-driven product innovations. Currently owning end-to-end delivery at ABC Fitness, with a strong track record at Skillsoft, Temenos/Kony, and Cognizant. I bridge deep technical expertise with product thinking — turning complex problems into elegant, high-performance solutions.",
  email: "rahulankit.30@gmail.com",
  phone: "+91 8709687427",
  location: "Hyderabad, India",
  github: "https://github.com/rahulankit30",
  linkedin: "https://www.linkedin.com/in/rahul-ankit-304454152/",
  resumeUrl: "/resume.pdf",
};

// ── Navigation ────────────────────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ── Social links ──────────────────────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/rahulankit30",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-ankit-304454152/",
    icon: "linkedin",
  },
  {
    platform: "Email",
    href: "mailto:rahulankit.30@gmail.com",
    icon: "mail",
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "M+", label: "Events / Month", prefix: "" },
  { value: 200, suffix: "K+", label: "Active Members Served" },
  { value: 55, suffix: "%", label: "Page Load Reduction" },
];

// ── Skills ────────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "code-2",
    skills: [
      { name: "Java", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "HTML5", level: "expert" },
      { name: "CSS3", level: "expert" },
      { name: "SQL", level: "advanced" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "GraphQL", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    skills: [
      { name: "Spring Boot", level: "expert" },
      { name: "Spring Framework", level: "expert" },
      { name: "Spring Security", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "Microservices", level: "expert" },
      { name: "Feign Client", level: "advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases & Search",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "pgvector", level: "advanced" },
      { name: "MySQL", level: "expert" },
      { name: "Elasticsearch", level: "advanced" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: "brain",
    skills: [
      { name: "Generative AI", level: "advanced" },
      { name: "RAG", level: "advanced" },
      { name: "LLMs (Ollama)", level: "advanced" },
      { name: "Qwen2-VL", level: "advanced" },
      { name: "Prompt Engineering", level: "advanced" },
      { name: "Vector Embeddings", level: "advanced" },
      { name: "OpenAI", level: "advanced" },
      { name: "Amazon Q", level: "intermediate" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "AWS (IAM, Cognito, S3)", level: "advanced" },
      { name: "CloudFront / Cloudflare", level: "advanced" },
      { name: "Docker", level: "expert" },
      { name: "Kubernetes", level: "advanced" },
      { name: "GitHub Actions", level: "expert" },
      { name: "Harness", level: "intermediate" },
    ],
  },
  {
    id: "messaging",
    label: "Messaging",
    icon: "zap",
    skills: [
      { name: "Apache Kafka", level: "advanced" },
      { name: "RabbitMQ", level: "advanced" },
      { name: "Redpanda", level: "intermediate" },
      { name: "SMTP", level: "advanced" },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring & Observability",
    icon: "activity",
    skills: [
      { name: "Grafana", level: "advanced" },
      { name: "Prometheus", level: "advanced" },
      { name: "Kibana", level: "advanced" },
      { name: "New Relic", level: "advanced" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Security",
    icon: "wrench",
    skills: [
      { name: "SNYK", level: "intermediate" },
      { name: "Endor Labs", level: "intermediate" },
      { name: "Kony Visualizer", level: "advanced" },
      { name: "Kony Fabric", level: "advanced" },
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "documind",
    title: "DocuMind AI",
    description:
      "Full-stack AI document assistant with PDF Chat (RAG) and Image/PDF OCR — powered entirely by local models via Ollama with no API keys required.",
    longDescription:
      "DocuMind is an open-source, privacy-first AI document assistant I built to explore RAG architecture end-to-end. It supports two modes: PDF Chat (upload a PDF, ask questions in natural language using a full RAG pipeline) and Image/PDF OCR (extract structured text from scanned documents using a vision model). The entire system runs locally with Ollama — no API keys, no data leaves your machine.",
    tags: [
      "Spring Boot 3.4",
      "Spring AI 1.0.5",
      "React 19",
      "PostgreSQL",
      "pgvector",
      "Ollama",
      "Docker",
      "RAG",
      "LLM",
    ],
    category: ["AI/ML", "Backend", "Frontend"],
    github: "https://github.com/rahulankit30/docuMind",
    highlights: [
      "Implemented full RAG pipeline: PDF parsing → chunking → embedding (nomic-embed-text) → pgvector HNSW storage → cosine similarity retrieval → LLM answer generation (llama3.2)",
      "Built vision-powered OCR using Qwen2.5-VL model for extracting structured text from images and scanned PDFs",
      "Zero cloud dependency — entire inference stack runs locally via Ollama with Docker Compose",
      "Spring AI 1.0.5 integration for seamless model orchestration and vector store management",
      "HNSW indexing in pgvector for sub-millisecond nearest-neighbor search at scale",
    ],
    featured: true,
    isOSS: true,
    period: "2024",
  },
  {
    id: "gymsales",
    title: "GymSales Internal Platform",
    description:
      "Enterprise-grade internal operations platform for ABC Fitness, replacing Retool and enabling support teams to manage workflows autonomously.",
    longDescription:
      "Architected and built a full-stack internal tooling platform from scratch that replaced the company's dependency on Retool. The system provides a unified interface for support and operations teams to manage gym sales workflows, view member data, and take operational actions — all with proper authentication and role-based access control.",
    tags: ["React", "Spring Boot", "BFF Pattern", "Spring Security", "AWS Cognito", "Role-Based Access"],
    category: ["Frontend", "Backend", "Cloud"],
    highlights: [
      "Designed and implemented a full BFF (Backend for Frontend) architecture with React UI, BFF layer, and dedicated backend services",
      "Integrated AWS Cognito for authentication with granular role-based access control for different support tiers",
      "Reduced internal tool dependency by eliminating Retool licensing costs and improving operational productivity by 70%",
      "Built real-time data views for member management, issue tracking, and operational reporting",
      "Implemented audit trails and secure action logging for compliance requirements",
    ],
    company: "ABC Fitness",
    period: "2025 – Present",
  },
  {
    id: "ai-gym-recommendations",
    title: "AI Gym Plan Recommendation Engine",
    description:
      "AI-powered personalized workout plan recommendation system integrated into the member-facing application at ABC Fitness.",
    longDescription:
      "Pioneered the integration of AI models into the member application to deliver personalized gym plan recommendations. The system analyzes member history, fitness goals, and behavior patterns to surface relevant workout plans, driving significant improvements in engagement and plan adoption rates.",
    tags: ["Generative AI", "Spring Boot", "React", "Prompt Engineering", "REST APIs", "AWS"],
    category: ["AI/ML", "Backend", "Frontend"],
    highlights: [
      "Increased user engagement by 35% and personalized workout adoption by 48% within 3 months of launch",
      "Designed a prompt engineering framework for consistent, personalized recommendation quality across 200K+ members",
      "Built a feedback loop mechanism to continuously improve recommendation relevance based on member interactions",
      "Integrated with existing member profile APIs with zero disruption to the production system",
      "Implemented A/B testing infrastructure to validate recommendation model improvements",
    ],
    company: "ABC Fitness",
    period: "2025 – Present",
  },
  {
    id: "slack-analytics-bot",
    title: "AI-Powered Slack Analytics Bot",
    description:
      "Natural-language Slack bot delivering real-time engineering team metrics, sprint velocity, and performance insights without manual reporting.",
    longDescription:
      "Built a proof-of-concept AI-driven Slack bot that gives engineering teams instant access to sprint metrics, team velocity, blockers, and performance analytics in plain English. The bot connects to internal data sources and translates queries into actionable team insights, dramatically reducing the manual reporting effort that previously consumed significant engineering time.",
    tags: ["Generative AI", "Slack API", "Spring Boot", "Prompt Engineering", "REST APIs"],
    category: ["AI/ML", "Backend"],
    highlights: [
      "Reduced manual team reporting effort by 70% by automating sprint and performance data delivery",
      "Natural language query interface — ask 'What's blocking the team this sprint?' and get structured answers",
      "Real-time integration with Jira and internal metrics APIs for always-current data",
      "Built secure OAuth-based Slack app with proper permission scoping and team workspace management",
      "Designed as a PoC that demonstrated clear ROI, advancing internal AI adoption strategy",
    ],
    company: "ABC Fitness",
    period: "2025",
  },
  {
    id: "percipio-notifications",
    title: "Percipio Notification Platform",
    description:
      "High-scale notification infrastructure processing 100M+ events/month at Skillsoft, built on Kafka, RabbitMQ, and Redpanda.",
    longDescription:
      "Core member of the Percipio Notification Team at Skillsoft, responsible for designing and scaling the notification infrastructure that powers learning engagement for millions of users globally. The platform handles email, push, and in-app notifications at massive scale with high reliability and observability.",
    tags: [
      "Apache Kafka",
      "RabbitMQ",
      "Redpanda",
      "Spring Boot",
      "Kubernetes",
      "Grafana",
      "Prometheus",
      "New Relic",
      "OpenAI",
    ],
    category: ["Backend", "Cloud", "AI/ML"],
    highlights: [
      "Built and maintained a scalable notification platform processing over 100M events/month with 30% improved deliverability",
      "Integrated Kafka, RabbitMQ, and Redpanda for real-time distributed event processing, improving system responsiveness by 45%",
      "Optimized Kubernetes-managed services with Prometheus + Grafana, reducing downtime and increasing throughput by 35%",
      "Enhanced observability with Grafana, Kibana, and New Relic dashboards, reducing incident MTTR by 40%+",
      "Implemented AI-powered smart notification templates using OpenAI and Amazon Q, cutting manual template effort by 60%",
    ],
    company: "Skillsoft",
    period: "2022 – 2025",
  },
  {
    id: "digital-banking",
    title: "Digital Banking Suite",
    description:
      "Multi-tier digital banking applications for Retail, SME, and Corporate users at Temenos — including KYC, loan journeys, and T24 core banking integration.",
    longDescription:
      "Developed a comprehensive digital banking application suite for three distinct user segments — Retail, SME, and Corporate. The platform handles the complete digital banking lifecycle including customer onboarding (KYC), loan applications, account management, and real-time banking service integrations with the T24 Core Banking System.",
    tags: ["Kony Visualizer", "Kony Fabric", "Java", "Docker", "Kubernetes", "T24 Core Banking", "REST APIs"],
    category: ["Frontend", "Backend"],
    highlights: [
      "Built KYC and loan journey features for Retail, SME, and Corporate banking customers",
      "Integrated with T24 Core Banking System for real-time account creation and banking service flows",
      "Refactored monolithic apps into containerized microservices using Docker and Kubernetes, improving performance and uptime",
      "Collaborated closely with product owners using Kony Visualizer and Kony Fabric development platforms",
      "Delivered regulatory-compliant banking flows meeting BFSI industry standards",
    ],
    company: "Temenos / Kony",
    period: "2021 – 2022",
  },
  {
    id: "kpi-dashboard",
    title: "Real-Time KPI Dashboard",
    description:
      "Live operational dashboard for tracking club-level KPIs across NMU, cancellations, and appointments at ABC Fitness.",
    longDescription:
      "Designed and built a real-time dashboard that surfaces key performance indicators at the individual club level across ABC Fitness's network of gym locations. The system aggregates data from multiple service providers and presents it in a unified, actionable interface that enables operations teams to make faster, better-informed decisions.",
    tags: ["React", "Spring Boot", "REST APIs", "Real-time", "Data Visualization", "AWS"],
    category: ["Frontend", "Backend"],
    highlights: [
      "Tracks NMU (New Member Units), cancellations, and appointment metrics across multiple service providers",
      "Real-time data aggregation from disparate backend systems into a single unified operational view",
      "Enables club managers and ops teams to identify performance gaps and act within the same business day",
      "Highly configurable — club managers can filter by region, club, time range, and KPI category",
      "Integrated alerting for anomalous KPI movements, enabling proactive intervention",
    ],
    company: "ABC Fitness",
    period: "2025 – Present",
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "abc-fitness",
    title: "Senior Software Engineer (TL) — Ignite Product",
    company: "ABC Fitness",
    period: "June 2025 – Present",
    location: "Hyderabad, India",
    description:
      "Leading the Ignite Product team in the member experience space. Responsible for architecture decisions, end-to-end delivery, and driving AI-powered product innovation across a platform serving 200K+ active members.",
    highlights: [
      "Led cross-functional team managing the Member Experience application — resolved 50+ critical production issues, improving performance by 40%",
      "Spearheaded migration from legacy JSP to React, reducing page load times by 55% for 200K+ active members",
      "Migrated 5+ microservices from Jenkins to GitHub Actions, reducing deployment time by 60% and increasing release frequency 3×",
      "Pioneered AI-powered gym plan recommendation system, increasing user engagement by 35% and workout adoption by 48%",
      "Built AI-driven Slack analytics bot delivering real-time sprint and team metrics, cutting manual reporting effort by 70%",
      "Architected GymSales internal platform (UI + BFF + backend), replacing Retool and improving internal productivity by 70%",
      "Led CloudFront to Cloudflare migration, enabling advanced bot protection and improving caching efficiency",
      "Designed real-time KPI dashboard tracking NMU, cancellations, and appointments across multiple service providers",
    ],
    tags: ["React", "Spring Boot", "GitHub Actions", "Kubernetes", "AWS", "Cloudflare", "Generative AI", "Kafka"],
    current: true,
  },
  {
    id: "skillsoft",
    title: "Senior Software Engineer — Percipio Product",
    company: "Skillsoft",
    period: "June 2022 – June 2025",
    location: "Hyderabad, India",
    description:
      "Part of the Percipio Notification Team, designing and operating the scalable notification infrastructure used by millions of learners globally. Focused on reliability, performance, and AI-powered automation.",
    highlights: [
      "Built notification platform processing 100M+ events/month, improving deliverability by 30%",
      "Integrated Kafka, RabbitMQ, and Redpanda for real-time distributed processing, improving responsiveness by 45%",
      "Optimized services using Kubernetes, Prometheus, and Grafana, reducing downtime and increasing throughput by 35%",
      "Enhanced monitoring with Grafana, Kibana, and New Relic, reducing incident MTTR by 40%+",
      "Implemented AI-powered smart notification templates using OpenAI and Amazon Q, reducing manual effort by 60%",
      "Won Continuous Spot Award for the Leaderboard feature shipped on the Percipio platform",
    ],
    tags: ["Kafka", "RabbitMQ", "Redpanda", "Spring Boot", "Kubernetes", "Prometheus", "Grafana", "New Relic", "OpenAI"],
  },
  {
    id: "temenos",
    title: "Software Development Engineer — Infinity Product",
    company: "Temenos / Kony",
    period: "Feb 2021 – June 2022",
    location: "Hyderabad, India",
    description:
      "Developed digital banking applications for Retail, SME, and Corporate banking customers. Built core banking integrations, KYC flows, and containerized the platform for improved reliability.",
    highlights: [
      "Developed digital banking apps for Retail, SME, and Corporate users including KYC and loan journey features",
      "Integrated with T24 Core Banking System for real-time account creation and banking service flows",
      "Refactored monolithic apps into containerized microservices using Docker and Kubernetes",
      "Improved platform performance and uptime through architectural modernization",
      "Won PAT on the Back Award for Infinity App performance improvement",
    ],
    tags: ["Kony Visualizer", "Kony Fabric", "Java", "Docker", "Kubernetes", "REST APIs", "T24"],
  },
  {
    id: "cognizant",
    title: "Programmer Analyst",
    company: "Cognizant",
    period: "Aug 2018 – Feb 2021",
    location: "Kolkata, India",
    description:
      "Delivered software solutions for pharmaceutical clients including Bayer and Sanofi. Built and maintained sample management applications across a full-stack Java and React ecosystem.",
    highlights: [
      "Developed Sample Management Applications for top pharmaceutical clients Bayer and Sanofi",
      "Built full-stack solutions using Java, Spring Boot, React, and SQL",
      "Implemented front-end features using HTML, CSS, and JavaScript",
      "Drove efficiency and innovation in pharmaceutical sample tracking workflows",
      "Won Proactive Impact Award for ownership, initiative, and strong team collaboration",
    ],
    tags: ["Java", "Spring Boot", "React", "SQL", "HTML", "CSS", "Struts"],
  },
];

// ── Education ─────────────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology — Electronics and Communication Engineering",
    institution: "Techno India Salt Lake",
    period: "Aug 2014 – June 2018",
    location: "Kolkata, India",
    score: "8.24",
    scoreLabel: "GPA",
    highlights: [
      "Strong foundation in electronics, signals, and communications systems",
      "Applied programming in C, C++, and embedded systems projects",
    ],
  },
  {
    id: "intermediate",
    degree: "Intermediate (CBSE — Science)",
    institution: "Chinmaya Vidyalaya",
    period: "Aug 2012 – June 2014",
    location: "Bokaro, India",
    score: "87.8%",
    scoreLabel: "Percentage",
  },
];

// ── Awards ────────────────────────────────────────────────────────────────────
export const awards: Award[] = [
  {
    id: "proactive",
    title: "Proactive Impact Award",
    description:
      "Recognized for exceptional ownership, initiative, and strong cross-functional team collaboration at Cognizant.",
    company: "Cognizant",
    icon: "star",
  },
  {
    id: "spot",
    title: "Continuous Spot Award",
    description:
      "Winner for outstanding contribution to the Leaderboard feature in the Percipio learning platform at Skillsoft.",
    company: "Skillsoft",
    icon: "trophy",
  },
  {
    id: "pat",
    title: "PAT on the Back Award",
    description:
      "Awarded for significant performance improvements delivered to the Infinity banking application at Temenos/Kony.",
    company: "Temenos / Kony",
    icon: "award",
  },
];
