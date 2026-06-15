import { motion } from "motion/react"
import { Calendar } from "lucide-react"
import type { Episode } from "@/content/podcasts"

export const EpisodeCard = ({
  episode,
  showLatestBadge = false,
}: {
  episode: Episode
  showLatestBadge?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-xl"
  >
    <div className="xs:p-6 relative z-10 p-4">
      <div className="grid items-start gap-6 md:grid-cols-10">
        <div className="self-stretch md:col-span-4 lg:col-span-3">
          <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="mb-4 flex flex-col gap-2">
              <span className="bg-maroon rounded-lg px-3 py-1.5 text-center text-xs font-semibold text-white">
                Episode {episode.episodeNumber}
              </span>
              {showLatestBadge && (
                <span className="bg-gold text-maroon rounded-lg px-3 py-1.5 text-center text-xs font-semibold">
                  Latest Episode
                </span>
              )}
            </div>
            <h3 className="mb-4 text-xl leading-tight font-bold text-gray-900">
              {episode.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              {episode.description}
            </p>
            <div className="mt-auto flex items-center gap-2 border-t border-gray-200 pt-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(`${episode.publishDate}T00:00:00`).toLocaleDateString(
                  "en-CA",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "America/Toronto",
                  }
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg bg-gray-900 shadow-lg md:col-span-6 lg:col-span-7">
          <div className="xs:pb-[70%] relative w-full pb-[100%] lg:pb-[58%]">
            <iframe
              src={`https://drive.google.com/file/d/${episode.videoId}/preview`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={episode.title}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)
