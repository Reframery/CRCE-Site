type BreadcrumbsProps = {
  pageTitle: string
}

export const Breadcrumbs = ({ pageTitle: title }: BreadcrumbsProps) => (
  <nav
    aria-label="Breadcrumb"
    className="mx-auto max-w-7xl px-4 py-5 text-sm text-gray-600 sm:px-6 lg:px-8"
  >
    <ol className="flex items-center">
      <li>
        <a href="/" className="transition-colors hover:text-gray-700">
          Home
        </a>
      </li>
      <li>
        <span className="mx-2 text-gray-500" aria-hidden="true">
          ›
        </span>
        <span className="font-semibold text-gray-700" aria-current="page">
          {title}
        </span>
      </li>
    </ol>
  </nav>
)
