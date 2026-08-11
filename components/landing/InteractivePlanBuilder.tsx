"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Calculator } from "lucide-react";

interface InteractivePlanBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InteractivePlanBuilder({ isOpen, onClose }: InteractivePlanBuilderProps) {
  const [users, setUsers] = useState(2);
  const [locations, setLocations] = useState(1);
  const [apiAccess, setApiAccess] = useState(false);
  const [advancedScanning, setAdvancedScanning] = useState(false);
  const [riskManagement, setRiskManagement] = useState(false);
  const [price, setPrice] = useState(299);

  useEffect(() => {
    let total = 299; // Base
    if (users > 2) total += (users - 2) * 99;
    if (locations > 1) total += (locations - 1) * 199;
    if (apiAccess) total += 399;
    if (advancedScanning) total += 299;
    if (riskManagement) total += 199;
    setPrice(total);
  }, [users, locations, apiAccess, advancedScanning, riskManagement]);

  const handleCheckout = () => {
    // In a real app, this redirects to the registration/checkout flow
    // with the URL parameters so the app knows what to build.
    const url = new URL(`${process.env.NEXT_PUBLIC_APP_URL || 'https://rmm-nexus-production.up.railway.app'}/register`);
    url.searchParams.set('plan', 'custom');
    url.searchParams.set('users', users.toString());
    url.searchParams.set('locations', locations.toString());
    if (apiAccess) url.searchParams.set('api_access', 'true');
    if (advancedScanning) url.searchParams.set('advanced_scanning', 'true');
    if (riskManagement) url.searchParams.set('risk_management', 'true');
    
    window.location.href = url.toString();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border/50 px-6 py-4 bg-muted/30">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-teal" />
                  <h2 className="text-lg font-bold text-foreground">Build Your Custom Plan</h2>
                </div>
                <button onClick={onClose} className="rounded-full p-2 hover:bg-muted transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6 md:p-8 grid gap-8 md:grid-cols-2 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-semibold text-foreground">Users</label>
                      <span className="text-sm font-bold text-teal">{users}</span>
                    </div>
                    <input 
                      type="range" min="2" max="50" value={users} 
                      onChange={(e) => setUsers(parseInt(e.target.value))}
                      className="w-full accent-teal"
                    />
                    <p className="text-xs text-muted-foreground mt-1">2 included, +R99 per extra</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-semibold text-foreground">Locations</label>
                      <span className="text-sm font-bold text-teal">{locations}</span>
                    </div>
                    <input 
                      type="range" min="1" max="20" value={locations} 
                      onChange={(e) => setLocations(parseInt(e.target.value))}
                      className="w-full accent-teal"
                    />
                    <p className="text-xs text-muted-foreground mt-1">1 included, +R199 per extra</p>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h3 className="text-sm font-semibold text-foreground">Premium Add-ons</h3>
                    
                    <label className="flex items-start justify-between cursor-pointer group rounded-lg p-2 -mx-2 hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-sm font-medium text-foreground">Advanced AI Scanning</span>
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          Automatically reads text, serial numbers, and blurry barcodes using your phone camera, saving your team hours of manual typing.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 pt-1 shrink-0">
                        <span className="text-xs font-bold text-teal">+R299</span>
                        <input type="checkbox" checked={advancedScanning} onChange={(e) => setAdvancedScanning(e.target.checked)} className="accent-teal h-4 w-4 rounded border-border" />
                      </div>
                    </label>

                    <label className="flex items-start justify-between cursor-pointer group rounded-lg p-2 -mx-2 hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-sm font-medium text-foreground">Risk Management</span>
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          Get automated alerts before stock expires, and track exactly which items are getting lost or damaged the most.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 pt-1 shrink-0">
                        <span className="text-xs font-bold text-teal">+R199</span>
                        <input type="checkbox" checked={riskManagement} onChange={(e) => setRiskManagement(e.target.checked)} className="accent-teal h-4 w-4 rounded border-border" />
                      </div>
                    </label>

                    <label className="flex items-start justify-between cursor-pointer group rounded-lg p-2 -mx-2 hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-sm font-medium text-foreground">Full API Access</span>
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          Connect this platform directly to your other business tools, like your accounting software (Xero/QuickBooks) or custom dashboards.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 pt-1 shrink-0">
                        <span className="text-xs font-bold text-teal">+R399</span>
                        <input type="checkbox" checked={apiAccess} onChange={(e) => setApiAccess(e.target.checked)} className="accent-teal h-4 w-4 rounded border-border" />
                      </div>
                    </label>
                  </div>
                </div>

                <div className="bg-teal/5 rounded-2xl border border-teal/20 p-6 flex flex-col justify-between relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-3xl" />
                   <div>
                     <h3 className="font-semibold text-foreground text-lg mb-4">Your Custom Setup</h3>
                     <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="h-3 w-3 text-teal" /> {users} Users</li>
                        <li className="flex items-center gap-2"><Check className="h-3 w-3 text-teal" /> {locations} Locations</li>
                        {advancedScanning && <li className="flex items-center gap-2"><Check className="h-3 w-3 text-teal" /> Advanced Scanning</li>}
                        {riskManagement && <li className="flex items-center gap-2"><Check className="h-3 w-3 text-teal" /> Risk Management</li>}
                        {apiAccess && <li className="flex items-center gap-2"><Check className="h-3 w-3 text-teal" /> Full API Access</li>}
                     </ul>
                   </div>

                   <div className="mt-8 pt-6 border-t border-teal/20">
                     <div className="flex items-baseline justify-between mb-4">
                       <span className="text-sm font-medium text-muted-foreground">Total Price</span>
                       <div className="text-right">
                         <span className="text-3xl font-bold text-foreground">R{price.toLocaleString()}</span>
                         <span className="text-xs text-muted-foreground block">/month</span>
                       </div>
                     </div>
                     <button onClick={handleCheckout} className="w-full rounded-xl bg-teal py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal/90 transition-all">
                       Proceed to Checkout
                     </button>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
