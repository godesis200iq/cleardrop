import React, { useState } from 'react';
import { LoadingScreen } from '../components/LoadingScreen';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemSection } from '../components/sections/ProblemSection';
import { SolutionSection } from '../components/sections/SolutionSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { MaterialsSection } from '../components/sections/MaterialsSection';
import { SafetySection } from '../components/sections/SafetySection';
import { ImpactSection } from '../components/sections/ImpactSection';
import { ImprovementsSection } from '../components/sections/ImprovementsSection';
import { FooterSection } from '../components/sections/FooterSection';
import { FloatingParticles2D } from '../components/ParticleField';

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} minDuration={2500} />
      )}
      
      {!isLoading && (
        <div className="relative">
          <FloatingParticles2D />
          <Navigation />
          
          <main>
            <section id="hero">
              <HeroSection />
            </section>
            
            <section id="problem">
              <ProblemSection />
            </section>
            
            <section id="solution">
              <SolutionSection />
            </section>
            
            <section id="how-it-works">
              <HowItWorksSection />
            </section>
            
            <section id="materials">
              <MaterialsSection />
            </section>
            
            <section id="safety">
              <SafetySection />
            </section>
            
            <section id="impact">
              <ImpactSection />
            </section>
            
            <section id="improvements">
              <ImprovementsSection />
            </section>
          </main>
          
          <FooterSection />
        </div>
      )}
    </>
  );
}

export default HomePage;
