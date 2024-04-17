import type { ImageMetadata } from "astro";

import placeholder from "@/images/people/placeholder.png";
import allison from "@/images/student-training/allison-preyra.jpg";
import ayat from "@/images/student-training/ayat-atif.jpeg";
import haley from "@/images/student-training/haley-piper.jpg";
import mia from "@/images/student-training/mia-aamir.jpg";
import saad from "@/images/student-training/saad-tariq.jpg";
import salina from "@/images/student-training/salina-tellis.jpg";
import sehyeon from "@/images/student-training/sehyeon-hong.jpg";
import shayla from "@/images/student-training/shayla-bird.jpeg";
import veerash from "@/images/student-training/veerash-palanichamy.jpg";
import wonu from "@/images/student-training/wonu-adelusi.jpeg";

type Social = {
  type: "Email" | "LinkedIn";
  label: string;
};

type Student = {
  image: ImageMetadata;
  name: string;
  role: string;
  roleDescription: string;
  socials: Social[];
};

export const email = (label: string) => `mailto:${label}`;

export const linkedIn = (label: string) =>
  `https://www.linkedin.com/in/${label}`;

export const students: Student[] = [
  {
    image: haley,
    name: "Haley Piper",
    role: "Project Development Officer",
    roleDescription:
      "In my role, I lead outreach efforts to potential partners, identifying and engaging key collaborators to advance our research objectives. I coordinate and document meetings between these partners and our research team, ensuring productive dialogue and continuity. Additionally, I support our grant development process by drafting letters of support and preparing essential documents for our proposals. These responsibilities are crucial for nurturing partnerships and securing funding necessary for our projects' success.",
    socials: [
      {
        type: "Email",
        label: "piperh@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "haleycpiper",
      },
    ],
  },
  {
    image: ayat,
    name: "Ayat Atif",
    role: "Media Strategy Specialist",
    roleDescription:
      "Ayat, an undergraduate commerce student at the DeGroote School of Business, adeptly combines entrepreneurship and multimedia expertise as a Media Strategy Specialist at The Reframery. Crafting case studies, curating promotional content, and leading outreach, Ayat catalyzes a substantial impact on McMaster University's entrepreneurial community. This role aligns seamlessly with Ayat's passion for entrepreneurship and multimedia, contributing holistically to the university's landscape. In her free time, Ayat dedicates herself to self-cinematography, a testament to her commitment to impactful storytelling, both personally and professionally.",
    socials: [
      {
        type: "Email",
        label: "atifa6@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "ayatatif",
      },
    ],
  },
  {
    image: veerash,
    name: "Veerash Palanichamy",
    role: "Software Developer",
    roleDescription:
      "Veerash Palanichamy is a student in the Software Engineering MASc program at McMaster University, interested in software development. He is responsible for rebuilding Reframery's marketplace, and deployment & maintenance of all Reframery products.",
    socials: [
      {
        type: "Email",
        label: "palanicv@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "veerashp",
      },
    ],
  },
  {
    image: saad,
    name: "Saad Tariq",
    role: "Web Developer",
    roleDescription:
      "Saad Tariq is a student in the Computer Science program at McMaster University with a keen interest in full-stack web development. He is responsible for rebuilding the Reframery website, adding new features, and developing and integrating new applications, including an administrative portal, learning management system, and forum, as well as developing the CRCE website.",
    socials: [
      {
        type: "Email",
        label: "tariqs26@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "saad-tariq-cs",
      },
    ],
  },
  {
    image: salina,
    name: "Salina Tellis",
    role: "Research & Curriculum Development Specialist",
    roleDescription:
      "As a Curriculum Research & Design Specialist, I manage multiple projects and research global business environments in order to construct and write educational, discussion-prompting case studies. In addition, I develop training materials to facilitate learning among entrepreneurial cohorts regarding principles of inclusion and social responsibility, while aligning economic, social, and environmental goals.",
    socials: [
      {
        type: "Email",
        label: "telliss@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "salina-tellis",
      },
    ],
  },

  {
    image: allison,
    name: "Allison Preyra",
    role: "Business Research Advisor",
    roleDescription:
      "Allison Preyra is pursuing her B. Comm degree at McMaster University in the Integrated Business and Humanities program. She is responsible for developing content used within the Reframery course in order to provide advising services to entrepreneurs globally. Allison's focus has been on creating easily accessible media that provides foundational knowledge on an array of topics including digital marketing, e-commerce and sales. She creates interactive resources that are leveraged by students who implement her advice in their professional endeavors.",
    socials: [
      {
        type: "Email",
        label: "preyraa@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "allisonpreyra",
      },
    ],
  },
  {
    image: wonu,
    name: "Wonu Adelusi",
    role: "Business Research Advisor",
    roleDescription:
      "Wonu works to develop business development learning materials for entrepreneurship crash courses that prioritize social responsibility and inclusion internationally. She works on analyzing existing research on social entrepreneurship and synthesizing findings to complete various tasks including case development, research analysis, and workshop facilitation.",
    socials: [
      {
        type: "Email",
        label: "adelusio@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "wonu-adelusi",
      },
    ],
  },
  {
    image: sehyeon,
    name: "Sehyeon (Julie) Hong ",
    role: "Research & Curriculum Development Specialist",
    roleDescription:
      "Aligned with CRCE's mission to empower marginalized communities in innovative business ventures, my role is crucial for developing and writing course material that equips engineering students with the skills needed to navigate and succeed in a high-tech business environments. My responsibilities primarily involve creating in-depth course materials by researching and developing business cases. These cases integrate biomedical engineering with entrepreneurial principles, encouraging students to apply analytical tools to address business challenges within the broader context of the biomedical industry.",
    socials: [
      {
        type: "Email",
        label: "hongs39@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "hong-sehyeon",
      },
    ],
  },
  {
    image: shayla,
    name: "Shayla Bird",
    role: "Research Assistant",
    roleDescription:
      "In my role I actively support research endeavors, engaging in investigative and analytical tasks, data collection, and assisting across different facets of research projects. My primary focus is on exploring strategies to increase community engagement and student intrapreneurship within post-secondary institutions. The work I do at Reframery plays a crucial role in shaping the future of education and student-led social impact.",
    socials: [
      {
        type: "Email",
        label: "birds8@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "shayla-bird",
      },
    ],
  },
  {
    image: placeholder,
    name: "Hala Arafeh",
    role: "Curriculum Design and Instruction Co-Lead",
    roleDescription:
      "This position is integral to the advancement of the Reframery Co-Create Entrepreneurship Program. My responsibilities encompass the development of comprehensive course materials, including the formulation of session structures, pre and post-session assignments, and clearly defined learning goals. Beyond content creation, my role extends to actively co-instructing alongside the Co-Create Instruction Team. This involves supporting the teaching of essential knowledge, facilitating engaging discussions, and helping participants draw meaningful connections between the course content and their individual career ambitions.",
    socials: [
      {
        type: "Email",
        label: "arafehh@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "hala-arafeh",
      },
    ],
  },
  {
    image: mia,
    name: "Mia Aamir",
    role: "Research Assistant (Independent)",
    roleDescription:
      "As a Research Assistant, I play a crucial role in the collection, compilation, and analysis of firsthand research data. My responsibilities include creating detailed reports based on my findings and utilizing this information to suggest strategic next steps for both research and program development initiatives. Additionally, I am tasked with collecting and recording best practices for establishing connections with new communities to enhance collaboration and broaden the scope of our initiatives.",
    socials: [
      {
        type: "Email",
        label: "aamira6@mcmaster.ca",
      },
      {
        type: "LinkedIn",
        label: "amina-aamir",
      },
    ],
  },
];
