import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { StudentModal } from "./StudentModal"
import type { Person } from "@/content/team"

type StudentCardProps = {
  person: Person
  index: number
  loading?: React.ImgHTMLAttributes<HTMLImageElement>["loading"]
}

export const StudentCard = ({
  person,
  index,
  loading = "lazy",
}: StudentCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
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
        onClick={() => setOpen(true)}
        className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md"
        style={{
          boxShadow: hovered ? "0 20px 50px rgba(122,0,60,0.15)" : undefined,
          transition: "box-shadow 0.3s",
        }}
      >
        <div className="relative h-[200px] overflow-hidden">
          <motion.img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.5 }}
            loading={loading}
          />
          <div
            className="duration-400 absolute inset-0 transition-opacity"
            style={{
              background:
                "linear-gradient(to top, #B8860Bcc 0%, transparent 55%)",
              opacity: hovered ? 0.9 : 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-3 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
              View Profile
            </span>
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <motion.div
            className="mb-3 h-0.5 w-8 rounded-full"
            style={{ backgroundColor: "#B8860B" }}
            animate={{ width: hovered ? 40 : 32 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="mb-1 text-base font-extrabold leading-tight text-gray-900">
            {person.name}
          </h3>
          <p className="text-sm font-semibold text-[#B8860B]">{person.role}</p>
        </div>
      </motion.div>
      {open && (
        <StudentModal
          person={person}
          onClose={() => setOpen(false)}
          loading={loading}
        />
      )}
    </>
  )
}
