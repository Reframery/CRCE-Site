import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import type { Activity } from "@/content/conference"

type ActivityCardProps = {
  activity: Activity
  index: number
}

export const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const [hovered, setHovered] = useState(false)
  const { Icon } = activity

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        type: "spring",
        stiffness: 80,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group border-maroon/40 relative cursor-default overflow-hidden rounded-2xl border bg-linear-to-br from-[#1a0010] to-[#2d0020] p-7"
    >
      {/* Animated glow bg */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_70%_30%,hsl(var(--gold)/0.12)_0%,transparent_70%)]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      {/* Top accent line */}
      <motion.div
        className="bg-gold absolute top-0 left-0 h-0.5 rounded-b-full"
        animate={{ width: hovered ? "100%" : "30%" }}
        transition={{ duration: 0.4 }}
      />
      {/* Icon */}
      <motion.div
        className="bg-gold/12 border-gold/30 mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="text-gold h-7 w-7" />
      </motion.div>
      <h3 className="mb-2 text-lg leading-snug font-bold text-[#e8dcc8]">
        {activity.label}
      </h3>
      <p className="text-sm leading-relaxed text-[#c9b5a0]">{activity.desc}</p>
    </motion.div>
  )
}
