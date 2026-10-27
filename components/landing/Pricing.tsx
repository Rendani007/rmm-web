"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { InteractivePlanBuilder } from "./InteractivePlanBuilder";

const plans = [
  {
    name: "Starter",
    description: "Everything you need to replace messy Excel sheets and stop counting stock by hand.",
    price: "R299",
    planSlug: "starter",
    features: [
      "1 Warehouse / Store Location",
      "Up to 2 Staff Accounts",
      "Phone Camera & Barcode Scanning",
      "Real-Time Stock Counts",
      "Low Stock Warning Alerts",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "Connect your buying, selling, and warehouse team in one live system.",
    price: "R799",
    planSlug: "professional",
    features: [
      "Up to 3 Locations (Store, Depots, Vans)",
      "Up to 8 Staff Accounts",
      "Suppliers & Purchase Orders",
      "Customer Sales Orders & 15% VAT",
      "Inter-Branch Stock Transfers",
      "Custom Item Details & Expiry Dates",
      "Excel & CSV Bulk Imports/Exports",
      "Priority WhatsApp & Email Support",
    ],
    popular: true,
  },
  {
    name: "Business",
    description: "Complete oversight across multiple branches, departments, and supervisors with zero stock loss.",
    price: "R1,999",
    planSlug: "enterprise",
    features: [
      "Up to 10 Warehouse Locations",
      "Up to 25 Staff Accounts Included",
      "Multi-Department Management",
      "Manager Approval Inbox (Authorise Transfers)",
      "Theft & Damaged Goods Incident Log",
      "Complete Staff Activity Audit Log",
      "Smart AI Demand Forecasting",
      "Two-Factor Login Security (2FA)",
      "Fast-Track Priority Support",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

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
            Stop paying hundreds of thousands for legacy ERPs. Get enterprise-grade warehouse management running in 5 minutes.
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
                href={`${process.env.NEXT_PUBLIC_APP_URL || 'https://app.rmmanagement.co.za'}/register?plan=${plan.planSlug}`}
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

        {/* Custom Enterprise Plan Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl glass-strong ring-1 ring-border/50 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-xs font-semibold text-teal mb-3">
              50 to 300+ Staff
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">Enterprise & Bespoke Solutions</h3>
            <p className="mt-3 text-muted-foreground max-w-2xl text-sm sm:text-base leading-relaxed">
              For large supply chains and multi-branch operations. Includes unlimited warehouse locations, custom user quotas, full REST API access, dedicated WhatsApp account management, hands-on stock data migration, and a 99.9% uptime SLA.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:mt-0 lg:shrink-0">
            <a
              href="mailto:sales@resourcemodular.com?subject=Enterprise%20Plan%20Inquiry"
              className="rounded-xl border border-teal/40 bg-teal/10 px-5 py-3 text-center text-sm font-semibold text-teal hover:bg-teal/20 transition-all"
            >
              Contact Sales
            </a>
            <button
              onClick={() => setIsBuilderOpen(true)}
              className="rounded-xl bg-teal px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal transition-all"
            >
              Build Custom Plan
            </button>
          </div>
        </motion.div>
      </div>

      <InteractivePlanBuilder 
        isOpen={isBuilderOpen} 
        onClose={() => setIsBuilderOpen(false)} 
      />
    </section>
  );
}
