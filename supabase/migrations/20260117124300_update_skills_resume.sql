-- Clear existing skills
DELETE FROM public.skills;

-- Insert new skills from resume
INSERT INTO public.skills (name, category, proficiency) VALUES
-- Frontend
('JavaScript', 'Frontend', 95),
('TypeScript', 'Frontend', 92),
('React.js', 'Frontend', 95),
('Redux', 'Frontend', 88),
('Redux Toolkit', 'Frontend', 90),
('JSX / TSX', 'Frontend', 95),
('Tailwind CSS', 'Frontend', 95),
('CSS3', 'Frontend', 90),
('Bootstrap', 'Frontend', 85),
('HTML5', 'Frontend', 95),

-- Backend
('Node.js', 'Backend', 92),
('Express.js', 'Backend', 90),
('REST APIs', 'Backend', 95),
('MVC Architecture', 'Backend', 85),
('Clean Architecture', 'Backend', 80),
('Socket.io', 'Backend', 85),

-- Databases
('MongoDB', 'Databases', 90),
('Mongoose', 'Databases', 90),
('PostgreSQL (Basic)', 'Databases', 75),

-- Tools & Platforms
('Git', 'Tools & Platforms', 92),
('GitHub', 'Tools & Platforms', 92),
('Postman', 'Tools & Platforms', 90),
('Chrome DevTools', 'Tools & Platforms', 95),
('AWS (Basic)', 'Tools & Platforms', 70);
