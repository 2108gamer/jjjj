"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>

      <TransitionPage />
      <div className="bg-custom-blue min-h-screen">
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
       
        <Introduction />
       
      </div>
      </div>
    </main>
  );
}
