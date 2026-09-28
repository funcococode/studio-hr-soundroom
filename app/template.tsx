"use client";

import { motion } from "@/lib/motion";
import { useReducedMotion } from "framer-motion";
import PageLoader from "@/components/ui/page-loader";

const ease = [0.65, 0, 0.35, 1];

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Page content reveal — starts almost immediately */}
      <motion.div
        initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease, delay: 0.14 }}
      >
        {children}
      </motion.div>

      {/* Curtain — rust panel (lifts second) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] bg-rust-500"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.4, ease, delay: 0.12 }}
      />

      {/* Curtain — ink panel with loader (lifts first) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.4, ease, delay: 0.05 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.15, ease, delay: 0.02 }}
        >
          <PageLoader />
        </motion.div>
      </motion.div>
    </>
  );
}
