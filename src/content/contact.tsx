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
      "Tandem Accelerator Building",
      "1280 Main St W, Bldg #32",
      "Hamilton, ON L8S 4K1",
    ],
    cta: {
      label: "Get Directions",
      href: "https://maps.google.com/maps/dir//Tandem+Accelerator+Building+TA+1280+Main+St+W+Building+%23+32+Hamilton,+ON+L8S+4K1",
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
