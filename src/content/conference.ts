import {
  BookOpen,
  Handshake,
  Lightbulb,
  Mic,
  Network,
  Users,
  type LucideIcon,
} from "lucide-react"

export type Activity = {
  label: string
  desc: string
  Icon: LucideIcon
  number: string
}

export const activities: Activity[] = [
  {
    label: "Keynote Speakers",
    desc: "Two invited individuals from Kenya will share their entrepreneurial stories — including the challenges they faced and how they overcame hardship.",
    Icon: Mic,
    number: "01",
  },
  {
    label: "Panels",
    desc: "Current discourse on entrepreneurship and the Global Majority — featuring scholars, practitioners, and community leaders in open dialogue.",
    Icon: Users,
    number: "02",
  },
  {
    label: "Research Presentations",
    desc: "Cutting-edge academic and applied work exploring current field impacts and innovations in Global Majority entrepreneurship contexts.",
    Icon: BookOpen,
    number: "03",
  },
  {
    label: "Interactive Workshops",
    desc: "Hands-on sessions on field-building, next steps, and calls to action — moving from insight to impact.",
    Icon: Lightbulb,
    number: "04",
  },
  {
    label: "Networking Sessions",
    desc: "Meaningful connections across disciplines, geographies, and sectors — building lasting relationships across the global research community.",
    Icon: Network,
    number: "05",
  },
  {
    label: "Research Collaboration Opportunities",
    desc: "Deep dives on pressing issues and emerging solutions across the Global Majority — fostering new interdisciplinary partnerships.",
    Icon: Handshake,
    number: "06",
  },
]

export const stats = [
  { value: "3", suffix: " Days", label: "of Programming" },
  { value: "6", suffix: "+", label: "Activity Types" },
  { value: "2", suffix: "", label: "Keynote Speakers" },
]
