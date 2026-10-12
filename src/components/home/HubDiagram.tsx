
import { motion } from "motion/react"

export default function HubDiagram() {
  const programs = [
    { name: "Reframery", sub: "Online platform & community" },
    { name: "RISE", sub: "Mentorship & training" },
  ]

  return (
    <div className="mx-auto my-12 flex w-full max-w-2xl flex-col items-center px-4">
      {/* CRCE central hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        className="relative z-10 rounded-full px-7 py-3 text-center"
        style={{
          backgroundColor: "#7A003C",
          boxShadow: "0 0 24px rgba(122,0,60,0.3)",
        }}
      >
        <span className="text-lg font-black tracking-wide text-white">
          CRCE
        </span>
        <span
          className="block text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "#FDBF38" }}
        >
          Central Hub
        </span>
      </motion.div>

      {/* Gold branching connector lines */}
      <svg
        width="320"
        height="60"
        viewBox="0 0 320 60"
        className="-my-1 w-full max-w-[320px] overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M160 0 V20 H60 V60"
          fill="none"
          stroke="#FDBF38"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.path
          d="M160 0 V20 H260 V60"
          fill="none"
          stroke="#FDBF38"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
        <circle cx="60" cy="60" r="3.5" fill="#FDBF38" />
        <circle cx="260" cy="60" r="3.5" fill="#FDBF38" />
      </svg>

      {/* Program nodes */}
      <div className="grid w-full max-w-md grid-cols-2 gap-6 sm:gap-20">
        {programs.map((program, i) => (
          <motion.div
            key={program.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4 + i * 0.15,
            }}
            className="rounded-xl px-4 py-3 text-center"
            style={{
              backgroundColor: "#3B0D1B",
              border: "1px solid rgba(253,191,56,0.35)",
            }}
          >
            <p className="text-sm font-bold text-white">
              {program.name}
            </p>
            <p
              className="mt-0.5 text-[11px]"
              style={{ color: "#D1CFCF" }}
            >
              {program.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
