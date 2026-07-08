import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { Security } from "@/components/landing/Security";
import { Vision } from "@/components/landing/Vision";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { FeedbackModal } from "@/components/landing/FeedbackModal";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Problem />
      <Features />
      <Security />
      <Vision />
      <Pricing />
      <CTA />
      <Footer />
      <FeedbackModal />
    </main>
  );
}
