"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Database } from "lucide-react";

export function Security() {
  return (
    <section id="security" className="relative overflow-hidden border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Security</span>
          <h2 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">
            The <span className="text-gradient">Multi-Schema Vault.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Most ERPs share one database across every customer. RMM does not. Each tenant operates inside a physically isolated schema — its own keys, its own backups, its own blast radius. POPIA-grade by default.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              [Database, "Per-tenant isolated schemas — never shared rows"],
              [Lock, "Customer-managed encryption keys (BYOK)"],
              [ShieldCheck, "POPIA, GDPR, SOC 2 Type II audit trails"],
            ].map(([Icon, t], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-teal/30 bg-teal/10 text-teal">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm text-foreground/90">{t as string}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
          className="relative"
        >
          <div className="glass overflow-hidden rounded-3xl p-3">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
              <img src="/assets/vaults.jpg" alt="Multi-schema vault visualization" width={1600} height={1000} loading="lazy" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border/60 bg-background/60 px-4 py-3 backdrop-blur">
                <div className="text-xs">
                  <div className="font-mono uppercase tracking-wider text-muted-foreground">Tenant</div>
                  <div className="font-display font-semibold">tenant_a07 · isolated</div>
                </div>
                <span className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
                  Encrypted
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
