"use client";

import { motion } from "framer-motion";
import { LineChart, Clock4, ShieldHalf } from "lucide-react";

const pillars = [
  { icon: LineChart, title: "ERP Beyond Borders", desc: "Multi-entity, multi-currency, multi-jurisdiction — all native." },
  { icon: Clock4, title: "Predictive Power", desc: "Forecasting models that learn your supply chain, not generic curves." },
  { icon: ShieldHalf, title: "Security First", desc: "Architecture so isolated, breaches stop at the schema boundary." },
];

export function Vision() {
  return (
    <section id="architecture" className="relative overflow-hidden border-t border-border/60 py-32" style={{ background: "var(--surface)" }}>
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">The Vision</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          className="font-display mx-auto mt-3 max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl"
        >
          From chaos to <span className="text-gradient">operational excellence.</span>
        </motion.h2>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 110, damping: 16, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-teal/40 text-teal" style={{ boxShadow: "inset 0 0 24px var(--teal-glow), 0 0 24px var(--teal-glow)" }}>
                <p.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-display mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
