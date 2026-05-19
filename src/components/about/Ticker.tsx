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
      background: "linear-gradient(90deg, #7A003C, #9a0050, #7A003C)",
    }}
  >
    <div
      className="absolute bottom-0 left-0 top-0 z-10 w-16"
      style={{ background: "linear-gradient(90deg, #7A003C, transparent)" }}
    />
    <div
      className="absolute bottom-0 right-0 top-0 z-10 w-16"
      style={{ background: "linear-gradient(270deg, #7A003C, transparent)" }}
    />
    <motion.div
      className="flex justify-center gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-3 font-sans-condensed text-sm font-semibold uppercase tracking-widest text-white/80"
        >
          <span className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FDBF38]" />
          {item}
        </span>
      ))}
    </motion.div>
  </div>
)
