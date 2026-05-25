import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { ArrowRight } from "lucide-react"
import type { Section } from "@/content/rise"

// Animated SVG graphic panels for each section
const graphicPatterns = [
  // Mentorship - network of connected people
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
              className="stroke-gold/18 stroke-[1.2]"
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
          className="fill-gold/50"
        />
      ))}
    </svg>
  ),
  // Programs - ascending steps / academic arcs
  (hovered: boolean) => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Concentric arcs */}
      {[120, 90, 60, 35].map((r, i) => (
        <path
          key={i}
          d={`M ${200 - r} 150 A ${r} ${r} 0 0 1 ${200 + r} 150`}
          className="stroke-gold/25 fill-none"
          strokeWidth={i === 0 ? 2 : 1.5}
        />
      ))}
      {/* Rising bars */}
      {[50, 75, 60, 95, 80, 110].map((h, i) => (
        <rect
          key={i}
          x={80 + i * 42}
          y={230 - h}
          width="28"
          height={h}
          rx="5"
          className="fill-gold/20"
          opacity={hovered ? 0.85 : 0.5}
        />
      ))}
      <line
        x1="60"
        y1="230"
        x2="340"
        y2="230"
        className="stroke-gold/30 stroke-[1.5]"
      />
      <circle cx="200" cy="150" r="10" className="fill-gold/60" />
    </svg>
  ),
  // Collaborate - globe / orbit rings
  (hovered: boolean) => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Orbit ellipses */}
      <ellipse
        cx="200"
        cy="150"
        rx="130"
        ry="55"
        className="stroke-gold/20 fill-none stroke-[1.5]"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="90"
        ry="38"
        className="stroke-gold/20 fill-none stroke-1"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="55"
        ry="90"
        className="stroke-gold/15 fill-none stroke-[1.5]"
      />
      {/* Globe circle */}
      <circle
        cx="200"
        cy="150"
        r="70"
        className="stroke-gold/25 fill-none stroke-2"
      />
      {/* Dots on orbit */}
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <circle
            key={i}
            cx={200 + Math.cos(rad) * 130}
            cy={150 + Math.sin(rad) * 55}
            r="7"
            className="fill-gold/55"
            opacity={hovered ? 0.9 : 0.6}
          />
        )
      })}
      <circle cx="200" cy="150" r="14" className="fill-gold/50" />
    </svg>
  ),
]

type SectionCardProps = {
  section: Section
  index: number
}

export const SectionCard = ({ section, index }: SectionCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0
  const [hovered, setHovered] = useState(false)
  const { Icon } = section
  const GraphicPattern = graphicPatterns[index % graphicPatterns.length]!

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 70 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, boxShadow: "0 30px 60px hsl(var(--maroon) / 0.12)" }}
    >
      {/* Graphic Panel */}
      <div className="from-maroon relative flex min-h-75 items-center justify-center overflow-hidden bg-linear-to-br to-[#5a0029] lg:w-5/12">
        {/* Animated SVG pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0.95 : 0.7 }}
          transition={{ duration: 0.4 }}
        >
          {GraphicPattern(hovered)}
        </motion.div>
        {/* Grid overlay */}
        <div className="bg-grid-gold absolute inset-0 bg-size-[30px_30px] opacity-5" />
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
        {/* Gold shimmer on hover */}
        <motion.div
          className="bg-gold absolute bottom-0 left-0 h-1 rounded-full"
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      {/* Text Panel */}
      <div className="relative flex flex-col justify-center overflow-hidden p-10 md:p-14 lg:w-7/12">
        <motion.div
          className="bg-maroon pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full blur-3xl"
          animate={{ opacity: hovered ? 0.08 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="bg-gold pointer-events-none absolute top-0 left-0 h-48 w-48 rounded-full blur-3xl"
          animate={{ opacity: hovered ? 0.04 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="mb-3 flex items-center gap-3"
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="bg-maroon h-1 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          />
          <span className="text-maroon text-xs font-bold tracking-widest uppercase">
            RISE Program
          </span>
        </motion.div>
        <motion.h2
          className="mb-4 text-2xl leading-tight font-bold text-gray-900 md:text-3xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {section.title}
        </motion.h2>
        <motion.div
          className="from-maroon/20 mb-5 h-px rounded-full bg-linear-to-r to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        {section.paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            className="mb-4 text-sm leading-relaxed text-gray-500 last:mb-0 md:text-base"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
          >
            {paragraph}
          </motion.p>
        ))}
        {section.cta && (
          <motion.div
            className="mt-7"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href={section.cta.href}
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="bg-maroon inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white shadow-lg transition-shadow hover:shadow-2xl"
              {...(section.cta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {section.cta.label}
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        )}
        {/* <motion.div
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
          style={{ color: "#7A003C" }}
          animate={{
            opacity: hovered && !section.cta ? 1 : 0,
            x: hovered && !section.cta ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
        >
          <span>Learn more about RISE</span>
          <ArrowRight className="h-4 w-4" />
        </motion.div> */}
      </div>
    </motion.div>
  )
}
