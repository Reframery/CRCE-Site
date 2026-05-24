import { useState } from "react"
import { ExternalLink, ChevronDown } from "lucide-react"
import { cn, isActive } from "@/lib/utils.ts"
import { siteLinks } from "@/configs/navigation.ts"

export default function MobileNavbar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const menuId = "mobile-nav-menu"

  const activeLink = siteLinks.find((link) => isActive(link.pathname, pathname))

  return (
    <nav aria-label="Main navigation" className="block lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        className={cn(
          "hover:bg-foreground/40 relative w-full border-b border-transparent px-8 py-3 text-center uppercase transition-colors duration-250 hover:cursor-pointer",
          open && "border-b-gray-600"
        )}
        onClick={() => setOpen(!open)}
      >
        {activeLink?.label ?? "Menu"}
        <span className="sr-only"> — {open ? "close" : "open"} navigation</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={menuId}
        // inert removes hidden links from tab order and the accessibility tree.
        // Without it, keyboard users can focus invisible links when the menu is closed.
        inert={!open}
        className={cn(
          "grid grid-rows-[0fr] transition-all duration-300",
          open && "grid-rows-[1fr]"
        )}
      >
        <div className="flex flex-col overflow-hidden">
          {siteLinks.map((link) => {
            const active = isActive(link.pathname, pathname)
            return (
              <a
                key={link.pathname}
                className={cn(
                  "hover:text-foreground relative inline-flex items-center justify-center gap-2 border-b border-gray-600 px-8 py-3 text-center transition-colors duration-250 hover:bg-white/90 hover:shadow-lg",
                  active && "bg-foreground/40"
                )}
                href={link.pathname}
                aria-current={active ? "page" : undefined}
                {...(link.isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
                {link.isExternal && (
                  <>
                    <ExternalLink size={20} aria-hidden="true" />
                    <span className="sr-only">(opens in new tab)</span>
                  </>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
