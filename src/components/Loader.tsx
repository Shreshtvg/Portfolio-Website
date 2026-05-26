import { motion } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1220]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      onAnimationComplete={() => {
        // Triggered upon exit animation
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated glowing ring */}
        <div className="absolute -inset-10 rounded-full bg-[#FF6B4A]/10 blur-xl animate-draw" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-center justify-center w-24 h-24 rounded-2xl border-2 border-[#FF6B4A]/20 bg-[#111827] shadow-2xl shadow-[#FF6B4A]/10"
        >
          {/* Logo symbol */}
          <span className="font-heading text-3xl font-bold tracking-tighter text-[#FF6B4A]">
            S
          </span>
          <span className="font-heading text-2xl font-bold tracking-tighter text-white">
            V
          </span>

          {/* Core glow */}
          <span className="absolute bottom-1 right-2 w-2.5 h-2.5 rounded-full bg-[#FF6B4A] animate-ping" />
        </motion.div>

        {/* Text Fade/Stagger */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 font-heading text-xl font-medium tracking-widest text-[#FFFFFF] uppercase"
        >
          SHRESHT VG
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-2 font-mono text-xs tracking-widest text-text-white"
        >
          HOPE YOU HAD YOUR COFFEE☕
        </motion.p>

        {/* Dynamic Loading Progress Bar */}
        <div className="mt-8 w-48 h-1 rounded-full bg-[#1F2937] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FF6B4A] to-[#FF8C69]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
          />
        </div>
      </div>
    </motion.div>
  );
}
