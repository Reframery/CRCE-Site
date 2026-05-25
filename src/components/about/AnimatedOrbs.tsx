import { motion } from "motion/react"

const orbs = [
  {
    size: 600,
    color: "hsl(var(--gold) / 0.12)",
    x: -250,
    y: -120,
    dur: 14,
  },
  {
    size: 450,
    color: "rgba(255,255,255,0.05)",
    x: 350,
    y: 220,
    dur: 17,
  },
  {
    size: 350,
    color: "hsl(var(--maroon) / 0.18)",
    x: 120,
    y: 320,
    dur: 11,
  },
  {
    size: 200,
    color: "hsl(var(--gold) / 0.1)",
    x: -100,
    y: 280,
    dur: 9,
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
          delay: i * 1.8,
        }}
        aria-hidden="true"
      />
    ))}
  </>
)
