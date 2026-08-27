import { activities, stats } from "@/content/conference"
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { ActivityCard } from "./ActivityCard"
import { AnimatedCounter } from "./AnimatedCounter"
import { AnimatedGlobe } from "./AnimateGlobe"

export function ConferencePage() {
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
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
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
            className="mb-3 text-5xl leading-none font-black tracking-tight md:text-7xl lg:text-8xl"
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
            className="mb-8 text-5xl leading-none font-black tracking-tight md:text-7xl lg:text-8xl"
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
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium text-white/70 md:text-xl"
          >
            Rethinking Entrepreneurship Beyond Traditional Growth Models
          </motion.p>

          {/* Registration Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10"
          >
            <motion.a
              href="https://global-majority2026.base44.app/register"
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
              Register Now
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Date / Time / Location pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            {[
              { Icon: Calendar, text: "September 21–22, 2026" },
              {
                Icon: Clock,
                text: "View Full Schedule",
                to: "/upcoming-conferences/agenda",
              },
              { Icon: MapPin, text: "The Hub & LR Wilson · McMaster" },
            ].map(({ Icon, text, to }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              >
                <a
                  href={to || "#"}
                  className="flex items-center gap-2.5 rounded-full px-5 py-3 backdrop-blur-md transition-colors hover:bg-white/15"
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
                </a>
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
        {/* Bottom wave into dark */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10">
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
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#7A003C" }}
                >
                  About the Conference
                </span>
              </div>
              <h2
                className="mb-6 text-3xl leading-tight font-black md:text-4xl"
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
                className="text-xs font-bold tracking-widest uppercase"
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
              <ActivityCard key={i} activity={item} index={i} />
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
                className="text-xs font-bold tracking-widest uppercase"
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
          <div className="grid gap-6 md:grid-cols-3 md:items-start">
            {/* Venue info card */}
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
              <div
                className="p-8"
                style={{
                  background: "linear-gradient(135deg, #130009, #2a0018)",
                }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#7A003C" }}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-black"
                      style={{ color: "#e8dcc8" }}
                    >
                      The Hub &amp; LR Wilson Building
                    </h3>
                    <p className="text-base" style={{ color: "#c9b5a0" }}>
                      McMaster University · Hamilton, Ontario
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div
                    className="flex flex-col rounded-2xl p-5"
                    style={{
                      backgroundColor: "rgba(253,191,56,0.06)",
                      border: "1px solid rgba(253,191,56,0.2)",
                    }}
                  >
                    <h4
                      className="mb-1 text-base font-black"
                      style={{ color: "#FDBF38" }}
                    >
                      The Hub
                    </h4>
                    <p
                      className="mb-3 text-sm leading-relaxed"
                      style={{ color: "#d4c4aa" }}
                    >
                      A state-of-the-art collaborative space at the heart of
                      McMaster's campus.
                    </p>
                    <div className="mt-auto flex flex-col gap-2">
                      <a
                        href="https://www.google.com/maps/place/The+Hub/@43.2603553,-79.9201368,2391m/data=!3m1!1e3!4m6!3m5!1s0x882c9b003258dda9:0xd6053db8f5e545ce!8m2!3d43.2649813!4d-79.9169819!16s%2Fg%2F11vywzr8y_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 text-xs font-bold"
                        style={{ color: "#FDBF38" }}
                      >
                        View Map <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=The+Hub+McMaster+University"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold"
                        style={{ backgroundColor: "#7A003C", color: "white" }}
                      >
                        Get Directions <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="flex flex-col rounded-2xl p-5"
                    style={{
                      backgroundColor: "rgba(253,191,56,0.06)",
                      border: "1px solid rgba(253,191,56,0.2)",
                    }}
                  >
                    <h4
                      className="mb-1 text-base font-black"
                      style={{ color: "#FDBF38" }}
                    >
                      LR Wilson Building
                    </h4>
                    <p
                      className="mb-3 text-sm leading-relaxed"
                      style={{ color: "#d4c4aa" }}
                    >
                      Home to the Faculty of Social Sciences with modern lecture
                      and event spaces.
                    </p>
                    <div className="mt-auto flex flex-col gap-2">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=LR+Wilson+Building+McMaster+University"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 text-xs font-bold"
                        style={{ color: "#FDBF38" }}
                      >
                        View Map <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=LR+Wilson+Building+McMaster+University"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold"
                        style={{ backgroundColor: "#7A003C", color: "white" }}
                      >
                        Get Directions <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
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
                  September 21–22, 2026
                </h4>
                <p className="text-sm" style={{ color: "#d4c4aa" }}>
                  Starting at 9:00 a.m. daily
                </p>
                <div className="mt-4 flex gap-2">
                  {["21", "22"].map((d) => (
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
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(255,183,94,0.5)",
                }}
              >
                <a
                  href="/upcoming-conferences/agenda"
                  className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition-all"
                  style={{
                    backgroundColor: "#4a2d2d",
                    color: "#ffb75e",
                    border: "1.5px solid #c78f4a",
                  }}
                >
                  View Full Schedule <ArrowRight className="h-4 w-4" />
                </a>
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
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
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
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-white sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="mb-10 text-2xl leading-tight font-black tracking-wide md:text-3xl"
              style={{ color: "#EBCB8D" }}
            >
              KEYNOTE SPEAKERS
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10">
              {/* Trish Ruebottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/5c50e930a_image.png"
                    alt="Trish Ruebottom"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-black text-white md:text-2xl">
                    Trish Ruebottom
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/80 md:text-base">
                    Professor of Human Resources &amp; Management, McMaster
                    University
                  </p>
                  <a
                    href="https://www.linkedin.com/in/trish-ruebottom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all hover:scale-105"
                    style={{
                      backgroundColor: "rgba(253,191,56,0.12)",
                      color: "#FDBF38",
                      border: "1px solid rgba(253,191,56,0.3)",
                    }}
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </motion.div>
              {/* Anna Kim */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/23ec49ba4_image.png"
                    alt="Anna Kim"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-black text-white md:text-2xl">
                    Anna Kim
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/80 md:text-base">
                    Associate Professor in Management for Sustainability, McGill
                    University
                  </p>
                  <a
                    href="https://www.linkedin.com/in/anna-kim-montreal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all hover:scale-105"
                    style={{
                      backgroundColor: "rgba(253,191,56,0.12)",
                      color: "#FDBF38",
                      border: "1px solid rgba(253,191,56,0.3)",
                    }}
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </motion.div>
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
        className="py-10"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            {/* Left: Organized By Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3"
            >
              <h2
                className="mb-3 text-3xl leading-tight font-black md:text-4xl"
                style={{ color: "#7A003C" }}
              >
                Organized By
              </h2>
              <div
                className="h-1 w-16 rounded-full"
                style={{ backgroundColor: "#7A003C" }}
              />
            </motion.div>
            {/* Right: Both Cards */}
            <div className="grid gap-4 sm:grid-cols-2 md:w-2/3">
              {/* McMaster & DeGroote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 0 24px rgba(122,0,60,0.5)" }}
                className="flex items-center gap-4 rounded-xl p-4"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
                  border: "1px solid #7A003C",
                  boxShadow: "0 0 16px rgba(122,0,60,0.3)",
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(253,191,56,0.12)",
                    border: "1px solid rgba(253,191,56,0.3)",
                  }}
                >
                  <span
                    className="text-lg font-black"
                    style={{ color: "#FDBF38" }}
                  >
                    M
                  </span>
                </div>
                <div>
                  <p
                    className="mb-0.5 text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: "rgba(253,191,56,0.7)" }}
                  >
                    DeGroote School of Business
                  </p>
                  <p
                    className="text-base leading-tight font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    McMaster University
                  </p>
                </div>
              </motion.div>
              {/* CRCE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4, boxShadow: "0 0 24px rgba(122,0,60,0.5)" }}
                className="flex items-center gap-4 rounded-xl p-4"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
                  border: "1px solid #7A003C",
                  boxShadow: "0 0 16px rgba(122,0,60,0.3)",
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(253,191,56,0.12)",
                    border: "1px solid rgba(253,191,56,0.3)",
                  }}
                >
                  <span
                    className="text-xs font-black"
                    style={{ color: "#FDBF38" }}
                  >
                    CRCE
                  </span>
                </div>
                <div>
                  <p
                    className="mb-0.5 text-base leading-tight font-black"
                    style={{ color: "#e8dcc8" }}
                  >
                    CRCE
                  </p>
                  <p
                    className="text-xs leading-tight"
                    style={{ color: "#c9b5a0" }}
                  >
                    Centre for Research on Community Oriented Entrepreneurship
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* ── CONTACT ── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ backgroundColor: "#f5ede2" }}
      >
        {/* Decorative top border accent */}
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
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 rounded-3xl opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.6) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
            {/* Gold top accent line */}
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
                  Get in Touch
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
                Have Questions?
              </h2>
              <p
                className="mx-auto mb-10 max-w-xl text-base leading-relaxed"
                style={{ color: "#c9b5a0" }}
              >
                Reach out to us for more information about the conference,
                submissions, or partnership opportunities.
              </p>
              <motion.a
                href="mailto:reframe@mcmaster.ca"
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 0 30px rgba(122,0,60,0.6), 0 20px 40px rgba(122,0,60,0.3)",
                }}
                className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold transition-all"
                style={{
                  backgroundColor: "#7A003C",
                  color: "#e8dcc8",
                  border: "1px solid rgba(253,191,56,0.3)",
                  boxShadow: "0 0 20px rgba(122,0,60,0.4)",
                }}
              >
                <Mail className="h-5 w-5" style={{ color: "#FDBF38" }} />
                reframe@mcmaster.ca
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
