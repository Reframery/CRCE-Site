import { motion } from "motion/react"

const tickerItems = [
  "Community-Oriented Entrepreneurship",
  "Environmental Sustainability",
  "Social Inclusion",
  "Innovative Scholarship",
  "Diverse Entrepreneurs",
  "Resilient Communities",
  "Evidence-Based Research",
  "Inclusive Business Practices",
]

export const Ticker = () => (
  <div
    className="relative overflow-hidden py-3"
    style={{
      background:
        "linear-gradient(90deg, hsl(var(--maroon)), #9a0050, hsl(var(--maroon)))",
    }}
    aria-hidden="true"
  >
    <div
      className="absolute top-0 bottom-0 left-0 z-10 w-16"
      style={{
        background: "linear-gradient(90deg, hsl(var(--maroon)), transparent)",
      }}
    />
    <div
      className="absolute top-0 right-0 bottom-0 z-10 w-16"
      style={{
        background: "linear-gradient(270deg, hsl(var(--maroon)), transparent)",
      }}
    />
    <motion.div
      className="flex justify-center gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <span
          key={i}
          className="font-sans-condensed inline-flex items-center gap-3 text-sm font-semibold tracking-widest text-white/80 uppercase"
        >
          <span className="bg-gold inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
          {item}
        </span>
      ))}
    </motion.div>
  </div>
)
