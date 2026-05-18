import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  Globe,
  Handshake,
  Lightbulb,
  MapPin,
  Mic,
  Network,
  Users,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

/* ─── DATA ─────────────────────────────────────────────────────────── */
const activities = [
  {
    label: "Keynote Speakers",
    desc: "Two invited individuals from Kenya will share their entrepreneurial stories — including the challenges they faced and how they overcame hardship.",
    Icon: Mic,
    number: "01",
  },
  {
    label: "Panels",
    desc: "Current discourse on entrepreneurship and the Global Majority — featuring scholars, practitioners, and community leaders in open dialogue.",
    Icon: Users,
    number: "02",
  },
  {
    label: "Research Presentations",
    desc: "Cutting-edge academic and applied work exploring current field impacts and innovations in Global Majority entrepreneurship contexts.",
    Icon: BookOpen,
    number: "03",
  },
  {
    label: "Interactive Workshops",
    desc: "Hands-on sessions on field-building, next steps, and calls to action — moving from insight to impact.",
    Icon: Lightbulb,
    number: "04",
  },
  {
    label: "Networking Sessions",
    desc: "Meaningful connections across disciplines, geographies, and sectors — building lasting relationships across the global research community.",
    Icon: Network,
    number: "05",
  },
  {
    label: "Research Collaboration Opportunities",
    desc: "Deep dives on pressing issues and emerging solutions across the Global Majority — fostering new interdisciplinary partnerships.",
    Icon: Handshake,
    number: "06",
  },
]

const stats = [
  { value: "3", suffix: " Days", label: "of Programming" },
  { value: "6", suffix: "+", label: "Activity Types" },
  { value: "2", suffix: "", label: "Keynote Speakers" },
]

/* ─── ANIMATED COUNTER ─────────────────────────────────────────────── */
function AnimatedCounter({ value, suffix }: any) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const num = parseInt(value)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = Math.ceil(num / 30)
    const timer = setInterval(() => {
      start += step
      if (start >= num) {
        setDisplay(num)
        clearInterval(timer)
      } else setDisplay(start)
    }, 40)
    return () => clearInterval(timer)
  }, [isInView, num])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

/* ─── ACTIVITY CARD ─────────────────────────────────────────────────── */
function ActivityCard({ item, index }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const [hovered, setHovered] = useState(false)
  const { Icon } = item

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
        className="absolute left-0 top-0 h-0.5 rounded-b-full"
        style={{ backgroundColor: "#FDBF38" }}
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
        <Icon className="h-7 w-7" style={{ color: "#FDBF38" }} />
      </motion.div>
      <h3
        className="mb-2 text-lg font-black leading-snug"
        style={{ color: "#e8dcc8" }}
      >
        {item.label}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#c9b5a0" }}>
        {item.desc}
      </p>
    </motion.div>
  )
}

/* ─── ANIMATED GLOBE SVG ────────────────────────────────────────────── */
function AnimatedGlobe() {
  return (
    <div className="relative mx-auto h-80 w-80 md:h-[440px] md:w-[440px]">
      {/* Outermost pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid rgba(122,0,60,0.4)" }}
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Outer spinning ring with glow */}
      <motion.div
        className="absolute inset-2 rounded-full"
        style={{
          border: "2px solid #7A003C",
          boxShadow:
            "0 0 18px rgba(122,0,60,0.7), inset 0 0 18px rgba(122,0,60,0.2)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle spinning ring (dashed, opposite direction) */}
      <motion.div
        className="absolute inset-10 rounded-full"
        style={{
          border: "1.5px dashed rgba(253,191,56,0.5)",
          boxShadow: "0 0 12px rgba(253,191,56,0.25)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner ring (dotted, same direction as outer) */}
      <motion.div
        className="absolute inset-20 rounded-full"
        style={{
          border: "1px dotted rgba(122,0,60,0.6)",
          boxShadow: "0 0 8px rgba(122,0,60,0.4)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner sphere */}
      <div
        className="absolute inset-28 flex items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #7A003C, #4a0024 60%, #2a0014)",
          boxShadow: "0 0 40px rgba(122,0,60,0.8), 0 0 80px rgba(122,0,60,0.4)",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe
            className="md:w-18 md:h-18 h-14 w-14"
            style={{
              color: "#FDBF38",
              filter: "drop-shadow(0 0 12px rgba(253,191,56,0.9))",
            }}
          />
        </motion.div>
      </div>

      {/* Orbiting dots on outer ring */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={`outer-${i}`}
          className="absolute"
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute h-3 w-3 rounded-full"
            style={{
              top: "2px",
              left: "calc(50% - 6px)",
              backgroundColor: "#FDBF38",
              boxShadow:
                "0 0 14px rgba(253,191,56,1), 0 0 28px rgba(253,191,56,0.6)",
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.33,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Orbiting dots on middle ring (opposite) */}
      {[30, 150, 270].map((deg, i) => (
        <motion.div
          key={`mid-${i}`}
          className="absolute"
          style={{
            width: "calc(100% - 80px)",
            height: "calc(100% - 80px)",
            top: "40px",
            left: "40px",
          }}
          animate={{ rotate: [-deg, -(deg + 360)] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute h-2.5 w-2.5 rounded-full"
            style={{
              top: "0px",
              left: "calc(50% - 5px)",
              backgroundColor: "#c9a0dc",
              boxShadow:
                "0 0 10px rgba(201,160,220,0.9), 0 0 20px rgba(201,160,220,0.5)",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────────── */
export default function Conference() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5ede2" }}>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(160deg, #12000c 0%, #7A003C 50%, #3a0020 100%)",
        }}
      >
        {/* Animated dot grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating orbs */}
        {[
          {
            size: 800,
            color: "rgba(253,191,56,0.08)",
            x: -400,
            y: -200,
            dur: 18,
          },
          { size: 600, color: "rgba(122,0,60,0.4)", x: 400, y: 200, dur: 22 },
          {
            size: 400,
            color: "rgba(253,191,56,0.06)",
            x: 100,
            y: 350,
            dur: 14,
          },
          { size: 300, color: "rgba(180,0,80,0.2)", x: -200, y: 300, dur: 16 },
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
            animate={{ scale: [1, 1.4, 1], x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{
              duration: orb.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}

        <motion.div
          className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20 text-center text-white"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 backdrop-blur-md"
            style={{ background: "rgba(253,191,56,0.1)" }}
          >
            <motion.span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#FDBF38" }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Hosted by
            </span>
            <span
              className="text-sm font-black tracking-widest"
              style={{ color: "#FDBF38" }}
            >
              CRCE
            </span>
            <span className="hidden text-xs text-white/50 sm:inline">
              Centre for Research on Community Oriented Entrepreneurship
            </span>
          </motion.div>

          {/* Main title — letters stagger in */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              type: "spring",
              stiffness: 60,
            }}
            className="mb-3 text-5xl font-black leading-none tracking-tight md:text-7xl lg:text-8xl"
          >
            Entrepreneurship
          </motion.h1>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.28,
              type: "spring",
              stiffness: 60,
            }}
            className="mb-8 text-5xl font-black leading-none tracking-tight md:text-7xl lg:text-8xl"
          >
            in the{" "}
            <span
              style={{
                color: "#FDBF38",
                filter:
                  "drop-shadow(0 0 20px rgba(253,191,56,0.9)) drop-shadow(0 0 40px rgba(253,191,56,0.6))",
              }}
            >
              Global Majority
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-white/70 md:text-xl"
          >
            Rethinking Entrepreneurship Beyond Traditional Growth Models
          </motion.p>

          {/* Date / Time / Location pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            {[
              { Icon: Calendar, text: "September 21–23, 2026" },
              { Icon: Clock, text: "9:00 a.m. Daily" },
              { Icon: MapPin, text: "The Hub · McMaster University" },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-2.5 rounded-full px-5 py-3 backdrop-blur-md"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Icon
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "#FDBF38" }}
                />
                <span className="text-sm font-semibold text-white/90">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
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

        {/* Bottom wave into dark */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 80"
            className="h-auto w-full"
            style={{ fill: "#0d0008" }}
          >
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section
        style={{
          backgroundColor: "#f5ede2",
          borderTop: "1px solid rgba(122,0,60,0.15)",
          borderBottom: "1px solid rgba(122,0,60,0.15)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="grid grid-cols-1 justify-items-center gap-12 md:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="mb-1 text-4xl font-black md:text-5xl"
                  style={{ color: "#7A003C" }}
                >
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#7A003C" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ backgroundColor: "#f5ede2" }} className="py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <motion.div
                  className="h-1 w-12 rounded-full"
                  style={{ backgroundColor: "#7A003C" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#7A003C" }}
                >
                  About the Conference
                </span>
              </div>
              <h2
                className="mb-6 text-3xl font-black leading-tight md:text-4xl"
                style={{ color: "#1a1a1a" }}
              >
                Exploring entrepreneurship in contexts of{" "}
                <span style={{ color: "#7A003C" }}>
                  constraint, informality,
                </span>{" "}
                and global diversity.
              </h2>
              <p
                className="text-base leading-relaxed md:text-lg"
                style={{ color: "#4a4a4a" }}
              >
                Hosted by CRCE at McMaster University, this international
                conference brings together scholars, practitioners, advocates,
                policymakers, and community leaders committed to understanding
                entrepreneurship as it is lived and practised across the Global
                Majority — challenging dominant frameworks shaped by
                high-income, formally institutionalized contexts.
              </p>
              <motion.div
                className="mt-8 h-px w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(253,191,56,0.5), transparent)",
                }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Globe graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 60 }}
            >
              <AnimatedGlobe />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES GRID ── */}
      <section className="py-24" style={{ backgroundColor: "#f5ede2" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div
                className="h-px w-10 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#7A003C" }}
              >
                What to Expect
              </span>
              <div
                className="h-px w-10 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
            </div>
            <h2
              className="mb-3 text-3xl font-black md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              Conference Activities
            </h2>
            <p
              className="mx-auto max-w-2xl text-base leading-relaxed"
              style={{ color: "#4a4a4a" }}
            >
              Three days of immersive programming designed to foster meaningful
              dialogue across disciplines, geographies, and sectors.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((item, i) => (
              <ActivityCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VENUE ── */}
      <section className="py-24" style={{ backgroundColor: "#f5ede2" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div
                className="h-px w-10 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#7A003C" }}
              >
                Location
              </span>
              <div
                className="h-px w-10 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
            </div>
            <h2
              className="mb-3 text-3xl font-black md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              Venue & Details
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Venue image card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl md:col-span-2"
              style={{
                border: "2px solid #7A003C",
                boxShadow:
                  "0 0 30px rgba(122,0,60,0.6), 0 0 60px rgba(122,0,60,0.3)",
              }}
            >
              <div className="relative h-96 overflow-hidden">
                <motion.img
                  src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/99f84475a_image.png"
                  alt="The Hub at McMaster University"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,0,8,0.9) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-5 left-6">
                  <span className="text-xl font-black text-white drop-shadow">
                    The Hub
                  </span>
                  <p className="text-sm text-white/70">
                    McMaster University · Hamilton, Ontario
                  </p>
                </div>
                {/* Gold corner accent */}
                <div
                  className="absolute left-0 top-0 h-1 w-24"
                  style={{ backgroundColor: "#FDBF38" }}
                />
              </div>
              {/* Info section below image */}
              <div
                className="flex items-center gap-4 p-8"
                style={{
                  background: "linear-gradient(135deg, #130009, #2a0018)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#7A003C" }}
                >
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    The Hub, McMaster University
                  </h3>
                  <p className="text-base" style={{ color: "#c9b5a0" }}>
                    A state-of-the-art collaborative space at the heart of
                    McMaster's campus.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Side cards */}
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1 rounded-3xl p-6"
                style={{
                  background: "linear-gradient(135deg, #130009, #2a0018)",
                  border: "2px solid #7A003C",
                  boxShadow:
                    "0 0 20px rgba(122,0,60,0.6), 0 0 40px rgba(122,0,60,0.3)",
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#7A003C" }}
                >
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h4
                  className="mb-1 text-lg font-black"
                  style={{ color: "#e8dcc8" }}
                >
                  September 21–23, 2026
                </h4>
                <p className="text-sm" style={{ color: "#d4c4aa" }}>
                  Starting at 9:00 a.m. daily
                </p>
                <div className="mt-4 flex gap-2">
                  {["21", "22", "23"].map((d) => (
                    <div
                      key={d}
                      className="flex-1 rounded-lg py-2 text-center text-sm font-black"
                      style={{
                        backgroundColor: "rgba(253,191,56,0.1)",
                        color: "#FDBF38",
                        border: "1px solid rgba(253,191,56,0.2)",
                      }}
                    >
                      Sep {d}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-1 flex-col justify-between rounded-3xl p-6"
                style={{
                  background: "linear-gradient(135deg, #130009, #2a0018)",
                  border: "2px solid #7A003C",
                  boxShadow:
                    "0 0 20px rgba(122,0,60,0.6), 0 0 40px rgba(122,0,60,0.3)",
                }}
              >
                <div>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#7A003C" }}
                  >
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h4
                    className="mb-1 text-lg font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    Directions
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#d4c4aa" }}
                  >
                    Get directions to The Hub at McMaster University.
                  </p>
                </div>
                <motion.a
                  href="https://www.google.com/maps/place/The+Hub/@43.2603553,-79.9201368,2391m/data=!3m1!1e3!4m6!3m5!1s0x882c9b003258dda9:0xd6053db8f5e545ce!8m2!3d43.2649813!4d-79.9169819!16s%2Fg%2F11vywzr8y_?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(253,191,56,0.2)",
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold"
                  style={{ backgroundColor: "#7A003C", color: "white" }}
                >
                  Get Directions <ArrowRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEAKERS ── */}
      <section
        className="relative overflow-hidden py-28"
        style={{
          background: "linear-gradient(135deg, #7A003C 0%, #4a0024 100%)",
        }}
      >
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Animated orbs */}
        <motion.div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(253,191,56,0.15)" }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          animate={{ scale: [1.2, 0.8, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 rounded-full bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Speakers
              </span>
              <div className="h-px w-12 rounded-full bg-white/30" />
            </div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6 inline-block"
            >
              <Mic
                className="mx-auto h-14 w-14"
                style={{
                  color: "#FDBF38",
                  filter: "drop-shadow(0 0 20px rgba(253,191,56,0.6))",
                }}
              />
            </motion.div>
            <h2 className="mb-8 text-3xl font-black leading-tight md:text-5xl">
              Keynote Speakers & Presenters
            </h2>
            <div
              className="mx-auto max-w-2xl rounded-2xl p-8"
              style={{
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="mb-4 text-lg leading-relaxed text-white/80">
                The conference will feature two invited individuals from{" "}
                <strong className="text-white" style={{ color: "#FDBF38" }}>
                  Kenya
                </strong>{" "}
                who will share their entrepreneurial stories — including the
                challenges they faced and how they overcame hardship.
              </p>
              <p className="text-sm text-white/50">
                Further speaker announcements will be made closer to the
                conference date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SCHEDULE NOTE ── */}
      <section className="py-16" style={{ backgroundColor: "#f5ede2" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-5 rounded-2xl p-8"
            style={{
              background: "linear-gradient(135deg, #1a0a00, #2a1500)",
              border: "1px solid rgba(253,191,56,0.25)",
            }}
          >
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "rgba(253,191,56,0.15)",
                border: "1px solid rgba(253,191,56,0.3)",
              }}
            >
              <Calendar className="h-6 w-6" style={{ color: "#FDBF38" }} />
            </div>
            <div>
              <h4
                className="mb-2 text-lg font-bold"
                style={{ color: "#e8dcc8" }}
              >
                Schedule Coming Soon
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#d4c4aa" }}
              >
                The full conference schedule is still being finalized and will
                be released closer to the conference date, approximately two
                months before the event.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ORGANIZED BY ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #f4ebe0 0%, #f9f3eb 50%, #f0e8dd 100%)",
        }}
        className="py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: Organized By Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="mb-6 text-5xl font-black leading-tight md:text-6xl"
                style={{ color: "#7A003C" }}
              >
                Organized By
              </h2>
              <div
                className="h-1 w-20 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
            </motion.div>

            {/* Right: Both Cards */}
            <div className="relative grid grid-cols-1 gap-5">
              {/* Animated orbiting rings */}
              <motion.div
                className="pointer-events-none absolute -inset-12"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute inset-0 rounded-full border border-dashed opacity-30"
                  style={{ borderColor: "#7A003C" }}
                />
              </motion.div>
              <motion.div
                className="pointer-events-none absolute -inset-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute inset-0 rounded-full border border-dotted opacity-20"
                  style={{ borderColor: "#FDBF38" }}
                />
              </motion.div>

              {/* Orbiting glowing dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="pointer-events-none absolute h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: "#FDBF38",
                    boxShadow: "0 0 12px rgba(253,191,56,0.9)",
                    left: "calc(50% + 120px)",
                    top: "50%",
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                    x:
                      Math.cos((angle * Math.PI) / 180) * 120 -
                      Math.cos(((angle + 360) * Math.PI) / 180) * 120,
                    y:
                      Math.sin((angle * Math.PI) / 180) * 120 -
                      Math.sin(((angle + 360) * Math.PI) / 180) * 120,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* McMaster & DeGroote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 0 30px rgba(122,0,60,0.5), 0 0 60px rgba(122,0,60,0.2)",
                }}
                className="relative z-10 flex items-center gap-6 rounded-2xl p-7"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
                  border: "2px solid #7A003C",
                  boxShadow: "0 0 20px rgba(122,0,60,0.4)",
                }}
              >
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(253,191,56,0.12)",
                    border: "1px solid rgba(253,191,56,0.3)",
                  }}
                >
                  <span
                    className="text-xl font-black"
                    style={{ color: "#FDBF38" }}
                  >
                    M
                  </span>
                </div>
                <div>
                  <p
                    className="mb-1 text-xs font-bold uppercase tracking-widest"
                    style={{ color: "rgba(253,191,56,0.7)" }}
                  >
                    DeGroote School of Business
                  </p>
                  <p
                    className="text-xl font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    McMaster University
                  </p>
                </div>
              </motion.div>

              {/* CRCE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 0 30px rgba(122,0,60,0.5), 0 0 60px rgba(122,0,60,0.2)",
                }}
                className="relative z-10 flex items-center gap-6 rounded-2xl p-7"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
                  border: "2px solid #7A003C",
                  boxShadow: "0 0 20px rgba(122,0,60,0.4)",
                }}
              >
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(253,191,56,0.12)",
                    border: "1px solid rgba(253,191,56,0.3)",
                  }}
                >
                  <span
                    className="text-sm font-black"
                    style={{ color: "#FDBF38" }}
                  >
                    CRCE
                  </span>
                </div>
                <div>
                  <p
                    className="mb-1 text-xl font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    CRCE
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#c9b5a0" }}
                  >
                    Centre for Research on Community
                    <br />
                    Oriented Entrepreneurship
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
