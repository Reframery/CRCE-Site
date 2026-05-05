import { motion } from "motion/react"
import { Calendar } from "lucide-react"
import type { Episode } from "@/content/podcasts"

export function EpisodeCard({
  episode,
  showLatestBadge = false,
}: {
  episode: Episode
  showLatestBadge?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(122,0,60,0.3)" }}
      className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl"
    >
      <div className="relative z-10 p-8">
        <div className="grid items-start gap-8 md:grid-cols-10">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex flex-col gap-2">
                <span className="rounded-lg bg-[#7A003C] px-3 py-1.5 text-center text-xs font-semibold text-white">
                  Episode {episode.episodeNumber}
                </span>
                {showLatestBadge && (
                  <span className="rounded-lg bg-[#FDBF38] px-3 py-1.5 text-center text-xs font-semibold text-[#7A003C]">
                    Latest Episode
                  </span>
                )}
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
                    {new Date(
                      `${episode.publishDate}T00:00:00`
                    ).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "America/Toronto",
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
          {episode.videoUrl && (
            <div className="w-full overflow-hidden rounded-lg bg-slate-900 shadow-lg md:col-span-6 lg:col-span-7">
              <div className="aspect-video w-full">
                <iframe
                  src={episode.videoUrl}
                  className="aspect-video h-full w-full"
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
