"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ChevronUp } from "lucide-react";

const contactDetails = [
  { icon: Mail, label: "Email", value: "rendanni.m@gmail.com", href: "mailto:rendanni.m@gmail.com" },
  { icon: Phone, label: "Cell", value: "082 482 3473", href: "tel:+27824823473" },
];

export function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden border-t border-border/60 py-20 md:py-28">
      <div className="absolute inset-0 [background:var(--gradient-radial)]" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="glass-strong relative mx-auto max-w-4xl rounded-3xl px-6 py-12 text-center md:px-8 md:py-16"
      >
        <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
          Run operations <span className="text-gradient">that cannot fail.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          RMM is currently available through our exclusive Early Access Program. Partner with us to refine the future of industrial ERP.
        </p>

        {/* Get in touch button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-6 py-3.5 text-sm font-semibold text-teal transition hover:bg-teal/20"
          >
            {open ? "Close" : "Get in touch"}
            <motion.span
              animate={{ rotate: open ? 0 : 180 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <ChevronUp className="h-4 w-4" />
            </motion.span>
          </motion.button>

          {/* Animated contact details */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
              >
                {contactDetails.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 26 }}
                    className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 px-5 py-3.5 text-sm backdrop-blur transition hover:border-teal/40 hover:bg-teal/5"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-teal/30 bg-teal/10 text-teal">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</span>
                      <span className="font-medium text-foreground group-hover:text-teal transition-colors">{c.value}</span>
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
