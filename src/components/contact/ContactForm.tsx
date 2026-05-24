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

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailto = `mailto:bhonig@mcmaster.ca?subject=${encodeURIComponent(formData.subject || "General Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 5000)
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
              className="w-full rounded-xl border-2 bg-white px-4 py-2 font-medium text-gray-900 placeholder-gray-400 ring-2 ring-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-maroon invalid:focus-visible:ring-red-500"
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
          className="w-full rounded-xl border-2 bg-white px-4 py-2 font-medium text-gray-900 placeholder-gray-400 ring-2 ring-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-maroon invalid:focus-visible:ring-red-500"
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
          className="w-full resize-none rounded-xl border-2 bg-white px-4 py-2 font-medium text-gray-900 placeholder-gray-400 ring-2 ring-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-maroon invalid:focus-visible:ring-red-500"
        />
      </motion.div>
      <motion.button
        type="submit"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.36 }}
        className="hover:bg-maroon/90 flex w-full items-center justify-center gap-2.5 rounded-xl bg-maroon py-3 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:text-gold"
      >
        <Send className="h-5 w-5" />
        Send Message
      </motion.button>
    </form>
  )
}
