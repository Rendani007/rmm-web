import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import dashboard from "@/assets/dashboard-mockup.png";
import gridBg from "@/assets/grid-bg.jpg";
import { Particles } from "./Particles";

const spring = { type: "spring" as const, stiffness: 90, damping: 18 };

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28">
      {/* topographical bg */}
      <div
        className="absolute inset-0 opacity-[0.18] topo-mask"
        style={{ backgroundImage: `url(${gridBg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "hue-rotate(-10deg)" }}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-xs font-medium text-teal">
            <Activity className="h-3.5 w-3.5" />
            Industrial ERP — v4.2 Live
          </div>
          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Precision <span className="text-gradient">At Scale</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            The industrial ERP engineered for operations that cannot fail. Modular core, multi-schema vault security, optimized for the African enterprise.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-primary-foreground glow-teal transition hover:brightness-110">
              Request a demo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button className="glass rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition hover:border-teal/30">
              View architecture
            </button>
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
            src={dashboard}
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
          className="glass mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4"
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