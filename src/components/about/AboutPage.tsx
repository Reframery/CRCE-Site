import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight, ChevronDown, Handshake, Target } from "lucide-react"
import { sections } from "@/content/about"
import { SectionCard } from "./SectionCard"
import { StatsBar } from "./StatsBar"
import { Ticker } from "./Ticker"

export const AboutPage = () => {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  // @ts-expect-error
  const heroY = useTransform(heroScroll, [0, 1], [0, 130])

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="min-height-[65vh] bg-maroon relative flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Parallax photo */}
        {/* <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://www.crce.info/_astro/banner.EKBvg0l8_Z9FPRt.webp")`,
            y: heroY,
            opacity: 0.38,
          }}
        /> */}
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
        <motion.div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-14 text-center text-white md:py-20">
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
              <Target className="text-gold h-4 w-4" />
            </motion.div>
            <span className="text-sm font-semibold tracking-wide">
              CRCE — About Us
            </span>
          </motion.div>
          {/* Title  */}
          <motion.h1
            className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
          >
            About{" "}
            <span
              className="text-gold"
              style={{ textShadow: "0 0 40px rgba(253,191,56,0.5)" }}
            >
              CRCE
            </span>
          </motion.h1>
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
            className="mt-10 mb-5 flex flex-wrap justify-center gap-3"
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
                <div className="text-gold text-sm font-extrabold">{s.val}</div>
                <div className="mt-0.5 text-xs tracking-widest text-white/60 uppercase">
                  {s.sub}
                </div>
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
        >
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
        {/* Wave */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10">
          <svg viewBox="0 0 1440 80" className="fill-background h-auto w-full">
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>
      {/* ── Ticker ── */}
      <Ticker />
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-gray-600 sm:px-6 lg:px-8">
        <a href="/" className="transition-colors hover:text-gray-700">
          Home
        </a>
        <span className="mx-2 text-gray-500">›</span>
        <span className="font-semibold text-gray-700">About</span>
      </div>
      <StatsBar />
      {/* ── Section Cards ── */}
      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-16 sm:px-6 lg:px-8">
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
            background:
              "linear-gradient(135deg, hsl(var(--maroon)) 0%, #4a0024 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="bg-gold absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#C0392B] opacity-15 blur-3xl"
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
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            >
              <Handshake className="text-gold h-3 w-3" /> Partner With Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-bold md:text-4xl"
            >
              Partner with <span className="text-gold">CRCE</span>
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
                className="bg-gold text-maroon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-2xl"
              >
                Explore Reframery <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.07, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/10"
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
