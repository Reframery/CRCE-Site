import { useRef } from "react"
import { ChevronDown, Globe, GraduationCap, Users } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import {
  coreTeam,
  internalAdvisory,
  externalAdvisory,
  studentTeam,
} from "@/content/team"
import { Breadcrumbs } from "../ui/Breadcrumbs"
import { PersonCard } from "./PersonCard"
import { SectionHeader } from "./SectionHeader"
import { StudentCard } from "./StudentCard"

export const TeamPage = () => {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  // @ts-expect-error
  const heroY = useTransform(heroScroll, [0, 1], [0, 120])

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      {/* Hero */}
      <section
        ref={heroRef}
        className="bg-maroon relative flex flex-col items-center justify-center overflow-hidden"
      >
        {/* <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://www.crce.info/_astro/banner.EKBvg0l8_Z9FPRt.webp")`,
            y: heroY,
            opacity: 0.25,
          }}
        /> */}
        {/* Grid overlay */}
        <div
          className="absolute inset-0 bg-size-[60px_60px] opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(hsl(var--gold) 1px, transparent 1px), linear-gradient(90deg, hsl(var--gold) 1px, transparent 1px)`,
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="from-maroon/50 via-maroon/25 to-maroon/90 absolute inset-0 bg-linear-to-b via-45%"
          aria-hidden="true"
        />
        {/* Orbs */}
        {[
          {
            size: 500,
            color: "hsl(var(--gold) / 0.12)",
            x: -200,
            y: -100,
            dur: 14,
          },
          {
            size: 400,
            color: "rgba(255,255,255,0.05)",
            x: 300,
            y: 150,
            dur: 17,
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
            animate={{ scale: [1, 1.35, 1], x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{
              duration: orb.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            aria-hidden="true"
          />
        ))}
        {/* Hero content */}
        <motion.div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-14 text-center text-white md:py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2.5 shadow-lg backdrop-blur-md"
            aria-hidden="true"
          >
            <Users className="text-gold h-4 w-4" />
            <span className="text-sm font-semibold tracking-wide">
              CRCE — People
            </span>
          </motion.div>
          {/* Hero title */}
          <h1>
            {["Our", "Team"].map((word, wi) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + wi * 0.18,
                  type: "spring",
                  stiffness: 90,
                }}
                className="font-sans-condensed block text-6xl leading-none font-bold tracking-tight md:text-8xl"
                style={
                  wi === 1
                    ? {
                        color: "hsl(var(--gold))",
                        textShadow:
                          "0 0 60px hsl(var(--gold) / 0.45), 0 4px 30px rgba(0,0,0,0.4)",
                      }
                    : { textShadow: "0 4px 30px rgba(0,0,0,0.4)" }
                }
              >
                {word}
              </motion.div>
            ))}
          </h1>
          {/* Hero subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mx-auto mt-6 mb-3 max-w-xl text-base text-white/80 md:text-lg"
          >
            Researchers, faculty, and students driving inclusive and
            community-oriented entrepreneurship.
          </motion.p>
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
        {/* Wave */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-10"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1440 80" className="fill-background h-auto w-full">
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>
      <Breadcrumbs pageTitle="Our Team" />
      {/* CRCE Team */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Users}
          label="CRCE"
          title="CRCE Team"
          color="#7A003C"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {coreTeam.map((person, i) => (
            <PersonCard
              key={person.name}
              person={person}
              index={i}
              accentColor="#7A003C"
            />
          ))}
        </div>
      </section>
      {/* Internal Advisory Committee */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Users}
          label="CRCE"
          title="Internal Advisory Committee"
          color="#7A003C"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {internalAdvisory.map((person, i) => (
            <PersonCard
              key={person.name}
              person={person}
              index={i}
              accentColor="#7A003C"
            />
          ))}
        </div>
      </section>
      {/* External Advisory Committee */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Globe}
          label="CRCE"
          title="External Advisory Committee"
          color="#5a0029"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {externalAdvisory.map((person, i) => (
            <PersonCard
              key={person.name}
              person={person}
              index={i}
              accentColor="#5a0029"
            />
          ))}
        </div>
      </section>
      {/* Student Team  */}
      <section
        id="student-team"
        className="mx-auto max-w-7xl scroll-m-4 px-4 pb-24 sm:px-6 lg:px-8"
      >
        <SectionHeader
          icon={GraduationCap}
          label="Student Training"
          title="Student Team"
          color="hsl(var(--gold))"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {studentTeam.map((person, i) => (
            <StudentCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
