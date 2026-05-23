import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react"
import { infoCards } from "@/content/contact"
import banner from "@/images/banner/contact.jpg"
import { ContactForm } from "./ContactForm"
import { InfoCard } from "./InfoCard"

export default function ContactPage() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(heroScroll, [0, 1], [0, 120])
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center overflow-hidden bg-maroon"
      >
        {/* Parallax building photo */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner.src})`,
            y: heroY,
            opacity: 0.45,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Maroon tint on top of photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(122,0,60,0.5) 0%, rgba(122,0,60,0.35) 50%, rgba(122,0,60,0.85) 100%)",
          }}
        />
        <motion.div
          className="relative z-10 px-4 py-20 text-center text-white md:py-28"
          style={{ opacity: heroOpacity }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2.5 shadow-lg backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <Mail className="h-4 w-4 text-gold" />
            </motion.div>
            <span className="text-sm font-semibold">CRCE — Get in Touch</span>
          </motion.div>
          {/* Title */}
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
            Contact{" "}
            <span
              className="text-gold"
              style={{ textShadow: "0 0 40px rgba(253,191,56,0.5)" }}
            >
              Us
            </span>
          </motion.h1>
          {/* Subtitle pill — styled like the image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-6 py-3.5 text-base font-medium text-white shadow-lg backdrop-blur-md"
            style={{ background: "rgba(90,0,41,0.6)" }}
          >
            <MessageSquare className="h-4 w-4 flex-shrink-0 text-gold" />
            Questions about research, partnerships, or community
            entrepreneurship? We're here and ready to connect.
          </motion.div>
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              { val: "Hamilton", sub: "Ontario, Canada" },
              { val: "DeGroote", sub: "School of Business" },
              { val: "McMaster", sub: "University" },
            ].map((s, i) => (
              <motion.div
                key={s.val}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="cursor-default rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center shadow-lg backdrop-blur-md"
              >
                <div className="text-sm font-black text-gold">{s.val}</div>
                <div className="mt-0.5 text-xs uppercase tracking-widest text-white/60">
                  {s.sub}
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
          transition={{ delay: 1.2 }}
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
        <span className="mx-2 text-gray-400">›</span>
        <span className="font-semibold text-gray-700">Contact Us</span>
      </div>
      {/* ── INFO CARDS ── */}
      <section className="mx-auto max-w-7xl overflow-visible px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-6 overflow-visible md:grid-cols-3">
          {infoCards.map((card, i) => (
            <InfoCard key={i} card={card} index={i} />
          ))}
        </div>
        {/* ── FORM + MAP ── */}
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Form card — white, like RISE text panels */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
            className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl"
          >
            {/* Top accent bar */}
            <div
              className="h-2"
              style={{
                background:
                  "linear-gradient(90deg, var(--maroon), var(--gold))",
              }}
            />
            <div className="p-8 md:p-10">
              {/* Section label */}
              <div className="mb-2 flex items-center gap-3">
                <motion.div
                  className="h-1 rounded-full bg-maroon"
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <span className="text-xs font-bold uppercase tracking-widest text-maroon">
                  CRCE
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mb-1 text-2xl font-bold text-gray-900 md:text-3xl"
              >
                Send a Message
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mb-8 text-sm text-gray-500"
              >
                Have a question or collaboration idea? We'll connect you with
                the right person.
              </motion.p>
              <ContactForm />
            </div>
          </motion.div>
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl"
          >
            {/* Top accent bar */}
            <div
              className="h-2"
              style={{
                background:
                  "linear-gradient(90deg, var(--gold), var(--maroon))",
              }}
            />
            <div className="flex flex-1 flex-col gap-6 p-8 md:p-10">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <motion.div
                    className="h-1 rounded-full bg-maroon"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-maroon">
                    Location
                  </span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mb-1 text-2xl font-bold text-gray-900 md:text-3xl"
                >
                  Find Us
                </motion.h2>
                <p className="text-sm text-gray-500">
                  Come visit us at the heart of McMaster's innovation ecosystem.
                </p>
              </div>
              <div className="min-h-[260px] flex-1 overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  title="CRCE Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5!2d-79.9214528!3d43.2621339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c853aa640c501%3A0x79c3ae03596c42e5!2sTandem%20Accelerator%20Building!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "260px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-maroon shadow">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-extrabold text-gray-900">
                    Tandem Accelerator Building
                  </p>
                  <p className="text-sm text-gray-500">
                    1280 Main St W, Building #32
                  </p>
                  <p className="text-sm text-gray-500">
                    Hamilton, ON L8S 4K1, Canada
                  </p>
                  <a
                    href="https://maps.google.com/maps/dir//Tandem+Accelerator+Building+TA+1280+Main+St+W+Building+%23+32+Hamilton,+ON+L8S+4K1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-maroon hover:underline"
                  >
                    Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* --- Bottom CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
          className="relative mb-16 overflow-hidden rounded-3xl shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #7A003C 0%, #4a0024 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold opacity-20 blur-3xl"
              animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#C0392B] opacity-15 blur-3xl"
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Want to collaborate with CRCE?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Discover research opportunities, student programs, and
              partnerships that make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/about"
                whileHover={{
                  scale: 1.07,
                  y: -3,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-maroon shadow-2xl"
              >
                Learn About Us <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://reframery.org/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/10"
              >
                Explore Reframery <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
