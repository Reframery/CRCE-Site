import { motion } from "motion/react"
import { Globe } from "lucide-react"

export const AnimatedGlobe = () => (
  <div className="relative mx-auto size-80 md:size-110">
    <div className="absolute inset-0 z-1 scale-150 rounded-full border-2 border-[#f5ede2]" />
    {/* Outermost pulse rings */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="border-maroon/40 absolute inset-0 rounded-full border"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 1,
          ease: "easeOut",
        }}
      />
    ))}
    {/* Outer spinning ring with glow */}
    <motion.div
      className="border-maroon absolute inset-2 rounded-full border-2"
      style={{
        boxShadow:
          "0 0 18px hsl(var(--maroon) / 0.7), inset 0 0 18px hsl(var(--maroon) / 0.2)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
    {/* Middle spinning ring (dashed, opposite direction) */}
    <motion.div
      className="border-gold/50 absolute inset-10 rounded-full border-[1.5px] border-dashed"
      style={{
        boxShadow: "0 0 12px hsl(var(--gold) / 0.25)",
      }}
      animate={{ rotate: -360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
    {/* Inner ring (dotted, same direction as outer) */}
    <motion.div
      className="border-maroon/60 absolute inset-20 rounded-full border border-dotted"
      style={{
        boxShadow: "0 0 8px hsl(var(--maroon) / 0.4)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    {/* Inner sphere */}
    <div
      className="absolute inset-28 flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_35%,hsl(var(--maroon)),#4a0024_60%,#2a0014)]"
      style={{
        boxShadow:
          "0 0 40px hsl(var(--maroon) / 0.8), 0 0 80px hsl(var(--maroon) / 0.4)",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe
          className="text-gold h-14 w-14 md:h-18 md:w-18"
          style={{
            filter: "drop-shadow(0 0 12px hsl(var(--gold) / 0.9)",
          }}
        />
      </motion.div>
    </div>
    {/* Orbiting dots on outer ring */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <motion.div
        key={`outer-${i}`}
        className="absolute top-0 left-0 h-full w-full"
        animate={{ rotate: [deg, deg + 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="bg-gold absolute top-0.5 left-[calc(50%-6px)] h-3 w-3 rounded-full"
          style={{
            boxShadow:
              "0 0 14px hsl(var(--gold)), 0 0 28px hsl(var(--gold) / 0.6)",
          }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.33,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    ))}
    {/* Orbiting dots on middle ring (opposite) */}
    {[30, 150, 270].map((deg, i) => (
      <motion.div
        key={`mid-${i}`}
        className="absolute top-10 left-10 size-[calc(100%-80px)]"
        animate={{ rotate: [-deg, -(deg + 360)] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-0 left-[calc(50%-5px)] h-2.5 w-2.5 rounded-full bg-[#c9a0dc]"
          style={{
            boxShadow:
              "0 0 10px rgba(201,160,220,0.9), 0 0 20px rgba(201,160,220,0.5)",
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    ))}
  </div>
)
