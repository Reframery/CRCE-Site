export type Episode = {
  id: string
  episodeNumber: number
  title: string
  description: string
  videoUrl: string
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
    videoUrl:
      "https://drive.google.com/file/d/1vbjBouNkd9VkNWlWvpfNDTGBzc4rFOTh/preview",
    publishDate: "2026-01-01",
    duration: "39:56",
    isPublished: true,
  },
]
