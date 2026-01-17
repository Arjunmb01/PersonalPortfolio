-- Clear existing experience
DELETE FROM public.experience;

-- Insert new experience from resume
INSERT INTO public.experience (title, company, location, start_date, end_date, description, technologies) VALUES
(
  'Brototype — MERN Stack Development', 
  'Self-Taught Journey + Project Growth Phase', 
  'Remote', 
  'Aug 2024', 
  'Present', 
  'Transitioned into software development through self-learning and project-based learning. Built real-world MERN apps with strong backend logic, authentication, and scalable workflows. Key projects: InfinityTech (Razorpay payments, order workflow, admin modules) and Chatify (Socket.io, JWT, Cloudinary, Resend).', 
  ARRAY['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT', 'Cloudinary', 'Razorpay']
),
(
  'Sales and Service Engineer', 
  'Proteogen Health Science', 
  'Bangalore', 
  'Oct 2023', 
  'May 2024', 
  'Delivered technical support, installation, and troubleshooting of lab equipment. Collaborated with cross-functional teams to ensure timely issue resolution and smooth deployments.', 
  ARRAY['Technical Support', 'Installation', 'Troubleshooting', 'Cross-functional Collaboration']
),
(
  'Service Engineer', 
  'Ultra Instruments', 
  'Bangalore', 
  'Jul 2022', 
  'Sep 2023', 
  'Performed on-site technical support and configuration, translating technical requirements into practical solutions. Maintained service documentation and communicated progress updates with stakeholders.', 
  ARRAY['On-site Support', 'Configuration', 'Technical Requirements', 'Documentation']
);
