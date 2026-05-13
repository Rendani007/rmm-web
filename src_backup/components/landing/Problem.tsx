import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const messy = ["A1", "B22", "=SUM(?", "#REF!", "Q4_v7", "FINAL", "FINAL2", "v_OK", "#N/A", "PASTE", "????", "—", "8.5x", "??", "TBD"];
const clean = ["SKU-1042", "ON-HAND 240", "RES 18", "EOQ 96", "WH-A", "WH-B", "BIN-04", "LOT-22", "QC-PASS", "FIFO", "MOV +14", "MOV -3", "PO-882", "ETA 2D", "OK"];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blend = useTransform(scrollYProgress, [0.1, 0.55], [0, 1]);
  const messyOpacity = useTransform(blend, [0, 1], [1, 0]);
  const messyRot = useTransform(blend, [0, 1], [0, -8]);
  const cleanOpacity = useTransform(blend, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-border/60 py-32">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">The Problem</span>
          <h2 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Spreadsheet chaos <span className="text-gradient">to order.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Manual errors compound. Versions multiply. RMM replaces fragile workbooks with a single source of truth — auditable, real-time, immutable.
          </p>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-5 gap-2 md:grid-cols-10">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="relative aspect-square">
              <motion.div
                style={{
                  opacity: messyOpacity,
                  rotate: messyRot,
                  y: useTransform(blend, [0, 1], [0, 80 + (i % 5) * 20]),
                }}
                className="absolute inset-0 grid place-items-center rounded-md border border-destructive/30 bg-destructive/5 text-[10px] font-mono text-destructive/80"
              >
                {messy[i % messy.length]}
              </motion.div>
              <motion.div
                style={{ opacity: cleanOpacity }}
                className="absolute inset-0 grid place-items-center rounded-md border border-teal/25 bg-teal/5 text-[10px] font-mono text-teal/90"
              >
                {clean[i % clean.length]}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}