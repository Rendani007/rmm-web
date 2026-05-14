"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "Architecture", href: "#architecture" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Header bar */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
        className="fixed left-1/2 top-4 z-50 w-[min(1100px,94vw)] -translate-x-1/2"
      >
        <div className="glass-strong flex items-center justify-between rounded-2xl px-4 py-2 sm:px-5 sm:py-3">
          {/* Logo */}
          <a href="#" className="flex items-center" onClick={closeMenu}>
            <img
              src="/assets/logos/rmm-trans-2.png"
              alt="RMM Logo"
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px w-0 bg-teal"
                  initial={false}
                  whileHover={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://rmm-nexus-production.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground"
            >
              Sign in
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-foreground transition hover:border-teal/40 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(340px,90vw)] flex-col bg-[oklch(0.13_0.02_260)] shadow-2xl md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-border/60 px-6 py-5">
                <img
                  src="/assets/logos/rmm-trans-2.png"
                  alt="RMM"
                  className="h-10 w-auto"
                />
                <button
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex min-h-[52px] items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-teal/5 hover:text-foreground"
                  >
                    <span className="text-xs font-mono text-teal/60">
                      0{i + 1}
                    </span>
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA at the bottom */}
              <div className="border-t border-border/60 p-6">
                <a
                  href="https://rmm-nexus-production.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-xl border border-border py-3 text-sm font-semibold text-foreground transition hover:border-teal/30 hover:bg-teal/5"
                >
                  Sign in
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
