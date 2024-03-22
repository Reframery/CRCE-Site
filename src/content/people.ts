import milenaHead from "@/images/people/milena-head.jpg";
import nourElShamy from "@/images/people/nour-el-shamy.jpg";
import brendanStanley from "@/images/people/brendan-stanley.jpg";

export type SocialType = "email" | "linkedin" | "profile" | "publication";

type Social = {
  type: SocialType;
  href?: string;
  label: string;
};

type Person = {
  image: ImageMetadata;
  name: string;
  title: string;
  subTitles?: string[];
  socials: Social[];
};

export const people: Person[] = [
  {
    image: milenaHead,
    name: "Dr. Milena Head",
    title: "Director, MDTRC",
    subTitles: [
      "Professor, Information Systems",
      "DeGroote School of Business",
    ],
    socials: [
      {
        type: "email",
        label: "headm@mcmaster.ca",
      },
      {
        type: "profile",
        label: "https://www.degroote.mcmaster.ca/profiles/milena-head/",
      },
    ],
  },
  {
    image: nourElShamy,
    name: "Dr. Nour El Shamy",
    title: "Lab Manager, MDTRC",
    subTitles: [
      "PhD Candidate & Instructor, Information Systems",
      "DeGroote School of Business",
    ],
    socials: [
      {
        type: "email",
        label: "elshamne@mcmaster.ca",
      },
      {
        type: "profile",
        href: "https://www.degroote.mcmaster.ca/profiles/nour-el-shamy/",
        label: "DSB Profile",
      },
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/nourelshamy",
        label: "nourelshamy",
      },
      {
        type: "publication",
        href: "https://scholar.google.ca/citations?user=ho1WnpgAAAAJ&hl=en",
        label: "Publications",
      },
    ],
  },
  {
    image: brendanStanley,
    name: "Dr. Brendan Stanley",
    title: "Research Coordinator, MDTRC",
    socials: [
      {
        type: "email",
        label: "stanley@mcmaster.ca",
      },
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/bmstanley",
        label: "bmstanley",
      },
    ],
  },
];
