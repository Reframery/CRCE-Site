import { motion } from "motion/react"

const orbs = [
  {
    size: 800,
    color: "hsl(var(--gold) / 0.08)",
    x: -400,
    y: -200,
    dur: 18,
  },
  {
    size: 600,
    color: "hsl(var(--maroon) / 0.4)",
    x: 400,
    y: 200,
    dur: 22,
  },
  {
    size: 400,
    color: "hsl(var(--gold) / 0.06)",
    x: 100,
    y: 350,
    dur: 14,
  },
  { size: 300, color: "rgba(180,0,80,0.2)", x: -200, y: 300, dur: 16 },
]

export const FloatingOrbs = () => (
  <>
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={{
          width: orb.size,
          height: orb.size,
          backgroundColor: orb.color,
          left: `calc(50% + ${orb.x}px)`,
          top: `calc(50% + ${orb.y}px)`,
          transform: "translate(-50%,-50%)",
        }}
        animate={{ scale: [1, 1.4, 1], x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{
          duration: orb.dur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 3,
        }}
      />
    ))}
  </>
)
