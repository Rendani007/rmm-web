"use client";

import { motion } from "framer-motion";
import { Layers, Network, Zap, Pickaxe, Factory, Truck, Building2 } from "lucide-react";

const pillars = [
  {
    title: "What it is",
    desc: "A central, live dashboard that tracks all your resources, inventory, and operations in one place.",
    icon: Layers,
  },
  {
    title: "Why it matters",
    desc: "It eliminates the chaos of outdated spreadsheets, stopping costly mistakes and lost data.",
    icon: Zap,
  },
  {
    title: "The Vision",
    desc: "To give you total clarity and control over your business, from the ground up.",
    icon: Network,
  },
];

const sectors = [
  {
    title: "Retail & E-Commerce",
    desc: "Sync stock across multiple storefronts, track fast-moving goods, and manage precise reorder levels.",
    icon: Pickaxe,
  },
  {
    title: "Wholesale Distributors",
    desc: "Keep a real-time pulse on bulk inventory, fulfill massive orders accurately, and manage B2B pricing.",
    icon: Factory,
  },
  {
    title: "Logistics & Warehousing",
    desc: "Optimize supply chain routing, track fleet movements, and manage stock levels across multiple depots.",
    icon: Truck,
  },
  {
    title: "Small & Medium Enterprises",
    desc: "Migrate from fragmented spreadsheets to a unified system that scales with your growth, without enterprise bloat.",
    icon: Building2,
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border/60 py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Top: Simple Explanation & Pillars */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              The Simple Truth
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              What is <span className="text-gradient">RMM?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Think of RMM as the digital nervous system for your entire supply chain and inventory. 
              We take the messy, confusing, and error-prone spreadsheets you currently rely on and replace them 
              with a single, clear, real-time platform.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              When everyone looks at the same accurate data, operations run smoothly and you can focus on scaling your business instead of fighting fires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal/40 bg-teal/5 text-teal">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-muted-foreground">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.2 }}
          className="mt-28 rounded-3xl border border-border/60 bg-card/30 p-8 md:p-12"
        >
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold md:text-3xl">Built to Scale</h3>
            <p className="mt-3 text-muted-foreground">How different sectors rely on RMM daily.</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector) => (
              <div key={sector.title} className="rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-colors hover:border-teal/30">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <sector.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{sector.title}</h4>
                <p className="text-sm text-muted-foreground">{sector.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
