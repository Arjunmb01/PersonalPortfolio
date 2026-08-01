import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/app/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Works | Arjun M B Portfolio",
  description: "Explore all projects by Arjun M B — Full Stack Developer.",
};

// Standalone layout used for /myworks and /play that strips out the
// old site's Navbar, Footer, and LenisProvider so the cloned pages
// render completely on their own.
export default function ClonedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${spaceGrotesk.variable} cloned-root`}>{children}</div>
  );
}
