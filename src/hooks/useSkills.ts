import { useQuery } from '@tanstack/react-query';

// Skills data from resume
const SKILLS_DATA = [
  // Frontend
  { name: 'JavaScript', category: 'Frontend', proficiency: 95 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 92 },
  { name: 'React.js', category: 'Frontend', proficiency: 95 },
  { name: 'Redux', category: 'Frontend', proficiency: 88 },
  { name: 'Redux Toolkit', category: 'Frontend', proficiency: 90 },
  { name: 'JSX / TSX', category: 'Frontend', proficiency: 95 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95 },
  { name: 'CSS3', category: 'Frontend', proficiency: 90 },
  { name: 'Bootstrap', category: 'Frontend', proficiency: 85 },
  { name: 'HTML5', category: 'Frontend', proficiency: 95 },
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 92 },
  { name: 'Express.js', category: 'Backend', proficiency: 90 },
  { name: 'REST APIs', category: 'Backend', proficiency: 95 },
  { name: 'MVC Architecture', category: 'Backend', proficiency: 85 },
  { name: 'Clean Architecture', category: 'Backend', proficiency: 80 },
  { name: 'Socket.io', category: 'Backend', proficiency: 85 },
  // Databases
  { name: 'MongoDB', category: 'Databases', proficiency: 90 },
  { name: 'Mongoose', category: 'Databases', proficiency: 90 },
  { name: 'PostgreSQL (Basic)', category: 'Databases', proficiency: 75 },
  // Tools & Platforms
  { name: 'Git', category: 'Tools & Platforms', proficiency: 92 },
  { name: 'GitHub', category: 'Tools & Platforms', proficiency: 92 },
  { name: 'Postman', category: 'Tools & Platforms', proficiency: 90 },
  { name: 'Chrome DevTools', category: 'Tools & Platforms', proficiency: 95 },
  { name: 'AWS (Basic)', category: 'Tools & Platforms', proficiency: 70 },
];

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      return SKILLS_DATA;
    },
  });
};

export const useSkillsByCategory = () => {
  return useQuery({
    queryKey: ['skills', 'by-category'],
    queryFn: async () => {
      // Group by category
      const grouped = SKILLS_DATA.reduce((acc, skill) => {
        const category = skill.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push({ ...skill, id: skill.name }); // Use name as ID for static data
        return acc;
      }, {} as Record<string, any[]>);

      return grouped;
    },
  });
};
