// Portfolio & CV Data for Soranut Sangroongruang (English Edition)
window.PORTFOLIO_DATA = {
  profile: {
    name: "Soranut Sangroongruang",
    shortName: "Soranut",
    title: "Software Engineer",
    roles: [
      "Software Engineer",
      "Backend & Microservices Specialist",
      "Full-Stack Developer (Java / Go / Python / Vue)",
      "DevOps & Security Practitioner"
    ],
    phone: "0840710405",
    email: "Soranut169@gmail.com",
    githubUrl: "https://github.com/c3b22",
    githubUser: "c3b22",
    linkedinUrl: "https://www.linkedin.com/in/soranut-sangroongruang-a1940a332/",
    location: "Bangkok, Thailand",
    education: {
      university: "King Mongkut's University of Technology Thonburi (KMUTT)",
      degree: "B.Sc. in Information Technology, School of Information Technology",
      period: "2022 – 2026 (Graduated)"
    },
    summary: "Information Technology graduate from KMUTT with a strong foundation in backend systems, scalable application development, and infrastructure management. Hands-on experience through internships in designing internal dashboards, building complex microservice architectures, and implementing security monitoring. Proficient in streamlining workflows through automation and DevOps practices, with a proven ability to bridge development, infrastructure, and quality assurance to deliver robust technical solutions.",
    stats: [
      { label: "Full-Stack Projects", value: "4" },
      { label: "Bank Developer Intern", value: "TTB Spark" },
      { label: "B.Sc. Information Technology", value: "KMUTT" },
      { label: "End-to-End Delivery", value: "Full Stack" }
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: [
        { name: "Java", desc: "Core Java, OOP, Streams, Concurrency & Spring Boot ecosystem" },
        { name: "Python", desc: "FastAPI microservices, EasyOCR, PyTorch, Scripting & Automation" },
        { name: "JavaScript", desc: "ES6+, React, Vue 3, Async REST APIs & Node.js" },
        { name: "SQL", desc: "PostgreSQL, MySQL, Complex Queries, Schema Design & Indexing" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "layout",
      items: [
        { name: "Spring Boot 3", desc: "Spring Security 6, JPA/Hibernate, Multi-Datasource, RESTful APIs" },
        { name: "FastAPI", desc: "High-concurrency async Python services, Image Processing APIs" },
        { name: "Vue.js 3", desc: "Vite, Composition API, Pinia, Vue Router 4, TailwindCSS & DaisyUI" },
        { name: "Mockito & JUnit 5", desc: "Unit & Integration Testing, Mocking, JaCoCo Coverage" }
      ]
    },
    {
      category: "Databases & Storage",
      icon: "database",
      items: [
        { name: "PostgreSQL", desc: "Relational Modeling, Query Optimization, Constraints & Transactions" },
        { name: "MySQL", desc: "Multi-Datasource Segregation, Data Integrity & Performance Indexing" },
        { name: "Redis", desc: "In-Memory Caching, OTP Email Verification & Session Storage" },
        { name: "MinIO", desc: "S3 Compatible Object Storage for Image Slips & Blobs" }
      ]
    },
    {
      category: "Tools, DevOps & Security",
      icon: "terminal",
      items: [
        { name: "Docker & Compose", desc: "Multi-container orchestration, Isolated container networking" },
        { name: "Git & Bitbucket / Jira", desc: "Version control, Agile sprint management & Code reviews" },
        { name: "Automation & CI/CD", desc: "n8n Webhook Pipelines, Jenkins, Microsoft Power Automate" },
        { name: "Security & Auth", desc: "Stateless JWT, Argon2 Password Hashing & RBAC Controls" }
      ]
    }
  ],

  workExperience: [
    {
      company: "TMBThanachart Bank Public Company Limited",
      badge: "TTB spark academy",
      position: "Software Developer Intern",
      period: "January 2025 – July 2025",
      location: "Bangkok, Thailand",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Bitbucket", "Jira", "Git"],
      highlights: [
        {
          title: "Internal Developer Portal",
          desc: "Developed and maintained a centralized internal dashboard to streamline microservice management and monitoring across the organization, featuring:",
          subItems: [
            "<strong>Service Registry:</strong> Aggregated quick information and deployment history for each microservice.",
            "<strong>Dependency Health Check:</strong> Implemented a feature to track outdated dependencies across services and recommend secure, up-to-date versions.",
            "<strong>Favorite Microservice:</strong> Added a bookmarking feature allowing developers to quickly access and monitor their preferred microservices.",
            "<strong>CVE & Release Comparison Report:</strong> Designed a security reporting tool to track CVE vulnerabilities and compare metrics across different software releases."
          ]
        },
        {
          title: "API Relationship Mapping Microservice",
          desc: "Designed and developed a dedicated microservice to map and analyze complex API dependency trees and relational logic (e.g., tracing how API A aggregates data from API B and C, which may in turn depend on other downstream APIs) to visualize inter-service architecture."
        },
        {
          title: "Quality Assurance (QA) Support",
          desc: "Collaborated with the QA team to design, execute, and validate manual test cases based on project requirements, ensuring high software reliability before deployment."
        }
      ]
    },
    {
      company: "King Mongkut's University of Technology Thonburi",
      badge: "Work-Study Student",
      position: "IT Support Specialist",
      period: "May 2023 – July 2023",
      location: "Bangkok, Thailand",
      techStack: ["Microsoft Power Automate", "IT Hardware", "Network Infrastructure", "Smart Classroom Systems"],
      highlights: [
        {
          desc: "Managed and prepared smart classrooms, including hardware setup and equipment arrangement prior to lectures."
        },
        {
          desc: "Installed, configured, and maintained classroom IT hardware and peripherals, ensuring seamless operation for faculty and students."
        },
        {
          desc: "Automated lecture video recording workflows using Microsoft Power Automate, reducing manual effort and improving operational efficiency."
        },
        {
          desc: "Provided technical support and troubleshooting for infrastructure equipment within the faculty."
        }
      ]
    }
  ],

  projects: [
    {
      id: "dnd-ai-dm",
      name: "D&D AI DM — Multiplayer AI Dungeon Master",
      badge: "Full-Stack AI Product",
      category: "ai-game",
      period: "September – October 2026",
      role: "Full Stack Developer",
      github: "https://github.com/c3b22/dnd-ai-dm",
      techStack: ["Next.js 15", "React 19", "TypeScript", "Vercel AI SDK", "Google Gemini", "Supabase", "PostgreSQL", "Realtime", "Vitest", "Vercel"],
      summary: "A multiplayer web app where Thai-speaking groups play D&D with an AI Dungeon Master. Every player submits an action each round, then the AI narrates and resolves all of them at once, keeping the story inside a chosen adventure outline (hook, acts, NPCs and DM-only secrets) instead of free-form chat.",
      flowNodes: [
        { step: "1. Web Client", tech: "Next.js 15 + React 19", desc: "Lobby, room codes, scene banners with per-campaign mood tint and 3D dice rolls; works on phone and desktop" },
        { step: "2. Round Engine", tech: "Next.js API Routes", desc: "Collects every player's action, then resolves the round atomically (HP, status, items, gold)" },
        { step: "3. AI Dungeon Master", tech: "Vercel AI SDK + Gemini", desc: "Streams Thai narration; model chosen by benchmarking latency and error rates, with a lighter fallback model" },
        { step: "4. Data & Realtime", tech: "Supabase (PostgreSQL)", desc: "Anonymous auth, realtime room sync and 36 SQL migrations" }
      ],
      responsibilities: [
        "<strong>Designed Round-Based Simultaneous Play:</strong> Built a turn engine where all player actions are resolved together with atomic HP and state updates, rather than an open-ended AI chat.",
        "<strong>Integrated AI Narration:</strong> Connected Google Gemini through the Vercel AI SDK to narrate scenes and rule on actions in Thai, constrained by structured adventure outlines with DM-only secrets.",
        "<strong>Benchmarked and Selected AI Models:</strong> Measured latency and error rates across Gemini versions on real prompts and documented the choice, including fallback to a lighter model on slow or failed calls.",
        "<strong>Built Multiplayer Game Systems:</strong> Room creation with 6-digit join codes, character and weapon selection, inventory, in-game shop, player-to-player trading, rest votes and campaign recap.",
        "<strong>Modeled the Database and Shipped to Production:</strong> Designed the Supabase schema through 36 migrations, covered core logic with Vitest tests and deployed on Vercel."
      ]
    },

    {
      id: "yourpace",
      name: "YourPace",
      badge: "Solo Project — Full Lifecycle Development",
      category: "ai-health",
      period: "June – August 2026",
      role: "Full Stack Developer",
      github: "https://github.com/YourPace-Health",
      techStack: ["Go (Echo)", "React (Vite)", "Google Gemini API", "PostgreSQL", "Redis", "n8n Automation", "Docker", "Jenkins"],
      summary: "YourPace is an intelligent personal health and fitness ecosystem designed to help users track and analyze wellness metrics, receive personalized health and nutrition guidance from an AI-powered mentor, seamlessly schedule and sync workout routines with Google Calendar, and monitor daily lifestyle habits to optimize their overall physical well-being.",
      flowNodes: [
        { step: "1. Client Web App", tech: "React + Vite SPA", desc: "Interactive dashboards, workout logs, meal plans & check-in charts" },
        { step: "2. Backend Service", tech: "Go (Echo Framework)", desc: "High-throughput RESTful API, JWT authentication & health metric processing" },
        { step: "3. AI Intelligence", tech: "Google Gemini 1.5 API", desc: "Real-time nutritional coaching & personalized exercise recommendations" },
        { step: "4. Automation & Data", tech: "n8n + Google Calendar", desc: "Automated schedule sync via webhooks, Redis caching & PostgreSQL persistence" }
      ],
      responsibilities: [
        "<strong>User Authentication & Profiles:</strong> Securely managing user registration, JWT authentication, Google OAuth integration, and personalized user profile configurations.",
        "<strong>Physical Activity & Workout Scheduling:</strong> Tracking exercise logs and seamlessly syncing fitness routines with Google Calendar through n8n workflow automation.",
        "<strong>Dietary & Health Monitoring:</strong> Logging daily meal plans, calorie intakes, water consumption, and body weight trends to assist with health habit formation.",
        "<strong>AI-Powered Mentorship & Chat:</strong> Integrating with Google Gemini API to analyze health data and provide interactive, real-time lifestyle and fitness coaching.",
        "<strong>Health Analytics & Metric Calculations:</strong> Processing raw user data to calculate health indices (such as BMI) and displaying progress summaries via check-in charts and dashboards."
      ]
    },

    {
      id: "financecare",
      name: "FinanceCare — Debt & Financial Management Platform",
      badge: "Capstone Platform",
      category: "fintech-algo",
      period: "October 2025 – March 2026",
      role: "Full Stack Developer",
      github: "https://github.com/financeCare",
      techStack: ["Java 17", "Spring Boot 3", "Python FastAPI", "Flutter", "EasyOCR", "PostgreSQL", "Redis", "MinIO", "Docker", "JUnit 5"],
      summary: "FinanceCare is an intelligent personal finance and debt management platform designed to help users analyze financial health, calculate optimal debt payoff strategies, verify transaction slips using AI-powered OCR, and discover supplementary job opportunities to improve debt repayment efficiency.",
      flowNodes: [
        { step: "1. Mobile Frontend", tech: "Flutter (iOS/Android)", desc: "Clean Architecture mobile UI with real-time financial charts & debt plans" },
        { step: "2. Core Backend", tech: "Spring Boot 3 (Java 17)", desc: "Flexible debt calculation engine (Snowball/Avalanche/Optimal) & stateless JWT security" },
        { step: "3. AI OCR Microservice", tech: "Python FastAPI + EasyOCR", desc: "Grayscale optimization, 710px resizing & OpenCV QR code short-circuiting" },
        { step: "4. Storage & Infrastructure", tech: "PostgreSQL, Redis & MinIO", desc: "Dual storage for relational data & slips with automated container networks" }
      ],
      responsibilities: [
        "<strong>Engineered Debt Repayment Calculation Engine:</strong> Designed and implemented a flexible debt payoff calculation system using Strategy and Factory Design Patterns, supporting Debt Snowball, Debt Avalanche, and Optimal Cost algorithms to optimize repayment schedules and minimize interest accrual.",
        "<strong>Architected Multi-Container Microservices Infrastructure:</strong> Containerized and orchestrated Backend APIs, Redis, MinIO Object Storage, and a Python EasyOCR microservice using Docker Compose connected via custom container networks.",
        "<strong>Implemented Robust Authentication & Security:</strong> Developed stateless JWT authentication, role-based access control (RBAC), Redis-backed OTP email verification, and OAuth2 integration (Google & LINE Login).",
        "<strong>Automated Testing & Code Quality:</strong> Automated unit/integration testing with JUnit 5, integrated JaCoCo for code coverage analysis, and enforced clean architecture standards.",
        "<strong>Developed End-to-End Financial Application:</strong> Built a full-stack platform featuring a Spring Boot RESTful API backend and a responsive Flutter mobile app utilizing Clean Architecture and data visualization graphs."
      ]
    },

    {
      id: "employee-training",
      name: "Employee Training Record System",
      badge: "Solo Project — Full Lifecycle Development",
      category: "enterprise",
      period: "November 2024",
      role: "Full Stack Developer",
      github: "https://github.com/EmployeeTrainingRecord",
      techStack: ["Java 17", "Spring Boot 3.3", "Vue 3 (Vite)", "TailwindCSS", "DaisyUI", "MySQL (Dual DB)", "Argon2", "Spring Security 6", "JWT"],
      summary: "An enterprise-grade full-stack web application designed for corporate training logs and course catalogs management featuring Multi-Datasource architecture to segregate authentication data from employee records for maximum enterprise security.",
      flowNodes: [
        { step: "1. Web SPA Client", tech: "Vue 3 + Vite + Tailwind", desc: "Responsive SPA with Vue Router guards for secure role-based navigation" },
        { step: "2. Security & Auth", tech: "Argon2 + Spring Security 6", desc: "Argon2 cryptographic password hashing & JWT Access/Refresh tokens" },
        { step: "3. Multi-Datasource Router", tech: "Dynamic Data Routing", desc: "Isolates Auth database queries from Employee Training record queries" },
        { step: "4. Dual MySQL Databases", tech: "MySQL 8 Dual DBs", desc: "Separate User DB and Training DB for strict enterprise data isolation" }
      ],
      responsibilities: [
        "<strong>Architected & Developed:</strong> A full-stack web application from scratch using Vue 3 (Vite) for the frontend and Java 17 (Spring Boot 3.3) for the backend RESTful API.",
        "<strong>Designed Responsive UI/UX:</strong> Using TailwindCSS and DaisyUI, building intuitive single-page application (SPA) components for managing training logs, courses, and user profiles.",
        "<strong>Implemented Secure Authentication & Authorization:</strong> End-to-end using JWT (Access & Refresh Tokens), Spring Security, and Argon2 password hashing, managing client-side auth state and protected routes via Vue Router Guards.",
        "<strong>Engineered Multi-Datasource Backend Infrastructure:</strong> Segregating User Data and Training Records across dual MySQL databases to enforce data isolation and security.",
        "<strong>Integrated RESTful APIs & Dynamic State:</strong> Using Fetch API/Axios with client-side validation and centralized backend error handling (@ControllerAdvice) for seamless user experience."
      ]
    }
  ]
};
