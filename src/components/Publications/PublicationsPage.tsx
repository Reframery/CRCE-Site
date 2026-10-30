import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  PenLine,
  Quote,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   CRCE Publications page — standalone export
   Drop this file into your Astro/React site (e.g.
   src/components/publications/PublicationsPage.tsx) and pair it
   with publications.astro. It has no app-specific imports: swap
   PUBLICATIONS for your own CMS, JSON or API source when ready.
   ────────────────────────────────────────────────────────────── */

type Status = 'published' | 'work_in_progress' | 'under_review';
type FilterKey = 'all' | Status;

type Publication = {
  title: string;
  authors?: string;
  journal_or_venue?: string;
  image_url?: string;
  summary?: string;
  tags?: string;
  status: Status;
  publication_date?: string;
  link?: string;
  featured?: boolean;
};

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'published', label: 'Published' },
  { key: 'work_in_progress', label: 'In Progress' },
  { key: 'under_review', label: 'Under Review' },
];

const PUBLICATIONS: Publication[] = [
  {
    title:
      'Policy persistence without performance: compensatory legitimacy and the expansion of entrepreneurship education in Sub-Saharan Africa',
    authors: 'Honig, B., Aluko, O., Siwale, J., & Boso, N.',
    journal_or_venue: 'Journal of Business Research, 116618',
    summary:
      'Examines why entrepreneurship education in Sub-Saharan Africa persists despite limited demonstrable impact. Drawing on institutional and compensatory entrepreneurship theory, a multi-level abductive study across Ghana, Nigeria, South Africa, and Zambia (59 interviews) shows how entrepreneurship education operates as a compensatory legitimacy mechanism linking policy mandates, institutional compliance, and student dissatisfaction.',
    tags: 'entrepreneurship education, legitimacy, compensatory entrepreneurship, Sub-Saharan Africa, inclusive entrepreneurship',
    status: 'published',
    publication_date: '2026-10-15',
    link: 'https://doi.org/10.1016/j.jbusres.2026.116618',
    featured: true,
  },
  {
    title:
      'A trauma-informed approach: Temporal reorientation, identity reconstruction and preventing retraumatisation in refugee entrepreneurship support',
    authors: 'Nafari, J., & Ruebottom, T.',
    journal_or_venue: 'International Small Business Journal',
    tags: 'refugee entrepreneurship, trauma-informed support',
    status: 'published',
    publication_date: '2025-01-01',
    link: 'https://doi.org/10.1177/02662426251320321',
  },
  {
    title: 'Entrepreneurial Ingenuity, Social Impact, and Civic Wealth Creation',
    authors: 'Siqueira, A. C. O., Honig, B., Cunha, R., Mariano, S. R. H., & Moraes, J.',
    journal_or_venue: 'Academy of Management Proceedings, Vol. 2025, No. 1, p. 11751',
    tags: 'entrepreneurial ingenuity, civic wealth creation',
    status: 'published',
    publication_date: '2025-01-01',
    link: 'https://journals.aom.org/doi/10.5465/AMPROC.2025.11751abstract',
  },
  {
    title:
      'Promoting academic social intrapreneurship: Developing an international virtual incubator and fostering social impact',
    authors: 'Nafari, J., Honig, B., & Siqueira, A. C. O.',
    journal_or_venue: 'Technovation, 133, 103024',
    tags: 'social intrapreneurship, virtual incubator, social impact',
    status: 'published',
    publication_date: '2024-01-01',
    link: 'https://doi.org/10.1016/j.technovation.2024.103024',
  },
  {
    title:
      'Creating economic, social, and environmental change through entrepreneurship: An entrepreneurial autonomy perspective informed by Paulo Freire',
    authors: 'Siqueira, A. C. O., Honig, B., Mariano, S., Moraes, J., & Cunha, R. M.',
    journal_or_venue: 'Journal of Business Venturing Insights, 19, e00386',
    tags: 'entrepreneurial autonomy, social and environmental change',
    status: 'published',
    publication_date: '2023-01-01',
    link: 'https://doi.org/10.1016/j.jbvi.2023.e00386',
  },

  /* ── Micro Enterprises & Nascent Entrepreneurs ── */
  { title: 'What determines success? Examining the human, financial, and social capital of Jamaican micro-entrepreneurs', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.sciencedirect.com/science/article/abs/pii/S0883902697000360?via%3Dihub' },
  { title: 'Human capital and structural upheaval: A study of manufacturing firms in the west bank', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.sciencedirect.com/science/article/abs/pii/S0883902699000609?via%3Dihub' },
  { title: 'The Life Cycle of an Internet Firm: Scripts, Legitimacy, and Identity', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://journals.sagepub.com/doi/10.1111/j.1540-6520.2009.00323.x' },
  { title: 'Planning and the entrepreneur: A longitudinal examination of nascent entrepreneurs in Sweden', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.tandfonline.com/doi/abs/10.1111/j.1540-627X.2012.00357.x' },
  { title: 'The role of social and human capital among nascent entrepreneurs', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.sciencedirect.com/science/article/abs/pii/S0883902602000976?via%3Dihub' },
  { title: 'New venture planning and lean start-up activities: A longitudinal empirical study of entrepreneurial success, founder preferences and venture context', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.emerald.com/insight/content/doi/10.1108/s1074-754020160000018003/full/html' },
  { title: 'Complementarities of human capital and information technology: small businesses, emerging economy context and the strategic role of firm resources', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.tandfonline.com/doi/abs/10.1080/09537325.2011.585032' },
  { title: 'Social support timing and persistence in nascent entrepreneurship: exploring when instrumental and emotional support is most effective', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://link.springer.com/article/10.1007/s11187-017-9964-5' },
  { title: 'An institutional perspective on business planning for nascent entrepreneurs in Sweden and the US', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.mdpi.com/2076-3387/3/4/266' },
  { title: 'High-Technology Entrepreneurship in Emerging Economies: Firm Informality and Contextualization of Resource-Based Theory', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://ieeexplore.ieee.org/document/5393264' },
  { title: 'Learning orientations and learning dynamics: Understanding heterogeneous approaches and comparative success in nascent entrepreneurship', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.sciencedirect.com/science/article/abs/pii/S0148296318304648?via%3Dihub' },
  { title: 'Informal Entrepreneurship and Industry Condition', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://journals.sagepub.com/doi/10.1111/etap.12115' },
  { title: 'A Cross-National Comparison of Incubated Organizations: An Institutional Perspective', tags: 'Micro Enterprises & Nascent Entrepreneurs', status: 'published', link: 'https://www.emerald.com/insight/content/doi/10.1016/s1074-7540(05)08007-4/full/html' },

  /* ── Entrepreneurial Ingenuity ── */
  { title: 'Handbook of organizational and entrepreneurial ingenuity', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://www.e-elgar.com/shop/usd/handbook-of-organizational-and-entrepreneurial-ingenuity-9781782549031.html' },
  { title: 'Organizational ingenuity: Insights and overview', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://china.elgaronline.com/view/edcoll/9781782549031/9781782549031.00006.xml' },
  { title: 'The Blessing of Necessity and Advantages of Newness', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://www.emerald.com/insight/content/doi/10.1108/s1074-7540(2013)0000015006/full/html' },
  { title: 'Organizational ingenuity: Concept, processes and strategies', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://journals.sagepub.com/doi/10.1177/0170840614525321' },
  { title: 'Discovering Creativity in Necessity: Organizational Ingenuity under Institutional Constraints', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://journals.sagepub.com/doi/10.1177/0170840611424018' },
  { title: "Entrepreneurs' ingenuity and self-imposed ethical constraints: creating sustainability-oriented new ventures and knowledge", tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://www.emerald.com/insight/content/doi/10.1108/jkm-11-2018-0707/full/html' },
  { title: 'Entrepreneurial Ingenuity and Ethics: Inspiring Innovation and Change', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://journals.aom.org/doi/10.5465/ambpp.2015.15270abstract' },
  { title: 'Envisioning New Social Enterprises: Organizational Ingenuity and Entrepreneurial Autonomy', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://journals.aom.org/doi/10.5465/ambpp.2015.11468abstract' },
  { title: 'Innovation Ecosystems in Brazil: Promoting Social Entrepreneurship and Sustainability', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://link.springer.com/chapter/10.1007/978-94-007-7896-2_8' },
  { title: 'Effects of product innovation and organisational capabilities on competitive advantage: evidence from UK small and medium manufacturing enterprises', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://www.worldscientific.com/doi/abs/10.1142/S1363919608001972' },
  { title: 'Focusing on one capability at a time: patterns in the use of innovation activities and implications for young firm', tags: 'Entrepreneurial Ingenuity', status: 'published', link: 'https://www.inderscience.com/offers.php?id=69959' },

  /* ── Entrepreneurship Education ── */
  { title: 'Foundations of Entrepreneurship Education: Key Concepts', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.elgaronline.com/view/edcoll/9780857936912/9780857936912.00013.xml' },
  { title: 'Entrepreneurship Education: Toward a Model of Contingency-Based Business Planning', tags: 'Entrepreneurship Education', status: 'published', link: 'https://journals.aom.org/doi/10.5465/amle.2004.14242112' },
  { title: 'Management education: Unique challenges presented by the African continent', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.tandfonline.com/doi/full/10.1080/23322373.2018.1458547' },
  { title: 'Is Entrepreneurship Education Only about Entrepreneurship?', tags: 'Entrepreneurship Education', status: 'published', link: 'https://journals.aom.org/doi/10.5465/AMBPP.2020.16411abstract' },
  { title: 'The Emergence of an Entrepreneurship Profession: Entrepreneurship Education Expectations vs Outcomes', tags: 'Entrepreneurship Education', status: 'published', link: 'https://journals.aom.org/doi/10.5465/AMBPP.2019.15543abstract' },
  { title: 'How should entrepreneurship be taught to students with diverse experience? A set of conceptual models of entrepreneurship education', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.emerald.com/insight/content/doi/10.1108/s1074-754020160000018007/full/html' },
  { title: 'Toward rigour and relevance in entrepreneurship education research', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.elgaronline.com/edcollchap/edcoll/9781786432902/9781786432902.00007.xml' },
  { title: 'Does entrepreneurship education develop wisdom? An exploration', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.elgaronline.com/edcollchap/edcoll/9781786432902/9781786432902.00010.xml' },
  { title: 'The Theory of Practice and the Institutionalization of Entrepreneurship in Higher Education Institutions', tags: 'Entrepreneurship Education', status: 'published', link: 'https://journals.aom.org/doi/abs/10.5465/amgblproc.telaviv.2018.0065.abs' },
  { title: 'Addressing the Challenges of Future Entrepreneurship Education: An Assessment of Textbooks for Teaching Entrepreneurship', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.emerald.com/insight/content/doi/10.1108/s1048-473620140000024002/full/html' },
  { title: 'Learning strategies and resources for entrepreneurs and intrapreneurs', tags: 'Entrepreneurship Education', status: 'published', link: 'https://journals.sagepub.com/doi/10.1177/104225870102600102' },
  { title: 'The roles of learning orientation and passion for work in the formation of entrepreneurial intention', tags: 'Entrepreneurship Education', status: 'published', link: 'https://journals.sagepub.com/doi/10.1177/0266242611432360' },
  { title: 'Learning strategies of nascent entrepreneurs', tags: 'Entrepreneurship Education', status: 'published', link: 'https://effectuation.org/stories/x-portfoliothe-story-of-oneworld-health?research-papers=learning-strategies-of-nascent-entrepreneurs' },
  { title: 'Pedagogical methods for sustainable development: business educational projects generating direct impact on stakeholders through fundraising and fund management', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.inderscience.com/offers.php?id=86873' },
  { title: 'Responsible management education: active learning approaches emphasizing sustainability and social entrepreneurship', tags: 'Entrepreneurship Education', status: 'published', link: 'https://www.inderscience.com/offers.php?id=68791' },
  { title: 'A preliminary exploration of the development of wisdom in entrepreneurship education', tags: 'Entrepreneurship Education', status: 'published', link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3149544' },
  { title: 'The role of experiential learning in entrepreneurship education: a meta-analysis', tags: 'Entrepreneurship Education', status: 'published', link: 'https://journals.sagepub.com/doi/abs/10.1177/10422587211054321' },

  /* ── Financial Resources ── */
  { title: 'Who gets the goodies? An examination of microenterprise credit in Jamaica', tags: 'Financial Resources', status: 'published', link: 'https://www.tandfonline.com/doi/abs/10.1080/08985629800000018' },
  { title: 'Extending community-based enterprise theory: The example of community-specific currencies', tags: 'Financial Resources', status: 'published', link: 'https://journals.aom.org/doi/10.5465/ambpp.2016.11086abstract' },
  { title: 'Small Business Promotion and Microlending: A Comparative Assessment of Jamaican and Israeli NGOs', tags: 'Financial Resources', status: 'published', link: 'https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=1005&context=esr' },
  { title: 'Institutional and interpersonal trust and entrepreneurship: insights from relationship banking and microfinance in Brazil', tags: 'Financial Resources', status: 'published', link: 'https://www.inderscience.com/offers.php?id=66097' },
  { title: 'A longitudinal comparison of capital structure between young for-profit social and commercial enterprise', tags: 'Financial Resources', status: 'published', link: 'https://linkinghub.elsevier.com/retrieve/pii/S0883902616303330' },
  { title: 'Supporting Innovation Ecosystems with Microfinance: Evidence from Brazil and Implications for Social Entrepreneurship', tags: 'Financial Resources', status: 'published', link: 'https://www.tandfonline.com/doi/abs/10.1080/19420676.2014.927388' },
  { title: 'Microfinance and Innovation Ecosystem: Evidence from Brazil and Insights for Social Entrepreneurship', tags: 'Financial Resources', status: 'published', link: 'https://journals.aom.org/doi/10.5465/ambpp.2013.107' },
  { title: 'A Commons Strategy for Promoting Entrepreneurship and Social Capital: Implications for Community Currencies, Cryptocurrencies, and Value Exchange', tags: 'Financial Resources', status: 'published', link: 'https://link.springer.com/article/10.1007/s10551-020-04578-2' },

  /* ── Minority Entrepreneurship ── */
  { title: 'Entrepreneurship and ethnicity: The role of human capital and family social capital', tags: 'Minority Entrepreneurship', status: 'published', link: 'https://www.worldscientific.com/doi/abs/10.1142/S108494670700054X' },
  { title: 'Education and self-employment in Jamaica', tags: 'Minority Entrepreneurship', status: 'published', link: 'https://www.journals.uchicago.edu/doi/abs/10.1086/447371?journalCode=cer' },
  { title: 'Entrepreneurship for Persons with Disabilities: Economic and Social-psychological Benefits', tags: 'Minority Entrepreneurship', status: 'published', link: 'https://journals.aom.org/doi/10.5465/ambpp.2013.13965abstract' },
  { title: 'Entrepreneurship as an integrating mechanism for disadvantaged persons', tags: 'Minority Entrepreneurship', status: 'published', link: 'https://www.tandfonline.com/doi/abs/10.1080/08985626.2011.580164' },

  /* ── Business Planning ── */
  { title: 'Institutional forces and the written business plan', tags: 'Business Planning', status: 'published', link: 'https://journals.sagepub.com/doi/10.1016/j.jm.2002.11.002' },
  { title: 'Business planning by intrapreneurs and entrepreneurs under environmental uncertainty and institutional pressure', tags: 'Business Planning', status: 'published', link: 'https://www.sciencedirect.com/science/article/abs/pii/S0166497218307892?via%3Dihub' },
  { title: 'Judging a business by its cover: An institutional perspective on new ventures and the business plan', tags: 'Business Planning', status: 'published', link: 'https://www.sciencedirect.com/science/article/abs/pii/S0883902607000791?via%3Dihub' },
];

const FLOATING_ICONS = [
  { Icon: BookOpen, x: '8%', y: '18%', delay: 0, duration: 7, size: 28 },
  { Icon: FileText, x: '88%', y: '12%', delay: 1.2, duration: 8, size: 24 },
  { Icon: BookOpen, x: '82%', y: '72%', delay: 0.6, duration: 6, size: 32 },
  { Icon: FileText, x: '14%', y: '78%', delay: 2, duration: 7.5, size: 22 },
  { Icon: Quote, x: '50%', y: '85%', delay: 1.5, duration: 6.5, size: 26 },
  { Icon: BookOpen, x: '92%', y: '45%', delay: 0.3, duration: 9, size: 20 },
];

const PAGE_SIZE = 12;

function AnimatedCounter({ value, duration = 1.4 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || value === 0) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / 1000 / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

function formatMonth(date?: string) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

const DEFAULT_COVER_PALETTE: { from: string; to: string } = { from: '#7A003C', to: '#3D0020' };

const COVER_PALETTES = [
  { from: '#7A003C', to: '#3D0020' },
  { from: '#5C0028', to: '#2B0616' },
  { from: '#8B0A46', to: '#4A0024' },
  { from: '#3D0B2A', to: '#12000C' },
  { from: '#2A0416', to: '#0F0208' },
];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

const clamp = (lines: number): CSSProperties => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

const titleCase = (value: string) => value.replace(/\b\w/g, (char) => char.toUpperCase());

/** Themed editorial cover used when a paper has no image_url yet. */
function PublicationCover({ pub, label }: { pub: Publication; label: string }) {
  const palette =
    COVER_PALETTES[hashString(pub.title) % COVER_PALETTES.length] ?? DEFAULT_COVER_PALETTE;

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.to} 100%)` }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        className="absolute -right-10 -top-12 h-36 w-36 rounded-full"
        style={{ backgroundColor: 'rgba(253,191,56,0.14)' }}
      />
      <div
        className="absolute -bottom-14 -left-10 h-32 w-32 rounded-full"
        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
      />
      <div className="relative flex flex-col items-center gap-2.5 px-6 text-center">
        <FileText className="h-7 w-7" style={{ color: '#FDBF38' }} />
        <span
          className="text-[10px] font-bold uppercase leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.78)', letterSpacing: '0.22em' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function PublicationCard({ pub, index, featured }: { pub: Publication; index: number; featured?: boolean }) {
  const tags = pub.tags
    ? pub.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  const category = tags[0] ? titleCase(tags[0]) : pub.journal_or_venue || 'Research';
  const date = formatMonth(pub.publication_date);
  const excerpt = pub.summary?.trim() || (pub.journal_or_venue ? `${pub.journal_or_venue}.` : '');

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        boxShadow: featured ? '0 20px 50px rgba(253,191,56,0.28)' : '0 16px 44px rgba(122,0,60,0.14)',
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl"
      style={{
        backgroundColor: '#fff',
        border: featured ? '2px solid #FDBF38' : '1px solid rgba(122,0,60,0.12)',
        boxShadow: featured ? '0 8px 30px rgba(253,191,56,0.18)' : '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {pub.image_url ? (
          <img
            src={pub.image_url}
            alt={pub.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <PublicationCover pub={pub} label={category} />
        )}

        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase shadow-sm"
          style={{ backgroundColor: 'rgba(255,255,255,0.94)', color: '#7A003C', letterSpacing: '0.12em' }}
        >
          {category}
        </span>

        {featured && (
          <span
            className="absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase shadow-sm"
            style={{ backgroundColor: '#FDBF38', color: '#1a0010', letterSpacing: '0.12em' }}
          >
            ★ Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500">
          {date && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {date}
            </span>
          )}
          {pub.authors && (
            <span className="inline-flex max-w-full items-center gap-1.5">
              <Users className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{pub.authors}</span>
            </span>
          )}
        </div>

        <h3
          className="mt-2.5 text-base font-black leading-snug transition-colors duration-300 group-hover:text-[#7A003C] sm:text-lg"
          style={{ ...clamp(3), color: '#1a1a1a' }}
        >
          {pub.title}
        </h3>

        {excerpt && (
          <p className="mt-2.5 text-sm leading-relaxed" style={{ ...clamp(3), color: '#4a4a4a' }}>
            {excerpt}
          </p>
        )}

        <div className="mt-auto pt-4">
          {tags.length > 1 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {tags.slice(1, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md px-2 py-0.5 text-[11px]"
                  style={{ backgroundColor: 'rgba(122,0,60,0.07)', color: '#7A003C' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {pub.link ? (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
              style={{ color: '#7A003C' }}
            >
              Read paper
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: 'rgba(122,0,60,0.45)' }}
            >
              {pub.journal_or_venue || 'Publication details on request'}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const counts = useMemo<Record<FilterKey, number>>(() => {
    const next: Record<FilterKey, number> = {
      all: PUBLICATIONS.length,
      published: 0,
      work_in_progress: 0,
      under_review: 0,
    };
    PUBLICATIONS.forEach((p) => {
      next[p.status] += 1;
    });
    return next;
  }, []);

  const term = search.trim().toLowerCase();

  const results = useMemo(() => {
    return PUBLICATIONS.filter((p) => {
      if (activeFilter !== 'all' && p.status !== activeFilter) return false;
      if (!term) return true;
      const haystack = [p.title, p.authors, p.journal_or_venue, p.tags, p.summary]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [activeFilter, term]);

  const featured = results.filter((p) => p.featured);
  const rest = results.filter((p) => !p.featured);
  const shown = rest.slice(0, visible);

  const stats = [
    { Icon: Layers, label: 'Total Papers', value: counts.all },
    { Icon: CheckCircle2, label: 'Published', value: counts.published },
    { Icon: PenLine, label: 'In Progress', value: counts.work_in_progress },
    { Icon: Clock, label: 'Under Review', value: counts.under_review },
  ];

  const handleFilter = (key: FilterKey) => {
    setActiveFilter(key);
    setVisible(PAGE_SIZE);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ede2' }}>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #12000c 0%, #7A003C 50%, #3a0020 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(253,191,56,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {FLOATING_ICONS.map(({ Icon, x, y, delay, duration, size }, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ left: x, top: y, color: 'rgba(253,191,56,0.15)' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.5, 0.3], scale: 1, y: [0, -18, 0], rotate: [0, 8, -4, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon style={{ width: size, height: size }} />
          </motion.div>
        ))}

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(120deg, transparent 30%, rgba(253,191,56,0.06) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0', '-100% 0'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6 border border-white/20 backdrop-blur-md"
            style={{ background: 'rgba(253,191,56,0.1)' }}
          >
            <BookOpen className="w-4 h-4" style={{ color: '#FDBF38' }} />
            <span className="text-xs text-white/70 font-semibold uppercase tracking-widest">
              Research &amp; Scholarship
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-5"
          >
            Academic <span style={{ color: '#FDBF38' }}>Publications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            A continuously updated collection of our published research and works in progress on
            community-oriented entrepreneurship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                  style={{
                    backgroundColor: 'rgba(253,191,56,0.12)',
                    border: '1px solid rgba(253,191,56,0.25)',
                  }}
                >
                  <stat.Icon className="w-5 h-5" style={{ color: '#FDBF38' }} />
                </div>
                <span className="text-2xl font-black text-white">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: '#FDBF38' }} />
      </section>

      {/* ── FILTERS ── */}
      <section
        className="z-30 border-b backdrop-blur-md"
        style={{ backgroundColor: 'rgba(245,237,226,0.92)', borderColor: 'rgba(122,0,60,0.12)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div className="flex flex-wrap gap-1.5">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleFilter(tab.key)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeFilter === tab.key ? 'text-white' : 'hover:bg-white/60'
                  }`}
                >
                  {activeFilter === tab.key && (
                    <motion.div
                      layoutId="filterIndicator"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#7A003C' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab.label}
                    <span className="ml-1.5 text-xs opacity-70">{counts[tab.key] ?? 0}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="relative flex-1 md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Search title, author, tag…"
                className="w-full pl-9 pr-4 py-2 rounded-full text-sm border focus:outline-none focus:ring-2 transition-all"
                style={{ borderColor: 'rgba(122,0,60,0.2)', backgroundColor: 'white' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LIST ── */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {results.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <FileText className="w-16 h-16 mb-4 opacity-20" style={{ color: '#7A003C' }} />
              <p className="text-lg font-semibold" style={{ color: '#1a1a1a' }}>
                No publications found
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {term
                  ? 'Try a different search term.'
                  : 'Check back soon - new papers are added regularly.'}
              </p>
            </motion.div>
          ) : (
            <>
              {featured.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4" style={{ color: '#FDBF38' }} />
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: '#7A003C' }}
                    >
                      Featured
                    </span>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featured.map((pub, i) => (
                      <PublicationCard key={pub.title} pub={pub} index={i} featured />
                    ))}
                  </div>
                  {rest.length > 0 && (
                    <div className="my-8 h-px w-full" style={{ backgroundColor: 'rgba(122,0,60,0.12)' }} />
                  )}
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((pub, i) => (
                  <PublicationCard key={pub.title} pub={pub} index={i} />
                ))}
              </div>

              {rest.length > shown.length && (
                <div className="flex justify-center mt-8">
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
                    style={{ backgroundColor: '#7A003C', color: 'white' }}
                  >
                    Load More Publications
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}