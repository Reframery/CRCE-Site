import { useState } from "react";
import { cn, isActive } from "@/lib/utils.ts";
import { siteLinks } from "@/configs/navigation.ts";

export default function MobileNavbar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="block md:hidden">
      <button
        className="relative w-full px-8 py-4 text-center uppercase transition-colors duration-[250ms] hover:bg-black/40"
        onClick={() => setOpen(!open)}
      >
        {siteLinks.find((link) => isActive(link.pathname, pathname))?.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2",
            open && "rotate-180 transform",
          )}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={cn(
          "grid grid-rows-[0fr] transition-all duration-[300ms]",
          open && "grid-rows-[1fr]",
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-col overflow-hidden">
          {siteLinks.map((link) => (
            <a
              key={link.pathname}
              className={cn(
                "relative inline-flex items-center justify-center gap-2 px-8 py-4 text-center transition-colors duration-[250ms] hover:bg-white hover:text-black hover:shadow-lg",
                isActive(link.pathname, pathname) && "bg-black/40",
              )}
              href={link.pathname}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
