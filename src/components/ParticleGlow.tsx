import { motion } from "motion/react";

export default function ParticleGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Prime glowing orb */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-[#FF6B4A]/4 blur-[130px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow behind credentials */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#FF8C69]/3 blur-[150px]"
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 30, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center ambient glow */}
      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-[#FF6B4A]/2 to-[#FF8C69]/1 blur-[180px]" />

      {/* Floating Sparkles in Background */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 3 + 2;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const duration = Math.random() * 8 + 6;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-[#FF6B4A]/20 to-[#FF8C69]/5"
              style={{
                width: size,
                height: size,
                left: `${initialX}%`,
                top: `${initialY}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.1, 0.7, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
