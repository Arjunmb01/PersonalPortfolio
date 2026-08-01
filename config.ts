export const config = {
    developer: {
        name: "Arjun",
        fullName: "Arjun M B",
        title: "Full Stack Developer",
        description: "Full-stack developer building pixel-perfect frontends and production APIs. Passionate about Next.js, Django REST Framework, Docker, and AWS."
    },
    social: {
        github: "Arjunmb01",
        email: "arjunmb1176@gmail.com",
        location: "Bangalore, India"
    },
    about: {
        title: "About Me",
        description: "I am a Full-Stack Developer based in Bangalore, India. I build robust web applications, responsive interfaces, and scalable containerized APIs. My expertise spans JavaScript, TypeScript, Python, React, Next.js, Node.js/Express, and Django REST Framework. I have delivered production-grade solutions across healthcare, e-commerce, EdTech, and FinTech — deploying them on AWS with Docker. I enjoy writing clean, high-performance code and designing system architectures."
    },
    experiences: [
        {
            position: "Software Engineer",
            company: "White Dart",
            period: "Feb 2024 - Present",
            location: "Bangalore, India",
            description: "Developing production-level SaaS platforms, medical booking engines, and highly responsive web layouts.",
            responsibilities: [
                "Building robust REST APIs with Node.js/Express and Django REST Framework",
                "Crafting high-fidelity, smooth scrolling user interfaces using React, Next.js, and GSAP",
                "Designing relational schemas and managing databases with PostgreSQL and Prisma ORM",
                "Deploying containerized microservices on AWS EC2, S3, and CloudFront using Docker"
            ],
            technologies: ["React", "Next.js", "Node.js", "Express", "Django", "PostgreSQL", "Docker", "AWS"]
        },
        {
            position: "Full Stack Developer Intern",
            company: "Brototype",
            period: "Dec 2022 - Jan 2024",
            location: "Kochi, India",
            description: "Collaborated on building multi-tenant e-commerce sites, communication clients, and real-time utilities.",
            responsibilities: [
                "Developing real-time message exchange channels with Socket.IO and MERN stack",
                "Integrating secure payment gateways like Razorpay and Stripe with webhook listeners",
                "Implementing multi-session authentication guards using Passport.js and JWT tokens",
                "Optimizing frontend asset delivery, loading sequences, and SEO properties"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Razorpay", "JavaScript"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "MedixFlow",
            category: "Healthcare SaaS",
            technologies: "React, Node.js, Express, PostgreSQL, Socket.IO, WebRTC, Docker, AWS",
            image: "/images/medixflow.png",
            description: "A comprehensive healthcare SaaS and telemedicine booking platform. Features real-time video consultations, appointment scheduling, prescription tracking, and payment processing.",
            githubUrl: "https://github.com/Arjunmb01",
            liveUrl: "https://arjundev.vercel.app"
        },
        {
            id: 2,
            title: "SSK Handlooms",
            category: "E-commerce",
            technologies: "React, Next.js, Tailwind CSS, GSAP, Lenis, Framer Motion, Vercel",
            image: "/images/sskhandlooms.png",
            description: "A gorgeous, high-fidelity e-commerce marketplace for traditional handloom weavers. Features smooth scroll choreography, kinetic product decks, and interactive catalogs.",
            githubUrl: "https://github.com/Arjunmb01",
            liveUrl: "https://arjundev.vercel.app"
        },
        {
            id: 3,
            title: "InfinityTech",
            category: "Tech E-commerce",
            technologies: "HTML5, Tailwind CSS, Node.js, Express, Passport.js, Razorpay, MongoDB",
            image: "/images/infinitytech.png",
            description: "A full-featured technology e-commerce store with secure customer logins, interactive shopping carts, Razorpay payment processing, and order invoice management.",
            githubUrl: "https://github.com/Arjunmb01",
            liveUrl: "https://arjundev.vercel.app"
        },
        {
            id: 4,
            title: "Chatify",
            category: "Real-time Chat",
            technologies: "React, Zustand, Node.js, Express, Socket.IO, MongoDB, Cloudinary",
            image: "/images/chatify.png",
            description: "A real-time messaging workspace platform. Includes user presence indicators, instant message delivery, multimedia attachment support, and active channel logs.",
            githubUrl: "https://github.com/Arjunmb01",
            liveUrl: "https://arjundev.vercel.app"
        }
    ],
    contact: {
        email: "arjunmb1176@gmail.com",
        github: "https://github.com/Arjunmb01",
        linkedin: "https://linkedin.com/in/arjun-mb",
        twitter: "https://x.com/arjundev",
        facebook: "https://facebook.com/arjundev",
        instagram: "https://instagram.com/arjundev"
    },
    skills: {
        develop: {
            title: "BACKEND & DEVOPS",
            description: "System design & server operations",
            details: "Engineering scalable server architectures with Node.js and Django. Containerizing environments using Docker, managing clusters, and orchestrating deployments on AWS CloudFront and EC2.",
            tools: ["Node.js", "Express.js", "Django", "Django REST Framework", "Docker", "AWS", "PostgreSQL", "MongoDB", "Redis", "Socket.IO"]
        },
        design: {
            title: "FRONTEND ENGINEERING",
            description: "Pixel-perfect interfaces & clean user experience",
            details: "Creating highly interactive and responsive web portals using React, Next.js, and TypeScript. Designing fluid animations and scroll triggers using GSAP and Framer Motion.",
            tools: ["JavaScript", "TypeScript", "React.js", "Next.js", "Redux Toolkit", "Zustand", "Tailwind CSS", "GSAP", "Framer Motion", "HTML5"]
        }
    }
};
