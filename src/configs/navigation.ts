export interface NavChildLink {
  label: string;
  pathname: string;
  isExternal?: boolean;
}

export interface NavGroupLink {
  label: string;
  pathname?: never; // Prevents group links from accidentally having a top-level path
  children: NavChildLink[];
}

export interface NavSingleLink {
  label: string;
  pathname: string;
  children?: never;
}

export type NavItem = NavSingleLink | NavGroupLink;


export const siteLinks: NavItem[] = [
  { label: "Home", pathname: "/" },
  { label: "About", pathname: "/about" },
  { label: "Our Team", pathname: "/people-researchers-students-faculty" },
  {
    label: "Programs",
    children: [
      { label: "RISE", pathname: "/research-inclusion-and-social-entrepreneurship" },
      { label: "Artist Incubator", pathname: "/artist-enterprises-incubator" },
      { label: "Reframery", pathname: "https://reframery.org" },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Publications", pathname: "/publications" },
      { label: "Funding", pathname: "/funding" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "Podcasts", pathname: "/podcasts" },
      { label: "Newsletter", pathname: "/newsletter" },
    ],
  },
  { label: "Conferences", pathname: "/upcoming-conferences" },
  { label: "Donate", pathname: "/Donate" },
  { label: "Contact Us", pathname: "/contact" },
];
