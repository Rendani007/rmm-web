import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-28">
      <div className="absolute inset-0 [background:var(--gradient-radial)]" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="glass-strong relative mx-auto max-w-4xl rounded-3xl px-8 py-16 text-center"
      >
        <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
          Run operations <span className="text-gradient">that cannot fail.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Schedule a 30-minute walkthrough with our solutions team. We'll show you the vault architecture in action.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="group inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-primary-foreground glow-teal transition hover:brightness-110">
            Request a demo
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <button className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-teal/30 hover:bg-teal/5">
            Talk to sales
          </button>
        </div>
      </motion.div>
    </section>
  );
}