import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import type { sections } from "@/content/about"

const graphicPatterns = [
  // Mission - concentric circles
  () => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {[180, 140, 100, 60, 30].map((r, i) => (
        <circle
          key={i}
          cx="200"
          cy="150"
          r={r}
          fill="none"
          stroke="hsl(var(--gold) / 0.25)"
          strokeWidth="1.5"
        />
      ))}
      <circle cx="200" cy="150" r="15" fill="hsl(var(--gold) / 0.6)" />
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="300"
        stroke="hsl(var(--gold) / 0.1)"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="150"
        x2="400"
        y2="150"
        stroke="hsl(var(--gold) / 0.1)"
        strokeWidth="1"
      />
    </svg>
  ),
  // Vision - flowing waves
  (hovered: boolean) => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M 0 ${80 + i * 40} Q 100 ${60 + i * 40}, 200 ${80 + i * 40} T 400 ${80 + i * 40}`}
          fill="none"
          stroke="hsl(var(--gold) / 0.2)"
          strokeWidth={i === 2 ? "2.5" : "1.5"}
          opacity={hovered ? 0.8 : 0.5}
        />
      ))}
      <circle
        cx="200"
        cy="150"
        r="32"
        fill="none"
        stroke="hsl(var(--gold) / 0.35)"
        strokeWidth="2"
      />
      <circle cx="200" cy="150" r="18" fill="hsl(var(--gold) / 0.2)" />
      <circle cx="200" cy="150" r="8" fill="hsl(var(--gold) / 0.7)" />
    </svg>
  ),
  // Approach - hexagonal grid
  () => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {(
        [
          [200, 150],
          [140, 115],
          [260, 115],
          [140, 185],
          [260, 185],
          [200, 80],
          [200, 220],
        ] as const
      ).map(([cx, cy], i) => (
        <polygon
          key={i}
          points={`${cx},${cy - 28} ${cx + 24},${cy - 14} ${cx + 24},${cy + 14} ${cx},${cy + 28} ${cx - 24},${cy + 14} ${cx - 24},${cy - 14}`}
          fill="none"
          stroke="hsl(var(--gold) / 0.3)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  ),
  // Services - ascending bars
  () => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {[40, 70, 55, 90, 75, 110, 85, 130, 100].map((h, i) => (
        <rect
          key={i}
          x={60 + i * 32}
          y={220 - h}
          width="20"
          height={h}
          rx="4"
          fill="hsl(var(--gold) / 0.25)"
        />
      ))}
      <line
        x1="40"
        y1="220"
        x2="360"
        y2="220"
        stroke="hsl(var(--gold) / 0.3)"
        strokeWidth="1.5"
      />
    </svg>
  ),
  // Collaborate - network nodes
  () => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {[
        [200, 150],
        [100, 80],
        [300, 80],
        [80, 200],
        [320, 200],
        [200, 240],
      ].flatMap(([x1, y1], i, arr) =>
        arr
          .slice(i + 1)
          .map(([x2, y2], j) => (
            <line
              key={`${i}-${j}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--gold) / 0.18)"
              strokeWidth="1.2"
            />
          ))
      )}
      {[
        [200, 150],
        [100, 80],
        [300, 80],
        [80, 200],
        [320, 200],
        [200, 240],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i === 0 ? 14 : 9}
          fill="hsl(var(--gold) / 0.5)"
        />
      ))}
    </svg>
  ),
  // Unique Position - diamond/star
  () => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {[1, 0.7, 0.45].map((scale, i) => (
        <polygon
          key={i}
          points={`200,${150 - 120 * scale} ${200 + 100 * scale},150 200,${150 + 120 * scale} ${200 - 100 * scale},150`}
          fill="none"
          stroke="hsl(var(--gold) / 0.3)"
          strokeWidth={i === 0 ? 2 : 1}
        />
      ))}
      <circle cx="200" cy="150" r="10" fill="hsl(var(--gold) / 0.7)" />
    </svg>
  ),
]

type SectionCardProps = {
  section: (typeof sections)[number]
  index: number
}

export const SectionCard = ({ section, index }: SectionCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const isEven = index % 2 === 0
  const { icon: Icon } = section
  const [hovered, setHovered] = useState(false)
  const GraphicPattern = graphicPatterns[index % graphicPatterns.length]!

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, type: "spring", stiffness: 80 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, boxShadow: "0 30px 60px hsl(var(--maroon) / 0.12)" }}
    >
      {/* Graphic Panel */}
      <div
        className="from-maroon relative flex min-h-75 items-center justify-center overflow-hidden bg-linear-to-br to-[#5a0029] lg:w-5/12"
        aria-hidden="true"
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.4 }}
        >
          {GraphicPattern(hovered)}
        </motion.div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 bg-size-[30px_30px] opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          }}
        />
        {/* Tag pill */}
        <motion.div
          className="bg-maroon/70 absolute top-5 left-5 rounded-full border border-white/30 px-3 py-1 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {section.tag}
        </motion.div>
        {/* Central icon */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-4"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className="bg-gold/15 border-gold/50 flex h-20 w-20 items-center justify-center rounded-2xl border-2 shadow-2xl">
            <Icon className="text-gold h-10 w-10" />
          </div>
          <span className="text-xs font-bold tracking-widest text-white/60 uppercase">
            {section.tag}
          </span>
        </motion.div>
        {/* Gold shimmer line on hover */}
        <motion.div
          className="bg-gold absolute bottom-0 left-0 h-1 rounded-full"
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      {/* Text Panel */}
      <div className="relative flex flex-col justify-center overflow-hidden p-10 md:p-14 lg:w-7/12">
        {/* Bg orb */}
        <motion.div
          className="bg-maroon pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full blur-3xl"
          animate={{ opacity: hovered ? 0.08 : 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        />
        <motion.div
          className="bg-gold pointer-events-none absolute top-0 left-0 h-48 w-48 rounded-full blur-3xl"
          animate={{ opacity: hovered ? 0.04 : 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        />
        {/* Label bar */}
        <motion.div
          className="mb-3 flex items-center gap-3"
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-hidden="true"
        >
          <motion.div
            className="bg-maroon h-1 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          />
          <span className="text-maroon text-xs font-bold tracking-widest uppercase">
            CRCE
          </span>
        </motion.div>
        <motion.h2
          className="font-sans-condensed mb-4 text-2xl leading-tight font-extrabold text-gray-900 md:text-3xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {section.title}
        </motion.h2>
        {/* Divider */}
        <motion.div
          className="from-maroon mb-5 h-px rounded-full bg-linear-to-r to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          aria-hidden="true"
        />
        <motion.p
          className="text-sm leading-relaxed text-gray-500 md:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {section.text}
        </motion.p>
        {/* Hover arrow indicator */}
        {/* <motion.div
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
          style={{ color: "#7A003C" }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <span>Learn more about CRCE</span>
          <ArrowRight className="h-4 w-4" />
        </motion.div> */}
      </div>
    </motion.div>
  )
}
