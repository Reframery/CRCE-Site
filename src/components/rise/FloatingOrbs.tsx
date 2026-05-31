import { motion } from "motion/react"

const orbs = [
  {
    size: 500,
    color: "hsl(var(--gold) / 0.15)",
    x: -200,
    y: -100,
    dur: 12,
  },
  {
    size: 400,
    color: "rgba(255,255,255,0.06)",
    x: 300,
    y: 200,
    dur: 15,
  },
  {
    size: 300,
    color: "rgba(52,152,219,0.12)",
    x: 100,
    y: 300,
    dur: 10,
  },
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
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{
          duration: orb.dur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2,
        }}
      />
    ))}
  </>
)
