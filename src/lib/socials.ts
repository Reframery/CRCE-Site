type SocialType = "Email" | "LinkedIn"

export type Social = {
  type: SocialType
  label: string
}

export const iconMap: Record<SocialType, string> = {
  Email: "lucide:mail",
  LinkedIn: "fa-brands:linkedin-in",
}

export const email = (label: string) => `mailto:${label}`

export const linkedIn = (label: string) =>
  `https://www.linkedin.com/in/${label}`
