import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { ArrowRight } from "lucide-react"
import type { Info } from "@/content/contact"

type InfoCardProps = {
  card: Info
  index: number
}

export const InfoCard = ({ card, index }: InfoCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
      }}
      whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(122,0,60,0.18)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex cursor-default flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl"
    >
      {/* Top strip with icon inside */}
      <div
        className="relative flex h-20 items-end overflow-hidden bg-linear-to-br from-[#9a0050] to-[#5a0029] px-6 pb-3"
        aria-hidden="true"
      >
        {/* Animated hex pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 0 L56 16 L56 50 L28 66 L0 50 L0 16 Z' fill='none' stroke='rgba(253,191,87,0.25)' stroke-width='1.5'/%3E%3Cpath d='M28 66 L56 50 L56 84 L28 100 L0 84 L0 50 Z' fill='none' stroke='rgba(253,191,87,0.25)' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundSize: "28px 50px",
          }}
          animate={{ opacity: hovered ? 0.6 : 0.3 }}
          transition={{ duration: 0.4 }}
        />
        {/* Gold shimmer orb on hover */}
        <motion.div
          className="pointer-events-none absolute rounded-full blur-2xl"
          style={{
            backgroundColor: "rgba(253,191,87,0.35)",
            width: 120,
            height: 120,
            top: -40,
            left: -20,
          }}
          animate={{ scale: hovered ? 1.8 : 1, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
        />
        {/* Icon inside strip */}
        <motion.div
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(253,191,87,0.6)",
          }}
          initial={{ scale: 0, rotate: -15 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          whileHover={{ rotate: 10, scale: 1.15 }}
          transition={{
            duration: 0.5,
            delay: 0.25 + index * 0.15,
            type: "spring",
            stiffness: 200,
          }}
        >
          {card.icon}
        </motion.div>
        {/* Bottom gold line */}
        <motion.div
          className="bg-gold absolute bottom-0 left-0 h-0.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.9, delay: 0.4 + index * 0.15 }}
        />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <motion.div
          className="bg-maroon mb-4 h-0.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 40 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          aria-hidden="true"
        />
        <motion.h2
          className="mb-3 text-lg font-extrabold text-gray-900"
          animate={{ color: hovered ? "hsl(var(--maroon))" : "#111827" }}
          transition={{ duration: 0.25 }}
        >
          {card.title}
        </motion.h2>
        {card.lines.map((line, j) => (
          <motion.p
            key={j}
            className="text-sm leading-relaxed text-gray-500"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.35 + index * 0.15 + j * 0.07,
            }}
          >
            {line}
          </motion.p>
        ))}
        {card.cta && (
          <motion.a
            href={card.cta.href}
            target={card.cta.external ? "_blank" : undefined}
            rel={card.cta.external ? "noopener noreferrer" : undefined}
            whileHover={{ x: 6 }}
            className="text-maroon mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold"
          >
            {card.cta.label}{" "}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
