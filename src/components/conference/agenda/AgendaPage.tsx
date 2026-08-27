import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Clock, MapPin, Star, CalendarDays } from "lucide-react"

/* ─── SESSION DATA ─────────────────────────────────────────────────── */
const day1 = [
  {
    time: "8:00 AM – 9:00 AM",
    type: "Registration",
    title: "Registration, Breakfast, and Arrival Networking",
    desc: "Guests arrive, register, receive name badges and conference materials, and have breakfast.",
    location: "HUB Loft AB",
    signup: false,
  },
  {
    time: "9:00 AM – 9:30 AM",
    type: "Ceremony",
    title: "Opening Ceremony",
    desc: "Land Acknowledgment; Introduction to Entrepreneurship in the Global Majority; Welcome from a CRCE representative, including an introduction to the conference theme and overview of the day; Deans\u2019 Welcome; CRCE Directors\u2019 Opening Address.",
    location: "HUB Loft AB",
    signup: false,
  },
  {
    time: "9:30 AM – 10:00 AM",
    type: "Session",
    title:
      "Opening Feature: Reframery \u2014 \u201CHow Do You Get Out of Poverty?\u201D",
    desc: "",
    location: "HUB Loft AB",
    signup: false,
  },
  {
    time: "10:00 AM – 10:45 AM",
    type: "Panel",
    title: "Panel 1: The Implications of Entrepreneurship for Poverty",
    desc: "Panel Topic: The pros and cons of supporting entrepreneurship for marginalized communities.",
    location: "HUB Loft AB",
    signup: true,
  },
  {
    time: "10:50 AM – 11:35 AM",
    type: "Keynote",
    title: "Keynote 1",
    desc: "",
    location: "HUB Loft AB",
    speaker: "Anna Kim",
    signup: false,
  },
  {
    time: "11:40 AM – 12:40 PM",
    type: "Presentation",
    title:
      "Presentation Session: Entrepreneurship Education \u2014 From Learning to Launch",
    desc: "Presentation length: 20 minutes. Q&A: 5\u201310 minutes.",
    location: "HUB Loft AB",
    signup: true,
  },
  {
    time: "12:45 PM – 1:45 PM",
    type: "Break / Meal",
    title: "Lunch",
    desc: "",
    location: "HUB Loft AB",
    signup: false,
  },
  {
    time: "1:45 PM – 2:45 PM",
    type: "Presentation",
    title:
      "Presentation Session: Mentorship \u2014 Moving Entrepreneurs Forward",
    desc: "Presentation length: 20 minutes. Q&A: 5\u201310 minutes.",
    location: "HUB Loft AB",
    signup: true,
  },
  {
    time: "2:45 PM – 3:00 PM",
    type: "Networking",
    title: "Scheduled Networking Block",
    desc: "",
    location: "HUB Loft AB",
    signup: false,
  },
  {
    time: "3:00 PM – 3:45 PM",
    type: "Panel",
    title:
      "Panel 2: Immigrant Entrepreneurship \u2014 Turning Difference into Opportunity",
    desc: "Panel Topic: Resource Orchestration and the Perception of Foreignness: A Study of Migrant Entrepreneurs.",
    location: "HUB Loft AB",
    signup: true,
  },
  {
    time: "4:00 PM – 5:00 PM",
    type: "Pitch Contest",
    title: "\u201CWhat Came Next\u201D Pitch Contest",
    desc: "Speakers: 2 entrepreneurs, 1 academic. Attendees vote via QR code for the \u201CWorst Pitch\u201D \u2014 the story that best captures an unforgettable failure, lesson learned, or comeback. Voting closes near the end of the session; the audience-selected winner receives the Worst Pitch Award.",
    location: "HUB Loft AB",
    signup: false,
  },
  {
    time: "5:30 PM – 9:30 PM",
    type: "Break / Meal",
    title: "Alumni Hall Reserved Dinner",
    desc: "Alumni Hall reserved from 5:00 PM. Buffet-style dinner served at 5:30 PM. Pop, soft drinks, and alcohol available for purchase.",
    location: "Alumni Hall",
    signup: true,
  },
] as const

/* ─── TYPE STYLES ─────────────────────────────────────────────────── */
const typeStyles = {
  Keynote: { bg: "#7A003C", text: "#ffffff", dot: "#7A003C" },
  Panel: { bg: "rgba(253,191,56,0.18)", text: "#9a6a00", dot: "#FDBF38" },
  Workshop: { bg: "rgba(253,224,71,0.25)", text: "#857100", dot: "#fde047" },
  Roundtable: { bg: "rgba(147,51,234,0.15)", text: "#7e22ce", dot: "#9333ea" },
  "Pitch Contest": {
    bg: "rgba(236,72,153,0.15)",
    text: "#be185d",
    dot: "#ec4899",
  },
  Networking: { bg: "rgba(34,197,94,0.15)", text: "#15803d", dot: "#22c55e" },
  Registration: { bg: "rgba(202,138,4,0.12)", text: "#a16207", dot: "#ca8a04" },
  Ceremony: { bg: "rgba(202,138,4,0.18)", text: "#857100", dot: "#ca8a04" },
  Session: { bg: "rgba(100,116,139,0.14)", text: "#475569", dot: "#64748b" },
  Presentation: {
    bg: "rgba(59,130,246,0.14)",
    text: "#1d4ed8",
    dot: "#3b82f6",
  },
  "Break / Meal": {
    bg: "rgba(120,113,108,0.14)",
    text: "#57534e",
    dot: "#a8a29e",
  },
} as const

const legendItems = [
  { label: "Keynote", color: "#7A003C" },
  { label: "Panel", color: "#FDBF38" },
  { label: "Workshop", color: "#fde047" },
  { label: "Roundtable", color: "#9333ea" },
  { label: "Pitch Contest", color: "#ec4899" },
  { label: "Networking", color: "#22c55e" },
] as const

/* ─── SESSION CARD ────────────────────────────────────────────────── */
function SessionCard({ session, bookmarked, onToggleBookmark, index }: any) {
  const ts =
    typeStyles[session.type as keyof typeof typeStyles] || typeStyles["Session"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Time column */}
        <div className="flex shrink-0 items-start gap-2.5 border-b border-gray-100 px-5 py-4 sm:w-48 sm:border-r sm:border-b-0">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
          <span className="text-sm leading-snug font-semibold text-gray-700">
            {session.time}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 px-5 py-4">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold"
              style={{ backgroundColor: ts.bg, color: ts.text }}
            >
              {session.type}
            </span>
            {session.signup && (
              <a
                href="https://global-majority2026.ca/signups"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(34,197,94,0.12)",
                  color: "#15803d",
                }}
              >
                Sign-up required
              </a>
            )}
            <button
              onClick={() => onToggleBookmark(session.title)}
              className="ml-auto rounded-md p-1.5 transition-colors hover:bg-gray-100"
              aria-label="Bookmark session"
            >
              <Star
                className={`h-4 w-4 ${bookmarked ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
              />
            </button>
          </div>

          <h3 className="mb-1.5 text-base leading-snug font-bold text-gray-900">
            {session.title}
          </h3>

          {session.speaker && (
            <p
              className="mb-1.5 text-sm font-semibold"
              style={{ color: "#7A003C" }}
            >
              {session.speaker}
            </p>
          )}

          {session.desc && (
            <p className="mb-2 text-sm leading-relaxed text-gray-600">
              {session.desc}
            </p>
          )}

          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin className="h-3.5 w-3.5" />
            <span>{session.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const initialData = () => {
  const parsedData = JSON.parse(
    typeof window !== "undefined"
      ? (localStorage.getItem("bookmarks") ?? "[]")
      : "[]"
  )
  if (!Array.isArray(parsedData)) return []
  return parsedData.filter(
    (v) => typeof v === "string" && day1.find((item) => item.title === v)
  )
}

export default function Agenda() {
  const [activeTab, setActiveTab] = useState("day1")
  const [bookmarks, setBookmarks] = useState<string[]>(initialData)

  const toggleBookmark = (title: string) => {
    const newBookmarks = bookmarks.includes(title)
      ? bookmarks.filter((t) => t !== title)
      : [...bookmarks, title]
    setBookmarks(newBookmarks)
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks))
  }

  const tabs = [
    { id: "day1", label: "Day 1", sub: "Mon, 21 Sept" },
    { id: "day2", label: "Day 2", sub: "Tue, 22 Sept" },
    { id: "mine", label: "My Sessions", sub: "" },
    { id: "presentations", label: "Presentation Schedule", sub: "" },
  ]

  const mySessions = day1.filter((s) => bookmarks.includes(s.title))
  const presentations = day1.filter((s) => s.type === "Presentation")

  const renderList = (list: any) => (
    <div className="space-y-3">
      {list.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
          <Star className="mx-auto mb-3 h-8 w-8 text-gray-300" />
          <p className="text-sm text-gray-500">
            {activeTab === "mine"
              ? "No sessions bookmarked yet. Tap the star icon on any session to save it here."
              : activeTab === "day2"
                ? "Day 2 programme is being finalized. Check back soon."
                : "No presentations scheduled."}
          </p>
        </div>
      ) : (
        list.map((s: any, i: number) => (
          <SessionCard
            key={s.title}
            session={s}
            index={i}
            bookmarked={bookmarks.includes(s.title)}
            onToggleBookmark={toggleBookmark}
          />
        ))
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HEADER ── */}
      <header
        className="relative overflow-hidden"
        style={{ backgroundColor: "#7A003C" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
          <p
            className="mb-3 text-xs font-bold tracking-widest uppercase"
            style={{ color: "#FDBF38" }}
          >
            Conference Programme
          </p>
          <h1 className="mb-3 text-4xl font-black text-white md:text-5xl">
            Agenda
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-white/80 md:text-base">
            Draft programme — sessions, speakers, and room assignments subject
            to change.
          </p>
        </div>
      </header>

      {/* ── TABS ── */}
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}{" "}
                {tab.id === "mine" && bookmarks.length
                  ? `(${bookmarks.length})`
                  : null}
                {tab.sub && (
                  <span className="hidden font-normal text-gray-400 sm:inline">
                    {" "}
                    · {tab.sub}
                  </span>
                )}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute right-0 bottom-0 left-0 h-1 rounded-t-full"
                    style={{ backgroundColor: "#FDBF38" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Legend */}
        <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs font-medium text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Day heading */}
        {activeTab === "day1" && (
          <div className="mb-5 flex items-center gap-2">
            <CalendarDays className="h-5 w-5" style={{ color: "#7A003C" }} />
            <h2 className="text-xl font-black text-gray-900">
              Monday, September 21, 2026
            </h2>
          </div>
        )}
        {activeTab === "day2" && (
          <div className="mb-5 flex items-center gap-2">
            <CalendarDays className="h-5 w-5" style={{ color: "#7A003C" }} />
            <h2 className="text-xl font-black text-gray-900">
              Tuesday, September 22, 2026
            </h2>
          </div>
        )}
        {activeTab === "mine" && (
          <h2 className="mb-5 text-xl font-black text-gray-900">My Sessions</h2>
        )}
        {activeTab === "presentations" && (
          <h2 className="mb-5 text-xl font-black text-gray-900">
            Presentation Schedule
          </h2>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderList(
              activeTab === "day1"
                ? day1
                : activeTab === "day2"
                  ? []
                  : activeTab === "mine"
                    ? mySessions
                    : presentations
            )}
          </motion.div>
        </AnimatePresence>

        {/* Draft note */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-5">
          <p
            className="mb-1 text-xs font-bold tracking-widest uppercase"
            style={{ color: "#7A003C" }}
          >
            Draft Programme
          </p>
          <p className="text-sm text-gray-600">
            This is a working draft. Session details, speakers, room numbers,
            and times are subject to change.
          </p>
        </div>
      </main>
    </div>
  )
}
