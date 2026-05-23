import { useRef } from "react"
import { motion, useInView } from "motion/react"
import type { LucideIcon } from "lucide-react"

type SectionHeaderProps = {
  icon: LucideIcon
  label: string
  title: string
  color?: string
}

export const SectionHeader = ({
  icon: Icon,
  label,
  title,
  color = "var(--maroon)",
}: SectionHeaderProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div ref={ref} className="mb-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-2 flex items-center gap-3"
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl shadow-md"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color }}
        >
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-black text-gray-900 md:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.div
        className="mt-3 h-1 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </div>
  )
}
