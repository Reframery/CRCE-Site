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
    className="from-maroon to-maroon relative overflow-hidden bg-linear-to-r via-[#9a0050] py-3"
    aria-hidden="true"
  >
    <div className="from-maroon absolute top-0 bottom-0 left-0 z-10 w-16 bg-linear-to-r to-transparent" />
    <div className="from-maroon absolute top-0 right-0 bottom-0 z-10 w-16 bg-linear-to-l to-transparent" />
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
