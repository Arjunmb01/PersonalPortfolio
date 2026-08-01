import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun M B | Full Stack Developer Portfolio",
  description:
    "Full-stack developer based in Bangalore, skilled in React.js, Next.js, Node.js/Express, Python, and Django REST Framework.",
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
    "Tailwind CSS Portfolio",
  ],
  authors: [{ name: "Arjun M B", url: "https://github.com/Arjunmb01" }],
  creator: "Arjun M B",
  openGraph: {
    title: "Arjun M B | Full Stack Developer Portfolio",
    description:
      "I build full-stack products end to end — from pixel-perfect, animated frontends to production APIs deployed on AWS with Docker.",
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
    description:
      "I build full-stack products end to end — from pixel-perfect, animated frontends to production APIs deployed on AWS with Docker.",
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
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
