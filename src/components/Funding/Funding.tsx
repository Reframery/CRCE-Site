import { motion } from "framer-motion"
import type {
  CSSProperties,
  ComponentType,
  MouseEvent,
  ReactNode,
  SVGProps,
} from "react"
import { Award, Check, FileSearch, Play, Quote, Search } from "lucide-react"

// ─────────────────────────────────────────────────────────────
// CRCE — Funding page · self-contained React component (TypeScript)
// Drop into your Astro/Vite project as: src/components/funding/FundingPage.tsx
// Page wrapper: src/exports/funding.astro
// Requires: react, framer-motion, lucide-react, tailwindcss
// Fonts (same as crce.info): Roboto + Roboto Condensed — applied inline below,
// add the Google Fonts <link> in your Layout.astro for the full effect.
// All content lives at the top — edit the arrays to update the page.
// ─────────────────────────────────────────────────────────────

type IconType = ComponentType<SVGProps<SVGSVGElement>>

const COLORS = {
  maroon: "#7A003C",
  maroonLight: "#8B0A46",
  maroonDeep: "#12000c",
  gold: "#FDBF38",
  cream: "#f5ede2",
  ink: "#1a1a1a",
  body: "#3d3d3d",
}

const FONTS = {
  heading: "'Roboto Condensed', 'Roboto', ui-sans-serif, system-ui, sans-serif",
  body: "'Roboto', ui-sans-serif, system-ui, sans-serif",
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const SHADOW_CARD =
  "0 1px 2px -1px rgba(26,0,16,0.16), 0 14px 28px -20px rgba(26,0,16,0.45), 0 34px 64px -44px rgba(122,0,60,0.55)"
const SHADOW_CARD_HOVER =
  "0 2px 4px -1px rgba(26,0,16,0.18), 0 24px 44px -22px rgba(26,0,16,0.4), 0 54px 90px -40px rgba(122,0,60,0.6)"

const BORDER_REST = "rgba(122,0,60,0.06)"
const BORDER_HOVER = "rgba(122,0,60,0.15)"

const IMPACT_VIDEO = {
  embedUrl:
    "https://drive.google.com/file/d/1nS9VfWGDN3fFQgaxICHj-RuWTkskvD1N/preview",
  fileUrl:
    "https://drive.google.com/file/d/1nS9VfWGDN3fFQgaxICHj-RuWTkskvD1N/view",
}

const IMPACT_STATEMENT =
  "Every grant we receive directly supports entrepreneurs, research, and community-driven innovation. We're building a model that scales impact, not assumptions."

type Grant = {
  funder: string
  title?: string
  description?: string
}

type Proposal = {
  funder: string
  status: string
  title: string
  description?: string
}

const AWARDED_GRANTS: Grant[] = [
  {
    funder: "NSERC",
    title: "CREATE Grant: Controlled Release Leaders (ContRoL) Program",
    description:
      "Developing a micro-credential course for engineering PhD students, blending innovation leadership with real-world interviews and case studies from industry leaders.",
  },
  {
    funder: "Social Sciences and Humanities Research Council (SSHRC)",
    title: "Partnership Engage Grant: Virtual Incubator for Seniors in Ontario",
    description:
      "A pilot program supporting older adults in urban and rural communities to develop entrepreneurial skills and confidence.",
  },
  {
    funder: "McMaster University",
    title: "Provost Research Grant",
    description:
      "Supporting a student Research Assistant to help develop programming and content.",
  },
  {
    funder: "Social Sciences and Humanities Research Council (SSHRC)",
    title: "Insight Grant: Researching Entrepreneurship",
  },
  {
    funder: "Social Sciences and Humanities Research Council (SSHRC)",
    title: "Insight Development Grant (IDG) 2021: Researching Entrepreneurship",
  },
  {
    funder: "Social Sciences and Humanities Research Council (SSHRC)",
    title:
      "Partnership Development Grant (PDG) 2024: Developing and Incorporating",
  },
  {
    funder: "Social Sciences and Humanities Research Council (SSHRC)",
    title: "Partnership Engage Grant (PEG) 12-2023: Virtual incubator support",
  },
  {
    funder: "Tri-Agency Institutional Programs Secretariat (TIPS)",
    title:
      "New Frontiers in Research Fund (NFRF) Special Call 2022: Expanding Virtual Incubators for Marginalized Persons",
  },
  {
    funder: "International Development Research Centre (IDRC)",
    title: "Special Call (NFRF) 2022: Expanding Virtual Incubators",
  },
  {
    funder: "Internal — McMaster University",
    title: "COVID-19 Rapid Research Fund",
  },
  {
    funder: "Polish National Agency for Academic Exchange",
  },
  {
    funder: "BIRMAC Project and Ideas Fund",
  },
  {
    funder: "MITACS",
    title: "RTA 2020",
  },
  {
    funder: "McMaster University",
    title: "Digital Transformation Research Centre Grant",
  },
  {
    funder: "McMaster University",
    title: "Research Excellence Fund",
  },
]

const PROPOSALS_UNDER_REVIEW: Proposal[] = [
  {
    funder: "SSHRC Insight Development Grant",
    status: "Under Review",
    title: "Selling Beauty, Building Power",
    description:
      "Investigating women-led entrepreneurship in medical aesthetics within emerging markets.",
  },
  {
    funder: "European Bank for Reconstruction and Development",
    status: "Under Review",
    title: "Virtual Incubator for Ukrainian Refugees in Poland",
    description:
      "A Polish-language program designed to support displaced women entrepreneurs.",
  },
  {
    funder: "SSHRC Partnership Grant",
    status: "Under Review",
    title: "RISE: Research in Inclusion and Social Enterprise",
    description:
      "Building a global research program to explore models of inclusion in entrepreneurship.",
  },
  {
    funder: "SSHRC Partnership Engage Grant",
    status: "Under Review",
    title: "Virtual Incubation for Senior Immigrant Women",
    description:
      "Tackling intersectional barriers by supporting senior immigrant women through virtual business mentorship and training.",
  },
  {
    funder: "Global Affairs Canada",
    status: "Concept Note Submitted",
    title:
      "Inclusive Virtual Incubation for Refugee Women in Kenya (with HIAS)",
  },
  {
    funder: "Global Affairs Canada",
    status: "Concept Note Submitted",
    title: "Mental Health & Entrepreneurship for Refugee Women (with RefuSHE)",
  },
  {
    funder: "NFRF Transformation",
    status: "Notice of Intent Submitted",
    title: "Transformative AI for Social Good",
    description:
      "Exploring how AI can support marginalized entrepreneurs facing precarious labour conditions and health vulnerabilities.",
  },
]

const STATUS_PILL: Record<string, CSSProperties> = {
  "Under Review": {
    borderColor: "rgba(253,191,56,0.4)",
    backgroundColor: "rgba(253,191,56,0.25)",
    color: "#3d0020",
  },
  "Concept Note Submitted": {
    borderColor: "rgba(122,0,60,0.15)",
    backgroundColor: "rgba(122,0,60,0.07)",
    color: COLORS.maroon,
  },
  "Notice of Intent Submitted": {
    borderColor: "rgba(122,0,60,0.15)",
    backgroundColor: "rgba(122,0,60,0.07)",
    color: COLORS.maroon,
  },
}

const fadeUpCard = {
  hidden: { opacity: 0, y: 38, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: EASE },
  },
}

const staggerCards = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.08 } },
}

const liftHover = {
  y: -9,
  scale: 1.012,
  transition: { duration: 0.4, ease: EASE },
}

const cardRest = (): CSSProperties => ({
  borderColor: BORDER_REST,
  boxShadow: SHADOW_CARD,
})
const cardHover = (): CSSProperties => ({
  borderColor: BORDER_HOVER,
  boxShadow: SHADOW_CARD_HOVER,
})

function hoverCard(event: MouseEvent<HTMLElement>) {
  Object.assign(event.currentTarget.style, cardHover())
}

function restCard(event: MouseEvent<HTMLElement>) {
  Object.assign(event.currentTarget.style, cardRest())
}

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, delay, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type SectionHeadingProps = {
  icon: IconType
  title: string
  accent: string
  description?: string
}

function SectionHeading({
  icon: Icon,
  title,
  accent,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-3">
        <motion.span
          initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
          whileHover={{ rotate: -8, scale: 1.08 }}
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{
            border: "1px solid rgba(122,0,60,0.1)",
            background:
              "linear-gradient(135deg, #ffffff 0%, #ffffff 55%, rgba(122,0,60,0.09) 100%)",
            boxShadow:
              "0 1px 2px -1px rgba(26,0,16,0.2), 0 14px 28px -16px rgba(122,0,60,0.55)",
          }}
        >
          <Icon className="h-5 w-5" style={{ color: COLORS.maroon }} />
        </motion.span>
        <h2
          className="text-2xl leading-tight font-black md:text-3xl"
          style={{ color: COLORS.ink, fontFamily: FONTS.heading }}
        >
          {title} <span style={{ color: COLORS.maroon }}>{accent}</span>
        </h2>
      </div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "6rem", opacity: 1 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
        className="mx-auto mt-6 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
        }}
        aria-hidden="true"
      />
      {description && (
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed"
          style={{ color: "#4a4a4a" }}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-center text-white"
      style={{
        background: `linear-gradient(135deg, ${COLORS.maroon} 0%, ${COLORS.maroonLight} 50%, #5C0028 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium backdrop-blur-sm">
          CRCE — Grants &amp; Funding
        </span>
        <h1
          className="text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl"
          style={{ fontFamily: FONTS.heading }}
        >
          CRCE <span style={{ color: COLORS.gold }}>Funding</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
          Fueling innovation through strategic partnerships and evidence-based
          funding initiatives that power inclusive entrepreneurship worldwide.
        </p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.3 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mx-auto mt-10 h-px w-28 origin-center rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

function FundingImpact() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <motion.div
            whileHover={{ y: -7, scale: 1.008 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="rounded-3xl p-[1.5px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(253,191,56,0.8), rgba(122,0,60,0.25), transparent)",
              boxShadow:
                "0 2px 4px -1px rgba(26,0,16,0.2), 0 26px 50px -26px rgba(26,0,16,0.6), 0 60px 100px -60px rgba(122,0,60,0.7)",
            }}
          >
            <div
              className="overflow-hidden rounded-[calc(1.5rem-1px)]"
              style={{ backgroundColor: COLORS.maroonDeep }}
            >
              <div className="relative aspect-video">
                <iframe
                  src={IMPACT_VIDEO.embedUrl}
                  title="Watch our impact — CRCE funding"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          <motion.a
            href={IMPACT_VIDEO.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white"
            style={{
              backgroundColor: COLORS.maroon,
              boxShadow:
                "0 1px 2px -1px rgba(26,0,16,0.3), 0 16px 32px -18px rgba(122,0,60,0.85)",
            }}
          >
            <Play className="h-4 w-4" fill="currentColor" />
            Watch Our Impact
          </motion.a>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <span
              className="text-xs font-bold uppercase"
              style={{ color: "rgba(122,0,60,0.6)", letterSpacing: "0.3em" }}
            >
              Our Funding Model
            </span>
            <h2
              className="mt-4 text-3xl leading-tight font-black md:text-4xl"
              style={{ color: COLORS.maroon, fontFamily: FONTS.heading }}
            >
              Fueling Sustainable Impact
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              className="mt-6 h-px"
              style={{
                background: `linear-gradient(90deg, ${COLORS.gold}, transparent)`,
              }}
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative mt-8 rounded-2xl border border-l-2 bg-white p-8 sm:p-9"
              style={{
                borderColor: "rgba(122,0,60,0.1)",
                borderLeftColor: COLORS.gold,
                boxShadow: SHADOW_CARD,
              }}
              onMouseEnter={hoverCard}
              onMouseLeave={restCard}
            >
              <Quote
                className="absolute top-5 right-6 h-9 w-9"
                style={{ color: "rgba(122,0,60,0.09)" }}
                aria-hidden="true"
              />
              <p
                className="relative text-base leading-relaxed"
                style={{ color: "#3f3f3f" }}
              >
                {IMPACT_STATEMENT}
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function AwardedGrants() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Award}
          title="Active"
          accent="& Awarded Grants"
          description="These successful funding awards are fueling our programs, research, and community collaborations across four continents."
        />

        <motion.ul
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2"
        >
          {AWARDED_GRANTS.map((grant) => (
            <motion.li
              key={`${grant.funder}-${grant.title ?? "award"}`}
              variants={fadeUpCard}
              whileHover={liftHover}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex items-start gap-5 rounded-2xl border bg-white p-8 sm:p-9"
              style={cardRest()}
              onMouseEnter={hoverCard}
              onMouseLeave={restCard}
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "rgba(253,191,56,0.18)",
                  boxShadow: "inset 0 0 0 1px rgba(253,191,56,0.3)",
                }}
                aria-hidden="true"
              >
                <Check
                  className="h-5 w-5"
                  strokeWidth={3}
                  style={{ color: COLORS.maroon }}
                />
              </span>

              <div className="min-w-0 flex-1">
                <p
                  className="text-[11px] leading-relaxed font-bold uppercase"
                  style={{ color: COLORS.maroon, letterSpacing: "0.18em" }}
                >
                  {grant.funder}
                </p>
                {grant.title && (
                  <h3
                    className="mt-2.5 text-base leading-snug font-bold"
                    style={{ color: "#1a0010", fontFamily: FONTS.heading }}
                  >
                    {grant.title}
                  </h3>
                )}
                {grant.description && (
                  <p
                    className="mt-2.5 text-sm leading-relaxed"
                    style={{ color: COLORS.body }}
                  >
                    {grant.description}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function ProposalsUnderReview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, rgba(253,191,56,0.18) 0%, transparent 45%), radial-gradient(circle at 85% 100%, rgba(122,0,60,0.10) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={FileSearch}
          title="Proposals"
          accent="& Grants Under Review"
          description="Strategic funding applications aligned with our mission to co-create inclusive entrepreneurial ecosystems."
        />

        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROPOSALS_UNDER_REVIEW.map((proposal) => (
            <motion.article
              key={`${proposal.funder}-${proposal.title}`}
              variants={fadeUpCard}
              whileHover={liftHover}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-start rounded-2xl border bg-white p-8"
              style={cardRest()}
              onMouseEnter={hoverCard}
              onMouseLeave={restCard}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "rgba(253,191,56,0.18)",
                  boxShadow: "inset 0 0 0 1px rgba(253,191,56,0.3)",
                }}
                aria-hidden="true"
              >
                <Search
                  className="h-5 w-5"
                  strokeWidth={2.5}
                  style={{ color: COLORS.maroon }}
                />
              </span>

              <p
                className="mt-5 text-[11px] leading-relaxed font-bold uppercase"
                style={{ color: COLORS.maroon, letterSpacing: "0.18em" }}
              >
                {proposal.funder}
              </p>
              <span
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold tracking-wide uppercase"
                style={
                  STATUS_PILL[proposal.status] ??
                  STATUS_PILL["Concept Note Submitted"]
                }
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "currentColor" }}
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                />
                {proposal.status}
              </span>
              <h3
                className="mt-4 text-lg leading-snug font-black"
                style={{ color: COLORS.ink, fontFamily: FONTS.heading }}
              >
                {proposal.title}
              </h3>
              {proposal.description && (
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: COLORS.body }}
                >
                  {proposal.description}
                </p>
              )}
              <span
                className="mt-6 h-px w-full"
                style={{ backgroundColor: "rgba(122,0,60,0.1)" }}
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function FundingPage() {
  return (
    <div style={{ backgroundColor: COLORS.cream, fontFamily: FONTS.body }}>
      <Hero />
      <FundingImpact />
      <AwardedGrants />
      <ProposalsUnderReview />
    </div>
  )
}
