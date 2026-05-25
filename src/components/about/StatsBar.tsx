import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Target } from "lucide-react"
import { hexPattern } from "@/lib/background-patterns"
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
        className="from-maroon relative overflow-hidden rounded-3xl bg-linear-to-br to-[#5a0029] shadow-2xl"
      >
        <div
          className="absolute inset-0 bg-size-[28px_50px] opacity-10"
          style={{ backgroundImage: hexPattern("rgb(253,191,87)", 1) }}
        />
        <motion.div
          className="bg-gold absolute -top-16 -right-16 h-64 w-64 rounded-full opacity-25 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-gold absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-15 blur-3xl"
          animate={{ scale: [1.2, 0.9, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start gap-8 p-10 md:flex-row md:p-14">
          {/* Left: Big label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex shrink-0 items-center gap-3 md:flex-col md:items-start md:pt-1"
          >
            <Target className="text-gold h-8 w-8" />
            <span className="font-sans-condensed text-gold text-2xl font-extrabold tracking-widest uppercase md:transform-[rotate(180deg)] md:text-3xl md:[writing-mode:vertical-rl]">
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
