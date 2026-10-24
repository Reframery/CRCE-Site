import { motion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';
import {
  Heart,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Globe,
  Users,
  BookOpen,
  HandHeart,
  Check,
  ExternalLink,
  Lock,
  RefreshCw,
  Receipt,
} from 'lucide-react';

// CanadaHelps campaign link — update here if the campaign URL changes.
const CAMPAIGN_URL =
  'https://www.canadahelps.org/en/charities/benefaction-foundation/campaign/bd-honig-foundation-crce/';
const CAMPAIGN_LABEL = 'BD Honig Foundation — CRCE';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type SectionLabelProps = {
  text: string;
  color?: string;
};

function SectionLabel({ text, color = '#7A003C' }: SectionLabelProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-10 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
        {text}
      </span>
      <div className="h-px w-10 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

type CardItem = {
  Icon: IconType;
  title: string;
  desc: string;
};

const IMPACT_AREAS: CardItem[] = [
  {
    Icon: Users,
    title: 'Inclusive Entrepreneurship',
    desc: 'Opening doors for immigrants, women, persons with disabilities, and minority-owned businesses.',
  },
  {
    Icon: HandHeart,
    title: 'Community Partnerships',
    desc: 'Collaborating with local organizations and incubators to deliver support where it matters most.',
  },
  {
    Icon: BookOpen,
    title: 'Research Into Action',
    desc: 'Turning evidence-based scholarship into practical solutions for communities.',
  },
  {
    Icon: GraduationCap,
    title: 'Student & Entrepreneur Development',
    desc: 'Mentorship, training, and fellowships for the next generation of entrepreneurs and scholars.',
  },
];

const FUNDING_USES: CardItem[] = [
  {
    Icon: GraduationCap,
    title: 'Entrepreneurship Education & Mentorship',
    desc: 'Training, mentoring, program delivery, tools, and resources for entrepreneurs building their ventures.',
  },
  {
    Icon: HandHeart,
    title: 'Community Partnerships',
    desc: 'Projects developed with NGOs, community organizations, and local partners to deliver support where it matters most.',
  },
  {
    Icon: BookOpen,
    title: 'Research & Knowledge Translation',
    desc: 'Research, evaluation, dissemination, and translating findings into practical tools and programs.',
  },
  {
    Icon: Users,
    title: 'Student Training & Opportunities',
    desc: 'Student research, project work, social innovation, and experiential learning across disciplines.',
  },
  {
    Icon: Globe,
    title: 'Program Development & Delivery',
    desc: 'Building, improving, and expanding initiatives such as Reframery and other CRCE programs.',
  },
  {
    Icon: Sparkles,
    title: 'Approved Project & Community Needs',
    desc: 'Other eligible costs that allow CRCE projects and partnerships to respond to emerging needs.',
  },
];

const GIVING_POINTS: string[] = [
  'One-time or monthly gifts, in any amount you choose',
  'Official charitable tax receipt issued through CanadaHelps',
  'Directed to CRCE research, programs, and student training',
  'Every gift applied to eligible project and community costs',
];

const TRUST_POINTS: { Icon: IconType; text: string }[] = [
  { Icon: Lock, text: 'Secure payment handled by CanadaHelps' },
  { Icon: Receipt, text: 'Charitable tax receipt issued to you' },
  { Icon: RefreshCw, text: 'Choose a one-time or monthly gift' },
];

function DonationPanel() {
  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{ backgroundColor: '#fff', border: '1px solid rgba(122,0,60,0.15)' }}
    >
      <div className="grid lg:grid-cols-2">
        <div className="p-8 sm:p-10">
          <span
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: '#7A003C' }}
          >
            How to Give
          </span>
          <h3 className="mt-3 text-2xl font-black leading-snug" style={{ color: '#1a1a1a' }}>
            Your gift is completed securely through CanadaHelps
          </h3>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
            CRCE&apos;s fundraising is administered by the BD Honig Foundation and hosted on
            CanadaHelps, Canada&apos;s established online platform for charitable giving. You set
            your amount and frequency on their secure page, and your tax receipt is issued there.
          </p>

          <ul className="mt-6 space-y-3">
            {GIVING_POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: '#3f3f3f' }}
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#7A003C' }} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-col justify-center p-8 sm:p-10"
          style={{ background: 'linear-gradient(135deg, #7A003C 0%, #4a0024 100%)' }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(253,191,56,0.15)',
              border: '1px solid rgba(253,191,56,0.4)',
            }}
          >
            <Heart className="h-6 w-6" style={{ color: '#FDBF38' }} fill="currentColor" />
          </div>

          <p
            className="mt-5 text-[11px] font-bold uppercase tracking-widest"
            style={{ color: '#FDBF38' }}
          >
            CRCE Campaign
          </p>
          <h3 className="mt-2 text-xl font-black text-white">{CAMPAIGN_LABEL}</h3>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Open the campaign page to make your gift in a few steps. Payments are handled entirely
            by CanadaHelps.
          </p>

          <a
            href={CAMPAIGN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-bold transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: '#FDBF38', color: '#1a0010' }}
          >
            Donate on CanadaHelps <ExternalLink className="h-4 w-4" />
          </a>

          <p className="mt-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Opens canadahelps.org in a new tab.
          </p>

          <div className="mt-7 space-y-3">
            {TRUST_POINTS.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-xs"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                <Icon className="h-4 w-4 shrink-0" style={{ color: '#FDBF38' }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DonatePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ede2' }}>
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: '460px', backgroundColor: '#12000c' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, rgba(18,0,12,0.95) 0%, rgba(122,0,60,0.6) 60%, rgba(18,0,12,0.9) 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(253,191,56,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center"
          style={{ minHeight: '460px' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
              style={{
                backgroundColor: 'rgba(253,191,56,0.15)',
                border: '1px solid rgba(253,191,56,0.4)',
              }}
            >
              <Heart className="w-8 h-8" style={{ color: '#FDBF38' }} fill="currentColor" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3"
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#FDBF38' }}
            >
              Centre for Research on Community-oriented Entrepreneurship
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Help Build Opportunity
            <br />
            Through Entrepreneurship
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Your gift to <strong style={{ color: '#FDBF38' }}>CRCE</strong> supports research,
            programs, partnerships, and community-oriented entrepreneurship that opens doors for
            those who need it most.
          </motion.p>

          <motion.a
            href={CAMPAIGN_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(253,191,56,0.4)' }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base"
            style={{ backgroundColor: '#FDBF38', color: '#1a0010' }}
          >
            Donate to CRCE <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: '#FDBF38' }} />
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 sm:p-10"
            style={{ backgroundColor: '#fff', border: '1px solid rgba(122,0,60,0.15)' }}
          >
            <SectionLabel text="Why Donate?" />
            <h2 className="text-2xl md:text-3xl font-black mb-5" style={{ color: '#1a1a1a' }}>
              Too Many Capable Entrepreneurs Are Left Out
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#4a4a4a' }}>
              Many capable individuals, immigrants, women, persons with disabilities, and
              minority-owned business owners, face structural barriers: limited resources,
              restricted access to networks, and little opportunity for mentorship or training.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
              CRCE breaks down those barriers through research, programs, and partnerships that turn
              entrepreneurial potential into prosperous, resilient, and inclusive communities.
            </p>
          </motion.div>

          {/* Four CRCE Impact Area Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {IMPACT_AREAS.map((card, i) => {
              const { Icon } = card;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5, boxShadow: '0 0 25px rgba(122,0,60,0.3)' }}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: '#fff', border: '1px solid rgba(122,0,60,0.15)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(122,0,60,0.08)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#7A003C' }} />
                  </div>
                  <h3 className="text-base font-black mb-2" style={{ color: '#1a1a1a' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a5a5a' }}>
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHERE YOUR DONATION GOES ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7A003C 0%, #4a0024 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: '#FDBF38' }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#FDBF38' }}
              >
                Where Your Donation Goes
              </span>
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: '#FDBF38' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              How CRCE Puts Your Gift to Work
            </h2>
            <p
              className="max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              All gifts are received by CRCE and directed to eligible research, programs,
              partnerships, student initiatives, and community-oriented entrepreneurship projects —
              according to your preference and project needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FUNDING_USES.map((item, i) => {
              const { Icon } = item;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(253,191,56,0.25)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(253,191,56,0.12)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#FDBF38' }} />
                  </div>
                  <h3 className="text-base font-black mb-2 text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GIVE NOW ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="Give Now" />
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#1a1a1a' }}>
              Make Your Gift to CRCE
            </h2>
            <p
              className="max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: '#4a4a4a' }}
            >
              Gifts to CRCE are made securely through CanadaHelps, on behalf of the BD Honig
              Foundation — CRCE campaign, where your tax receipt is issued.
            </p>
          </motion.div>
          <DonationPanel />
        </div>
      </section>
    </div>
  );
}