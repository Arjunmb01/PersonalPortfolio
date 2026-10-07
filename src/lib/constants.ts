// ─── Site-wide constants & content ───────────────────────────────

export const PERSONAL_INFO = {
  name: 'Arjun M B',
  initials: 'AMB',
  title: 'Full-Stack Developer',
  subtitle: 'MERN & PERN Engineer',
  location: 'Bangalore, India',
  email: 'arjunmb1176@gmail.com',
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Arjun_MB_Resume.pdf',
  bio: 'I am a Full-Stack Developer based in Bangalore, India. I build robust web applications, responsive interfaces, and scalable containerized APIs. My expertise spans JavaScript, TypeScript, Python, React, Next.js, Node.js/Express, and Django REST Framework. I have delivered production-grade solutions across healthcare, e-commerce, EdTech, and FinTech — deploying them on AWS with Docker. I enjoy writing clean, high-performance code and designing system architectures.',
  socials: {
    github: 'https://github.com/Arjunmb01',
    linkedin: 'https://linkedin.com/in/arjun-mb',
    twitter: 'https://x.com/arjundev',
    instagram: 'https://instagram.com/arjundev',
  },
}

export const HERO_FRAME_COUNT = 8

// Frame filenames mapped to rotation angles (degrees 0→360)
export const HERO_FRAMES: { file: string; angle: number }[] = [
  { file: '/frames/frame-000.jpg', angle: 0 },
  { file: '/frames/frame-004.jpg', angle: 45 },
  { file: '/frames/frame-009.jpg', angle: 90 },
  { file: '/frames/frame-013.jpg', angle: 135 },
  { file: '/frames/frame-017.jpg', angle: 180 },
  { file: '/frames/frame-021.jpg', angle: 225 },
  { file: '/frames/frame-026.jpg', angle: 270 },
  { file: '/frames/frame-030.jpg', angle: 315 },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const EXPERIENCES = [
  {
    role: 'Software Engineer',
    company: 'White Dart',
    period: 'Present / NOW',
    description:
      'Developing production-level SaaS platforms, medical booking engines, and highly responsive web layouts.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Brototype',
    period: 'Dec 2022',
    description:
      'Collaborated on building multi-tenant e-commerce sites, communication clients, and real-time utilities.',
    skills: ['MERN Stack', 'REST APIs', 'MongoDB', 'Socket.IO', 'Express'],
  },
]

export const PROJECTS = [
  {
    id: 'medixflow',
    number: '01',
    title: 'MedixFlow',
    category: 'Healthcare SaaS',
    description:
      'A comprehensive healthcare SaaS and telemedicine booking platform. Features real-time video consultations, appointment scheduling, prescription tracking, and payment processing.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'WebRTC', 'Docker', 'AWS'],
    image: '/images/medixflow.png',
    link: 'https://arjundev.vercel.app',
    github: 'https://github.com/Arjunmb01',
  },
  {
    id: 'ssk-handlooms',
    number: '02',
    title: 'SSK Handlooms',
    category: 'E-commerce',
    description:
      'A gorgeous, high-fidelity e-commerce marketplace for traditional handloom weavers. Features smooth scroll choreography, kinetic product decks, and interactive catalogs.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Lenis', 'Framer Motion', 'Vercel'],
    image: '/images/sskhandlooms.png',
    link: 'https://arjundev.vercel.app',
    github: 'https://github.com/Arjunmb01',
  },
  {
    id: 'infinitytech',
    number: '03',
    title: 'InfinityTech',
    category: 'Tech E-commerce',
    description:
      'A full-featured technology e-commerce store with secure customer logins, interactive shopping carts, Razorpay payment processing, and order invoice management.',
    tech: ['HTML5', 'Tailwind CSS', 'Node.js', 'Express', 'Passport.js', 'Razorpay', 'MongoDB'],
    image: '/images/infinitytech.png',
    link: 'https://arjundev.vercel.app',
    github: 'https://github.com/Arjunmb01',
  },
  {
    id: 'chatify',
    number: '04',
    title: 'Chatify',
    category: 'Real-time Chat',
    description:
      'A real-time messaging workspace platform. Includes user presence indicators, instant message delivery, multimedia attachment support, and active channel logs.',
    tech: ['React', 'Zustand', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Cloudinary'],
    image: '/images/chatify.png',
    link: 'https://arjundev.vercel.app',
    github: 'https://github.com/Arjunmb01',
  },
]

export const SKILLS = {
  'Frontend Engineering': [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Redux Toolkit',
    'Zustand',
    'Tailwind CSS',
    'GSAP',
    'Framer Motion',
    'HTML5 & CSS3',
  ],
  'Backend & APIs': [
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'Django REST Framework',
    'REST APIs',
    'JWT',
    'Socket.IO',
    'WebRTC',
  ],
  'Database & DevOps': [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'AWS (EC2 & CloudFront)',
    'Vercel',
  ],
  'Tools & Workflow': [
    'Git',
    'GitHub',
    'VS Code',
    'Postman',
    'Passport.js',
    'Razorpay',
    'Cloudinary',
  ],
}

export const SERVICES = [
  {
    number: '01',
    title: 'Backend & System Design',
    description:
      'Engineering scalable server architectures with Node.js and Django. High-throughput APIs, JWT auth, and clean service layers.',
    tech: 'Node.js, Express, Django, REST APIs',
  },
  {
    number: '02',
    title: 'Frontend Engineering',
    description:
      'Creating interactive, pixel-perfect web applications using React, Next.js, and TypeScript with fluid animations.',
    tech: 'React, Next.js, TypeScript, Tailwind CSS, GSAP',
  },
  {
    number: '03',
    title: 'Cloud & Containerization',
    description:
      'Dockerizing microservices and monolithic environments, orchestrating automated deployments on AWS CloudFront and EC2.',
    tech: 'Docker, AWS EC2, CloudFront, Linux',
  },
  {
    number: '04',
    title: 'Real-time Applications',
    description:
      'Designing real-time messaging, video consultations, and live dashboards using Socket.IO and WebRTC protocols.',
    tech: 'Socket.IO, WebRTC, Redis Pub/Sub',
  },
  {
    number: '05',
    title: 'Full-Stack E-Commerce',
    description:
      'Building transactional e-commerce platforms with payment gateway integration, cart state management, and inventory flows.',
    tech: 'Razorpay, Passport.js, MongoDB, PostgreSQL',
  },
  {
    number: '06',
    title: 'Performance & SEO Optimization',
    description:
      'Streamlining bundle footprints, optimizing Core Web Vitals, and implementing server-side rendering for optimal discoverability.',
    tech: 'Next.js SSR, Lenis, Lighthouse 95+',
  },
]

export const ACHIEVEMENTS = [
  { title: 'Full-Stack Production Deployments', detail: 'Deployed mission-critical SaaS platforms on AWS with Docker' },
  { title: 'Healthcare Telemedicine Platform', detail: 'Architected WebRTC video calls & booking system in MedixFlow' },
  { title: 'Interactive E-commerce Experience', detail: 'Created high-performance kinetic web storefront for SSK Handlooms' },
  { title: 'Real-Time Communication Engine', detail: 'Engineered low-latency instant messaging architecture with Socket.IO' },
  { title: 'Bangalore Developer Network', detail: 'Active contributor in Bangalore tech and developer ecosystem' },
  { title: 'End-to-End Payment Workflows', detail: 'Integrated secure Razorpay payment pipelines and invoice generators' },
]

export const STATS = [
  { value: '4+', label: 'Featured SaaS & Apps' },
  { value: '100%', label: 'Production Ready' },
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Technologies Mastered' },
]

export const MARQUEE_ITEMS = [
  'Full-Stack Developer',
  'React.js & Next.js',
  'Node.js & Express',
  'Python & Django',
  'Docker & AWS',
  'PostgreSQL & MongoDB',
  'Socket.IO & WebRTC',
  'TypeScript & Tailwind',
]

export const WHY_ITEMS = [
  {
    title: 'Complete Product Ownership',
    desc: 'From database schema and containerized APIs to pixel-perfect UI and deployment.',
  },
  {
    title: 'Clean Architecture',
    desc: 'Maintainable, type-safe code written with industry best practices.',
  },
  {
    title: 'Performance by Default',
    desc: 'Fast page loads, optimized assets, smooth 60fps animations.',
  },
  {
    title: 'Production Reliability',
    desc: 'Containerized environments with Docker and scalable cloud instances on AWS.',
  },
  {
    title: 'Real-time & Interactive',
    desc: 'Expertise in WebSockets, WebRTC, and fluid motion design with GSAP & Lenis.',
  },
  {
    title: 'Bangalore Based',
    desc: 'Available for high-impact roles, engineering contracts, and product collaborations.',
  },
]
