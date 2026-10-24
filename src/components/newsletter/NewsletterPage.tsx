import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  Calendar,
  Sparkles,
  Heart,
  Award,
  Megaphone,
  CheckCircle,
  FileText,
  Inbox,
} from 'lucide-react';

type Issue = {
  id: string;
  title: string;
  month_year: string;
  summary: string;
  highlights: string;
  publish_date: string;
};

// Sample data — replace with your own source (CMS, JSON, API) when you wire this up.
const SAMPLE_ISSUES: Issue[] = [
  {
    id: 'issue-1',
    title: 'Community Entrepreneurship in Motion',
    month_year: 'September 2026',
    summary:
      'A look at the research, partnerships and student work that shaped CRCE this month, from new scholarship on inclusive enterprise to the launch of our community mentorship series.',
    highlights: [
      'Our researchers launched a new study on community-oriented entrepreneurship in Hamilton',
      'We welcomed five new student team members to the Centre',
      'CRCE received a grant supporting inclusive business research',
      'A celebration of our community partners who made this year of programming possible',
    ].join('\n'),
    publish_date: '2026-09-15',
  },
  {
    id: 'issue-2',
    title: 'Summer of Scholarship and Storytelling',
    month_year: 'August 2026',
    summary:
      'Highlights from a busy summer: conference planning, podcast recordings, and the mentors and students who carried CRCE work forward through the break.',
    highlights: [
      'Registration opened for the Entrepreneurship in the Global Majority Conference',
      'New episodes of Entrepreneurship for the Rest of Us began streaming',
      'Two CRCE projects were recognized at an international research forum',
    ].join('\n'),
    publish_date: '2026-08-12',
  },
  {
    id: 'issue-3',
    title: 'RISE Mentorship Reaches New Communities',
    month_year: 'June 2026',
    summary:
      'The RISE program expanded its mentorship network, connecting entrepreneurs with advisors across Canada and beyond while students built practical training experience.',
    highlights: [
      'RISE mentors were matched with entrepreneurs in four new regions',
      'Student training placements grew across the summer term',
      'A welcome to the newest members of the CRCE advisory committees',
    ].join('\n'),
    publish_date: '2026-06-18',
  },
  {
    id: 'issue-4',
    title: 'Building the Reframery Community',
    month_year: 'March 2026',
    summary:
      'Reframery continues to grow as a space where diverse entrepreneurs develop ideas, skills and confidence — a milestone we celebrate with the community that built it.',
    highlights: [
      'Reframery surpassed a new milestone in active community members',
      'Our launch of a mentorship series welcomed its first cohort',
      'Award recognition for inclusion-focused entrepreneurship research',
    ].join('\n'),
    publish_date: '2026-03-20',
  },
];

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

function highlightIcon(line: string) {
  const lower = line.toLowerCase();
  if (
    lower.includes('engage') ||
    lower.includes('wedding') ||
    lower.includes('celebrat') ||
    lower.includes('milestone')
  )
    return Heart;
  if (
    lower.includes('award') ||
    lower.includes('recogni') ||
    lower.includes('honour') ||
    lower.includes('honor') ||
    lower.includes('grant')
  )
    return Award;
  if (
    lower.includes('launch') ||
    lower.includes('announce') ||
    lower.includes('welcom') ||
    lower.includes('began') ||
    lower.includes('started')
  )
    return Megaphone;
  return Sparkles;
}

export default function NewsletterPage() {
  const [issues] = useState<Issue[]>(SAMPLE_ISSUES);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Hook your subscribe endpoint in here.
    setSubscribed(true);
    setEmail('');
  };

  const latestIssue = issues[0];
  const archiveIssues = issues.slice(1);
  const latestHighlights =
    latestIssue?.highlights?.split('\n').filter((h) => h.trim()) || [];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ede2' }}>
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: '420px', backgroundColor: '#12000c' }}
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
            backgroundImage: `radial-gradient(circle, rgba(253,191,56,0.8) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center"
          style={{ minHeight: '420px' }}
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
              <Mail className="w-8 h-8" style={{ color: '#FDBF38' }} />
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
            The CRCE Newsletter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Monthly stories, accomplishments, and milestones from our community — from research
            breakthroughs to celebrations of the people who make CRCE what it is.
          </motion.p>
          <motion.a
            href="#subscribe"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(253,191,56,0.4)' }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base"
            style={{ backgroundColor: '#FDBF38', color: '#1a0010' }}
          >
            Subscribe <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: '#FDBF38' }}
        />
      </section>

      {/* ── LATEST ISSUE ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="Latest Issue" />
          {latestIssue ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#fff', border: '1px solid rgba(122,0,60,0.15)' }}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4" style={{ color: '#7A003C' }} />
                  <span className="text-sm font-semibold" style={{ color: '#7A003C' }}>
                    {latestIssue.month_year || latestIssue.publish_date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#1a1a1a' }}>
                  {latestIssue.title}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#4a4a4a' }}>
                  {latestIssue.summary}
                </p>
                {latestHighlights.length > 0 && (
                  <div>
                    <h3
                      className="text-sm font-bold uppercase tracking-wider mb-4"
                      style={{ color: '#7A003C' }}
                    >
                      In This Issue
                    </h3>
                    <ul className="space-y-3">
                      {latestHighlights.map((h, i) => {
                        const Icon = highlightIcon(h);
                        return (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="flex items-start gap-3"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: 'rgba(122,0,60,0.08)' }}
                            >
                              <Icon className="w-4 h-4" style={{ color: '#7A003C' }} />
                            </div>
                            <span
                              className="text-sm leading-relaxed pt-1"
                              style={{ color: '#4a4a4a' }}
                            >
                              {h}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-12 text-center"
              style={{ backgroundColor: '#fff', border: '1px solid rgba(122,0,60,0.15)' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: 'rgba(122,0,60,0.08)' }}
              >
                <FileText className="w-8 h-8" style={{ color: '#7A003C' }} />
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color: '#1a1a1a' }}>
                Our First Issue Is Coming Soon
              </h3>
              <p
                className="text-base leading-relaxed max-w-md mx-auto"
                style={{ color: '#4a4a4a' }}
              >
                We're preparing the inaugural CRCE Newsletter. Subscribe below to be the first to
                receive it.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── ARCHIVE ── */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="Past Issues" />
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3" style={{ color: '#1a1a1a' }}>
            Newsletter Archive
          </h2>
          <p
            className="text-base text-center mb-10 max-w-xl mx-auto"
            style={{ color: '#5a5a5a' }}
          >
            Browse through our previous newsletters to catch up on everything you may have missed.
          </p>
          {archiveIssues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {archiveIssues.map((issue, i) => {
                const highlights = (issue.highlights || '').split('\n').filter((h) => h.trim());
                return (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: '#f5ede2', border: '1px solid rgba(122,0,60,0.15)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4" style={{ color: '#7A003C' }} />
                      <span className="text-xs font-semibold" style={{ color: '#7A003C' }}>
                        {issue.month_year || issue.publish_date}
                      </span>
                    </div>
                    <h3 className="text-base font-black mb-2" style={{ color: '#1a1a1a' }}>
                      {issue.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#5a5a5a' }}>
                      {issue.summary}
                    </p>
                    {highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {highlights.slice(0, 3).map((h, j) => (
                          <span
                            key={j}
                            className="text-xs px-2.5 py-1 rounded-full"
                            style={{ backgroundColor: 'rgba(122,0,60,0.08)', color: '#7A003C' }}
                          >
                            {h.length > 40 ? h.slice(0, 40) + '…' : h}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-12 text-center max-w-md mx-auto"
              style={{ backgroundColor: '#f5ede2', border: '1px solid rgba(122,0,60,0.15)' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: 'rgba(122,0,60,0.08)' }}
              >
                <Inbox className="w-8 h-8" style={{ color: '#7A003C' }} />
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color: '#1a1a1a' }}>
                No Previous Issues Yet
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                Past newsletters will appear here once they're published. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── SUBSCRIBE ── */}
      <section
        id="subscribe"
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7A003C 0%, #4a0024 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,191,56,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,191,56,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
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
                Subscribe
              </span>
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: '#FDBF38' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Get the Monthly Newsletter
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Receive CRCE updates, accomplishments, and community milestones delivered to your
              inbox every month.
            </p>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl"
                style={{
                  backgroundColor: 'rgba(253,191,56,0.15)',
                  border: '1px solid rgba(253,191,56,0.4)',
                }}
              >
                <CheckCircle className="w-5 h-5" style={{ color: '#FDBF38' }} />
                <span className="text-base font-semibold text-white">
                  You're subscribed! Watch for our next issue.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl text-base outline-none"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    border: '1px solid rgba(253,191,56,0.3)',
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-base whitespace-nowrap"
                  style={{ backgroundColor: '#FDBF38', color: '#1a0010' }}
                >
                  Subscribe <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}