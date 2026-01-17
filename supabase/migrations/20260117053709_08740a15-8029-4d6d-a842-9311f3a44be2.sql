-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create skills table
CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  proficiency INTEGER DEFAULT 80,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create experience table
CREATE TABLE public.experience (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT,
  start_date TEXT NOT NULL,
  end_date TEXT,
  description TEXT NOT NULL,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio content
CREATE POLICY "Projects are publicly viewable" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Skills are publicly viewable" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Experience is publicly viewable" ON public.experience FOR SELECT USING (true);

-- Anyone can submit contact messages
CREATE POLICY "Anyone can submit contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Insert sample data
INSERT INTO public.projects (title, description, image, technologies, github_url, live_url, featured) VALUES
('Neural Network Visualizer', 'An interactive 3D visualization of neural networks with real-time training data display. Built with WebGL and custom shaders for optimal performance.', '/placeholder.svg', ARRAY['React', 'Three.js', 'TensorFlow.js', 'WebGL'], 'https://github.com', 'https://demo.com', true),
('Quantum Dashboard', 'Real-time analytics dashboard with predictive AI models and holographic data visualization components.', '/placeholder.svg', ARRAY['Next.js', 'D3.js', 'Python', 'FastAPI'], 'https://github.com', 'https://demo.com', true),
('CyberChat Protocol', 'End-to-end encrypted messaging platform with AI-powered threat detection and blockchain verification.', '/placeholder.svg', ARRAY['Node.js', 'Socket.io', 'MongoDB', 'Web3'], 'https://github.com', 'https://demo.com', true);

INSERT INTO public.skills (name, category, proficiency) VALUES
('React', 'Frontend', 95),
('TypeScript', 'Frontend', 90),
('TailwindCSS', 'Frontend', 95),
('Node.js', 'Backend', 90),
('Express', 'Backend', 85),
('MongoDB', 'Backend', 85),
('PostgreSQL', 'Backend', 80),
('Git', 'Tools & DevOps', 90),
('Docker', 'Tools & DevOps', 75),
('AWS', 'Tools & DevOps', 70),
('REST APIs', 'Other', 90),
('Testing', 'Other', 80);

INSERT INTO public.experience (title, company, location, start_date, end_date, description, technologies) VALUES
('Senior Full Stack Developer', 'TechCorp Industries', 'San Francisco, CA', '2022', 'Present', 'Leading development of next-generation web applications with focus on 3D interfaces and real-time data visualization.', ARRAY['React', 'Node.js', 'PostgreSQL', 'Three.js']),
('Full Stack Developer', 'Digital Dynamics', 'Remote', '2020', '2022', 'Built scalable web applications and microservices architecture serving millions of users globally.', ARRAY['Next.js', 'Express', 'MongoDB', 'AWS']),
('Frontend Developer', 'StartupXYZ', 'New York, NY', '2018', '2020', 'Developed responsive web interfaces with focus on performance optimization and user experience.', ARRAY['React', 'TypeScript', 'Redux', 'SASS']);