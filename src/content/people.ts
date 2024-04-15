import placeholder from "@/images/people/placeholder.png";

import bensonHonig from "@/images/people/benson-honig.jpg";
import anaSiqueira from "@/images/people/ana-siquiera.jpg";
import sandeepRaha from "@/images/people/sandeep-raha.jpg";
import trishRuebottom from "@/images/people/trish-ruebottom.png";
import brentMcKnight from "@/images/people/brent-mcknight.jpg";
import baniyelmeZoogah from "@/images/people/baniyelme-zoogah.png";
import sashVaid from "@/images/people/sash-vaid.png";
import addisuLashitew from "@/images/people/addisu-lashitew.jpg";
import yoontaeJeon from "@/images/people/yoontae-jeon.jpg";
import jacquesCarette from "@/images/people/jacques-carette.jpg";
import khalidNainar from "@/images/people/khalid-nainar.jpg";

import shahamakRezaei from "@/images/people/shahamak-rezaei.png";
import mikaelSamuelsson from "@/images/people/mikael-samuelsson.jpg";
import johnChinnick from "@/images/people/john-chinnick.jpeg";

export type SocialType = "email" | "linkedin" | "profile" | "publication";

type Social = {
  type: SocialType;
  href?: string;
  label: string;
};

export type Person = {
  image: ImageMetadata;
  name: string;
  title?: string;
  bio?: string;
  subTitles?: string[];
  socials: Social[];
};

const DSB = "DeGroote School of Business";
const McMaster = "McMaster University";

export const coreMembers: Person[] = [
  {
    image: bensonHonig,
    name: "Benson Honig, Ph.D.",
    title: "Director, CRCE",
    subTitles: [
      "Chair of Entrepreneurial Leadership",
      "Co-founder Reframery",
      DSB,
      McMaster,
    ],
    socials: [
      {
        type: "email",
        label: "bhonig@mcmaster.ca",
      },
    ],
  },
  {
    image: anaSiqueira,
    name: "Ana Cristina Siqueira",
    subTitles: [
      "Associate Professor of Management",
      "Director of the Center for Socially Responsible Entrepreneurship and Innovation",
      "Cotsakos College of Business, William Paterson University",
      "Co-Founder of Reframery",
    ],
    socials: [
      {
        type: "email",
        label: "siqueiraa@wpunj.edu",
      },
    ],
  },
  {
    image: sandeepRaha,
    name: "Sandeep Raha, PhD.",
    subTitles: [
      "Associate Professor, Department of Pediatrics",
      "Director, McMaster Children and Youth University",
      "Chair of Admissions, Medical Sciences Graduate Programme",
      "Associate Member of the Department of Biochemistry and Biomedical Sciences",
      "McMaster University Medical Centre, Rm 3N11C-J",
    ],
    socials: [
      {
        type: "email",
        label: "rahas@mcmaster.ca",
      },
    ],
  },
  {
    image: trishRuebottom,
    name: "Trish Ruebottom, Ph.D.",
    subTitles: [
      "Associate Professor, Human Resources and Management",
      DSB,
      McMaster,
    ],
    socials: [
      {
        type: "email",
        label: "ruebottt@mcmaster.ca",
      },
    ],
  },
  {
    image: brentMcKnight,
    name: "Brent McKnight, B. Eng & Mgmt, MBA, PhD.",
    subTitles: [
      "Associate Professor, Strategic Management, DeGroote School of Business",
      "Program Director, Integrated Business and Humanities",
      "Co-Chair and Founder, Interdisciplinary Minor in Sustainability",
    ],
    socials: [
      {
        type: "email",
        label: "mcknigba@mcmaster.ca",
      },
    ],
  },
  {
    image: baniyelmeZoogah,
    name: "Baniyelme Zoogah",
    subTitles: [
      "Associate Professor, Human Resources & Management",
      DSB,
      McMaster,
    ],
    socials: [
      {
        type: "email",
        label: "zoogahb@mcmaster.ca",
      },
    ],
  },
  {
    image: sashVaid,
    name: "Dr. Sash Vaid",
    subTitles: ["Assistant Professor, DeGroote School of Business", McMaster],
    socials: [
      {
        type: "email",
        label: "vaids1@mcmaster.ca",
      },
    ],
    bio: "As a marketing professor, Vaid is currently exploring the discipline's interfaces as he builds on his dissertation, entitled, “Interface of Salesforce with Marketing and Digital”. Vaid's research focuses on marketing interfaces, along two dimensions that are intrinsic and extrinsic to the firm, specifically - functional and technological. The first dimension explores marketing’s interfaces with other functions within the firm: sales, operations, finance, human resource, among others. The second dimension investigates marketing’s interfaces with a range of technologies associated with: data breaches, consumer policies, AI, lead generation, marketing automation systems, healthcare, and mobility/geodata.",
  },
  {
    image: addisuLashitew,
    name: "Addisu Lashitew",
    subTitles: [
      "Associate Professor, Strategic Management, DeGroote School of Business",
      "Non-Resident Fellow at the Brookings Institution (Washington DC, USA)",
    ],
    socials: [
      {
        type: "email",
        label: "lashitea@mcmaster.ca",
      },
    ],
  },
  {
    image: yoontaeJeon,
    name: "Yoontae Jeon",
    subTitles: [
      "Assistant Professor, Finance & Business Economics",
      DSB,
      McMaster,
    ],
    socials: [
      {
        type: "email",
        label: "yoontae.jeon@mcmaster.ca",
      },
    ],
  },
  {
    image: jacquesCarette,
    name: "Jacques Carette",
    subTitles: [
      "Associate Professor, Department of Computing and Software",
      "Faculty of Engineering",
      McMaster,
    ],
    socials: [
      {
        type: "email",
        label: "carette@mcmaster.ca",
      },
    ],
  },
  {
    image: placeholder,
    name: "James Gillett",
    subTitles: [
      "Associate Professor, Health, Aging & Society, Faculty of Social Sciences",
      "Director, Faculty of Social Sciences, McMaster University",
      "Member, McMaster Institute for Research on Aging (MIRA), McMaster University",
    ],
    socials: [
      {
        type: "email",
        label: "gillett@mcmaster.ca",
      },
    ],
  },
  {
    image: khalidNainar,
    name: "S.M. Khalid Nainar, PhD, CPA, CGA",
    subTitles: [
      "Professor of Accounting and Financial Management Services",
      DSB,
      McMaster,
    ],
    socials: [
      {
        type: "email",
        label: "nainar@mcmaster.ca",
      },
    ],
  },
];

export const advisoryCommittee: Person[] = [
  {
    image: shahamakRezaei,
    name: "Shahamak Rezaei",
    subTitles: [
      "Associate Professor, Department of Social Sciences and Business",
      "Roskilde University, Denmark",
    ],
    socials: [
      {
        type: "email",
        label: "shre@ruc.dk",
      },
    ],
  },
  {
    image: mikaelSamuelsson,
    name: "Mikael Samuelsson",
    subTitles: [
      "Professor, Graduate School of Business",
      "University of Cape Town",
    ],
    socials: [
      {
        type: "email",
        label: "mikael.samuelsson@uct.ac.za",
      },
    ],
  },
  {
    image: johnChinnick,
    name: "John Chinnick",
    subTitles: ["Senior Vice President Business Development", "Invisible Sky"],
    socials: [
      {
        type: "email",
        label: "johnchinnick@invisiblesky.ca",
      },
    ],
  },
];
