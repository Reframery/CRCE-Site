import { motion } from "motion/react"
import { useRef, useState } from "react"
import image from "@/images/mcm-dsb-crce.png"

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleTogglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#12000c]">
      {/* Video */}
      <video
        id="video"
        ref={videoRef}
        autoPlay
        muted
        loop
        className="aspect-video max-h-120 w-full object-cover object-center"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        type="button"
        onClick={handleTogglePlay}
        className="video-button group border-gold absolute bottom-4 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-gray-900/40 p-2.5 transition-colors duration-250 hover:cursor-pointer hover:bg-gray-900 [&>svg]:invert"
        aria-label="Play/Pause"
        aria-controls="video"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      {/* Maroon gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(18,0,12,0.7) 0%, rgba(122,0,60,0.5) 60%, rgba(18,0,12,0.8) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,hsl(var(--gold))_1px,transparent_1px)] bg-size-[40px_40px] opacity-10" />
      {/* Centered logos */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
      >
        <img
          src={image.src}
          alt="McMaster University | DeGroote School of Business | CRCE"
          className="w-full max-w-2xl px-8 drop-shadow-2xl"
          loading="eager"
        />
      </motion.div>
      <div
        className="bg-gold absolute right-0 bottom-0 left-0 h-1"
        aria-hidden="true"
      />
    </section>
  )
}

const Pause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    {/* !FontAwesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
    <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
  </svg>
)

const Play = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    {/* !FontAwesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
  </svg>
)
