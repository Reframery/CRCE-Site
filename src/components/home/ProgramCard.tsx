import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import type { Card } from "@/content/home"

type ProgramCardProps = {
  card: Card
  index: number
}

export const ProgramCard = ({
  card: { Icon, ...card },
  index,
}: ProgramCardProps) => (
  <motion.a
    href={card.href}
    target={card.external ? "_blank" : undefined}
    rel={card.external ? "noopener noreferrer" : undefined}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      type: "spring",
      stiffness: 80,
    }}
    whileHover={{
      y: -8,
      boxShadow: "0 0 40px rgba(122,0,60,0.35), 0 20px 40px rgba(0,0,0,0.15)",
    }}
    className="group border-maroon/40 relative flex flex-col overflow-hidden rounded-2xl border bg-linear-to-br from-[#1a0010] to-[#2d0020]"
  >
    <motion.div
      className="bg-gold absolute top-0 left-0 z-10 h-0.5"
      initial={{ width: "30%" }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.4 }}
    />
    {/* Image */}
    <div className="h-52 shrink-0 overflow-hidden">
      <motion.img
        src={card.img}
        alt={card.title}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.5 }}
        loading="lazy"
      />
      <div className="absolute inset-0 h-52 bg-linear-to-b from-transparent from-50% to-[rgba(26,0,16,0.4)]" />
    </div>
    <div className="flex flex-1 flex-col p-7">
      <div className="mb-3 flex items-center gap-3">
        <div
          className="bg-gold/12 border-gold/30 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
          aria-hidden="true"
        >
          <Icon className="text-gold h-4 w-4" />
        </div>
        <h3 className="text-lg font-black text-[#e8dcc8]">{card.title}</h3>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-[#c9b5a0]">
        {card.desc}
      </p>
      <div className="text-gold mt-5 flex items-center gap-2 text-sm font-bold">
        Learn More
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </div>
    </div>
  </motion.a>
)
