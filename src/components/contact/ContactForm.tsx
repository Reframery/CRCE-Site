import { useState } from "react"
import { motion } from "motion/react"
import { CheckCircle, Send } from "lucide-react"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<any>(null)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailto = `mailto:bhonig@mcmaster.ca?subject=${encodeURIComponent(formData.subject || "General Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return submitted ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <motion.div
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="mb-4 h-16 w-16 text-maroon" />
      </motion.div>
      <h3 className="mb-2 text-2xl font-extrabold text-gray-900">
        You're all set!
      </h3>
      <p className="max-w-xs text-gray-500">
        Your email client opened. Hit send and we'll be in touch soon.
      </p>
    </motion.div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {[
          {
            id: "name",
            label: "Full Name",
            type: "text",
            placeholder: "Jane Smith",
          },
          {
            id: "email",
            label: "Email Address",
            type: "email",
            placeholder: "jane@example.com",
          },
        ].map((field, gi) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + gi * 0.08 }}
          >
            <label
              htmlFor={field.id}
              className="mb-1.5 block text-sm font-bold text-gray-700"
            >
              {field.label} *
            </label>
            <input
              id={field.id}
              required
              type={field.type}
              value={formData[field.id as keyof typeof formData]}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  [field.id]: e.target.value,
                }))
              }
              placeholder={field.placeholder}
              onFocus={() => setFocusedField(field.id)}
              onBlur={() => setFocusedField(null)}
              className="w-full rounded-xl border-2 bg-gray-50 px-4 py-3.5 font-medium text-gray-900 placeholder-gray-300 transition-all duration-200 focus:outline-none"
              style={{
                borderColor: focusedField === field.id ? "#7A003C" : "#e5e7eb",
              }}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-bold text-gray-700"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData((p) => ({ ...p, subject: e.target.value }))
          }
          placeholder="Research collaboration, general inquiry…"
          onFocus={() => setFocusedField("subject")}
          onBlur={() => setFocusedField(null)}
          className="w-full rounded-xl border-2 bg-gray-50 px-4 py-3.5 font-medium text-gray-900 placeholder-gray-300 transition-all duration-200 focus:outline-none"
          style={{
            borderColor: focusedField === "subject" ? "#7A003C" : "#e5e7eb",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.28 }}
      >
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-bold text-gray-700"
        >
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((p) => ({ ...p, message: e.target.value }))
          }
          placeholder="Tell us how we can help…"
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          className="w-full resize-none rounded-xl border-2 bg-gray-50 px-4 py-3.5 font-medium text-gray-900 placeholder-gray-300 transition-all duration-200 focus:outline-none"
          style={{
            borderColor: focusedField === "message" ? "#7A003C" : "#e5e7eb",
          }}
        />
      </motion.div>
      <motion.button
        type="submit"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.36 }}
        whileHover={{
          scale: 1.03,
          y: -3,
          boxShadow: "0 16px 40px rgba(122,0,60,0.3)",
        }}
        whileTap={{ scale: 0.97 }}
        className="flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-base font-black text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, #7A003C, #5a0029)",
        }}
      >
        <Send className="h-5 w-5" />
        Send Message
      </motion.button>
    </form>
  )
}
