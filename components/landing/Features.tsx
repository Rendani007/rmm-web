"use client";

import { motion } from "framer-motion";
import { Vault, Boxes, Globe2 } from "lucide-react";

const features = [
  {
    icon: Vault,
    title: "Smart Barcode Scanning",
    desc: "Built-in GS1 and AI barcode parsing. Scan, identify, and move stock instantly without expensive proprietary hardware.",
  },
  {
    icon: Boxes,
    title: "Multi-Location Control",
    desc: "Track inventory across unlimited warehouses and departments. Execute precise stock transfers with batch numbers and expiry tracking.",
  },
  {
    icon: Globe2,
    title: "Risk & Compliance",
    desc: "Integrated Risk Registers and Incident Reporting. Keep your operations compliant and your workforce safe with automated trails.",
  },
];

const cardSpring = { type: "spring" as const, stiffness: 220, damping: 14 };

export function Features() {
  return (
    <section id="platform" className="relative border-t border-border/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">The Features</span>
          <h2 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Built <span className="text-gradient">differently.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...cardSpring, delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: -0.4 }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-shadow hover:shadow-[0_20px_60px_-20px_var(--teal-glow)]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/10 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl border border-teal/30 bg-teal/10 text-teal">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-teal">
                  <span className="h-px w-8 bg-teal" />
                  Module {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
