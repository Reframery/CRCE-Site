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
      className="group relative cursor-default overflow-hidden rounded-2xl p-7"
      style={{
        background: "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
        border: "1px solid rgba(122,0,60,0.4)",
      }}
    >
      {/* Animated glow bg */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(253,191,56,0.12) 0%, transparent 70%)",
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      {/* Top accent line */}
      <motion.div
        className="absolute left-0 top-0 h-0.5 rounded-b-full bg-gold"
        animate={{ width: hovered ? "100%" : "30%" }}
        transition={{ duration: 0.4 }}
      />
      {/* Icon */}
      <motion.div
        className="mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "rgba(253,191,56,0.12)",
          border: "1px solid rgba(253,191,56,0.3)",
        }}
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="h-7 w-7 text-gold" />
      </motion.div>
      <h3 className="mb-2 text-lg font-black leading-snug text-[#e8dcc8]">
        {activity.label}
      </h3>
      <p className="text-sm leading-relaxed text-[#c9b5a0]">{activity.desc}</p>
    </motion.div>
  )
}
