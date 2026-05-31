import { Globe, BookOpen, Users } from "lucide-react"
import reframery from "@/images/home/left.jpg"
import studentTraining from "@/images/home/center.jpg"
import rise from "@/images/home/right.png"
import vision from "@/images/home/vision.jpg"
import mission from "@/images/home/mission.jpg"

export type Card = (typeof cards)[number]

export const cards = [
  {
    img: reframery.src,
    title: "Reframery",
    desc: "An online platform and community that empowers diverse individuals around the world to develop their ideas, existing businesses, and entrepreneurship skills — striving for ingenuity, inclusion, and impact.",
    href: "https://reframery.org/",
    external: true,
    Icon: Globe,
  },
  {
    img: studentTraining.src,
    title: "Student Training",
    desc: "CRCE places student training at the forefront of its mission. Our students immerse themselves in research, project management, social innovation, and the practical application of academic knowledge.",
    href: "/people-researchers-students-faculty#student-team",
    Icon: BookOpen,
  },
  {
    img: rise.src,
    title: "RISE",
    desc: "RISE connects entrepreneurs worldwide with mentors and offers interdisciplinary entrepreneurship training for students across Canadian universities, fostering inclusivity and innovation.",
    href: "/research-inclusion-and-social-entrepreneurship",
    Icon: Users,
  },
]

export const directorsMessage =
  "At CRCE, we believe in fostering inclusive and sustainable entrepreneurship to empower marginalized communities locally and globally. Our journey began with the establishment of the Reframery, driven by the urgent need to address the disproportionate impact of COVID-19 on immigrants, women, persons with disabilities, and minority-owned businesses. Recognizing the existing disparities in access to resources and support, we are dedicated to creating a nurturing environment where everyone has the opportunity to thrive."

export const visionMission = [
  {
    src: vision.src,
    title: "Vision",
    body: (
      <>
        The{" "}
        <strong>
          Centre for Research on Community-oriented Entrepreneurship (CRCE)
        </strong>{" "}
        seeks to develop future generations of diverse entrepreneurs through
        innovative scholarship and educational services supporting
        environmentally responsible and socially inclusive entrepreneurship.
      </>
    ),
  },
  {
    src: mission.src,
    title: "Mission",
    body: "CRCE's mission is to foster research that builds prosperous and resilient communities, emphasizing environmental sustainability and community focus. By supporting diverse individuals CRCE aims to spur innovative solutions to current and future challenges — promoting economic prosperity, environmental sustainability, and social inclusion.",
  },
]
