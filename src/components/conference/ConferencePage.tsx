import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  MapPin,
  Mic,
} from "lucide-react"
import { activities, stats } from "@/content/conference"
import mcmasterHub from "@/images/conference/mcmaster-hub.png"
import { ActivityCard } from "./ActivityCard"
import { AnimatedCounter } from "./AnimatedCounter"
import { AnimatedGlobe } from "./AnimateGlobe"
import { FloatingOrbs } from "./FloatingOrbs"

export const ConferencePage = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5ede2]">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #12000c 0%, hsl(var(--maroon)) 50%, #3a0020 100%)",
        }}
        aria-hidden="true"
      >
        {/* Animated dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,hsl(var(--gold)/0.8)_1px,transparent_1px)] bg-size-[40px_40px] opacity-15" />
        {/* Fine grid */}
        <div
          className="bg-grid-gold absolute inset-0 bg-size-[100px_100px] opacity-[0.05]"
          aria-hidden="true"
        />
        <FloatingOrbs />
        <motion.div
          className="relative z-10 mx-auto w-full max-w-5xl px-4 py-14 text-center text-white md:py-20"
          style={{ y: heroY }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="bg-gold/10 mb-10 inline-flex items-baseline gap-3 rounded-full border border-white/20 px-5 py-2.5 backdrop-blur-md"
          >
            <motion.span
              className="bg-gold h-2 w-2 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              Hosted by
            </span>
            <span className="text-gold text-sm font-extrabold tracking-widest">
              CRCE
            </span>
            <span className="hidden text-xs text-white/50 sm:inline">
              Centre for Research on Community Oriented Entrepreneurship
            </span>
          </motion.div>
          {/* Main title */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              type: "spring",
              stiffness: 60,
            }}
            className="mb-3 text-5xl leading-none font-bold tracking-tight md:text-7xl"
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
            className="mb-8 text-5xl leading-none font-bold tracking-tight md:text-7xl"
          >
            in the{" "}
            <span
              className="text-gold"
              style={{
                filter:
                  "drop-shadow(0 0 20px hsl(var(--gold) / 0.9)) drop-shadow(0 0 40px hsl(var(--gold) / 0.6))",
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
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium text-white/70 md:text-xl"
          >
            Rethinking Entrepreneurship Beyond Traditional Growth Models
          </motion.p>
          {/* Date / Time / Location pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
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
                className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.07] px-5 py-3 backdrop-blur-md"
              >
                <Icon className="text-gold h-4 w-4 shrink-0" />
                <span className="text-sm font-semibold text-white/90">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
        {/* Bottom wave into dark */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-10"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1440 80" className="h-auto w-full fill-[#0d0008]">
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>
      {/* Stats Band */}
      <section className="border-t-maroon/15 border-b-maroon/15 border-t border-b bg-[#f5ede2]">
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
                <div className="font-sans-condensed text-maroon mb-1 text-4xl font-extrabold md:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-maroon text-xs font-bold tracking-widest uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* About */}
      <section className="bg-[#f5ede2] py-28">
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
                  className="bg-maroon h-1 w-12 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-maroon text-xs font-bold tracking-widest uppercase">
                  About the Conference
                </span>
              </div>
              <h2 className="mb-6 text-3xl leading-tight font-bold text-[#1a1a1a] md:text-4xl">
                Exploring entrepreneurship in contexts of{" "}
                <span className="text-maroon">constraint, informality,</span>{" "}
                and global diversity.
              </h2>
              <p className="text-base leading-relaxed text-[#4a4a4a] md:text-lg">
                Hosted by CRCE at McMaster University, this international
                conference brings together scholars, practitioners, advocates,
                policymakers, and community leaders committed to understanding
                entrepreneurship as it is lived and practised across the Global
                Majority — challenging dominant frameworks shaped by
                high-income, formally institutionalized contexts.
              </p>
              <motion.div
                className="from-gold/50 mt-8 h-px w-full rounded-full bg-linear-to-r to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                aria-hidden="true"
              />
            </motion.div>
            {/* Globe graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 60 }}
              aria-hidden="true"
            >
              <AnimatedGlobe />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Activities Grid */}
      <section className="bg-[#f5ede2] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-maroon h-px w-10 rounded-full" />
              <span className="text-maroon text-xs font-bold tracking-widest uppercase">
                What to Expect
              </span>
              <div className="bg-maroon h-px w-10 rounded-full" />
            </div>
            <h2 className="mb-3 text-3xl font-bold text-[#1a1a1a] md:text-4xl">
              Conference Activities
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#4a4a4a]">
              Three days of immersive programming designed to foster meaningful
              dialogue across disciplines, geographies, and sectors.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, i) => (
              <ActivityCard key={i} activity={activity} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* Venue */}
      <section className="bg-[#f5ede2] pt-10 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-maroon h-px w-10 rounded-full" />
              <span className="text-maroon text-xs font-bold tracking-widest uppercase">
                Location
              </span>
              <div className="bg-maroon h-px w-10 rounded-full" />
            </div>
            <h2 className="mb-3 text-3xl font-bold text-[#1a1a1a] md:text-4xl">
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
              className="border-maroon overflow-hidden rounded-3xl border-2 md:col-span-2"
              style={{
                boxShadow:
                  "0 0 30px hsl(var(--maroon)/  0.6), 0 0 60px hsl(var(--maroon) / 0.3)",
              }}
            >
              <div className="relative h-96 overflow-hidden">
                <motion.img
                  src={mcmasterHub.src}
                  alt="The Hub at McMaster University"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[rgba(13,0,8,0.9)] to-transparent to-60%" />
                <div className="absolute bottom-5 left-6">
                  <span className="text-xl font-extrabold text-white drop-shadow-sm">
                    The Hub
                  </span>
                  <p className="text-sm text-white/70">
                    McMaster University · Hamilton, Ontario
                  </p>
                </div>
                {/* Gold corner accent */}
                <div className="bg-gold absolute top-0 left-0 h-1 w-24" />
              </div>
              {/* Info section below image */}
              <div
                className="flex items-center gap-4 p-8"
                style={{
                  background: "linear-gradient(135deg, #130009, #2a0018)",
                }}
              >
                <div className="bg-maroon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#e8dcc8]">
                    The Hub, McMaster University
                  </h3>
                  <p className="text-base text-[#c9b5a0]">
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
                className="border-maroon flex-1 rounded-3xl border-2 bg-linear-to-br from-[#130009] to-[#2a0018] p-6"
                style={{
                  boxShadow:
                    "0 0 20px hsl(var(--maroon) / 0.6), 0 0 40px hsl(var(--maroon) / 0.3)",
                }}
              >
                <div className="bg-maroon mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h4 className="mb-1 text-lg font-extrabold text-[#e8dcc8]">
                  September 21–23, 2026
                </h4>
                <p className="text-sm text-[#d4c4aa]">
                  Starting at 9:00 a.m. daily
                </p>
                <div className="mt-4 flex gap-2">
                  {["21", "22", "23"].map((d) => (
                    <div
                      key={d}
                      className="text-gold bg-gold/10 border-gold/20 flex-1 rounded-lg border py-2 text-center text-sm font-black"
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
                className="border-maroon flex flex-1 flex-col justify-between rounded-3xl border-2 bg-linear-to-br from-[#130009] to-[#2a0018] p-6"
                style={{
                  boxShadow:
                    "0 0 20px hsl(var(--maroon)/0.6), 0 0 40px hsl(var(--maroon)/0.3)",
                }}
              >
                <div>
                  <div className="bg-maroon mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="mb-1 text-lg font-extrabold text-[#e8dcc8]">
                    Directions
                  </h4>
                  <p className="text-sm leading-relaxed text-[#d4c4aa]">
                    Get directions to The Hub at McMaster University.
                  </p>
                </div>
                <motion.a
                  href="https://www.google.com/maps/place/The+Hub/@43.2603553,-79.9201368,2391m/data=!3m1!1e3!4m6!3m5!1s0x882c9b003258dda9:0xd6053db8f5e545ce!8m2!3d43.2649813!4d-79.9169819!16s%2Fg%2F11vywzr8y_?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px hsl(var(--gold)/0.2)",
                  }}
                  className="bg-maroon mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white"
                >
                  Get Directions <ArrowRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Speakers */}
      <section
        className="relative overflow-hidden py-16"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--maroon)) 0%, #4a0024 100%)",
        }}
      >
        {/* Pattern */}
        <div
          className="bg-grid-gold absolute inset-0 bg-size-[60px_60px] opacity-[0.06]"
          aria-hidden="true"
        />
        {/* Animated orbs */}
        <motion.div
          className="bg-gold/15 pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-black/30 blur-3xl"
          animate={{ scale: [1.2, 0.8, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
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
              <span className="text-xs font-bold tracking-widest text-white/60 uppercase">
                Speakers
              </span>
              <div className="h-px w-12 rounded-full bg-white/30" />
            </div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6 inline-block"
              aria-hidden="true"
            >
              <Mic
                className="text-gold mx-auto h-14 w-14"
                style={{
                  filter: "drop-shadow(0 0 20px hsl(var(--gold)/0.6))",
                }}
              />
            </motion.div>
            <h2 className="mb-8 text-3xl leading-tight font-bold md:text-5xl">
              Keynote Speakers & Presenters
            </h2>
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-black/25 p-8 backdrop-blur-[10px]">
              <p className="mb-4 text-lg leading-relaxed text-white/80">
                The conference will feature two invited individuals from{" "}
                <strong className="text-gold">Kenya</strong> who will share
                their entrepreneurial stories — including the challenges they
                faced and how they overcame hardship.
              </p>
              <p className="text-sm text-white/50">
                Further speaker announcements will be made closer to the
                conference date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Schedule Note */}
      <section className="bg-[#f5ede2] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-gold/25 flex items-start gap-5 rounded-2xl border bg-linear-to-br from-[#1a0a00] to-[#2a1500] p-8"
          >
            <div
              className="bg-gold/15 border-gold/30 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border"
              aria-hidden="true"
            >
              <Calendar className="text-gold h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#e8dcc8]">
                Schedule Coming Soon
              </h3>
              <p className="text-sm leading-relaxed text-[#d4c4aa]">
                The full conference schedule is still being finalized and will
                be released closer to the conference date, approximately two
                months before the event.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Organized By ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #f4ebe0 0%, #f9f3eb 50%, #f0e8dd 100%)",
        }}
        className="py-16 pb-24"
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
              <h2 className="text-maroon mb-6 text-5xl leading-tight font-bold md:text-6xl">
                Organized By
              </h2>
              <div className="bg-maroon h-1 w-20 rounded-full" />
            </motion.div>
            {/* Right: Both Cards */}
            <div className="relative grid grid-cols-1 gap-5">
              {/* Animated orbiting rings */}
              <motion.div
                className="pointer-events-none absolute -inset-12"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              >
                <div className="border-maroon absolute inset-0 rounded-full border border-dashed opacity-30" />
              </motion.div>
              <motion.div
                className="pointer-events-none absolute -inset-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              >
                <div className="border-gold absolute inset-0 rounded-full border border-dotted opacity-20" />
              </motion.div>
              {/* Orbiting glowing dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="bg-cold pointer-events-none absolute top-1/2 left-[calc(50%+120px)] h-3 w-3 rounded-full"
                  style={{
                    boxShadow: "0 0 12px hsl(var(--gold)/0.9)",
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
                  aria-hidden="true"
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
                    "0 0 30px hsl(var(--maroon)/0.5), 0 0 60px hsl(var(--maroon)/0.2)",
                }}
                className="border-maroon relative z-10 flex items-center gap-6 rounded-2xl border-2 bg-linear-to-br from-[#1a0010] to-[#2d0020] p-7"
                style={{
                  boxShadow: "0 0 20px hsl(var(--maroon)/0.4)",
                }}
              >
                <div className="bg-gold/12 border-gold/30 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border">
                  <span className="text-gold text-xl font-black">M</span>
                </div>
                <div>
                  <p className="text-gold/70 mb-1 text-xs font-bold tracking-widest uppercase">
                    DeGroote School of Business
                  </p>
                  <p className="text-xl font-extrabold text-[#e8dcc8]">
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
                    "0 0 30px hsl(var(--maroon)/0.5), 0 0 60px hsl(var(--maroon)/0.2)",
                }}
                className="border-maroon relative z-10 flex items-center gap-6 rounded-2xl border-2 p-7"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
                  boxShadow: "0 0 20px hsl(var(--maroon)/0.4)",
                }}
              >
                <div className="bg-gold/12 border-gold/30 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border">
                  <span className="text-gold text-sm font-black">CRCE</span>
                </div>
                <div>
                  <p className="mb-1 text-xl font-extrabold text-[#e8dcc8]">
                    CRCE
                  </p>
                  <p className="text-xs leading-relaxed text-[#c9b5a0]">
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
