import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun M B | Full Stack Developer Portfolio",
  description: "Full-stack developer based in Bangalore, skilled in React.js, Next.js, Node.js/Express, Python, and Django REST Framework. I build responsive frontends and containerized AWS APIs.",
  keywords: [
    "Arjun M B",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Django REST Framework",
    "Python Developer",
    "Bangalore",
    "Docker AWS",
    "TypeScript Portfolio",
    "Tailwind CSS Portfolio"
  ],
  authors: [{ name: "Arjun M B", url: "https://github.com/Arjunmb01" }],
  creator: "Arjun M B",
  openGraph: {
    title: "Arjun M B | Full Stack Developer Portfolio",
    description: "I build full-stack products end to end — from pixel-perfect, animated frontends to production APIs deployed on AWS with Docker.",
    url: "https://arjundev.vercel.app",
    siteName: "Arjun M B Portfolio",
    images: [
      {
        url: "https://arjundev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arjun M B Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun M B | Full Stack Developer Portfolio",
    description: "I build full-stack products end to end — from pixel-perfect, animated frontends to production APIs deployed on AWS with Docker.",
    creator: "@arjundev",
    images: ["https://arjundev.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans antialiased selection:bg-primary/20">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
