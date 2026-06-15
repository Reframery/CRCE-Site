import { motion } from "motion/react"
import { ArrowRight, Megaphone } from "lucide-react"
import { cards, directorsMessage, visionMission } from "@/content/home"
import benson from "@/images/home/benson.jpg"
import { HeroVideo } from "./HeroVideo"
import { ProgramCard } from "./ProgramCard"
import { SectionLabel } from "./SectionLabel"

export const HomePage = () => (
  <div className="min-h-screen" style={{ backgroundColor: "#f5ede2" }}>
    <HeroVideo />
    {/* ── CONFERENCE BANNER ── */}
    <motion.a
      href="/upcoming-conferences"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="group relative block overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #4a0024 0%, #7A003C 50%, #4a0024 100%)",
      }}
      whileHover={{ filter: "brightness(1.15)" }}
    >
      {/* Animated glow orbs */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 h-96 w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(253,191,56,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80"
        style={{
          background:
            "radial-gradient(circle, rgba(122,0,60,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Shimmer lines */}
      <motion.div
        className="absolute right-0 bottom-0 left-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(253,191,56,0.5), transparent)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-1 items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="shrink-0 text-2xl"
          >
            <Megaphone className="text-gold rotate-[-30deg]" />
          </motion.div>
          <p className="text-center text-base leading-relaxed font-medium text-white sm:text-left sm:text-lg">
            <span className="text-gold mr-3 font-black">
              Upcoming Conference:
            </span>
            <span className="font-semibold">
              Entrepreneurship in the Global Majority — Sep 21–23, 2026 · The
              Hub, McMaster University
            </span>
          </p>
        </div>
        <motion.span
          className="text-gold flex shrink-0 items-center gap-2 rounded-lg px-6 py-3 text-sm font-black whitespace-nowrap sm:text-base"
          style={{
            backgroundColor: "rgba(253,191,56,0.15)",
            border: "1.5px solid rgba(253,191,56,0.5)",
            boxShadow: "0 0 20px rgba(253,191,56,0.2)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(253,191,56,0.2)",
              "0 0 40px rgba(253,191,56,0.4)",
              "0 0 20px rgba(253,191,56,0.2)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{
            backgroundColor: "rgba(253,191,56,0.25)",
            boxShadow:
              "0 0 50px rgba(253,191,56,0.6), 0 0 20px rgba(253,191,56,0.3)",
            scale: 1.05,
          }}
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </motion.span>
      </div>
    </motion.a>
    {/* ── THREE PROGRAM CARDS ── */}
    <section className="bg-[#f5ede2] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel text="Our Programs" />
          <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
            What We Do
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <ProgramCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
    {/* ── MESSAGE FROM THE DIRECTOR ── */}
    <section
      className="relative overflow-hidden py-24"
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
      <motion.div
        className="bg-gold/10 pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                border: "2px solid rgba(253,191,56,0.4)",
                boxShadow: "0 0 40px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={benson.src}
                alt="Benson Honig, CRCE Director"
                className="max-h-110 w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,0,36,0.5) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-5 left-6">
                <p className="text-lg font-black text-white drop-shadow">
                  Dr. Benson Honig
                </p>
                <p className="text-gold text-sm">Director, CRCE</p>
              </div>
              {/* Gold corner */}
              <div className="bg-gold absolute top-0 left-0 h-1 w-16" />
            </div>
          </motion.div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              type: "spring",
              stiffness: 60,
            }}
          >
            <h2 className="mb-6 text-3xl leading-tight font-black text-white md:text-4xl">
              Message from the Director
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/80">
              {directorsMessage}
            </p>
            <motion.a
              href="/about"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(253,191,56,0.3)",
              }}
              className="bg-gold inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-bold text-[#1a0010]"
            >
              Discover CRCE <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
    {/* Vision & Mission */}
    <section className="bg-[#f5ede2] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel text="Our Foundation" />
          <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
            Vision &amp; Mission
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          {visionMission.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 0 30px rgba(122,0,60,0.5), 0 0 60px rgba(122,0,60,0.2)",
              }}
              className="overflow-hidden rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #1a0010 0%, #2d0020 100%)",
                border: "2px solid #7A003C",
                boxShadow: "0 0 20px rgba(122,0,60,0.4)",
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(26,0,16,0.7) 100%)",
                  }}
                />
                <div className="bg-gold absolute top-0 left-0 h-1 w-16" />
              </div>
              <div className="p-8">
                <h3 className="text-gold mb-4 text-xl font-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#c9b5a0]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
)
