import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { ArrowRight } from "lucide-react"
import type { Section } from "@/content/rise"

// Animated SVG graphic panels for each section
const graphicPatterns = [
  // Mentorship - network of connected people
  (hovered: boolean) => (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Connection lines */}
      {[
        [200, 150],
        [100, 80],
        [300, 80],
        [80, 200],
        [320, 200],
        [200, 240],
        [150, 130],
        [260, 170],
      ].flatMap(([x1, y1], i, arr) =>
        arr
          .slice(i + 1, i + 3)
          .map(([x2, y2], j) => (
            <line
              key={`l${i}-${j}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(253,191,56,0.2)"
              strokeWidth="1.5"
            />
          ))
      )}
      {/* Nodes */}
      {[
        [200, 150],
        [100, 80],
        [300, 80],
        [80, 200],
        [320, 200],
        [200, 240],
        [150, 130],
        [260, 170],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i === 0 ? 16 : 10}
          fill="rgba(253,191,56,0.5)"
          opacity={hovered ? 0.9 : 0.6}
        />
      ))}
      {/* Pulse ring on center */}
      <circle
        cx="200"
        cy="150"
        r={hovered ? 28 : 22}
        fill="none"
        stroke="rgba(253,191,56,0.3)"
        strokeWidth="2"
      />
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
          fill="none"
          stroke="rgba(253,191,56,0.25)"
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
          fill="rgba(253,191,56,0.2)"
          opacity={hovered ? 0.85 : 0.5}
        />
      ))}
      <line
        x1="60"
        y1="230"
        x2="340"
        y2="230"
        stroke="rgba(253,191,56,0.3)"
        strokeWidth="1.5"
      />
      <circle cx="200" cy="150" r="10" fill="rgba(253,191,56,0.6)" />
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
        fill="none"
        stroke="rgba(253,191,56,0.2)"
        strokeWidth="1.5"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="90"
        ry="38"
        fill="none"
        stroke="rgba(253,191,56,0.2)"
        strokeWidth="1"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="55"
        ry="90"
        fill="none"
        stroke="rgba(253,191,56,0.15)"
        strokeWidth="1.5"
      />
      {/* Globe circle */}
      <circle
        cx="200"
        cy="150"
        r="70"
        fill="none"
        stroke="rgba(253,191,56,0.25)"
        strokeWidth="2"
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
            fill="rgba(253,191,56,0.55)"
            opacity={hovered ? 0.9 : 0.6}
          />
        )
      })}
      <circle cx="200" cy="150" r="14" fill="rgba(253,191,56,0.5)" />
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
      whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(122,0,60,0.12)" }}
    >
      {/* Graphic Panel */}
      <div
        className="relative flex items-center justify-center overflow-hidden lg:w-5/12"
        style={{
          minHeight: "300px",
          background:
            "linear-gradient(135deg, hsl(var(--maroon)) 0%, #5a0029 100%)",
        }}
      >
        {/* Animated SVG pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0.95 : 0.7 }}
          transition={{ duration: 0.4 }}
        >
          {GraphicPattern(hovered)}
        </motion.div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Tag pill */}
        <motion.div
          className="absolute top-5 left-5 rounded-full border border-white/30 px-3 py-1 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md"
          style={{ background: "rgba(122,0,60,0.7)" }}
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
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl"
            style={{
              backgroundColor: "rgba(253,191,56,0.15)",
              border: "2px solid rgba(253,191,56,0.5)",
            }}
          >
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
          className="mb-5 h-px rounded-full"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--maroon) / 0.2), transparent)",
          }}
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
