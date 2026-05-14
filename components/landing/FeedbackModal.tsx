"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, X, Send } from "lucide-react";

export function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = e.currentTarget;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen(true)}
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-teal px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_0_20px_var(--teal-glow)] transition hover:scale-105"
        aria-label="Give Feedback"
      >
        <MessageSquarePlus className="h-5 w-5" />
        <span>Share Feedback</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg overflow-hidden rounded-t-3xl border border-border/60 bg-[oklch(0.13_0.02_260)] p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-xl p-2 text-muted-foreground transition hover:bg-background/50 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6">
                <span className="mb-2 inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                  Early Access Program
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Feedback & Survey
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Help us shape the future of industrial ERP. Your insights go directly to the development team. You can also include what needs to be fixed.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Send className="h-8 w-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold">Received!</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for your valuable feedback. We read every single submission.
                  </p>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => setSubmitted(false), 500);
                    }}
                    className="mt-6 rounded-xl bg-teal px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form
                  name="beta-feedback"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="beta-feedback" />

                  <div className="space-y-2">
                    <label htmlFor="thoughts" className="text-sm font-medium text-foreground">
                      What do you think of the RMM concept?
                    </label>
                    <textarea
                      id="thoughts"
                      name="thoughts"
                      required
                      rows={3}
                      className="w-full rounded-xl border border-border/60 bg-background/50 p-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      placeholder="I love the idea of isolated schemas, but I'm wondering if..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="features" className="text-sm font-medium text-foreground">
                      What features are most important to your operations?
                    </label>
                    <textarea
                      id="features"
                      name="features"
                      required
                      rows={2}
                      className="w-full rounded-xl border border-border/60 bg-background/50 p-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      placeholder="Fleet tracking, offline syncing, etc..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email address (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl border border-border/60 bg-background/50 p-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      placeholder="you@company.com"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave your email if you'd like us to follow up or grant you early access.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal py-3.5 text-sm font-semibold text-primary-foreground glow-teal transition hover:brightness-110"
                  >
                    Submit Feedback
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
