import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  ChevronDown,
  Eye,
  Handshake,
  Layers,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react"
import { useRef, useState } from "react"

const sections = [
  {
    title: "Our Mission",
    icon: Target,
    tag: "Purpose",
    text: "CRCE's mission is to foster research that builds prosperous and resilient communities, emphasizing environmental sustainability and community focus. By supporting diverse individuals CRCE aims to spur innovative solutions to current and future challenges. CRCE's goal is to promote economic prosperity, environmental sustainability, and social inclusion.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    tag: "Direction",
    text: "CRCE seeks to develop future generations of diverse entrepreneurs through innovative scholarship and educational services supporting environmentally responsible and socially inclusive entrepreneurship.",
  },
  {
    title: "Our Approach",
    icon: Layers,
    tag: "Methodology",
    text: "CRCE stands at the forefront of driving positive change for marginalized entrepreneurs through community-based sustainable entrepreneurship. At the heart of our mission is collaboration—with a diverse team of researchers, entrepreneurs, and community leaders, we work alongside community organizations, NGOs, academic institutions, and government agencies. Our multidisciplinary approach, rooted in equity, inclusivity, and sustainability, leverages resources, expertise, and networks to create a supportive ecosystem for 'bottom of the pyramid' ventures.",
  },
  {
    title: "Our Services and Impact",
    icon: Zap,
    tag: "Impact",
    text: "Through various initiatives, CRCE offers a wealth of resources to fuel the entrepreneurial journey of individuals from all walks of life. Our services include access to funding opportunities, mentorship, and community-oriented entrepreneurship training workshops, aimed at turning entrepreneurial visions into reality. By fostering partnerships and providing guidance, we help entrepreneurs navigate the challenges of starting and growing their businesses.",
  },
  {
    title: "Why Collaborate with Us",
    icon: Users,
    tag: "Partnership",
    text: "Collaborating with CRCE means joining a network committed to dismantling barriers for marginalized entrepreneurs. Partners gain access to our extensive network of resources, expertise, and support mechanisms. Our focus on inclusivity and social impact, combined with a research-driven approach, ensures that all interventions are effective and responsive to the specific needs of the communities we serve.",
  },
  {
    title: "Our Unique Position",
    icon: Star,
    tag: "Distinction",
    text: "What sets CRCE apart is our unwavering dedication to inclusivity, social impact, and community-oriented entrepreneurship. Our commitment is not just to equity but to creating a level playing field where every entrepreneur has the opportunity to succeed. Our extensive network of partnerships and our research-driven, evidence-based approach enable us to maximize impact and drive significant, positive change, making CRCE a beacon of hope and a leader in fostering sustainable entrepreneurial ecosystems.",
  },
]

const tickerItems = [
  "Community-Oriented Entrepreneurship",
  "Environmental Sustainability",
  "Social Inclusion",
  "Innovative Scholarship",
  "Diverse Entrepreneurs",
  "Resilient Communities",
  "Evidence-Based Research",
  "Inclusive Business Practices",
]

function Ticker() {
  const items = [...tickerItems, ...tickerItems]
  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        background: "linear-gradient(90deg, #7A003C, #9a0050, #7A003C)",
      }}
    >
      <div
        className="absolute bottom-0 left-0 top-0 z-10 w-16"
        style={{ background: "linear-gradient(90deg, #7A003C, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 top-0 z-10 w-16"
        style={{ background: "linear-gradient(270deg, #7A003C, transparent)" }}
      />
      <motion.div
        className="flex justify-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/80"
          >
            <span
              className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: "#FDBF38" }}
            />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

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
          stroke="rgba(253,191,56,0.25)"
          strokeWidth="1.5"
        />
      ))}
      <circle cx="200" cy="150" r="15" fill="rgba(253,191,56,0.6)" />
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="300"
        stroke="rgba(253,191,56,0.1)"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="150"
        x2="400"
        y2="150"
        stroke="rgba(253,191,56,0.1)"
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
          stroke="rgba(253,191,56,0.2)"
          strokeWidth={i === 2 ? "2.5" : "1.5"}
          opacity={hovered ? 0.8 : 0.5}
        />
      ))}
      <circle
        cx="200"
        cy="150"
        r="32"
        fill="none"
        stroke="rgba(253,191,56,0.35)"
        strokeWidth="2"
      />
      <circle cx="200" cy="150" r="18" fill="rgba(253,191,56,0.2)" />
      <circle cx="200" cy="150" r="8" fill="rgba(253,191,56,0.7)" />
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
          stroke="rgba(253,191,56,0.3)"
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
          fill="rgba(253,191,56,0.25)"
        />
      ))}
      <line
        x1="40"
        y1="220"
        x2="360"
        y2="220"
        stroke="rgba(253,191,56,0.3)"
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
              stroke="rgba(253,191,56,0.18)"
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
          fill="rgba(253,191,56,0.5)"
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
          stroke="rgba(253,191,56,0.3)"
          strokeWidth={i === 0 ? 2 : 1}
        />
      ))}
      <circle cx="200" cy="150" r="10" fill="rgba(253,191,56,0.7)" />
    </svg>
  ),
]

function SectionCard({ section, index }: any) {
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
      whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(122,0,60,0.12)" }}
    >
      {/* Graphic Panel */}
      <div
        className="relative flex items-center justify-center overflow-hidden lg:w-5/12"
        style={{
          minHeight: "300px",
          background: "linear-gradient(135deg, #7A003C 0%, #5a0029 100%)",
        }}
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
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Tag pill */}
        <motion.div
          className="absolute left-5 top-5 rounded-full border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md"
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
            <Icon className="h-10 w-10" style={{ color: "#FDBF38" }} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">
            {section.tag}
          </span>
        </motion.div>
        {/* Gold shimmer line on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-full"
          style={{ backgroundColor: "#FDBF38" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      {/* Text Panel */}
      <div className="relative flex flex-col justify-center overflow-hidden p-10 md:p-14 lg:w-7/12">
        {/* Bg orb */}
        <motion.div
          className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: "#7A003C" }}
          animate={{ opacity: hovered ? 0.08 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: "#FDBF38" }}
          animate={{ opacity: hovered ? 0.04 : 0 }}
          transition={{ duration: 0.5 }}
        />
        {/* Label bar */}
        <motion.div
          className="mb-3 flex items-center gap-3"
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="h-1 rounded-full"
            style={{ backgroundColor: "#7A003C" }}
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#7A003C" }}
          >
            CRCE
          </span>
        </motion.div>
        <motion.h2
          className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 md:text-3xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {section.title}
        </motion.h2>
        {/* Divider */}
        <motion.div
          className="mb-5 h-px rounded-full"
          style={{
            background: "linear-gradient(90deg, #7A003C33, transparent)",
          }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
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

function StatsBar() {
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
          background: "linear-gradient(135deg, #7A003C 0%, #5a0029 100%)",
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
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-25 blur-3xl"
          style={{ backgroundColor: "#FDBF38" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "#FDBF38" }}
          animate={{ scale: [1.2, 0.9, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start gap-8 p-10 md:flex-row md:p-14">
          {/* Left: Big label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-shrink-0 flex-col items-center gap-3 md:items-start md:pt-1"
          >
            <Target className="h-8 w-8" style={{ color: "#FDBF38" }} />
            <span
              className="text-2xl font-black uppercase tracking-widest md:text-3xl"
              style={{
                color: "#FDBF38",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
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
            The Research Centre for Community Oriented Entrepreneurship (CRCE)
            was born out of the Reframery initiative, a response to the
            disproportionate impact of COVID-19 on immigrant women, persons with
            disabilities, and minority-owned businesses. Recognizing the unique
            challenges and underrepresentation in entrepreneurship among these
            groups, CRCE aims to foster sustainable and inclusive business
            practices, contributing to a more equitable entrepreneurial
            landscape.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(heroScroll, [0, 1], [0, 130])
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#7A003C", minHeight: "65vh" }}
      >
        {/* Parallax photo */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://www.crce.info/_astro/banner.EKBvg0l8_Z9FPRt.webp")`,
            y: heroY,
            opacity: 0.38,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(122,0,60,0.5) 0%, rgba(122,0,60,0.25) 45%, rgba(122,0,60,0.9) 100%)",
          }}
        />
        {/* Animated orbs */}
        {[
          {
            size: 600,
            color: "rgba(253,191,56,0.12)",
            x: -250,
            y: -120,
            dur: 14,
          },
          {
            size: 450,
            color: "rgba(255,255,255,0.05)",
            x: 350,
            y: 220,
            dur: 17,
          },
          { size: 350, color: "rgba(122,0,60,0.18)", x: 120, y: 320, dur: 11 },
          { size: 200, color: "rgba(253,191,56,0.1)", x: -100, y: 280, dur: 9 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute rounded-full blur-3xl"
            style={{
              width: orb.size,
              height: orb.size,
              backgroundColor: orb.color,
              left: `calc(50% + ${orb.x}px)`,
              top: `calc(50% + ${orb.y}px)`,
              transform: "translate(-50%,-50%)",
            }}
            animate={{ scale: [1, 1.35, 1], x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{
              duration: orb.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.8,
            }}
          />
        ))}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-5xl px-4 py-14 text-center text-white md:py-20"
          style={{ opacity: heroOpacity }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2.5 shadow-lg backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <Target className="h-4 w-4" style={{ color: "#FDBF38" }} />
            </motion.div>
            <span className="text-sm font-semibold tracking-wide">
              CRCE — About Us
            </span>
          </motion.div>
          {/* Title — staggered words */}
          <div className="mb-7">
            {["About", "CRCE"].map((word, wi) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 50, skewY: 4 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + wi * 0.18,
                  type: "spring",
                  stiffness: 90,
                }}
                className="block text-6xl font-black leading-none tracking-tight md:text-8xl"
                style={
                  wi === 1
                    ? {
                        color: "#FDBF38",
                        textShadow:
                          "0 0 60px rgba(253,191,56,0.45), 0 4px 30px rgba(0,0,0,0.4)",
                      }
                    : { textShadow: "0 4px 30px rgba(0,0,0,0.4)" }
                }
              >
                {word}
              </motion.div>
            ))}
          </div>
          {/* Subtitle pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mx-auto inline-flex max-w-3xl items-center gap-2.5 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white shadow-lg backdrop-blur-md md:text-base"
            style={{ background: "rgba(90,0,41,0.65)" }}
          >
            The Research Centre for Community Oriented Entrepreneurship —
            fostering sustainable and inclusive business practices for a more
            equitable entrepreneurial landscape.
          </motion.div>
          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              { val: "McMaster", sub: "University" },
              { val: "DeGroote", sub: "School of Business" },
              { val: "Community", sub: "Oriented Research" },
            ].map((s, i) => (
              <motion.div
                key={s.val}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.75 + i * 0.1,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-default rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-center shadow-lg backdrop-blur-md"
              >
                <div
                  className="text-sm font-black"
                  style={{ color: "#FDBF38" }}
                >
                  {s.val}
                </div>
                <div className="mt-0.5 text-xs uppercase tracking-widest text-white/55">
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
        {/* Wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 80"
            className="h-auto w-full"
            style={{ fill: "#f5f4f2" }}
          >
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>
      {/* ── TICKER ── */}
      <Ticker />
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-gray-400 sm:px-6 lg:px-8">
        <a href="/" className="transition-colors hover:text-gray-700">
          Home
        </a>
        <span className="mx-2 text-gray-300">›</span>
        <span className="font-semibold text-gray-700">About</span>
      </div>
      {/* ── STATS BAR ── */}
      <StatsBar />
      {/* ── SECTION CARDS ── */}
      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-16 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <SectionCard key={section.title} section={section} index={index} />
        ))}
      </section>
      {/* ── BOTTOM CTA ── */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #7A003C 0%, #4a0024 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -right-20 -top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#FDBF38" }}
              animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-15 blur-3xl"
              style={{ backgroundColor: "#C0392B" }}
              animate={{ scale: [1.2, 0.8, 1.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="relative z-10 p-12 text-center text-white md:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            >
              <Handshake className="h-3 w-3" style={{ color: "#FDBF38" }} />{" "}
              Partner With Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-black md:text-4xl"
            >
              Partner with CRCE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              Join our growing network of researchers, entrepreneurs, and
              community builders working toward inclusive, sustainable
              entrepreneurship.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="https://reframery.org/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.07,
                  y: -4,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold shadow-2xl"
                style={{ backgroundColor: "#FDBF38", color: "#7A003C" }}
              >
                Explore Reframery <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.07, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold transition-colors hover:bg-white/10"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
