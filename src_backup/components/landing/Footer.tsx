export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-sm bg-teal shadow-[0_0_8px_var(--teal-glow)]" />
          <span className="font-display font-semibold text-foreground">RMM</span>
          <span>· Industrial ERP · © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Security</a>
          <a href="#" className="hover:text-foreground">Status</a>
        </div>
      </div>
    </footer>
  );
}