import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

const recapImages = [
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/7581df1b8_CRCE_conf_pic116.png', caption: 'Keynote Speaker' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/68a3295c3_CRCE_conf_pic118.png', caption: 'Panel Discussion' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/b83a36537_CRCE_conf_pic110.png', caption: 'Plenary Address' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/cfe82f7fe_CRCE_conf_pic107.png', caption: 'Featured Presentation' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/45cc31f24_CRCE_conf_pic104.png', caption: 'Speaker Session' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/e15446db0_CRCE_conf_pic102.png', caption: 'Conference Address' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/d7a3ed0a0_CRCE_conf_pic101.png', caption: 'Presenter Spotlight' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/70ecd3325_CRCE_conf_pic1.png', caption: 'Audience Engagement' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/73fdd9cb0_CRCE_conf_pic01.png', caption: 'Networking Moments' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/777841884_CRCE_conf.png', caption: 'Conference Atmosphere' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/c92675b9c_CRCE_conf_pic141.png', caption: 'Founders Showcase' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/fd22a758d_CRCE_conf_pic140.png', caption: 'Opening Remarks' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/b14d68a9b_CRCE_conf_pic137.png', caption: 'Keynote Address' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/25c0f74ae_CRCE_conf_pic13.png', caption: 'Artisan Marketplace' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/12bd9c69d_CRCE_conf_pic127.png', caption: 'Speaker Spotlight' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/8abebd753_CRCE_conf_pic124.png', caption: 'Engaged Audience' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/bac6701a8_CRCE_conf_pic122.png', caption: 'Panel on Entrepreneurship & Poverty' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/7c32fbfc1_CRCE_conf_pic116.png', caption: 'Featured Presenter' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/3aa1d8fdf_CRCE_conf_pic118.png', caption: 'Panel in Dialogue' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/07ee2f6ec_CRCE_conf_pic110.png', caption: 'Plenary Session' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/59985eef8_CRCE_conf_pic46.png', caption: 'Presenter in Patterned Shirt' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/75168eb1e_CRCE_conf_pic196.png', caption: 'Presenter Spotlight' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/27940aaf0_CRCE_conf_pic175.png', caption: 'Award Ceremony' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/036f43b03_CRCE_conf_pic174.png', caption: 'Networking Break' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/3fa27e171_CRCE_conf_pic173.png', caption: 'Coffee & Conversation' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/a873f80ef_CRCE_conf_pic167.png', caption: 'Community Connections' },
  { url: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/6610bdd6a_CRCE_conf_pic141.png', caption: 'GreenHouse Founders Panel' },
];

const AUTOPLAY_MS = 5500;

export default function ConferenceRecap() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0); // restart progress bar
  const containerRef = useRef(null);
  const currentImage = recapImages[index];

  const goTo = useCallback((i: number, dir: number = 1) => {
    setDirection(dir);
    setIndex(i);
    setKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((index + 1) % recapImages.length, 1), [index, goTo]);
  const prev = useCallback(() => goTo((index - 1 + recapImages.length) % recapImages.length, -1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((p) => (p + 1) % recapImages.length);
      setKey((k) => k + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, index]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0d0008' }}>
      {/* Edge fades */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none" style={{
        height: '110px', background: 'linear-gradient(180deg, #0d0008 0%, rgba(13,0,8,0) 100%)'
      }} />
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" style={{
        height: '100px', background: 'linear-gradient(0deg, #0d0008 0%, rgba(13,0,8,0) 100%)'
      }} />
      <div className="absolute top-0 bottom-0 left-0 z-20 pointer-events-none" style={{
        width: '120px', background: 'linear-gradient(90deg, #0d0008 0%, rgba(13,0,8,0.7) 30%, rgba(13,0,8,0.3) 60%, rgba(13,0,8,0) 100%)'
      }} />
      <div className="absolute top-0 bottom-0 right-0 z-20 pointer-events-none" style={{
        width: '120px', background: 'linear-gradient(270deg, #0d0008 0%, rgba(13,0,8,0.7) 30%, rgba(13,0,8,0.3) 60%, rgba(13,0,8,0) 100%)'
      }} />

      {/* ── CAROUSEL ── */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '720px' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-7 left-0 right-0 z-40 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full"
            style={{ background: 'rgba(13,0,8,0.6)', border: '1px solid rgba(253,191,56,0.45)', backdropFilter: 'blur(8px)' }}>
            <Camera className="w-4 h-4" style={{ color: '#FDBF38' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FDBF38' }}>
              Conference Recap
            </span>
          </div>
        </motion.div>

        {/* Slides with crossfade + Ken Burns */}
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {currentImage && (
            <motion.img
              src={currentImage.url}
              alt={currentImage.caption}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'top center' }}
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{
                duration: AUTOPLAY_MS / 1000 + 1,
                ease: 'linear',
              }}
            />
          )}
            {/* Bottom scrim for caption legibility */}
            <div className="absolute inset-x-0 bottom-0" style={{
              height: '45%',
              background: 'linear-gradient(0deg, rgba(13,0,8,0.85) 0%, rgba(13,0,8,0.4) 50%, rgba(13,0,8,0) 100%)'
            }} />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.12, backgroundColor: 'rgba(253,191,56,0.18)' }}
          whileTap={{ scale: 0.92 }}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.12, backgroundColor: 'rgba(253,191,56,0.18)' }}
          whileTap={{ scale: 0.92 }}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>

        {/* Progress dots with autoplay bar */}
        <div className="absolute bottom-7 left-0 right-0 z-40 flex justify-center items-center gap-2.5">
          {recapImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className="relative rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: i === index ? '36px' : '8px',
                height: '8px',
                backgroundColor: i === index ? 'rgba(253,191,56,0.25)' : 'rgba(255,255,255,0.35)',
              }}
              aria-label={`Go to image ${i + 1}`}
            >
              {i === index && (
                <motion.div
                  key={key}
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#FDBF38', transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? 0 : 1 }}
                  transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}