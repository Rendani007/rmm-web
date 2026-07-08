"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, Shield, Zap, Database } from "lucide-react";

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

  const stats = [
    { icon: Activity, label: "Throughput", value: "+24%", color: "text-teal" },
    { icon: Shield, label: "Data Integrity", value: "99.9%", color: "text-blue-400" },
    { icon: Zap, label: "Latency", value: "<12ms", color: "text-amber-400" },
    { icon: Database, label: "Isolated Nodes", value: "Active", color: "text-teal" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-[120vh] overflow-hidden border-t border-border/60 py-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span 
            style={{ opacity }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-teal"
          >
            The RMM Solution
          </motion.span>
          <motion.h2 
            style={{ opacity, scale }}
            className="font-display mt-3 text-4xl font-bold leading-tight md:text-6xl"
          >
            Unified Control for <br />
            <span className="text-gradient">Complex Operations.</span>
          </motion.h2>
          <motion.p 
            style={{ opacity }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Move beyond fragmented spreadsheets. RMM provides a high-precision digital twin of your physical assets, from the extraction point to the final delivery.
          </motion.p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {/* Mine Sector */}
          <motion.div 
            style={{ y: y1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-4 backdrop-blur-sm"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <img 
                src="/assets/mine.png" 
                alt="Omnichannel Operations" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="absolute left-10 top-10 h-20 w-20 border-l border-t border-teal" />
                <div className="absolute bottom-10 right-10 h-20 w-20 border-b border-r border-teal" />
              </div>

              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal">Supply Chain // Visibility</span>
                <h3 className="font-display text-2xl font-bold">Omnichannel Operations</h3>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((s, i) => (
                <div key={i} className="rounded-xl border border-border/50 bg-background/40 p-4">
                  <s.icon className={`h-5 w-5 ${s.color} mb-2`} />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Warehouse Sector */}
          <motion.div 
            style={{ y: y2 }}
            className="group relative mt-12 lg:mt-24 overflow-hidden rounded-3xl border border-border bg-card/50 p-4 backdrop-blur-sm"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <img 
                src="/assets/warehouse.png" 
                alt="Warehouse Operations" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="absolute right-10 top-10 h-20 w-20 border-r border-t border-blue-400" />
                <div className="absolute bottom-10 left-10 h-20 w-20 border-b border-l border-blue-400" />
              </div>

              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">Inventory // Control</span>
                <h3 className="font-display text-2xl font-bold">Intelligent Warehousing</h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.slice(2, 4).map((s, i) => (
                <div key={i} className="rounded-xl border border-border/50 bg-background/40 p-4">
                  <s.icon className={`h-5 w-5 ${s.color} mb-2`} />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connection Line Animation */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-teal/30 to-transparent hidden lg:block" />
    </section>
  );
}
