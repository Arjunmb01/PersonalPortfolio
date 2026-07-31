export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PortfolioContent {
  personalInfo: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    socials: {
      github: string;
      linkedin: string;
      liveSite: string;
    };
    resumeUrl: string;
  };
  skillGroups: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  web3FormsAccessKey: string;
}

export const portfolioContent: PortfolioContent = {
  personalInfo: {
    name: "Arjun M B",
    role: "Full Stack Developer — React.js | Node.js | Python / Django REST Framework",
    tagline: "I build full-stack products end to end — from pixel-perfect, animated frontends to production APIs deployed on AWS with Docker.",
    bio: "Full-stack developer based in Bangalore, skilled in React.js and REST API development, with production experience in Node.js/Express and hands-on experience in Python and Django REST Framework. I've delivered full-stack apps across healthcare, e-commerce, EdTech, and FinTech — deployed on AWS with Docker.",
    location: "Bangalore, Karnataka, India",
    email: "arjunmb1176@gmail.com",
    phone: "7356561176",
    socials: {
      github: "https://github.com/Arjunmb01",
      linkedin: "https://linkedin.com/in/arjun-mb",
      liveSite: "https://arjundev.vercel.app",
    },
    resumeUrl: "/resume.pdf",
  },
  skillGroups: [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Zustand",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Framer Motion",
        "GSAP",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "JWT Authentication",
        "Socket.IO",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM", "Redis"],
    },
    {
      category: "AI Integration",
      skills: ["OpenAI API", "LLM-Powered Q&A Assistants", "Prompt Engineering"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (EC2, S3, CloudFront, Amplify)",
        "Docker",
        "Docker Compose",
        "Nginx",
        "CI/CD",
        "Vercel",
        "Render",
      ],
    },
    {
      category: "Tools & Integrations",
      skills: [
        "Git & GitHub",
        "Cloudinary",
        "Razorpay",
        "Stripe",
        "PayPal",
        "Postman",
        "Google OAuth",
      ],
    },
  ],
  experiences: [
    {
      role: "Web Developer (Full Stack Web Development)",
      company: "White Dart",
      location: "Bangalore, India",
      duration: "Jun 2026 – Present",
      highlights: [
        "Built and deployed the White Dart marketing website using React 18, Vite, and Tailwind CSS, including scheduling modals, animated demo consoles, and scroll-based reveal animations; deployed on AWS Amplify.",
        "Delivered new features for Accenlearn, an EdTech client platform built with React 19 and Tailwind CSS v4, including a dynamic workshop catalog, blog system, and automated SEO sitemap generator.",
        "Architected and deployed CashFlow, a containerized fintech MERN application, on AWS EC2 using Docker and Docker Compose; configured Nginx as a reverse proxy for the Node.js backend.",
        "Hosted the React frontend on Amazon S3 with CloudFront CDN, configuring path-based routing and custom error responses for SPA client-side routing and API proxying.",
        "Managed PostgreSQL and Redis services within Docker containers; configured production environment variables, networking, and GitHub-based deployment workflows.",
        "Optimized frontend delivery through CloudFront cache invalidation and CDN caching strategies; guided a small team on CashFlow's admin-panel development.",
      ],
    },
    {
      role: "Full Stack Development Trainee / Intern",
      company: "Brototype (BroCamp)",
      location: "Kochi, India",
      duration: "Aug 2024 – May 2026",
      highlights: [
        "Built and shipped a web app end-to-end, from prototype/wireframe to working product under professional mentorship.",
        "Practiced component-based architecture, global state management, responsive user interfaces, and REST API integration.",
        "Completed intensive project-based software engineering training specializing in MERN/PERN stack and Python/Django + React.js, focusing on writing secure RESTful endpoints and containerized service deployments.",
      ],
    },
  ],
  projects: [
    {
      id: "medixflow",
      title: "MedixFlow — Multi-Tenant Healthcare SaaS Platform",
      tech: [
        "PostgreSQL",
        "Express 5",
        "React 19",
        "Node.js",
        "TypeScript",
        "Prisma",
        "MongoDB",
        "Redis",
        "Socket.IO",
        "WebRTC",
        "BullMQ",
      ],
      description:
        "Multi-tenant healthcare SaaS with Patient, Doctor, and Admin portals enforcing RBAC and query-level tenant scoping. Uses PostgreSQL + Prisma for relations, MongoDB + Mongoose for logs. Includes conflict-free appointment booking, WebRTC video consultation with a 4-state call lifecycle, Socket.IO messaging, Stripe/Razorpay/PayPal checkouts with webhooks, BullMQ + Redis async jobs, and an LLM Q&A assistant.",
      githubUrl: "https://github.com/Arjunmb01/medixflow",
      liveUrl: "https://medix-flow-web.vercel.app/",
      featured: true,
    },
    {
      id: "ssk-handlooms",
      title: "SSK Handlooms — Luxury E-Commerce Frontend",
      tech: ["React 19", "TypeScript", "Tailwind CSS v4", "GSAP", "Framer Motion"],
      description:
        "Premium, high-fidelity responsive e-commerce frontend for a heritage handloom brand. Incorporates GSAP ScrollTrigger for pinned scroll storytelling, circular image-reveal animations, and staggered checkerboard grids with zoom/fade transitions. Formulated mobile-first responsive screens from 375px to 1440px+ with zero horizontal overflow.",
      githubUrl: "https://github.com/Arjunmb01/ssk-handlooms",
      liveUrl: "https://ssk-five.vercel.app/",
      featured: true,
    },
    {
      id: "infinitytech",
      title: "InfinityTech — E-Commerce Platform",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Tailwind CSS", "Passport.js"],
      description:
        "Full-featured e-commerce platform with a glass-effect admin dashboard, real-time sales analytics, and catalog management. Integrates Cloudinary image uploads, Razorpay payments, and Google OAuth sessions. Deployed serverless on Vercel with MongoDB Atlas database cluster.",
      githubUrl: "https://github.com/Arjunmb01/infinitytech",
      liveUrl: "https://infinity-tech-iota.vercel.app/",
      featured: true,
    },
    {
      id: "chatify",
      title: "Chatify — Real-Time Chat Application",
      tech: ["MERN Stack", "Socket.IO", "Zustand", "Tailwind CSS", "DaisyUI"],
      description:
        "Real-time messaging web app with custom JWT auth, Socket.IO presence and typing indicators, Zustand state management, Arcjet API rate-limiting, Cloudinary media attachments, and Resend-backed onboarding. Deployed on Sevalla.",
      githubUrl: "https://github.com/Arjunmb01/chatify",
      liveUrl: "https://github.com/Arjunmb01/chatify",
      featured: false,
    },
  ],
  education: [
    {
      institution: "SNM Institute of Management and Technology",
      degree: "B.Tech in Instrumentation and Control Engineering",
      duration: "Graduated 2022",
    },
    {
      institution: "Brototype (BroCamp)",
      degree: "Full Stack Development Certification",
      duration: "Completed 2024",
    },
  ],
  web3FormsAccessKey: "9ddc0405-00ab-4217-bc38-9ba4034265ed",
};
