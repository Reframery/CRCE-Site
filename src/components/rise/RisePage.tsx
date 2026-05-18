import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, ChevronDown, Globe, Users } from "lucide-react"
import { useRef, useState } from "react"

const sections = [
  {
    title: "RISE Mentorship",
    tag: "Mentorship",
    accentColor: "#7A003C",
    Icon: Users,
    paragraphs: [
      "At the core of RISE's mission is the development of a virtual mentoring model, designed to connect entrepreneurs from all walks of life with mentors around the globe. This model prioritizes inclusivity and accessibility, ensuring that marginalized entrepreneurs find the guidance and support they need.",
      "Our mentoring program fosters meaningful connections, offering tailored advice that aligns with each entrepreneur's unique journey. We leverage a vast network of experienced business leaders and innovators, ensuring mentees have access to a wealth of knowledge and experience.",
    ],
  },
  {
    title: "Interdisciplinary Entrepreneurship Programs",
    tag: "Programs",
    accentColor: "#7A003C",
    Icon: BookOpen,
    paragraphs: [
      "RISE champions the integration of entrepreneurship training within non-business curricula, breaking down the traditional silos that exist within academic institutions. By partnering with departments across faculties and universities worldwide, we introduce entrepreneurship as a vital skill set.",
      "Through workshops, courses, and experiential learning opportunities, students from various academic backgrounds are exposed to the fundamentals of entrepreneurship — ensuring a diverse pool of future entrepreneurs equipped to contribute to societal progress.",
    ],
  },
  {
    title: "Collaborate with RISE",
    tag: "Partnership",
    accentColor: "#7A003C",
    Icon: Globe,
    paragraphs: [
      "We are actively seeking partners and collaborators who share our vision of a more inclusive, diverse, and sustainable entrepreneurial world. Whether you're an educational institution, a business leader, or an organization passionate about social entrepreneurship — there's a place for you in the RISE community.",
      "Together, we can create a vibrant community where every entrepreneur has the support, resources, and opportunities to thrive. Let's work together to drive meaningful change.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
]

const stats = [
  { value: "Global", label: "Mentor Network" },
  { value: "Inclusive", label: "Curriculum Design" },
  { value: "Impact", label: "Driven Mission" },
  { value: "Diverse", label: "Community Focus" },
]

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

function SectionCard({ section, index }: any) {
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
          background: "linear-gradient(135deg, #7A003C 0%, #5a0029 100%)",
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
        {/* Gold shimmer on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-full"
          style={{ backgroundColor: "#FDBF38" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Text Panel */}
      <div className="relative flex flex-col justify-center overflow-hidden p-10 md:p-14 lg:w-7/12">
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
            RISE Program
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

        <motion.div
          className="mb-5 h-px rounded-full"
          style={{
            background: "linear-gradient(90deg, #7A003C33, transparent)",
          }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {section.paragraphs.map((para: string, i: number) => (
          <motion.p
            key={i}
            className="mb-4 text-sm leading-relaxed text-gray-500 last:mb-0 md:text-base"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
          >
            {para}
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
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white shadow-lg transition-shadow hover:shadow-2xl"
              style={{ backgroundColor: "#7A003C" }}
              {...(section.cta.isExternal
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

export default function RisePage() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  // @ts-expect-error
  const heroY = useTransform(heroScroll, [0, 1], [0, 120])
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
        style={{ backgroundColor: "#7A003C" }}
      >
        {/* Animated dot grid bg */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.6) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating orbs */}
        {[
          {
            size: 500,
            color: "rgba(253,191,56,0.15)",
            x: -200,
            y: -100,
            dur: 12,
          },
          {
            size: 400,
            color: "rgba(255,255,255,0.06)",
            x: 300,
            y: 200,
            dur: 15,
          },
          {
            size: 300,
            color: "rgba(52,152,219,0.12)",
            x: 100,
            y: 300,
            dur: 10,
          },
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
            animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{
              duration: orb.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
        <motion.div
          className="relative z-10 px-4 py-14 text-center text-white md:py-20"
          style={{ opacity: heroOpacity }}
        >
          {/* RISE Logo + wordmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="mb-6 flex items-center justify-center gap-5"
          >
            <motion.div
              className="h-16 w-16 drop-shadow-2xl"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <polygon points="50,5 75,27.5 50,50" fill="#E74C3C" />
                <polygon points="75,27.5 95,50 50,50" fill="#F39C12" />
                <polygon points="50,50 95,50 75,72.5" fill="#27AE60" />
                <polygon points="50,50 75,72.5 50,95" fill="#3498DB" />
                <polygon points="50,50 50,95 25,72.5" fill="#9B59B6" />
                <polygon points="5,50 50,50 25,72.5" fill="#1ABC9C" />
                <polygon points="5,27.5 50,50 25,27.5" fill="#E67E22" />
                <polygon points="5,27.5 50,5 50,50" fill="#2ECC71" />
              </svg>
            </motion.div>
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-6xl font-thin leading-none tracking-[0.2em] md:text-7xl"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
              >
                RISE
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-2 h-0.5 w-full origin-left"
                style={{ backgroundColor: "#FDBF38" }}
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/70 md:text-sm"
          >
            Research · Inclusion · Social Entrepreneurship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
          >
            Situated at the intersection of cutting-edge research and practical
            social change — RISE is a movement towards fostering sustainable,
            inclusive entrepreneurship for everyone.
          </motion.p>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-6 flex flex-wrap justify-center gap-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="cursor-default rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center shadow-lg backdrop-blur-md"
              >
                <div
                  className="text-sm font-black"
                  style={{ color: "#FDBF38" }}
                >
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs uppercase tracking-widest text-white/55">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
        {/* Wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            className="h-auto w-full"
            style={{ fill: "#f5f4f2" }}
          >
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-gray-400 sm:px-6 lg:px-8">
        <a href="/" className="transition-colors hover:text-gray-700">
          Home
        </a>
        <span className="mx-2 text-gray-300">›</span>
        <span className="font-semibold text-gray-700">RISE</span>
      </div>
      {/* Cards */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 pb-16 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <SectionCard key={section.title} section={section} index={index} />
        ))}
      </section>
      {/* ── Bottom CTA ── */}
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
          {/* Background shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#FDBF38" }}
              animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-15 blur-3xl"
              style={{ backgroundColor: "#3498DB" }}
              animate={{ scale: [1.2, 0.8, 1.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Geometric line accents */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="relative z-10 p-12 text-center text-white md:p-20">
            {/* Mini logo */}
            <motion.div
              className="mx-auto mb-6 h-16 w-16"
              whileInView={{ rotate: [0, 360] }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-80">
                <polygon points="50,5 75,27.5 50,50" fill="#E74C3C" />
                <polygon points="75,27.5 95,50 50,50" fill="#F39C12" />
                <polygon points="50,50 95,50 75,72.5" fill="#27AE60" />
                <polygon points="50,50 75,72.5 50,95" fill="#3498DB" />
                <polygon points="50,50 50,95 25,72.5" fill="#9B59B6" />
                <polygon points="5,50 50,50 25,72.5" fill="#1ABC9C" />
                <polygon points="5,27.5 50,50 25,27.5" fill="#E67E22" />
                <polygon points="5,27.5 50,5 50,50" fill="#2ECC71" />
              </svg>
            </motion.div>
            <h2 className="mb-4 text-3xl font-black md:text-4xl">
              Learn more about the RISE movement
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Partner with us to create a more inclusive entrepreneurial world.
              Every collaboration brings us closer to meaningful, lasting
              change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.07,
                  y: -3,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold shadow-2xl"
                style={{ backgroundColor: "#FDBF38", color: "#7A003C" }}
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold transition-colors hover:bg-white/10"
              >
                Learn About CRCE <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
