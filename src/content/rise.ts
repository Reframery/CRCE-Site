import { BookOpen, Globe, Users, type LucideIcon } from "lucide-react"

export const description =
  "RISE is situated at the intersection of cutting-edge research and practical social change. It embodies our commitment to creating more inclusive and diverse entrepreneurial ecosystems. We aim to dismantle barriers and foster a community where all entrepreneurs can thrive. Leveraging the strength of interdisciplinary collaboration across faculties and universities, RISE is not just a program but a movement towards fostering sustainable business practices that are inclusive and accessible to all."

export type Section = {
  title: string
  tag: string
  Icon: LucideIcon
  paragraphs: string[]
  cta?: {
    label: string
    href: string
    external?: boolean
  }
}

export const sections: Section[] = [
  {
    title: "RISE Mentorship",
    tag: "Mentorship",
    Icon: Users,
    paragraphs: [
      "At the core of RISE's mission is the development of a virtual mentoring model, designed to connect entrepreneurs from all walks of life with mentors around the globe. This model prioritizes inclusivity and accessibility, ensuring that marginalized entrepreneurs find the guidance and support they need.",
      "Our mentoring program fosters meaningful connections, offering tailored advice that aligns with each entrepreneur's unique journey. We leverage a vast network of experienced business leaders and innovators, ensuring mentees have access to a wealth of knowledge and experience.",
    ],
  },
  {
    title: "Interdisciplinary Entrepreneurship Programs",
    tag: "Programs",
    Icon: BookOpen,
    paragraphs: [
      "RISE champions the integration of entrepreneurship training within non-business curricula, breaking down the traditional silos that exist within academic institutions. By partnering with departments across faculties and universities worldwide, we introduce entrepreneurship as a vital skill set.",
      "Through workshops, courses, and experiential learning opportunities, students from various academic backgrounds are exposed to the fundamentals of entrepreneurship — ensuring a diverse pool of future entrepreneurs equipped to contribute to societal progress.",
    ],
  },
  {
    title: "Collaborate with RISE",
    tag: "Partnership",
    Icon: Globe,
    paragraphs: [
      "We are actively seeking partners and collaborators who share our vision of a more inclusive, diverse, and sustainable entrepreneurial world. Whether you're an educational institution, a business leader, or an organization passionate about social entrepreneurship — there's a place for you in the RISE community.",
      "Together, we can create a vibrant community where every entrepreneur has the support, resources, and opportunities to thrive. Let's work together to drive meaningful change.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
]

export const stats = [
  { value: "Global", label: "Mentor Network" },
  { value: "Inclusive", label: "Curriculum Design" },
  { value: "Impact", label: "Driven Mission" },
  { value: "Diverse", label: "Community Focus" },
]
