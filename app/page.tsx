"use client";

import dynamic from "next/dynamic";
import { LoadingProvider } from "@/context/LoadingProvider";
import MainContainer from "@/components/cloned/MainContainer";

// Load the 3D character model only on client-side (no SSR) to avoid Three.js/WebGL crashes
const CharacterScene = dynamic(
  () => import("@/components/cloned/Character/Scene"),
  { ssr: false }
);

// Import all cloned styles
import "@/components/cloned/styles/style.css";
import "@/components/cloned/styles/Navbar.css";
import "@/components/cloned/styles/Landing.css";
import "@/components/cloned/styles/About.css";
import "@/components/cloned/styles/Career.css";
import "@/components/cloned/styles/Contact.css";
import "@/components/cloned/styles/CallToAction.css";
import "@/components/cloned/styles/WhatIDo.css";
import "@/components/cloned/styles/Work.css";
import "@/components/cloned/styles/TechStackNew.css";
import "@/components/cloned/styles/SocialIcons.css";
import "@/components/cloned/styles/Loading.css";
import "@/components/cloned/styles/Cursor.css";

export default function Home() {
  return (
    <LoadingProvider>
      <MainContainer>
        <CharacterScene />
      </MainContainer>
    </LoadingProvider>
  );
}
