import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { Security } from "@/components/landing/Security";
import { Vision } from "@/components/landing/Vision";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <Security />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
