"use client";

import { useState, useRef } from "react";
import { ExternalLink, Terminal as TerminalIcon, FileText, Code2, Database, ShieldAlert, Cpu } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import { GithubIcon } from "@/components/Icons";

type TabType = "diagram" | "specs" | "logs";

// Custom ASCII diagrams matching the engineering theme
const asciiDiagrams: Record<string, string> = {
  medixflow: `
+-------------------------------------------------------------+
|                     SYSTEM SCHEMATIC                        |
+-------------------------------------------------------------+
 [ Client (React 19) ] <=========> [ Socket.IO WebRTC Gateway ]
          |                                     |
          v (JSON API / HTTPS)                  v (Signaling)
 [ AWS CloudFront / S3 ]              [ Live Consultation ]
          |
          v (Reverse Proxy)
 [ Nginx Load Balancer ]
          |
          v (Docker Container)
 [ Node.js Express 5 API ] <-----> [ Prisma ORM ]
          |                               |
          +-----------------------+-------+
                                  |
                                  v (Persistent / Cache)
                     [ PostgreSQL ] <---> [ Redis Cluster ]
                                  |
                                  v
                            [ MongoDB Log ]
`,
  "ssk-handlooms": `
+-------------------------------------------------------------+
|                     LAYOUT ENGINE CONFIG                    |
+-------------------------------------------------------------+
 [ Recruiter Viewport ]
          |
          v (Lenis Smooth Scroll)
 [ Intercepted Scroll Vector ] 
          |
          +-----> [ GSAP Engine (ScrollTrigger) ]
          |                     |
          |                     +---> [ Deck Stacking Matrix ]
          |                     +---> [ Path drawing tween ]
          |
          v (Physics Spring)
 [ Framer Motion Handler ]
          |
          v (DOM Render)
 [ Tailwind CSS v4 Engine ] ===> [ Hardware Accelerated GPU ]
`,
  infinitytech: `
+-------------------------------------------------------------+
|                     SEAMLESS TRANSACTION FLOW               |
+-------------------------------------------------------------+
 [ Client Browser (HTML5/Tailwind) ] <-----> [ Razorpay API ]
                  |
                  v (HTTPS REST)
 [ Vercel Serverless Gateway ]
                  |
                  v (Express Router)
 [ Passport.js Auth Session ]
                  |
                  v (Google OAuth v2)
 [ Identity Provider Token ]
                  |
                  v (MongoDB Driver)
 [ MongoDB Atlas Cluster ] <===========> [ Cloudinary Media S3 ]
`,
  chatify: `
+-------------------------------------------------------------+
|                     REALTIME GATEWAY INTERFACE              |
+-------------------------------------------------------------+
 [ MERN Client (Zustand State) ] <======> [ WebSockets (WS) ]
                |                                |
                v (HTTPS REST)                   v (Real-time Frame)
 [ Sevalla Host Gateway ]               [ Socket.IO Engine ]
                |                                |
        +-------+-------+                        |
        |               |                        |
        v               v                        v
 [ Arcjet Guard ]  [ Resend SMTP ] <======== [ Presence Ring ]
        |
        v (Blob Store)
 [ Cloudinary CDN ]
`
};

const projectSpecs: Record<string, { runtime: string; auth: string; database: string; deployment: string }> = {
  medixflow: {
    runtime: "Node.js v20 LTS, Express 5.0",
    auth: "JWT + HttpOnly Cookie / RBAC Multi-tenant Scoping",
    database: "PostgreSQL 16 (Relational), MongoDB Atlas (System logs), Redis (Queue/Cache)",
    deployment: "Docker Compose, AWS EC2, Amazon S3, CloudFront CDN"
  },
  "ssk-handlooms": {
    runtime: "React 19 / TypeScript v5 / Vite Compiler",
    auth: "Public Access / No Identity Provider Scoping",
    database: "Mock client-side Content Schema Data Registry",
    deployment: "Vercel CDN Edge Network Edge Caching"
  },
  infinitytech: {
    runtime: "Node.js v18, Express Core",
    auth: "Passport.js Session Auth / Google OAuth 2.0 Integration",
    database: "MongoDB Atlas Cloud Cluster (Mongoose ORM)",
    deployment: "Vercel Serverless Hosting, Cloudinary Image Storage"
  },
  chatify: {
    runtime: "MERN Stack / Socket.IO v4",
    auth: "Custom JWT Middleware Authorization",
    database: "MongoDB Atlas Data Cluster / Redis caching",
    deployment: "Sevalla Platform Services, Resend SMTP Gateway, Cloudinary CDN"
  }
};

const projectLogs: Record<string, string[]> = {
  medixflow: [
    "LOGS // INITMedixFlow: STARTING DB MIGRATION...",
    "DB // PRISMA: Connecting PostgreSQL database at aws-rds-pg-cluster...",
    "DB // PRISMA: Connection established. Running seed scripts...",
    "JOBS // BULLMQ: Redis queues initialized: AppointmentConflicts, Emails.",
    "REALTIME // SOCKET.IO: Server bound successfully on port 8000.",
    "API // STRIPE: Initializing Stripe Webhook security guards...",
    "SYS // ENGINE STATUS: ONLINE. Tenant routing layers compiled."
  ],
  "ssk-handlooms": [
    "LOGS // INITSSK: COMPILING SCROLL TRIGGERS...",
    "ANIM // GSAP: ScrollTrigger loaded. Pinned sections bounds locked.",
    "ANIM // GSAP: Circular path reveals path length computed.",
    "CORE // TAILWIND: Compiling utility classes... completed in 12ms.",
    "SYS // RENDERER STATUS: READY. 60 FPS hardware acceleration confirmed."
  ],
  infinitytech: [
    "LOGS // INITInfinityTech: STARTING EXPRESS SERVER...",
    "DB // MONGOOSE: Connecting to MongoDB Atlas Cloud Cluster...",
    "DB // MONGOOSE: Connected. Schema validation completed.",
    "SEC // PASSPORT: Session store initialized. Google OAuth endpoints compiled.",
    "PAY // RAZORPAY: Initializing Merchant API credentials...",
    "SYS // ENVIRONMENT STATUS: ONLINE. Serverless deployment ready."
  ],
  chatify: [
    "LOGS // INITChatify: STARTING MERN ROUTER...",
    "DB // MONGOOSE: Data cluster connected.",
    "REALTIME // SOCKET.IO: Ping-pong presence thread initialized.",
    "SEC // ARCJET: API Guard activated: rate-limiting active (100req/min).",
    "MAIL // RESEND: Mail queue compiled. Templates ready.",
    "SYS // SERVER STATUS: ONLINE. Deploy run successful on Sevalla."
  ]
};

export default function Projects() {
  const { projects } = portfolioContent;
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [activeTab, setActiveTab] = useState<TabType>("diagram");
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeProject = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-blueprint-grid/30"
    >
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            03 // PROJECT REGISTRY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-foreground/60 leading-relaxed font-sans mt-2">
            Explore detailed blueprint designs, data schematics, and system diagnostics for my full-stack SaaS platforms and responsive architectures.
          </p>
        </div>

        {/* Operating System Console Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-blueprint-grid bg-blueprint-grid/5 divide-y lg:divide-y-0 lg:divide-x divide-blueprint-grid">
          
          {/* Left Panel: Project Directory (4 cols) */}
          <div className="lg:col-span-4 p-6 md:p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-wider">// PROJECT DIRECTORY</span>
            <div className="flex flex-col gap-3">
              {projects.map((project, index) => {
                const isSelected = project.id === selectedId;
                return (
                  <button
                    key={project.id}
                    onClick={() => setSelectedId(project.id)}
                    data-cursor={`LOAD // ${project.id.toUpperCase()}`}
                    className={`w-full text-left p-4 border font-mono transition-all duration-300 rounded-none flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-blueprint-grid bg-blueprint-grid/5 text-foreground/75 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] opacity-50">
                        MODULE [{(index + 1).toString().padStart(2, "0")}]
                      </span>
                      <span className="text-xs font-bold tracking-wider">
                        {project.title.split(" — ")[0]}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 bg-primary animate-ping rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Diagnostic Console (8 cols) */}
          <div className="lg:col-span-8 p-6 md:p-8 flex flex-col gap-6 justify-between min-h-[500px]">
            {/* Header Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blueprint-grid/30 pb-4 font-mono text-[9px] sm:text-[10px] text-foreground/50">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5 text-primary" />
                <span>MODULE_ID: <span className="text-primary font-bold">{activeProject.id.toUpperCase()}</span></span>
              </div>
              <div className="flex items-center gap-4">
                <span>STATUS: <span className="text-emerald-500 font-bold">● DEPLOYED</span></span>
                <span>ACCESS: <span className="text-accent font-bold">PUBLIC</span></span>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="flex border-b border-blueprint-grid/30 font-mono text-[10px] sm:text-xs">
              <button
                onClick={() => setActiveTab("diagram")}
                className={`px-4 py-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === "diagram" ? "border-primary text-primary font-bold bg-primary/5" : "border-transparent text-foreground/60 hover:text-foreground"
                }`}
              >
                01 // ARCHITECTURE
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-4 py-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === "specs" ? "border-primary text-primary font-bold bg-primary/5" : "border-transparent text-foreground/60 hover:text-foreground"
                }`}
              >
                02 // SPECIFICATIONS
              </button>
              <button
                onClick={() => setActiveTab("logs")}
                className={`px-4 py-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === "logs" ? "border-primary text-primary font-bold bg-primary/5" : "border-transparent text-foreground/60 hover:text-foreground"
                }`}
              >
                03 // COMPILER LOGS
              </button>
            </div>

            {/* Workspace Area */}
            <div className="flex-1 w-full bg-blueprint-grid/5 border border-blueprint-grid p-4 md:p-6 font-mono text-[10px] sm:text-xs leading-relaxed text-foreground/80 overflow-x-auto min-h-[250px] relative select-none">
              
              {activeTab === "diagram" && (
                <pre className="text-primary font-medium select-text">
                  {asciiDiagrams[activeProject.id]}
                </pre>
              )}

              {activeTab === "specs" && (
                <div className="space-y-4 select-text">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 border-b border-blueprint-grid/20 pb-2">
                    <div className="md:col-span-3 text-primary font-bold uppercase flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5"/> Runtime:</div>
                    <div className="md:col-span-9">{projectSpecs[activeProject.id].runtime}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 border-b border-blueprint-grid/20 pb-2">
                    <div className="md:col-span-3 text-primary font-bold uppercase flex items-center gap-1.5"><FileText className="w-3.5 h-3.5"/> Security / Auth:</div>
                    <div className="md:col-span-9">{projectSpecs[activeProject.id].auth}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 border-b border-blueprint-grid/20 pb-2">
                    <div className="md:col-span-3 text-primary font-bold uppercase flex items-center gap-1.5"><Database className="w-3.5 h-3.5"/> Databases:</div>
                    <div className="md:col-span-9">{projectSpecs[activeProject.id].database}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                    <div className="md:col-span-3 text-primary font-bold uppercase flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5"/> Deployment:</div>
                    <div className="md:col-span-9">{projectSpecs[activeProject.id].deployment}</div>
                  </div>
                </div>
              )}

              {activeTab === "logs" && (
                <div className="space-y-1.5 text-accent select-text">
                  {projectLogs[activeProject.id].map((logLine, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-accent/40">&gt;&gt;</span>
                      <span>{logLine}</span>
                    </div>
                  ))}
                  <div className="flex gap-2 items-center">
                    <span className="text-accent/40">&gt;&gt;</span>
                    <span className="w-1.5 h-3.5 bg-accent console-cursor" />
                  </div>
                </div>
              )}
            </div>

            {/* Project Summary Description & CTAs */}
            <div className="flex flex-col gap-4 border-t border-blueprint-grid/30 pt-4">
              <p className="text-foreground/75 text-sm leading-relaxed font-sans">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2.5 py-1 font-mono text-[9px] font-bold tracking-wide uppercase bg-primary/5 text-primary border border-primary/10"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="SRC // SOURCE_CODE"
                    className="p-2.5 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground/75 hover:text-primary transition-all duration-300 cursor-pointer flex items-center gap-1.5 font-mono text-[10px]"
                    aria-label={`${activeProject.title} source code`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> Source
                  </a>
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="RUN // INTERFACE"
                      className="p-2.5 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground/75 hover:text-accent transition-all duration-300 cursor-pointer flex items-center gap-1.5 font-mono text-[10px]"
                      aria-label={`${activeProject.title} live demo`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
