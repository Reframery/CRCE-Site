import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { Linkedin, Mail } from "lucide-react"
import type { Person } from "@/content/team"

type PersonCardProps = {
  person: Person
  index: number
  accentColor?: string
  loading?: React.ImgHTMLAttributes<HTMLImageElement>["loading"]
}

export const PersonCard = ({
  person,
  index,
  accentColor = "#7A003C",
  loading = "lazy",
}: PersonCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        type: "spring",
        stiffness: 90,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md"
      style={{
        boxShadow: hovered ? "0 20px 50px rgba(122,0,60,0.15)" : undefined,
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Photo */}
      <div className="relative h-50 overflow-hidden">
        <motion.img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-top"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5 }}
          loading={loading}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: `linear-gradient(to top, ${accentColor}cc 0%, transparent 50%)`,
            opacity: hovered ? 0.85 : 0.5,
          }}
        />
        {/* Email button on hover */}
        {person.email && (
          <motion.a
            href={`mailto:${person.email}`}
            className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.2 }}
            style={{ color: accentColor }}
            aria-label={`Email ${person.name}`}
          >
            <Mail className="h-4 w-4" />
          </motion.a>
        )}
        {person.linkedin && (
          <motion.a
            href={`https://www.linkedin.com/in/${person.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-14 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            style={{ color: accentColor }}
            aria-label={`LinkedIn Profile for ${person.name}`}
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>
        )}
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <motion.div
          className="mb-3 h-0.5 w-8 rounded-full"
          style={{ backgroundColor: accentColor }}
          animate={{ width: hovered ? 40 : 32 }}
          transition={{ duration: 0.3 }}
        />
        <h3 className="mb-1 text-base leading-tight font-extrabold text-gray-900">
          {person.name}
        </h3>
        <p
          className="mb-2 text-sm font-semibold"
          style={{ color: accentColor }}
        >
          {person.role}
        </p>
        {person.details && person.details.length > 0 && (
          <div className="mt-auto space-y-0.5 pt-2">
            {person.details.map((detail, i) => (
              <p key={i} className="text-xs leading-snug text-gray-400">
                {detail}
              </p>
            ))}
          </div>
        )}
        {person.email && !person.linkedin && (
          <a
            href={`mailto:${person.email}`}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
            style={{ color: accentColor }}
            aria-label={`Email ${person.name}`}
          >
            <Mail className="h-3 w-3" /> {person.email}
          </a>
        )}
      </div>
    </motion.div>
  )
}
