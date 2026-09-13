import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Palette, ArrowRight,
  Calendar, MapPin, Clock, CheckCircle2
} from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────────────────────── */
const partners = [
  { name: 'CRCE', sub: "McMaster University's Reframery Incubator", role: 'Lead', logo: 'https://www.crce.info/_astro/mcm-dsb-crce.DBTae_cN.png', link: 'https://www.crce.info/' },
  { name: 'The Hamilton Artists Inc.', role: 'Lead', logo: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/3e18d5931_AltLogo.png', link: 'https://www.theinc.ca/' },
  { name: 'Marinucci Entrepreneurial Bridge', sub: 'DeGroote School of Business', role: 'Collaborator', logo: 'https://www.crce.info/_astro/McMaster_Logo.BKwD_I6F_1HZu29.webp', link: 'https://degroote.mcmaster.ca/tag/marinucci-entrepreneurial-bridge/' },
  { name: 'McMaster Museum of Art', role: 'Collaborator', logo: 'https://www.crce.info/_astro/McMaster_Logo.BKwD_I6F_1HZu29.webp', link: 'https://museum.mcmaster.ca/' },
  { name: 'Tune In Foundation', role: 'Community Partner', logo: 'https://media.base44.com/images/public/69573a816ee3f6e4126a3794/b952d891f_Tune-In-Foundation_Full-Colour_On-White_2000px.png', link: 'https://www.tuneinfoundation.org/' },
];

/* ─── MAIN PAGE ─────────────────────────────────────────────────────── */
export default function Incubator() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ede2' }}>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: 'auto', background: 'linear-gradient(160deg, #12000c 0%, #7A003C 50%, #3a0020 100%)' }}
      >
        {/* Header logos */}
        <div className="absolute top-6 left-6 z-20 flex items-stretch gap-4">
          <a href="https://www.crce.info/" target="_blank" rel="noopener noreferrer" className="flex items-center rounded-2xl px-5 py-3 bg-white shadow-lg">
            <img src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/1ee4e49a7_CRCElogo_maroonandblack.png" alt="CRCE" className="block w-auto" style={{ height: '52px' }} />
          </a>
          <a href="https://www.theinc.ca/" target="_blank" rel="noopener noreferrer" className="flex items-center rounded-2xl px-5 py-3 bg-white shadow-lg">
            <img src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/99644ae97_AltLogo.png" alt="Hamilton Artists Inc." className="block w-auto" style={{ height: '52px' }} />
          </a>
          <a href="https://degroote.mcmaster.ca/tag/marinucci-entrepreneurial-bridge/" target="_blank" rel="noopener noreferrer" className="flex items-center rounded-2xl px-5 py-3 bg-white shadow-lg">
            <img src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/32b9f15cd_image.png" alt="Marinucci Entrepreneurial Bridge" className="block w-auto" style={{ height: '52px' }} />
          </a>
          <a href="https://www.tuneinfoundation.org/" target="_blank" rel="noopener noreferrer" className="flex items-center rounded-2xl px-5 py-3 bg-white shadow-lg">
            <img src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/b952d891f_Tune-In-Foundation_Full-Colour_On-White_2000px.png" alt="Tune In Foundation" className="block w-auto" style={{ height: '52px' }} />
          </a>
          <a href="https://museum.mcmaster.ca/" target="_blank" rel="noopener noreferrer" className="flex items-center rounded-2xl px-5 py-3 bg-white shadow-lg">
            <img src="https://media.base44.com/images/public/69573a816ee3f6e4126a3794/2022803e9_image.png" alt="McMaster Museum of Art" className="block w-auto" style={{ height: '52px' }} />
          </a>
        </div>

        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />

        {[
          { size: 800, color: 'rgba(253,191,56,0.08)', x: -400, y: -200, dur: 18 },
          { size: 600, color: 'rgba(122,0,60,0.4)', x: 400, y: 200, dur: 22 },
          { size: 400, color: 'rgba(253,191,56,0.06)', x: 100, y: 350, dur: 14 },
        ].map((orb, i) => (
          <motion.div key={i}
            className="absolute rounded-full blur-3xl pointer-events-none"
            style={{
              width: orb.size, height: orb.size, backgroundColor: orb.color,
              left: `calc(50% + ${orb.x}px)`, top: `calc(50% + ${orb.y}px)`,
              transform: 'translate(-50%,-50%)'
            }}
            animate={{ scale: [1, 1.4, 1], x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 3 }}
          />
        ))}

        <motion.div
          className="relative z-10 text-center text-white px-4 pt-32 pb-16 w-full max-w-5xl mx-auto"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mt-6 mb-6 border border-white/20 backdrop-blur-md"
            style={{ background: 'rgba(253,191,56,0.1)' }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#FDBF38' }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-white/70 font-semibold uppercase tracking-widest">Hybrid Incubator · Hamilton, ON</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 80 }}
            className="inline-block mb-4"
          >
            <Palette className="w-14 h-14 mx-auto" style={{ color: '#FDBF38', filter: 'drop-shadow(0 0 20px rgba(253,191,56,0.6))' }} />
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, type: 'spring', stiffness: 60 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6"
          >
            Artist Enterprise{' '}
            <span style={{ color: '#FDBF38', filter: 'drop-shadow(0 0 20px rgba(253,191,56,0.9)) drop-shadow(0 0 40px rgba(253,191,56,0.6))' }}>
              Incubator
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg md:text-xl text-white/70 font-medium mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A 10-week entrepreneurship training program for Hamilton-based artists building a sustainable creative practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {[
              { Icon: Calendar, text: 'Mid–Late September 2026' },
              { Icon: Clock, text: '10 Weeks · Weekly Sessions' },
              { Icon: MapPin, text: 'McMaster University + Zoom' },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full backdrop-blur-md"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#FDBF38' }} />
                <span className="text-sm font-semibold text-white/90">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" style={{ fill: '#f5ede2' }}>
            <path d="M0,40L60,36C120,32,240,24,360,28C480,32,600,48,720,52C840,56,960,48,1080,40C1200,32,1320,24,1380,20L1440,16L1440,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* ── PROGRAM OVERVIEW ── */}
      <section style={{ backgroundColor: '#f5ede2' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#7A003C' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7A003C' }}>Program Overview</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight" style={{ color: '#1a1a1a' }}>
              Build your Art Practice. <span style={{ color: '#7A003C' }}>Strengthen Your Creative Business</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
              <p>
                Artists are often expected to do much more than create. They may need to manage money, apply for grants, promote their work,
                build audiences, price and sell their work, collaborate with others, and navigate galleries, institutions, funders, and
                community spaces. Many artists are asked to do all of this without access to the training, networks, or support that can
                make these tasks more manageable. <strong style={{ color: '#7A003C' }}>This program is designed to respond to that need.</strong>
              </p>
              <p>
                This <strong style={{ color: '#7A003C' }}>10-week entrepreneurship training program</strong> is designed for Hamilton-based
                artists who want to build a more sustainable creative practice, arts business, or income-generating artistic work.
              </p>
              <p>
                The sessions will be delivered in a <strong style={{ color: '#7A003C' }}>hybrid format</strong>, with a mix of in-person and
                online learning. In-person sessions will take place mainly at McMaster University.
              </p>
              <p>
                The program is led by <strong style={{ color: '#7A003C' }}>McMaster University's Reframery Incubator</strong> (at the Centre
                for Research on Community-Oriented Entrepreneurship) and <strong style={{ color: '#7A003C' }}>The Hamilton Artists Inc.</strong>,
                in collaboration with the Marinucci Entrepreneurial Bridge at the DeGroote School of Business and the McMaster Museum of Art.
              </p>
            </div>

            <motion.div
              className="mt-8 h-px w-full rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(253,191,56,0.5), transparent)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── IS THIS PROGRAM FOR YOU ── */}
      <section style={{ backgroundColor: '#f5ede2' }} className="pt-4 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#7A003C' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7A003C' }}>Eligibility</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight" style={{ color: '#1a1a1a' }}>
              Is This Program <span style={{ color: '#7A003C' }}>for You?</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
              <p>
                This program is useful for artists who want to better understand the financial, strategic, and business dimensions of
                sustaining artistic work.
              </p>
              <p>
                This program is especially intended for artists who face barriers to sustaining their creative work. This may include
                social, economic, racial, cultural, disability-related, gender-based, immigration-related, language-related, or other
                barriers. Applicants do not need to fit into one fixed category or disclose personal information they are not comfortable
                sharing.
              </p>
              <p>
                The program may be a good fit if you meet <strong style={{ color: '#7A003C' }}>at least one</strong> of the following criteria:
              </p>
              <ul className="space-y-3 pl-1">
                {[
                  'You currently have an artistic practice and want to develop ways of earning income through your work.',
                  'You have a specific and reasonably developed idea for an arts-based product, service, project, or business and have already begun exploring or working on it.',
                  'You have already taken steps to sell, exhibit, promote, commission, license, teach, perform, or otherwise generate income through your artistic work.',
                  'You currently operate an arts practice or creative business and want support strengthening, improving, or expanding it.',
                  'You are developing a social enterprise, collective, cooperative, or community-based initiative centred on artistic or creative work.',
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#7A003C' }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p>
                You do not need to have a registered business, formal business training, a completed business plan, or a consistent source
                of revenue. However, applicants should be able to describe their current artistic practice or creative business idea, the
                steps they have taken so far, and what they hope to develop through the program.
              </p>
            </div>

            <motion.div
              className="mt-8 h-px w-full rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(253,191,56,0.5), transparent)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHAT THE PROGRAM COVERS ── */}
      <section style={{ backgroundColor: '#f5ede2' }} className="pt-4 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#7A003C' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7A003C' }}>Curriculum</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight" style={{ color: '#1a1a1a' }}>
              What The Program <span style={{ color: '#7A003C' }}>Covers</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
              <p>You will take part in practical and discussion-based sessions on topics such as:</p>
              <ul className="space-y-3 pl-1">
                {[
                  'Audience building through and beyond social media',
                  'Pricing, sales, and communicating the value of creative work',
                  'Revenue stacking and sustainable income streams',
                  'Bookkeeping and financial management',
                  'Grant writing and funding opportunities',
                  'Business model development for artists',
                  'Social enterprise and community-based creative work',
                  'Artist collectives and cooperative models',
                  'Working with galleries, institutions, funders, and community partners',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#7A003C' }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              className="mt-8 h-px w-full rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(253,191,56,0.5), transparent)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── FIRST STEP (IMPORTANT) ── */}
      <section style={{ backgroundColor: '#f5ede2' }} className="pt-4 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#7A003C' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7A003C' }}>Important</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight" style={{ color: '#1a1a1a' }}>
              First <span style={{ color: '#7A003C' }}>Step!</span>
            </h2>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-7"
              style={{ backgroundColor: '#7A003C', border: '1px solid rgba(253,191,56,0.3)' }}
            >
              <p className="text-lg leading-relaxed" style={{ color: '#e8dcc8' }}>
                First, you need to submit an <strong style={{ color: '#FDBF38' }}>expression of interest</strong> (link at the end of this
                page). Then, you'll be invited to a short conversation with the program lead. This conversation is{' '}
                <strong style={{ color: '#FDBF38' }}>not a competitive interview</strong>, but it is mandatory for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-7"
              style={{ backgroundColor: '#7A003C', border: '1px solid rgba(253,191,56,0.3)' }}
            >
              <p className="leading-relaxed" style={{ color: '#e8dcc8' }}>
                The purpose of this conversation is to understand whether the program is suitable for your needs and whether it can
                provide the kind of entrepreneurship training and support that would be useful to you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-7"
              style={{ backgroundColor: '#7A003C', border: '1px solid rgba(253,191,56,0.3)' }}
            >
              <p className="leading-relaxed" style={{ color: '#e8dcc8' }}>
                This project is funded by the{' '}
                <strong style={{ color: '#FDBF38' }}>Social Sciences and Humanities Research Council (SSHRC)</strong> and contains an
                important optional research interview. This research component explores Canadian arts ecosystems and the experiences,
                opportunities, and challenges of practicing artists and creative entrepreneurs. The findings will help inform future
                programs and contribute to policy discussions at the local and national levels. We strongly encourage you to take part
                in this research. You will be asked separately whether you consent to take part in the research.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: '#e8dcc8' }}>
                Taking part in the research component is <strong style={{ color: '#FDBF38' }}>completely voluntary</strong>. If you choose
                not to participate in the research, there will be no negative consequences. You can still be considered for the program
                and participate if the program is a good fit for your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY DETAILS ── */}
      <section style={{ backgroundColor: '#f5ede2' }} className="pt-4 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#7A003C' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7A003C' }}>At a Glance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight" style={{ color: '#1a1a1a' }}>
              Key <span style={{ color: '#7A003C' }}>Details</span>
            </h2>

            <div className="text-base md:text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
              <dl className="divide-y" style={{ borderColor: 'rgba(122,0,60,0.15)' }}>
                {[
                  ['Program length', '3 months'],
                  ['Schedule', 'One session per week'],
                  ['Format', 'Hybrid, a mix of in-person and online sessions'],
                  ['Locations', "McMaster University's Main Campus (1280 Main St W, Hamilton) + Zoom"],
                  ['Program dates', 'Scheduled for mid-late September 2026, detailed schedule TBA.'],
                  ['Cost', 'Free'],
                  ['Application deadline', 'August 23'],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4">
                    <dt className="font-bold sm:w-56 flex-shrink-0" style={{ color: '#7A003C' }}>{label}</dt>
                    <dd className="flex-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <motion.div
              className="mt-8 h-px w-full rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(253,191,56,0.5), transparent)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section id="apply" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5ede2' }}>
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #7A003C, #FDBF38, #7A003C, transparent)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a0010 0%, #2d0020 100%)',
              border: '2px solid rgba(122,0,60,0.6)',
              boxShadow: '0 0 60px rgba(122,0,60,0.3), 0 20px 60px rgba(0,0,0,0.3)'
            }}
          >
            <div className="absolute inset-0 opacity-10 rounded-3xl" style={{
              backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.6) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 rounded-full" style={{ backgroundColor: '#FDBF38' }} />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 rounded-full" style={{ backgroundColor: 'rgba(253,191,56,0.4)' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(253,191,56,0.7)' }}>Apply Now</span>
                <div className="h-px w-10 rounded-full" style={{ backgroundColor: 'rgba(253,191,56,0.4)' }} />
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: '#e8dcc8' }}>
                Ready to Apply?
              </h2>
              <p className="text-base leading-relaxed mb-3 max-w-xl mx-auto" style={{ color: '#c9b5a0' }}>
                Submit your expression of interest to begin the process. Applications close <strong style={{ color: '#FDBF38' }}>August 23</strong>.
              </p>
              <p className="text-sm mb-10" style={{ color: '#9a8a78' }}>
                After submitting, you'll be invited to a short conversation with the program lead.
              </p>

              <motion.a
                href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclC_bAUK1g1NjWtdr3u9J9lUNDVDOVEzTFYxNlE5VzJDVFJOQk1LMkQzVC4u"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, boxShadow: '0 0 30px rgba(253,191,56,0.6), 0 20px 40px rgba(253,191,56,0.3)' }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FDBF38 0%, #f5d76e 100%)',
                  color: '#1a0010',
                  boxShadow: '0 10px 30px rgba(253,191,56,0.4)'
                }}
              >
                Submit Expression of Interest
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="text-sm mt-6" style={{ color: '#9a8a78' }}>
                Or email us at <a href="mailto:nafarij@mcmaster.ca" className="underline" style={{ color: '#FDBF38' }}>nafarij@mcmaster.ca</a> with any questions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAM PARTNERS ── */}
      <section className="pt-2 pb-10" style={{ backgroundColor: '#f5ede2' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#7A003C' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7A003C' }}>Led &amp; Collaborated By</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight" style={{ color: '#1a1a1a' }}>
              Program <span style={{ color: '#7A003C' }}>Partners</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {partners.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl p-4 flex items-center justify-between gap-3"
                  style={{ backgroundColor: '#3B0D1B' }}
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#D4A017' }}>{p.role}</p>
                    <p className="text-sm font-black leading-snug text-white">{p.name}</p>
                    {p.sub && <p className="text-xs mt-0.5" style={{ color: '#D1CFCF' }}>{p.sub}</p>}
                  </div>
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, boxShadow: '0 6px 18px rgba(253,191,56,0.3)' }}
                    className="inline-flex items-center gap-2 flex-shrink-0 px-3 py-1.5 rounded-xl font-bold text-xs"
                    style={{ background: 'linear-gradient(135deg, #FDBF38 0%, #f5d76e 100%)', color: '#1a0010' }}
                  >
                    Visit
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 h-px w-full rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(253,191,56,0.5), transparent)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
}