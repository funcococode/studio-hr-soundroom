"use client";

import { motion } from "@/lib/motion";
import { useReducedMotion } from "framer-motion";
import PageLoader from "@/components/ui/page-loader";

const ease = [0.76, 0, 0.24, 1];

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Page content reveal */}
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease, delay: 0.62 }}
      >
        {children}
      </motion.div>

      {/* Curtain — rust panel (revealed beneath, lifts second) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] bg-rust-500"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.7, ease, delay: 0.62 }}
      />

      {/* Curtain — ink panel with loader (lifts first) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.7, ease, delay: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.25, ease, delay: 0.42 }}
        >
          <PageLoader />
        </motion.div>
      </motion.div>
    </>
  );
}
