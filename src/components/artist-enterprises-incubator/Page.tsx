import { useRef, useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import {
  Palette,
  Users,
  BookOpen,
  FileText,
  ArrowRight,
  ChevronDown,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  Sparkles,
  Handshake,
  Building2,
} from "lucide-react"

/* ─── DATA ─────────────────────────────────────────────────────────── */
const criteria = [
  {
    label: "Earn Through Your Practice",
    desc: "You currently have an artistic practice and want to develop ways of earning income through your work.",
  },
  {
    label: "A Developed Idea",
    desc: "You have a specific and reasonably developed idea for an arts-based product, service, project, or business and have already begun exploring or working on it.",
  },
  {
    label: "Already Selling Your Work",
    desc: "You have already taken steps to sell, exhibit, promote, commission, license, teach, perform, or otherwise generate income through your artistic work.",
  },
  {
    label: "Strengthen Your Business",
    desc: "You currently operate an arts practice or creative business and want support strengthening, improving, or expanding it.",
  },
  {
    label: "Community-Based Initiative",
    desc: "You are developing a social enterprise, collective, cooperative, or community-based initiative centred on artistic or creative work.",
  },
]

const topics = [
  {
    label: "Audience Building",
    desc: "Audience building through and beyond social media.",
    Icon: Users,
  },
  {
    label: "Pricing & Sales",
    desc: "Pricing, sales, and communicating the value of creative work.",
    Icon: DollarSign,
  },
  {
    label: "Revenue Stacking",
    desc: "Revenue stacking and sustainable income streams.",
    Icon: Sparkles,
  },
  {
    label: "Bookkeeping",
    desc: "Bookkeeping and financial management.",
    Icon: BookOpen,
  },
  {
    label: "Grant Writing",
    desc: "Grant writing and funding opportunities.",
    Icon: FileText,
  },
  {
    label: "Business Models",
    desc: "Business model development for artists.",
    Icon: Handshake,
  },
  {
    label: "Social Enterprise",
    desc: "Social enterprise and community-based creative work.",
    Icon: Building2,
  },
  {
    label: "Cooperative Models",
    desc: "Artist collectives and cooperative models.",
    Icon: Users,
  },
  {
    label: "Institutional Partners",
    desc: "Working with galleries, institutions, funders, and community partners.",
    Icon: Building2,
  },
]

const keyDetails = [
  { Icon: Calendar, label: "Program Length", value: "12 weeks" },
  { Icon: Clock, label: "Schedule", value: "One session per week" },
  { Icon: Building2, label: "Format", value: "Hybrid (in-person + online)" },
  {
    Icon: MapPin,
    label: "Location",
    value: "McMaster Main Campus (1280 Main St W) + Zoom",
  },
  {
    Icon: Calendar,
    label: "Program Dates",
    value: "Mid–late September 2026 (TBA)",
  },
  { Icon: DollarSign, label: "Cost", value: "Free" },
  { Icon: FileText, label: "Application Deadline", value: "August 23" },
]

const partners = [
  {
    name: "CRCE",
    sub: "McMaster University's Reframery Incubator",
    role: "Lead",
    logo: "https://www.crce.info/_astro/mcm-dsb-crce.DBTae_cN.png",
    link: "https://www.crce.info/",
  },
  {
    name: "The Hamilton Artists Inc.",
    role: "Lead",
    logo: "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/3e18d5931_AltLogo.png",
    link: "https://www.theinc.ca/",
  },
  {
    name: "Marinucci Entrepreneurial Bridge",
    sub: "DeGroote School of Business",
    role: "Collaborator",
    logo: "https://www.crce.info/_astro/McMaster_Logo.BKwD_I6F_1HZu29.webp",
    link: "https://degroote.mcmaster.ca/tag/marinucci-entrepreneurial-bridge/",
  },
  {
    name: "McMaster Museum of Art",
    role: "Collaborator",
    logo: "https://www.crce.info/_astro/McMaster_Logo.BKwD_I6F_1HZu29.webp",
    link: "https://museum.mcmaster.ca/",
  },
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

const stats = [
  { value: "12", suffix: " Weeks", label: "of Training" },
  { value: "9", suffix: "+", label: "Topics Covered" },
  { value: "0", suffix: "", label: "Cost — Free" },
]

/* ─── TOPIC CARD ────────────────────────────────────────────────────── */
function TopicCard({ item, index }: any) {
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
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(253,191,56,0.12) 0%, transparent 70%)",
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute top-0 left-0 h-0.5 rounded-b-full"
        style={{ backgroundColor: "#FDBF38" }}
        animate={{ width: hovered ? "100%" : "30%" }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
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
        className="mb-2 text-lg leading-snug font-black"
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

/* ─── MAIN PAGE ─────────────────────────────────────────────────────── */
export default function IncubatorPage() {
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
        {/* Header logos */}
        <div className="absolute top-6 left-6 z-20 flex items-stretch gap-4">
          <a
            href="https://www.crce.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-2xl bg-white px-5 py-3 shadow-lg"
          >
            <img
              src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/1ee4e49a7_CRCElogo_maroonandblack.png"
              alt="CRCE"
              className="block w-auto"
              style={{ height: "52px" }}
            />
          </a>
          <a
            href="https://www.theinc.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-2xl bg-white px-5 py-3 shadow-lg"
          >
            <img
              src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/99644ae97_AltLogo.png"
              alt="Hamilton Artists Inc."
              className="block w-auto"
              style={{ height: "52px" }}
            />
          </a>
        </div>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
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
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              Hybrid Incubator · Hamilton, ON
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              stiffness: 80,
            }}
            className="mb-6 inline-block"
          >
            <Palette
              className="mx-auto h-16 w-16"
              style={{
                color: "#FDBF38",
                filter: "drop-shadow(0 0 20px rgba(253,191,56,0.6))",
              }}
            />
          </motion.div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              type: "spring",
              stiffness: 60,
            }}
            className="mb-3 text-5xl leading-none font-black tracking-tight md:text-7xl"
          >
            Artist Enterprise
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
            className="mb-8 text-5xl leading-none font-black tracking-tight md:text-7xl"
          >
            <span
              style={{
                color: "#FDBF38",
                filter:
                  "drop-shadow(0 0 20px rgba(253,191,56,0.9)) drop-shadow(0 0 40px rgba(253,191,56,0.6))",
              }}
            >
              Incubator
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium text-white/70 md:text-xl"
          >
            A 12-week entrepreneurship training program for Hamilton-based
            artists building a sustainable creative practice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10"
          >
            <motion.a
              href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclC_bAUK1g1NjWtdr3u9J9lUNDVDOVEzTFYxNlE5VzJDVFJOQk1LMkQzVC4u"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 40px rgba(253,191,56,0.6), 0 20px 40px rgba(253,191,56,0.3)",
              }}
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, #FDBF38 0%, #f5d76e 100%)",
                color: "#1a0010",
                boxShadow: "0 10px 30px rgba(253,191,56,0.4)",
              }}
            >
              Submit Expression of Interest
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            {[
              { Icon: Calendar, text: "Mid–Late September 2026" },
              { Icon: Clock, text: "12 Weeks · Weekly Sessions" },
              { Icon: MapPin, text: "McMaster University + Zoom" },
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
                  className="h-4 w-4 shrink-0"
                  style={{ color: "#FDBF38" }}
                />
                <span className="text-sm font-semibold text-white/90">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10">
          <svg
            viewBox="0 0 1440 80"
            className="h-auto w-full"
            style={{ fill: "#f5ede2" }}
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
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-3 justify-items-center gap-12">
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
                  className="mb-1 text-3xl font-black md:text-5xl"
                  style={{ color: "#7A003C" }}
                >
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#7A003C" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── PROGRAM OVERVIEW ── */}
      <section style={{ backgroundColor: "#f5ede2" }} className="py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className="h-1 w-12 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#7A003C" }}
              >
                Program Overview
              </span>
            </div>
            <h2
              className="mb-8 text-3xl leading-tight font-black md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              Building a{" "}
              <span style={{ color: "#7A003C" }}>
                sustainable creative practice.
              </span>
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed md:text-lg"
              style={{ color: "#4a4a4a" }}
            >
              <p>
                Artists are often expected to do much more than create. They may
                need to manage money, apply for grants, promote their work,
                build audiences, price and sell their work, collaborate with
                others, and navigate galleries, institutions, funders, and
                community spaces. Many artists are asked to do all of this
                without access to the training, networks, or support that can
                make these tasks more manageable.{" "}
                <strong style={{ color: "#7A003C" }}>
                  This program is designed to respond to that need.
                </strong>
              </p>
              <p>
                This{" "}
                <strong style={{ color: "#7A003C" }}>
                  12-week entrepreneurship training program
                </strong>{" "}
                is designed for Hamilton-based artists who want to build a more
                sustainable creative practice, arts business, or
                income-generating artistic work.
              </p>
              <p>
                The sessions will be delivered in a{" "}
                <strong style={{ color: "#7A003C" }}>hybrid format</strong>,
                with a mix of in-person and online learning. In-person sessions
                will take place mainly at McMaster University.
              </p>
              <p>
                The program is led by{" "}
                <strong style={{ color: "#7A003C" }}>
                  McMaster University's Reframery Incubator
                </strong>{" "}
                (at the Centre for Research on Community-Oriented
                Entrepreneurship) and{" "}
                <strong style={{ color: "#7A003C" }}>
                  The Hamilton Artists Inc.
                </strong>
                , in collaboration with the Marinucci Entrepreneurial Bridge at
                the DeGroote School of Business and the McMaster Museum of Art.
              </p>
            </div>

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
        </div>
      </section>

      {/* ── IS THIS PROGRAM FOR YOU ── */}
      <section
        className="relative overflow-hidden py-28"
        style={{
          background: "linear-gradient(135deg, #7A003C 0%, #4a0024 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(253,191,56,0.15)" }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-white sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 rounded-full bg-white/30" />
              <span className="text-xs font-bold tracking-widest text-white/60 uppercase">
                Eligibility
              </span>
              <div className="h-px w-10 rounded-full bg-white/30" />
            </div>
            <h2 className="mb-5 text-3xl leading-tight font-black md:text-5xl">
              Is This Program for You?
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-white/70">
              This program is useful for artists who want to better understand
              the financial, strategic, and business dimensions of sustaining
              artistic work. It is especially intended for artists who face
              barriers to sustaining their creative work.
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/60">
              This may include social, economic, racial, cultural,
              disability-related, gender-based, immigration-related,
              language-related, or other barriers. Applicants do not need to fit
              into one fixed category or disclose personal information they are
              not comfortable sharing.
            </p>
          </motion.div>
          <div className="mb-10 space-y-4">
            {criteria.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0"
                  style={{ color: "#FDBF38" }}
                />
                <div>
                  <h4
                    className="mb-1 text-lg font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    {c.label}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#c9b5a0" }}
                  >
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 text-center"
            style={{
              background: "rgba(253,191,56,0.08)",
              border: "1px solid rgba(253,191,56,0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-lg leading-relaxed text-white/90">
              You do not need to have a registered business, formal business
              training, a completed business plan, or a consistent source of
              revenue. However, applicants should be able to describe their
              current artistic practice or creative business idea, the steps
              they have taken so far, and what they hope to develop through the
              program.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ── TOPICS GRID ── */}
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
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#7A003C" }}
              >
                Curriculum
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
              What The Program Covers
            </h2>
            <p
              className="mx-auto max-w-2xl text-base leading-relaxed"
              style={{ color: "#4a4a4a" }}
            >
              You will take part in practical and discussion-based sessions on
              topics such as:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((item, i) => (
              <TopicCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* ── FIRST STEP (IMPORTANT) ── */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.6) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          className="absolute top-0 left-1/2 h-0.5 w-24 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: "#FDBF38" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5 inline-block"
            >
              <FileText
                className="mx-auto h-14 w-14"
                style={{
                  color: "#FDBF38",
                  filter: "drop-shadow(0 0 20px rgba(253,191,56,0.6))",
                }}
              />
            </motion.div>
            <div className="mb-4 flex items-center justify-center gap-3">
              <div
                className="h-px w-10 rounded-full"
                style={{ backgroundColor: "rgba(253,191,56,0.4)" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#FDBF38" }}
              >
                Important
              </span>
              <div
                className="h-px w-10 rounded-full"
                style={{ backgroundColor: "rgba(253,191,56,0.4)" }}
              />
            </div>
            <h2
              className="mb-4 text-3xl leading-tight font-black md:text-5xl"
              style={{ color: "#e8dcc8" }}
            >
              First Step!
            </h2>
          </motion.div>
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(253,191,56,0.08)",
                border: "1px solid rgba(253,191,56,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                className="text-lg leading-relaxed text-white/80"
                style={{ color: "#c9b5a0" }}
              >
                First, you need to submit an{" "}
                <strong style={{ color: "#FDBF38" }}>
                  expression of interest
                </strong>{" "}
                (link at the end of this page). Then, you'll be invited to a
                short conversation with the program lead. This conversation is{" "}
                <strong style={{ color: "#FDBF38" }}>
                  not a competitive interview
                </strong>
                , but it is mandatory for all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                className="leading-relaxed text-white/80"
                style={{ color: "#c9b5a0" }}
              >
                The purpose of this conversation is to understand whether the
                program is suitable for your needs and whether it can provide
                the kind of entrepreneurship training and support that would be
                useful to you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="leading-relaxed" style={{ color: "#c9b5a0" }}>
                This project is funded by the{" "}
                <strong style={{ color: "#FDBF38" }}>
                  Social Sciences and Humanities Research Council (SSHRC)
                </strong>{" "}
                and contains an important optional research interview. This
                research component explores Canadian arts ecosystems and the
                experiences, opportunities, and challenges of practicing artists
                and creative entrepreneurs. The findings will help inform future
                programs and contribute to policy discussions at the local and
                national levels. We strongly encourage you to take part in this
                research. You will be asked separately whether you consent to
                take part in the research.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "#c9b5a0" }}>
                Taking part in the research component is{" "}
                <strong style={{ color: "#FDBF38" }}>
                  completely voluntary
                </strong>
                . If you choose not to participate in the research, there will
                be no negative consequences. You can still be considered for the
                program and participate if the program is a good fit for your
                needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── KEY DETAILS ── */}
      <section className="py-24" style={{ backgroundColor: "#f5ede2" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
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
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#7A003C" }}
              >
                At a Glance
              </span>
              <div
                className="h-px w-10 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
            </div>
            <h2
              className="text-3xl font-black md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              Key Details
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {keyDetails.map((d, i) => {
              const { Icon } = d
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{
                    y: -6,
                    boxShadow:
                      "0 0 30px rgba(122,0,60,0.4), 0 0 60px rgba(122,0,60,0.15)",
                  }}
                  className="rounded-2xl p-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
                    border: "2px solid #7A003C",
                    boxShadow: "0 0 20px rgba(122,0,60,0.3)",
                  }}
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "rgba(253,191,56,0.12)",
                      border: "1px solid rgba(253,191,56,0.3)",
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#FDBF38" }} />
                  </div>
                  <p
                    className="mb-1 text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(253,191,56,0.7)" }}
                  >
                    {d.label}
                  </p>
                  <p
                    className="text-base leading-snug font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    {d.value}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      {/* ── APPLY CTA ── */}
      <section
        id="apply"
        className="relative overflow-hidden py-24"
        style={{ backgroundColor: "#f5ede2" }}
      >
        <div
          className="absolute top-0 right-0 left-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, #7A003C, #FDBF38, #7A003C, transparent)",
          }}
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
              border: "2px solid rgba(122,0,60,0.6)",
              boxShadow:
                "0 0 60px rgba(122,0,60,0.3), 0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.6) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
            <div
              className="absolute top-0 left-1/2 h-0.5 w-24 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: "#FDBF38" }}
            />
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div
                  className="h-px w-10 rounded-full"
                  style={{ backgroundColor: "rgba(253,191,56,0.4)" }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "rgba(253,191,56,0.7)" }}
                >
                  Apply Now
                </span>
                <div
                  className="h-px w-10 rounded-full"
                  style={{ backgroundColor: "rgba(253,191,56,0.4)" }}
                />
              </div>
              <h2
                className="mb-4 text-4xl leading-tight font-black md:text-5xl"
                style={{ color: "#e8dcc8" }}
              >
                Ready to Apply?
              </h2>
              <p
                className="mx-auto mb-3 max-w-xl text-base leading-relaxed"
                style={{ color: "#c9b5a0" }}
              >
                Submit your expression of interest to begin the process.
                Applications close{" "}
                <strong style={{ color: "#FDBF38" }}>August 23</strong>.
              </p>
              <p className="mb-10 text-sm" style={{ color: "#9a8a78" }}>
                After submitting, you'll be invited to a short conversation with
                the program lead.
              </p>
              <motion.a
                href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclC_bAUK1g1NjWtdr3u9J9lUNDVDOVEzTFYxNlE5VzJDVFJOQk1LMkQzVC4u"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 0 30px rgba(253,191,56,0.6), 0 20px 40px rgba(253,191,56,0.3)",
                }}
                className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #FDBF38 0%, #f5d76e 100%)",
                  color: "#1a0010",
                  boxShadow: "0 10px 30px rgba(253,191,56,0.4)",
                }}
              >
                Submit Expression of Interest
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <p className="mt-6 text-xs" style={{ color: "#9a8a78" }}>
                Or email us at{" "}
                <a
                  href="mailto:reframe@mcmaster.ca"
                  className="underline"
                  style={{ color: "#FDBF38" }}
                >
                  reframe@mcmaster.ca
                </a>{" "}
                with any questions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── MAP ── */}
      <section className="pb-24" style={{ backgroundColor: "#f5ede2" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl"
            style={{
              border: "2px solid #7A003C",
              boxShadow:
                "0 0 40px rgba(122,0,60,0.3), 0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <div
              className="flex items-center gap-4 p-6"
              style={{
                background: "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#7A003C" }}
              >
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black" style={{ color: "#e8dcc8" }}>
                  McMaster University — Main Campus
                </h3>
                <p className="text-sm" style={{ color: "#c9b5a0" }}>
                  1280 Main St W, Hamilton, ON · In-person sessions take place
                  here.
                </p>
              </div>
            </div>
            <iframe
              title="McMaster University Main Campus Map"
              src="https://www.google.com/maps?q=McMaster+University,1280+Main+St+W,Hamilton,ON&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
      {/* ── PROGRAM PARTNERS ── */}
      <section className="py-24" style={{ backgroundColor: "#F7F2EB" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "#8D2534" }}
            >
              — Led &amp; Collaborated By —
            </p>
            <h2
              className="text-3xl font-black md:text-4xl"
              style={{ color: "#211D1C" }}
            >
              Program Partners
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {partners.map((p, i) => (
              <motion.a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px rgba(59,13,27,0.4)",
                }}
                className="flex flex-col rounded-2xl p-8"
                style={{ backgroundColor: "#3B0D1B" }}
              >
                <div>
                  <p
                    className="mb-2 text-xs font-bold tracking-widest uppercase"
                    style={{ color: "#D4A017" }}
                  >
                    {p.role}
                  </p>
                  <p className="text-xl leading-snug font-black text-white">
                    {p.name}
                  </p>
                  {p.sub && (
                    <p className="mt-1.5 text-sm" style={{ color: "#D1CFCF" }}>
                      {p.sub}
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
