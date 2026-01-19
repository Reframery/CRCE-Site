export type Episode = {
  id: string
  episodeNumber: number
  title: string
  description: string
  audioUrl: string
  publishDate: string
  duration: string
  isPublished: boolean
}

export const episodes: Episode[] = [
  {
    id: "1",
    episodeNumber: 1,
    title: "Entrepreneurship for the Rest of Us - Episode 1",
    description:
      "Welcome to the inaugural episode of Entrepreneurship for the Rest of Us, brought to you by the Centre for Research on Community-Oriented Entrepreneurship at McMaster University.",
    audioUrl:
      "https://base44.app/api/apps/684f444cafe9644dafa473bc/files/public/684f444cafe9644dafa473bc/113b90eae_podcast.opus",
    publishDate: "2026-01-01",
    duration: "39:56",
    isPublished: true,
  },
]
