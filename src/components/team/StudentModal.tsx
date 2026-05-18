import { AnimatePresence, motion } from "framer-motion"
import { Linkedin, Mail, X } from "lucide-react"

type StudentModalProps = {
  person: any
  onClose: () => void
  loading?: React.ImgHTMLAttributes<HTMLImageElement>["loading"]
}

export const StudentModal = ({
  person,
  onClose,
  loading = "lazy",
}: StudentModalProps) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        transition={{ type: "spring", stiffness: 120 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="relative h-32 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #B8860B 0%, #7A003C 100%)",
          }}
        >
          <img
            src={person.image}
            alt={person.name}
            className="absolute inset-0 h-full w-full object-cover object-top opacity-30"
            loading={loading}
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {/* Avatar */}
        <div className="relative px-6 pb-6">
          <div className="absolute -top-10 left-6 h-20 w-20 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
            <img
              src={person.image}
              alt={person.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="pt-12">
            <h3 className="text-xl font-extrabold text-gray-900">
              {person.name}
            </h3>
            <p className="mb-4 text-sm font-semibold text-[#B8860B]">
              {person.role}
            </p>
            <p className="mb-5 text-sm leading-relaxed text-gray-600">
              {person.bio}
            </p>
            <div className="flex gap-3">
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#7A003C] px-4 py-2 text-sm font-bold text-white shadow-md"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              )}
              {person.linkedin && (
                <a
                  href={`https://www.linkedin.com/in/${person.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#7A003C] px-4 py-2 text-sm font-bold text-[#7A003C]"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)
