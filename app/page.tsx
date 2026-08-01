"use client";

import dynamic from "next/dynamic";
import { LoadingProvider } from "@/context/LoadingProvider";
import MainContainer from "@/components/cloned/MainContainer";

// Load the 3D character scene only on the client (WebGL needs browser APIs)
const CharacterScene = dynamic(
  () => import("@/components/cloned/Character/Scene"),
  { ssr: false }
);

export default function Home() {
  return (
    <LoadingProvider>
      <MainContainer>
        <CharacterScene />
      </MainContainer>
    </LoadingProvider>
  );
}
