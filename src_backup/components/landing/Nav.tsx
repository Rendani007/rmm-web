import { motion } from "framer-motion";

export function Nav() {
  const links = ["Platform", "Architecture", "Security", "Pricing"];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
      className="fixed left-1/2 top-5 z-50 w-[min(1100px,92vw)] -translate-x-1/2"
    >
      <div className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative grid h-8 w-8 place-items-center rounded-md border border-teal/40 bg-teal/10">
            <div className="h-2 w-2 rounded-sm bg-teal shadow-[0_0_12px_var(--teal-glow)]" />
          </div>
          <span className="font-display text-base font-bold tracking-tight">RMM<span className="text-teal">.</span></span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground sm:block">
            Sign in
          </button>
          <button className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
            Request Demo
          </button>
        </div>
      </div>
    </motion.header>
  );
}