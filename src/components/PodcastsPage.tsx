import { motion } from "motion/react"
import { Calendar, Mic, Sparkles, UserCheck } from "lucide-react"

import { episodes, type Episode } from "@/content/podcasts"
import { Button } from "./ui/Button"

export default function Podcast() {
  const latestEpisode = episodes[0]

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(to right, #7A003C 1px, transparent 1px), linear-gradient(to bottom, #7A003C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute left-10 top-20 h-64 w-64 rounded-full bg-[#7A003C]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-[#FDBF38]/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-br from-[#7A003C] via-[#8B0A46] to-[#5C0028] px-4 py-20 text-white">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Floating animated shapes */}
        <motion.div
          className="absolute right-10 top-10 h-20 w-20 rounded-full border-2 border-white/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-16 w-16 rounded-lg border-2 border-[#FDBF38]/30"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "rgba(255,255,255,0.4)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(253,191,56,0.2)",
                  "0 0 40px rgba(253,191,56,0.4)",
                  "0 0 20px rgba(253,191,56,0.2)",
                ],
              }}
              transition={{ boxShadow: { duration: 3, repeat: Infinity } }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Mic className="h-4 w-4" />
                </motion.div>
                <span className="text-sm font-medium">
                  Reframery Podcast Series
                </span>
              </div>
            </motion.div>
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Entrepreneurship
              <br />
              <motion.span
                className="text-[#FDBF38]"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(253,191,56,0.3)",
                    "0 0 40px rgba(253,191,56,0.6)",
                    "0 0 20px rgba(253,191,56,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                for the Rest of Us
              </motion.span>
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed opacity-90 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Exploring pathways to inclusive, sustainable, and
              community-oriented entrepreneurship. Join us for insightful
              conversations with researchers, practitioners, and entrepreneurs
              who are building prosperous and resilient communities through
              innovative business practices.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  y: -3,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-[#FDBF38]" />
                  </motion.div>
                  <span className="text-sm font-medium">
                    New episodes coming soon
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  y: -3,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <UserCheck className="h-4 w-4 text-[#FDBF38]" />
                  </motion.div>
                  <span className="text-sm font-medium">
                    Expert guests & researchers
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        {/* Latest Episode Section */}
        {latestEpisode && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="mb-6 text-3xl font-bold text-slate-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Latest Episode
            </motion.h2>
            <LatestEpisodeCard episode={latestEpisode} />
          </motion.div>
        )}
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            About the Podcast
          </h2>
          <p className="mx-auto mb-4 max-w-4xl leading-relaxed text-slate-600">
            "Entrepreneurship for the Rest of Us" is brought to you by the
            Centre for Research on Community-Oriented Entrepreneurship (CRCE) at
            McMaster University's DeGroote School of Business.
          </p>
          <p className="mx-auto mb-8 max-w-4xl leading-relaxed text-slate-600">
            Through engaging conversations with leading researchers,
            entrepreneurs, and community builders, we explore innovative
            approaches to entrepreneurship that prioritize environmental
            sustainability, social inclusion, and community prosperity. Our
            mission is to democratize entrepreneurship by supporting diverse
            individuals—including immigrants, women, persons with disabilities,
            and minority-owned businesses—to build resilient ventures that
            create meaningful economic and social impact.
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="/about">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-[#7A003C] px-6 py-3 text-white hover:bg-[#5C0028]">
                  Learn About CRCE
                </Button>
              </motion.div>
            </a>
            <a href="https://reframery.org">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="border border-[#7A003C] px-6 py-3 text-[#7A003C] hover:bg-[#7A003C] hover:text-white">
                  Explore Reframery
                </Button>
              </motion.div>
            </a>
            <a href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="border border-[#7A003C] px-6 py-3 text-[#7A003C] hover:bg-[#7A003C] hover:text-white">
                  Contact Us
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function LatestEpisodeCard({ episode }: { episode: Episode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(122,0,60,0.3)" }}
      className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl"
    >
      <div className="relative z-10 p-8">
        <div className="grid items-start gap-8 md:grid-cols-10">
          {/* Left Side - Episode Info (30%) */}
          <div className="md:col-span-3">
            <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex flex-col gap-2">
                <span className="rounded-lg bg-[#7A003C] px-3 py-1.5 text-center text-xs font-semibold text-white">
                  Episode {episode.episodeNumber}
                </span>
                <span className="rounded-lg bg-[#FDBF38] px-3 py-1.5 text-center text-xs font-semibold text-[#7A003C]">
                  Latest Episode
                </span>
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight text-slate-900">
                {episode.title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-slate-700">
                {episode.description}
              </p>
              {episode.publishDate && (
                <div className="flex items-center gap-2 border-t border-slate-200 pt-4 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(episode.publishDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* Right Side - Video Player (70%) */}
          {episode.videoUrl && (
            <div className="w-full overflow-hidden rounded-lg bg-slate-900 shadow-lg md:col-span-7">
              <div className="aspect-video w-full">
                <iframe
                  src={episode.videoUrl}
                  className="h-full w-full"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title={episode.title}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
