export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <img src="/assets/logos/rmm-trans-2.png" alt="RMM Logo" className="h-15 w-auto opacity-90" />
          <span className="ml-2 font-display text-[10px] uppercase tracking-widest text-muted-foreground/60">· Industrial ERP · © {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-[10px] font-medium text-teal">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal shadow-[0_0_8px_var(--teal-glow)]" />
            Industrial ERP — v4.2 Live
          </div>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Security</a>
          <a href="#" className="hover:text-foreground">Status</a>
        </div>
      </div>
    </footer>
  );
}
