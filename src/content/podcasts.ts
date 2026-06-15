export type Episode = {
  id: string
  episodeNumber: number
  title: string
  description: string
  videoId: string
  publishDate: string
  duration: string
  isPublished: boolean
}

export const episodes: Episode[] = [
  {
    id: "1",
    episodeNumber: 1,
    title: "Episode 1: Entrepreneurship for the Rest of Us",
    description:
      "Welcome to the inaugural episode of Entrepreneurship for the Rest of Us, brought to you by the Centre for Research on Community-Oriented Entrepreneurship at McMaster University.",
    videoId: "1vbjBouNkd9VkNWlWvpfNDTGBzc4rFOTh",
    publishDate: "2026-01-01",
    duration: "39:56",
    isPublished: true,
  },
  {
    id: "2",
    episodeNumber: 2,
    title: "Episode 2: How do a founder's personal values shape a business?",
    description:
      "In this CRCE podcast, Professor François Neville explores authenticity, growth, identity, and what happens when values meet entrepreneurship.",
    videoId: "1absNtWxSE5cmIVJStrqT2rMFlx0qoFe3",
    publishDate: "2026-05-04",
    duration: "49:50",
    isPublished: true,
  },
  {
    id: "3",
    episodeNumber: 3,
    title: "Episode 3: Why is failure essential to entrepreneurial success?",
    description:
      "In this episode of Entrepreneurship for the Rest of Us, Benson Honig speaks with Tej Sandu, founder of Merit Brewing and Entrepreneur-in-Residence at McMaster University. Together, they explore why failure is an essential part of entrepreneurship, how resilience is built through experience, and why learning from setbacks can be more valuable than chasing perfection.",
    videoId: "1oT95GO8raub40moox26XPVTnZIC4mrbR",
    duration: "57:21",
    publishDate: "2026-06-12",
    isPublished: true,
  },
]
