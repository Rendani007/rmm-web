"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and solopreneurs.",
    price: "R299",
    features: [
      "1 Warehouse Location",
      "Up to 2 Users",
      "Standard Barcode Scanning",
      "Core Inventory Tracking",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing teams needing advanced tracking.",
    price: "R799",
    features: [
      "Up to 5 Warehouse Locations",
      "Up to 10 Users",
      "Advanced GS1 & AI Scanning",
      "Department & Custom Fields",
      "Risk & Incident Management",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Total control for large-scale operations.",
    price: "R1,999",
    features: [
      "Unlimited Locations",
      "Unlimited Users",
      "Full API Access",
      "Custom Workflows",
      "Dedicated Account Manager",
      "99.9% Uptime SLA",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 [background:var(--gradient-radial)]" aria-hidden />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-extrabold tracking-tight md:text-5xl"
          >
            Disruptive pricing.<br />
            <span className="text-gradient">Zero hidden fees.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground"
          >
            Stop paying thousands for legacy ERPs. Get enterprise-grade warehouse management running in 5 minutes.
          </motion.p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {plans.map((plan, planIdx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: planIdx * 0.15, type: "spring", stiffness: 100, damping: 20 }}
              className={`glass-strong rounded-3xl p-8 xl:p-10 ${
                plan.popular ? "ring-2 ring-teal shadow-lg shadow-teal/10 relative" : "ring-1 ring-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-teal/20 border border-teal/40 px-4 py-1 text-sm font-semibold text-teal backdrop-blur-md">
                  Most Popular
                </div>
              )}
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-foreground">{plan.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
              </p>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL || 'https://rmm-nexus-production.up.railway.app'}/register`}
                className={`mt-6 block rounded-xl px-3 py-3 text-center text-sm font-semibold leading-6 transition ${
                  plan.popular
                    ? "bg-teal/20 text-teal hover:bg-teal/30 border border-teal/40"
                    : "bg-background/40 text-foreground hover:bg-white/5 border border-border/60"
                }`}
              >
                Start 1-Month Free Trial
              </Link>
              <p className="mt-2 text-center text-xs text-muted-foreground/70">No credit card required</p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal/10 border border-teal/20 text-teal shrink-0">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
