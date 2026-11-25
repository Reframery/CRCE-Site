
import { useState } from "react"
import { ExternalLink, ChevronDown } from "lucide-react"
import { cn, isActive } from "@/lib/utils.ts"
import { siteLinks } from "@/configs/navigation.ts"

export default function MobileNavbar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const [openGroups, setOpenGroups] = useState<string[]>([])

  const menuId = "mobile-nav-menu"

  // Find the active page, including pages inside dropdown groups
  const activeLink = siteLinks.find((link) => {
    if ("children" in link) {
      return link.children.some((child) =>
        isActive(child.pathname, pathname)
      )
    }

    return isActive(link.pathname, pathname)
  })

  const activeLabel = activeLink?.label ?? "Menu"

  const toggleGroup = (label: string) => {
    setOpenGroups((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  return (
    <nav aria-label="Main navigation" className="block lg:hidden">
      {/* Main mobile navigation toggle */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        className={cn(
          "relative w-full border-b border-transparent px-8 py-3 text-center uppercase transition-colors duration-250 hover:cursor-pointer hover:bg-gray-900/30",
          open && "border-b-gray-600"
        )}
        onClick={() => setOpen(!open)}
      >
        {activeLabel}

        <span className="sr-only">
          {" "}— {open ? "close" : "open"} navigation
        </span>

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Navigation menu */}
      <div
        id={menuId}
        inert={!open}
        className={cn(
          "grid grid-rows-[0fr] transition-all duration-300",
          open && "grid-rows-[1fr]"
        )}
      >
        <div className="flex flex-col overflow-hidden">

          {siteLinks.map((link) => {
            // CASE 1: Dropdown group
            if ("children" in link) {
              const groupOpen = openGroups.includes(link.label)

              const groupActive = link.children.some((child) =>
                isActive(child.pathname, pathname)
              )

              return (
                <div
                  key={link.label}
                  className="border-b border-gray-600"
                >
                  <button
                    type="button"
                    aria-expanded={groupOpen}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 px-8 py-3 text-center transition-colors duration-250 hover:bg-white/90 hover:text-gray-900",
                      groupActive && "bg-gray-900/30 font-semibold"
                    )}
                    onClick={() => toggleGroup(link.label)}
                  >
                    {link.label}

                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={cn(
                        "transition-transform duration-300",
                        groupOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Dropdown children */}
                  <div
                    inert={!groupOpen}
                    className={cn(
                      "grid grid-rows-[0fr] transition-all duration-300",
                      groupOpen && "grid-rows-[1fr]"
                    )}
                  >
                    <div className="flex flex-col overflow-hidden bg-black/10">
                      {link.children.map((child) => {
                        const childActive = isActive(
                          child.pathname,
                          pathname
                        )

                        const isExternal =
                          child.pathname.startsWith("http")

                        return (
                          <a
                            key={child.pathname}
                            href={child.pathname}
                            className={cn(
                              "flex items-center justify-center gap-2 px-8 py-3 text-center text-base transition-colors hover:bg-white/90 hover:text-gray-900",
                              childActive &&
                                "bg-gray-900/30 font-semibold text-white"
                            )}
                            aria-current={
                              childActive ? "page" : undefined
                            }
                            {...(isExternal
                              ? {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                          >
                            {child.label}

                            {isExternal && (
                              <>
                                <ExternalLink
                                  size={16}
                                  aria-hidden="true"
                                />
                                <span className="sr-only">
                                  (opens in new tab)
                                </span>
                              </>
                            )}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            // CASE 2: Regular navigation link
            const active = isActive(link.pathname, pathname)

            return (
              <a
                key={link.pathname}
                className={cn(
                  "relative inline-flex items-center justify-center gap-2 border-b border-gray-600 px-8 py-3 text-center transition-colors duration-250 hover:bg-white/90 hover:text-gray-900 hover:shadow-lg",
                  active && "bg-gray-900/30 font-semibold"
                )}
                href={link.pathname}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
