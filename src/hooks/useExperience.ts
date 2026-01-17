import { useQuery } from '@tanstack/react-query';

const EXPERIENCE_DATA = [
  {
    id: 'brototype',
    title: 'Brototype — MERN Stack Development',
    company: 'Self-Taught Journey + Project Growth Phase',
    location: 'Bangalore',
    start_date: 'Aug 2024',
    end_date: 'Present',
    description: 'Transitioned into software development through self-learning and project-based learning. Built real-world MERN apps with strong backend logic, authentication, and scalable workflows. Key projects: InfinityTech (Razorpay payments, order workflow, admin modules) and Chatify (Socket.io, JWT, Cloudinary, Resend).',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT', 'Cloudinary', 'Razorpay']
  },
  {
    id: 'proteogen',
    title: 'Sales and Service Engineer',
    company: 'Proteogen Health Science',
    location: 'Bangalore',
    start_date: 'Oct 2023',
    end_date: 'May 2024',
    description: 'Delivered technical support, installation, and troubleshooting of lab equipment. Collaborated with cross-functional teams to ensure timely issue resolution and smooth deployments.',
    technologies: ['Technical Support', 'Installation', 'Troubleshooting', 'Cross-functional Collaboration']
  },
  {
    id: 'ultra',
    title: 'Service Engineer',
    company: 'Ultra Instruments',
    location: 'Bangalore',
    start_date: 'Jul 2022',
    end_date: 'Sep 2023',
    description: 'Performed on-site technical support and configuration, translating technical requirements into practical solutions. Maintained service documentation and communicated progress updates with stakeholders.',
    technologies: ['On-site Support', 'Configuration', 'Technical Requirements', 'Documentation']
  }
];

export const useExperience = () => {
  return useQuery({
    queryKey: ['experience'],
    queryFn: async () => {
      return EXPERIENCE_DATA;
    },
  });
};
