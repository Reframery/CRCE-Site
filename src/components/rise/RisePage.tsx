import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { sections, stats } from "@/content/rise"
import { SectionCard } from "./SectionCard"
import { FloatingOrbs } from "./FloatingOrbs"

export const RisePage = () => {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  // @ts-expect-error
  const heroY = useTransform(heroScroll, [0, 1], [0, 120])

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="bg-maroon relative flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated dot grid bg */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,hsl(var(--gold)/0.6)_1px,transparent_1px)] bg-size-[32px_32px] opacity-10" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 bg-size-[60px_60px] opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          }}
        />
        <FloatingOrbs />
        <motion.div className="relative z-10 px-4 py-14 text-center text-white md:py-20">
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
                className="text-6xl leading-none font-thin tracking-[0.2em] md:text-7xl"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
              >
                RISE
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gold mt-2 h-0.5 w-full origin-left"
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-3 text-xs font-semibold tracking-widest text-white/70 uppercase md:text-sm"
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
                <div className="text-gold text-sm font-extrabold">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs tracking-widest text-white/60 uppercase">
                  {stat.label}
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
        <div className="pointer-events-none absolute right-0 bottom-0 left-0">
          <svg viewBox="0 0 1440 80" className="fill-background h-auto w-full">
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-gray-600 sm:px-6 lg:px-8">
        <a href="/" className="transition-colors hover:text-gray-700">
          Home
        </a>
        <span className="mx-2 text-gray-500">›</span>
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
          className="from-maroon relative overflow-hidden rounded-3xl bg-linear-to-br to-[#4a0024] shadow-2xl"
        >
          {/* Background shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="bg-gold absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#3498DB] opacity-15 blur-3xl"
              animate={{ scale: [1.2, 0.8, 1.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Geometric line accents */}
            <div
              className="absolute inset-0 bg-size-[40px_40px] opacity-5"
              style={{
                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
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
                className="bg-gold text-maroon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-2xl"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/10"
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
