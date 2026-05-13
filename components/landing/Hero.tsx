"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { Particles } from "./Particles";

const spring = { type: "spring" as const, stiffness: 90, damping: 18 };

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* topographical bg */}
      <div
        className="absolute inset-0 opacity-[0.18] topo-mask"
        style={{ backgroundImage: `url(/assets/grid-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center", filter: "hue-rotate(-10deg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 [background:var(--gradient-radial)]" aria-hidden />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.15 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
            Precision <span className="text-gradient">At Scale</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            The industrial ERP engineered for operations that cannot fail. Modular core, multi-schema vault security, optimized for the African enterprise.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href="#architecture" className="glass rounded-xl px-5 py-3.5 text-center text-sm font-semibold text-foreground transition hover:border-teal/30">
              View architecture
            </a>
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 18 }}
          transition={{ ...spring, delay: 0.4 }}
          style={{ transformPerspective: 1400, transformStyle: "preserve-3d" }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute inset-x-10 -bottom-10 h-40 rounded-[100%] bg-teal/30 blur-3xl" aria-hidden />
          <img
            src="/assets/dashboard-mockup.png"
            alt="RMM industrial ERP dashboard"
            width={1600}
            height={1100}
            className="relative w-full select-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)]"
          />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="glass mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4 md:mt-16"
        >
          {[
            ["99.99%", "Uptime SLA"],
            ["<40ms", "Query latency"],
            ["POPIA", "Compliant"],
            ["12+", "Modular apps"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background/30 p-5 text-center">
              <div className="font-display text-2xl font-bold text-teal">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
