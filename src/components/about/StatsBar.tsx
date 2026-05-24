import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Target } from "lucide-react"
import { about } from "@/content/about"

export const StatsBar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--maroon)) 0%, #5a0029 100%)",
        }}
      >
        {/* Hex pattern bg */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 0 L56 16 L56 50 L28 66 L0 50 L0 16 Z' fill='none' stroke='rgba(253,191,56,1)' stroke-width='1'/%3E%3Cpath d='M28 66 L56 50 L56 84 L28 100 L0 84 L0 50 Z' fill='none' stroke='rgba(253,191,56,1)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "28px 50px",
          }}
        />
        <motion.div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold opacity-25 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold opacity-15 blur-3xl"
          animate={{ scale: [1.2, 0.9, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start gap-8 p-10 md:flex-row md:p-14">
          {/* Left: Big label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-shrink-0 items-center gap-3 md:flex-col md:items-start md:pt-1"
          >
            <Target className="h-8 w-8 text-gold" />
            <span className="font-sans-condensed text-2xl font-extrabold uppercase tracking-widest text-gold md:text-3xl md:[transform:rotate(180deg)] md:[writing-mode:vertical-rl]">
              Our Story
            </span>
          </motion.div>
          {/* Divider */}
          <motion.div
            className="hidden w-0.5 self-stretch rounded-full bg-white opacity-30 md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          {/* Right: Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed text-white/90 md:text-xl"
          >
            {about.main}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
