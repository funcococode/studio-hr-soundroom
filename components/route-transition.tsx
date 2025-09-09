"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "@/lib/motion";

export default function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(false);
  const mounted = useRef(false);
  const [overlayKey, setOverlayKey] = useState(0);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    // Trigger overlay for ~700ms on each route change
    setOverlayKey((k) => k + 1);
    setShowOverlay(true);
    const t = setTimeout(() => setShowOverlay(false), 700);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Color bloom overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key={overlayKey}
            className="fixed inset-0 z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: 1.4, opacity: 1 }}
              exit={{ opacity: 0.6 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(99,102,241,0.7),rgba(34,197,94,0.55)_45%,rgba(245,158,11,0.45)_80%,transparent_100%)]" />
              <div className="absolute inset-0 mix-blend-overlay opacity-40 bg-[radial-gradient(30%_30%_at_70%_30%,white,transparent)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
