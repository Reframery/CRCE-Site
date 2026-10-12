import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { cards, directorsMessage, visionMission } from "@/content/home"
import benson from "@/images/home/benson.jpg"
import { HeroVideo } from "./HeroVideo"
import { ProgramCard } from "./ProgramCard"
import { SectionLabel } from "./SectionLabel"
import HubDiagram from "@/components/HubDiagram"

export const HomePage = () => (
  <div className="min-h-screen" style={{ backgroundColor: "#f5ede2" }}>
    <HeroVideo />


    {/* ── THREE PROGRAM CARDS ── */}
    <section className="bg-[#f5ede2] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="max-w-5xl mx-auto text-base md:text-lg leading-relaxed"
          style={{ color: "#4a4a4a" }}
        >
          The{" "}
          <strong style={{ color: "#7A003C" }}>
            Centre for Research on Community-oriented Entrepreneurship (CRCE)
          </strong>{" "}
          is the central hub for advancing inclusive and sustainable entrepreneurship
          through its initiatives, including{" "}
          <strong style={{ color: "#7A003C" }}>Reframery</strong> and{" "}
          <strong style={{ color: "#7A003C" }}>RISE</strong>, which empower entrepreneurs
          and foster research, mentorship, and interdisciplinary learning.
        </p>
      </motion.div>
      <HubDiagram />
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
