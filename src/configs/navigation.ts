export const siteLinks = [
  { label: "Home", pathname: "/" },
  { label: "About", pathname: "/about" },
  {
    label: "Our Team",
    pathname: "/people-researchers-students-faculty",
  },

  {
    label: "Programs",
    children: [
      {
        label: "RISE",
        pathname: "/research-inclusion-and-social-entrepreneurship",
      },
      {
        label: "Artist Incubator",
        pathname: "/artist-enterprises-incubator",
      },
      {
        label: "Reframery",
        pathname: "https://reframery.org",
        isExternal: true,
      },
    ],
  },

    {
    label: "Research",
    children: [
      {
        label: "Publications",
        pathname: "/publications",
      },
      {
        label: "Funding",
        pathname: "/funding",
      },

    ],
  },

{
    label: "Media",
    children: [
      {
        label: "Podcasts",
        pathname: "/podcasts",
      },
      {
        label: "Newsletter",
        pathname: "/newsletter",
      },
    ],
  },

  { label: "Conferences", pathname: "/upcoming-conferences" },

  {
    label: "Donate",
    pathname: "/Donate",
  },

  { label: "Contact Us", pathname: "/contact" },
]
