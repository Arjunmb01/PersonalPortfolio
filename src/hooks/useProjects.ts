import { useQuery } from '@tanstack/react-query';

const PROJECTS_DATA = [
  {
    id: 'infinity-tech',
    title: 'InfinityTech — E-Commerce Laptop Selling Platform',
    description: 'Full-featured e-commerce platform with product listings, category filtering, cart, checkout, order management, refunds, and admin controls. Razorpay payment integration with secure workflows (Delivered, Cancelled, Return Requests). JWT authentication + role-based access + inventory & discount modules. AWS S3 media storage, Cloudinary image optimization, EJS SSR, Docker containerization.',
    image: '/projects/infinity_tech.png',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'EJS', 'MongoDB', 'Mongoose', 'Razorpay', 'OAuth 2.0', 'Cloudinary', 'JWT', 'AWS S3', 'Docker', 'GitHub'],
    github_url: 'https://github.com/Arjunmb01/Infinity-Tech',
    live_url: 'https://demo.com',
    featured: true,
  },
  {
    id: 'chatify',
    title: 'Chatify — Real-Time Chat Application (MERN)',
    description: 'Real-time one-to-one chat with online/offline presence and typing status using Socket.io. Custom JWT authentication with secure authorization. Notifications + typing sounds with user-controlled toggle. Media sharing via Cloudinary, welcome emails via Resend. REST APIs with rate-limiting using Arcjet + MongoDB persistence. Responsive UI with React + Tailwind + DaisyUI, state management via Zustand.',
    image: '/projects/chatify.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary', 'Resend', 'Arcjet', 'Zustand', 'Tailwind CSS', 'DaisyUI', 'Git', 'GitHub'],
    github_url: 'https://github.com/Arjunmb01/Chatify',
    live_url: 'https://demo.com',
    featured: true,
  },
  {
    id: 'olx-clone',
    title: 'OLX Clone',
    description: 'React application with authentication, dynamic routing, reusable components, and Firebase integration.',
    image: '/placeholder.svg',
    technologies: ['React.js', 'Firebase', 'Authentication', 'Dynamic Routing'],
    github_url: 'https://github.com/Arjunmb01/OLX-clone',
    live_url: 'https://demo.com',
    featured: false,
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'React application with authentication, dynamic routing, reusable components, and Firebase integration.',
    image: '/placeholder.svg',
    technologies: ['React.js', 'Firebase', 'Authentication', 'Dynamic Routing'],
    github_url: 'https://github.com/Arjunmb01/Netflix-clone',
    live_url: 'https://demo.com',
    featured: false,
  }
];

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      return PROJECTS_DATA;
    },
  });
};

export const useFeaturedProjects = () => {
  return useQuery({
    queryKey: ['projects', 'featured'],
    queryFn: async () => {
      return PROJECTS_DATA.filter(p => p.featured);
    },
  });
};
