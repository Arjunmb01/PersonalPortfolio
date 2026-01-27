import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import HUDPanel from '@/components/ui/HUDPanel';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '> SYSTEM INITIALIZED',
    '> AWAITING TRANSMISSION...',
  ]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    const errors = [];
    if (formData.name.trim().length < 2) errors.push('> ERROR: NAME TOO SHORT (MIN 2 CHARS)');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push('> ERROR: INVALID EMAIL FORMAT');
    if (formData.message.trim().length < 10) errors.push('> ERROR: MESSAGE TOO BRIEF (MIN 10 CHARS)');

    if (errors.length > 0) {
      setTerminalLines((prev) => [...prev, ...errors, '> TRANSMISSION ABORTED']);
      toast.error("Please fix form errors before sending.");
      return;
    }

    setIsSubmitting(true);
    const target = e.target as HTMLFormElement;

    // Simulate terminal output
    setTerminalLines((prev) => [
      ...prev,
      `> RECEIVING: ${formData.name}`,
      `> VALIDATING: ${formData.email}`,
      '> ENCRYPTING MESSAGE...',
      '> SENDING VIA WEB3FORMS...',
    ]);

    const submissionData = new FormData(target);
    submissionData.append("access_key", "40f77d4a-d879-40f9-a44f-c357748695a6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setTerminalLines((prev) => [
          ...prev,
          '> TRANSMISSION SUCCESSFUL ✓',
          '> MESSAGE DELIVERED TO ARJUN',
        ]);
        toast.success("Message transmitted successfully!");
        setFormData({ name: '', email: '', message: '' });
        target.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      setTerminalLines((prev) => [
        ...prev,
        '> ERROR: TRANSMISSION FAILED',
        `> ${error instanceof Error ? error.message.toUpperCase() : 'UNKNOWN SYSTEM ERROR'}`,
      ]);
      toast.error("Transmission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Arjunmb01', username: '@Arjunmb01' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arjun-mb/', username: '/in/arjun-mb' },
    { icon: Mail, label: 'Email', href: 'mailto:arjunmb01@gmail.com', username: 'arjunmb01@gmail.com' },
  ];

  return (
    <section id="contact" className="relative z-10 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            {'// ESTABLISH_CONNECTION'}
          </span>
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mt-4">
            <span className="text-foreground">SEND </span>
            <span className="text-primary text-glow">TRANSMISSION</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <HUDPanel title="transmission_terminal.sh" className="p-0 overflow-hidden">
              {/* Terminal header */}
              <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">
                  SECURE CHANNEL v2.0
                </span>
              </div>

              {/* Terminal output */}
              <div className="bg-background/50 p-4 h-24 md:h-32 overflow-y-auto font-mono text-sm">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${line.includes('✓') ? 'text-neon-green' :
                      line.includes('ERROR') ? 'text-destructive' :
                        'text-muted-foreground'
                      }`}
                  >
                    {line}
                  </motion.div>
                ))}
                <span className="text-primary animate-pulse">_</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground block">
                    IDENTIFIER:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-mono text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Enter your name..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground block">
                    COMM_CHANNEL:
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-mono text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Enter your email..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground block">
                    MESSAGE_PAYLOAD:
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-mono text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Enter your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-rajdhani font-bold tracking-wider hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all pulse-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND TRANSMISSION
                    </>
                  )}
                </button>
              </form>
            </HUDPanel>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Location */}
            <HUDPanel title="location.data" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground">COORDINATES</div>
                  <div className="font-rajdhani text-xl text-foreground">Bangalore, India</div>
                </div>
              </div>
            </HUDPanel>

            {/* Social Links */}
            <HUDPanel title="social_networks.json" className="p-6">
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 border border-transparent hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-xs text-muted-foreground">{link.label}</div>
                      <div className="font-rajdhani text-foreground group-hover:text-primary transition-colors">
                        {link.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </HUDPanel>

            {/* Status */}
            <HUDPanel title="system_status.log" className="p-6">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="text-neon-green">{'< 24 hours'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-neon-green">ONLINE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Open to Work</span>
                  <span className="text-primary">ACTIVE</span>
                </div>
              </div>
            </HUDPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
