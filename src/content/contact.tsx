import { Building2, Mail, MapPin } from "lucide-react"

export type Info = {
  icon: React.ReactElement
  title: string
  lines: string[]
  cta?: {
    label: string
    href: string
    external: boolean
  }
}

export const infoCards: Info[] = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Our Location",
    lines: [
      "CRCE DeGroote School of Business (DSB)",
      "Room A113",
      "McMaster University",
      "1280 Main Street West",
      "Hamilton, ON L8S 4M4, Canada",
    ],
    cta: {
      label: "Get Directions",
      href: "https://www.google.com/maps/dir//DeGroote+School+of+Business,+Michael+G.+DeGroote+School+of+Business,+1280+Main+St+W,+Hamilton,+ON+L8S+4E8",
      external: true,
    },
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    lines: ["bhonig@mcmaster.ca", "nafarij@mcmaster.ca"],
    cta: {
      label: "Send Email",
      href: "mailto:bhonig@mcmaster.ca",
      external: false,
    },
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Institution",
    lines: [
      "McMaster University",
      "DeGroote School of Business",
      "Centre for Community-Oriented Entrepreneurship",
    ],
  },
]
