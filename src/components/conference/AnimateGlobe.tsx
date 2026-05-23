import { motion } from "motion/react"
import { Globe } from "lucide-react"

export const AnimatedGlobe = () => (
  <div className="relative mx-auto h-80 w-80 md:h-[440px] md:w-[440px]">
    {/* Outermost pulse rings */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute inset-0 rounded-full"
        style={{ border: "1px solid rgba(122,0,60,0.4)" }}
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
      className="absolute inset-2 rounded-full border-2 border-maroon"
      style={{
        boxShadow:
          "0 0 18px rgba(122,0,60,0.7), inset 0 0 18px rgba(122,0,60,0.2)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />

    {/* Middle spinning ring (dashed, opposite direction) */}
    <motion.div
      className="absolute inset-10 rounded-full"
      style={{
        border: "1.5px dashed rgba(253,191,56,0.5)",
        boxShadow: "0 0 12px rgba(253,191,56,0.25)",
      }}
      animate={{ rotate: -360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
    {/* Inner ring (dotted, same direction as outer) */}
    <motion.div
      className="absolute inset-20 rounded-full"
      style={{
        border: "1px dotted rgba(122,0,60,0.6)",
        boxShadow: "0 0 8px rgba(122,0,60,0.4)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    {/* Inner sphere */}
    <div
      className="absolute inset-28 flex items-center justify-center rounded-full"
      style={{
        background:
          "radial-gradient(circle at 35% 35%, var(--maroon), #4a0024 60%, #2a0014)",
        boxShadow: "0 0 40px rgba(122,0,60,0.8), 0 0 80px rgba(122,0,60,0.4)",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe
          className="md:w-18 md:h-18 h-14 w-14 text-gold"
          style={{
            filter: "drop-shadow(0 0 12px rgba(253,191,56,0.9))",
          }}
        />
      </motion.div>
    </div>
    {/* Orbiting dots on outer ring */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <motion.div
        key={`outer-${i}`}
        className="absolute left-0 top-0 h-full w-full"
        animate={{ rotate: [deg, deg + 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-[2px] h-3 w-3 rounded-full bg-gold"
          style={{
            left: "calc(50% - 6px)",
            boxShadow:
              "0 0 14px rgba(253,191,56,1), 0 0 28px rgba(253,191,56,0.6)",
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
        className="absolute left-[40px] top-[40px]"
        style={{
          width: "calc(100% - 80px)",
          height: "calc(100% - 80px)",
        }}
        animate={{ rotate: [-deg, -(deg + 360)] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-0 h-2.5 w-2.5 rounded-full bg-[#c9a0dc]"
          style={{
            left: "calc(50% - 5px)",
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
