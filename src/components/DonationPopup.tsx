import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Heart, Lock, X } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   CRCE donation card — standalone export
   Drop this file into your Astro/React site (e.g.
   src/components/DonationPopup.tsx) and mount it once in your
   layout so it appears on every page:

     <DonationPopup client:load />

   Requires framer-motion and lucide-react.
   ────────────────────────────────────────────────────────────── */

export const CAMPAIGN_URL =
  'https://www.canadahelps.org/en/charities/benefaction-foundation/campaign/bd-honig-foundation-crce/';

type DonationPopupProps = {
  /** Where the donate button sends the visitor. */
  href?: string;
  /** How long to wait before the card slides in, in milliseconds. */
  delayMs?: number;
  headline?: string;
  description?: string;
};

export default function DonationPopup({
  href = CAMPAIGN_URL,
  delayMs = 1800,
  headline = 'Help build opportunity through entrepreneurship',
  description = 'Your gift funds research, mentorship, and community programs for entrepreneurs facing structural barriers.',
}: DonationPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="complementary"
          aria-label="Support CRCE"
          initial={{ opacity: 0, x: -40, y: 16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -40, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-[60] w-[calc(100%_-_2rem)] max-w-sm overflow-hidden rounded-2xl bg-white sm:bottom-6 sm:left-6"
          style={{
            border: '1px solid rgba(122,0,60,0.15)',
            borderLeft: '4px solid #7A003C',
            boxShadow: '0 18px 44px -18px rgba(18,0,12,0.45)',
          }}
        >
          <div className="relative p-5 pr-11">
            <button
              type="button"
              onClick={close}
              aria-label="Dismiss donation message"
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-black/5"
              style={{ color: '#9a9a9a' }}
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(122,0,60,0.08)' }}
              >
                <Heart className="h-4 w-4" style={{ color: '#7A003C' }} fill="currentColor" />
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: '#7A003C' }}
              >
                Support CRCE
              </span>
            </div>

            <h2 className="mt-3 text-base font-black leading-snug" style={{ color: '#1a1a1a' }}>
              {headline}
            </h2>

            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: '#5a5a5a' }}>
              {description}
            </p>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: '#FDBF38', color: '#1a0010' }}
            >
              Donate on CanadaHelps <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <div className="mt-3 flex items-center justify-between">
              <span
                className="inline-flex items-center gap-1.5 text-[11px]"
                style={{ color: '#8a8a8a' }}
              >
                <Lock className="h-3 w-3" style={{ color: '#7A003C' }} />
                Secure · tax receipt
              </span>
              <button
                type="button"
                onClick={close}
                className="text-[11px] font-semibold transition-colors hover:underline"
                style={{ color: '#6b6b6b' }}
              >
                Maybe later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}