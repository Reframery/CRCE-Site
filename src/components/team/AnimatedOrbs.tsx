import { motion } from "motion/react"

export const orbs = [
  {
    size: 500,
    color: "hsl(var(--gold) / 0.12)",
    x: -200,
    y: -100,
    dur: 14,
  },
  {
    size: 400,
    color: "rgba(255,255,255,0.05)",
    x: 300,
    y: 150,
    dur: 17,
  },
]

export const AnimatedOrbs = () => (
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
        animate={{ scale: [1, 1.35, 1], x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{
          duration: orb.dur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2,
        }}
        aria-hidden="true"
      />
    ))}
  </>
)
