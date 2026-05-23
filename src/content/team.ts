export type Person = {
  name: string
  role: string
  details?: string[]
  email: string | null
  linkedin?: string | null
  image: string
  bio?: string
}

const PLACEHOLDER =
  "https://ui-avatars.com/api/?background=7A003C&color=fff&size=200&bold=true&name="

export const coreTeam: Person[] = [
  {
    name: "Benson Honig, Ph.D.",
    role: "Director, CRCE",
    details: [
      "Business Research Chair in Social Entrepreneurship",
      "Co-founder Reframery",
      "DeGroote School of Business",
      "McMaster University",
    ],
    email: "bhonig@mcmaster.ca",
    image: "https://reframery.org/_next/static/media/benson-honig.88669bd8.jpg",
  },
  {
    name: "Dr. Javid Nafari",
    role: "Chief Operating Officer",
    details: ["Postdoctoral Fellow", "DeGroote School of Business"],
    email: "nafarij@mcmaster.ca",
    linkedin: "javidnafari",
    image: "https://reframery.org/_next/static/media/javid-nafari.0a6db3c0.jpg",
  },
  {
    name: "Toli Amare",
    role: "Program Development Specialist",
    details: ["PhD Candidate", "DeGroote School of Business"],
    email: "amaret1@mcmaster.ca",
    linkedin: "toli",
    image: "https://reframery.org/_next/static/media/toli-amare.8e162363.jpg",
  },
]

export const internalAdvisory: Person[] = [
  {
    name: "Jacques Carette",
    role: "Associate Professor, Computing and Software",
    details: ["Faculty of Engineering", "McMaster University"],
    email: "carette@mcmaster.ca",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/88f2150be_image.png",
  },
  {
    name: "Nancy Doubleday",
    role: "Professor, Department of Philosophy",
    details: ["Hope Chair in Peace and Health", "McMaster University"],
    email: "doublen@mcmaster.ca",
    image: "https://expertsapps.mcmaster.ca/IMG/doublen.jpg",
  },
  {
    name: "James Gillett",
    role: "Associate Professor, Health, Aging & Society",
    details: [
      "Faculty of Social Sciences",
      "Director, Faculty of Social Sciences",
      "Member, McMaster Institute for Research on Aging (MIRA)",
    ],
    email: "gillett@mcmaster.ca",
    image:
      "https://mira.mcmaster.ca/wp-content/uploads/2023/09/Gillett-James-600px-square.jpg",
  },
  {
    name: "Yoontae Jeon",
    role: "Assistant Professor, Finance & Business Economics",
    details: ["DeGroote School of Business", "McMaster University"],
    email: "yoontae.jeon@mcmaster.ca",
    image:
      "https://degroote.mcmaster.ca/wp-content/uploads/sites/97/2026/05/profile_jeony5-400x400.jpg",
  },
  {
    name: "Addisu Lashitew",
    role: "Associate Professor, Strategic Management",
    details: [
      "DeGroote School of Business",
      "Non-Resident Fellow, Brookings Institution (Washington DC)",
    ],
    email: "lashitea@mcmaster.ca",
    image:
      "https://degroote.mcmaster.ca/wp-content/uploads/sites/97/2026/05/profile_lashitea-400x400.jpg",
  },
  {
    name: "Brent McKnight, PhD.",
    role: "Associate Professor, Strategic Management",
    details: [
      "DeGroote School of Business",
      "Program Director, Integrated Business and Humanities",
      "Co-Chair and Founder, Interdisciplinary Minor in Sustainability",
    ],
    email: "mcknigba@mcmaster.ca",
    image:
      "https://degroote.mcmaster.ca/wp-content/uploads/sites/97/2026/05/profile_mcknigba-400x400.jpg",
  },
  {
    name: "S.M. Khalid Nainar, PhD, CPA, CGA",
    role: "Professor of Accounting and Financial Management Services",
    details: ["DeGroote School of Business", "McMaster University"],
    email: "nainar@mcmaster.ca",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/3795e7e04_image.png",
  },
  {
    name: "Sandeep Raha, PhD.",
    role: "Associate Professor, Department of Pediatrics",
    details: [
      "Director, McMaster Children and Youth University",
      "Chair of Admissions, Medical Sciences Graduate Programme",
      "McMaster University",
    ],
    email: "rahas@mcmaster.ca",
    image:
      "https://mira.mcmaster.ca/wp-content/uploads/2023/11/Sandeep-Raha.jpg",
  },
  {
    name: "Trish Ruebottom, Ph.D.",
    role: "Associate Professor, Human Resources and Management",
    details: ["DeGroote School of Business", "McMaster University"],
    email: "ruebottt@mcmaster.ca",
    image:
      "https://degroote.mcmaster.ca/wp-content/uploads/sites/97/2026/05/profile_ruebottt-400x400.jpg",
  },
  {
    name: "Tej Sandhu",
    role: "Internal Advisory Committee Member",
    details: [],
    email: null,
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/ac99808b6_image.png",
  },
  {
    name: "Dr. Sash Vaid",
    role: "Assistant Professor",
    details: ["DeGroote School of Business", "McMaster University"],
    email: "vaids1@mcmaster.ca",
    image:
      "https://degroote.mcmaster.ca/wp-content/uploads/sites/97/2026/05/profile_vaids1-400x400.jpg",
  },
  {
    name: "Baniyelme Zoogah",
    role: "Associate Professor, Human Resources & Management",
    details: ["DeGroote School of Business", "McMaster University"],
    email: "zoogahb@mcmaster.ca",
    image:
      "https://degroote.mcmaster.ca/wp-content/uploads/sites/97/2026/05/profile_zoogahb-400x400.jpg",
  },
]

export const externalAdvisory: Person[] = [
  {
    name: "Maria Aluchna",
    role: "Associate Professor",
    details: ["SGH Warsaw School of Economics"],
    email: "maria.aluchna@sgh.waw.pl",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/265ac3b0b_image.png",
  },
  {
    name: "Daniela Bolzani",
    role: "Associate Professor in Management",
    details: ["The University of Bologna"],
    email: "daniela.bolzani@unibo.it",
    image:
      "https://www.unibo.it/uniboweb/utils/UserImage.aspx?IdAnagrafica=647390&IdFoto=376cd825",
  },
  {
    name: "Dominika Bosek-Rak",
    role: "Assistant Professor",
    details: ["SGH Warsaw School of Economics"],
    email: "dbosek@sgh.waw.pl",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/44ca8dadf_image.png",
  },
  {
    name: "John Chinnick",
    role: "Senior Vice President Business Development",
    details: ["Invisible Sky"],
    email: "johnchinnick@invisiblesky.ca",
    image: PLACEHOLDER + "John+Chinnick",
  },
  {
    name: "Alexandra David",
    role: "Senior Researcher",
    details: [
      "Westphalian University Gelsenkirchen",
      "Institute for Work and Technology",
    ],
    email: "david@iat.eu",
    image:
      "https://www.iat.eu/en/the-institute/employees/index.php?rex_media_type=small&rex_media_file=david_1.jpg",
  },
  {
    name: "Kim Klyver",
    role: "Professor in Entrepreneurship",
    details: [
      "University of Southern Denmark",
      "Adjunct Professor, University of Adelaide",
    ],
    email: "kkl@sam.sdu.dk",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/13a5635af_image.png",
  },
  {
    name: "Joseph Lampel",
    role: "Eddie Davies Professor of Enterprise and Innovation Management",
    details: ["The University of Manchester"],
    email: "joseph.lampel@manchester.ac.uk",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/799f8b374_image.png",
  },
  {
    name: "Marta Pachocka",
    role: "Assistant Professor",
    details: [
      "SGH Warsaw School of Economics and Centre of Migration Research",
    ],
    email: "mpachoc@sgh.waw.pl",
    image:
      "https://www.migracje.uw.edu.pl/wp-content/uploads/2016/10/mpachocka.jpg",
  },
  {
    name: "Shahamak Rezaei",
    role: "Associate Professor, Department of Social Sciences and Business",
    details: ["Roskilde University, Denmark"],
    email: "shre@ruc.dk",
    image:
      "https://forskning.ruc.dk/files-asset/63654342/Shahamak_Rezaei_presse_2.jpg",
  },
  {
    name: "Michelle Richey",
    role: "Senior Lecturer in Technology and Entrepreneurship",
    details: [
      "Loughborough Business School",
      "Loughborough University, United Kingdom",
    ],
    email: "m.richey@lboro.ac.uk",
    image:
      "https://www.lboro.ac.uk/media/media/schoolanddepartments/business-school/images/staff/Michelle-Richey-1613-480x640.jpg",
  },
  {
    name: "Mikael Samuelsson",
    role: "Professor, Graduate School of Business",
    details: ["University of Cape Town"],
    email: "mikael.samuelsson@uct.ac.za",
    image:
      "https://gsbmarvin.uct.ac.za/Contact/Images/Mikael%20faculty%201%201.jpg",
  },
  {
    name: "Ana Cristina Siqueira",
    role: "Associate Professor of Management",
    details: [
      "Director, Center for Socially Responsible Entrepreneurship and Innovation",
      "Cotsakos College of Business, William Paterson University",
      "Co-Founder of Reframery",
    ],
    email: "siqueiraa@wpunj.edu",
    image: "https://reframery.org/_next/static/media/ana-siquiera.5638c9ee.jpg",
  },
]

export const studentTeam: Person[] = [
  {
    name: "Veerash Palanichamy",
    role: "Software Developer",
    email: "palanicv@mcmaster.ca",
    linkedin: "veerashp",
    image:
      "https://reframery.org/_next/static/media/veerash-palanichamy.aae89427.jpg",
    bio: "Veerash Palanichamy is a student in the Software Engineering MASc program at McMaster University, interested in software development. He is responsible for rebuilding Reframery's marketplace, and deployment & maintenance of all Reframery products.",
  },
  {
    name: "Saad Tariq",
    role: "Software Developer",
    email: "tariqs26@mcmaster.ca",
    linkedin: "saad-tariq-ca",
    image: "https://reframery.org/_next/static/media/saad-tariq.ce4358b4.jpg",
    bio: "Saad Tariq is a student in the Computer Science program at McMaster University with a keen interest in full-stack web development. He is responsible for rebuilding the Reframery website, adding new features, and developing and integrating new applications, including an administrative portal, learning management system, and forum, as well as developing the CRCE website.",
  },
  {
    name: "Prisha Bhanot",
    role: "Web Developer",
    email: "bhanop1@mcmaster.ca",
    linkedin: "prisha-bhanot-4b8390282",
    image:
      "https://reframery.org/_next/static/media/prisha-bhanot.d76c0254.jpg",
    bio: "Prisha Bhanot is a student in the Bachelor of Chemical and Bio Engineering program at McMaster University's Faculty of Engineering. She contributes to Reframery as a Web Developer, helping build and maintain the platform's web presence to support the organization's mission of empowering marginalized entrepreneurs globally.",
  },
  {
    name: "Mana Abolghasemi",
    role: "Research Assistant",
    email: "abolghas@mcmaster.ca",
    linkedin: "mana-abolghasemi",
    image:
      "https://reframery.org/_next/static/media/mana-abolghasemi.e0ea4aa1.jpg",
    bio: "Mana Abolghasemi is a Research Assistant at McMaster University, contributing to research initiatives that support Reframery's mission of empowering marginalized entrepreneurs globally.",
  },
  {
    name: "Wonu Adelusi",
    role: "Business Research Advisor",
    email: "adelusio@mcmaster.ca",
    linkedin: "wonu-adelusi",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/3bc77db55_image.png",
    bio: "Wonu works to develop business development learning materials for entrepreneurship crash courses that prioritize social responsibility and inclusion internationally. She works on analyzing existing research on social entrepreneurship and synthesizing findings to complete various tasks including case development, research analysis, and workshop facilitation.",
  },
  {
    name: "Hala Arafeh",
    role: "Curriculum Design and Instruction Co-Lead",
    email: "arafehh@mcmaster.ca",
    linkedin: "hala-arafeh",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/180b10324_image.png",
    bio: "This position is integral to the advancement of the Reframery Co-Create Entrepreneurship Program. My responsibilities encompass the development of comprehensive course materials, including the formulation of session structures, pre and post-session assignments, and clearly defined learning goals. Beyond content creation, my role extends to actively co-instructing alongside the Co-Create Instruction Team. This involves supporting the teaching of essential knowledge, facilitating engaging discussions, and helping participants draw meaningful connections between the course content and their individual career ambitions.",
  },
  {
    name: "Ayat Atif",
    role: "Media Strategy Specialist",
    email: "atifa6@mcmaster.ca",
    linkedin: "ayatatif",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/f123d08b6_image.png",
    bio: "Ayat, an undergraduate commerce student at the DeGroote School of Business, adeptly combines entrepreneurship and multimedia expertise as a Media Strategy Specialist at The Reframery. Crafting case studies, curating promotional content, and leading outreach, Ayat catalyzes a substantial impact on McMaster University's entrepreneurial community. This role aligns seamlessly with Ayat's passion for entrepreneurship and multimedia, contributing holistically to the university's landscape. In her free time, Ayat dedicates herself to self-cinematography, a testament to her commitment to impactful storytelling, both personally and professionally.",
  },
  {
    name: "Shayla Bird",
    role: "Research Assistant",
    email: "birds8@mcmaster.ca",
    linkedin: "shayla-bird",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/113c8fcdb_image.png",
    bio: "In my role I actively support research endeavors, engaging in investigative and analytical tasks, data collection, and assisting across different facets of research projects. My primary focus is on exploring strategies to increase community engagement and student intrapreneurship within post-secondary institutions. The work I do at Reframery plays a crucial role in shaping the future of education and student-led social impact.",
  },
  {
    name: "Paulina Farida Caprani",
    role: "Curriculum Development Specialist",
    email: "capranip@mcmaster.ca",
    linkedin: "paulinacaprani",
    image: PLACEHOLDER + "Paulina+Caprani",
    bio: "Paulina Farida Caprani is a Curriculum Development Specialist at McMaster University, developing educational materials that support Reframery's entrepreneurship programs for marginalized communities.",
  },
  {
    name: "Raniya Chowdhury",
    role: "Research Assistant",
    email: "chowdr40@mcmaster.ca",
    linkedin: "raniya-chowdhury",
    image:
      "https://reframery.org/_next/static/media/raniya-chowdhury.3edf959e.jpg",
    bio: "Raniya Chowdhury is a Research Assistant at McMaster University, supporting research projects and initiatives that advance Reframery's mission of empowering entrepreneurs in marginalized communities.",
  },
  {
    name: "Aoife Cummins",
    role: "PhD Research Assistant",
    email: "cummia2@mcmaster.ca",
    linkedin: "aoife-cummins-0a9924233",
    image:
      "https://reframery.org/_next/static/media/aoife-cummins.ba56a46a.jpg",
    bio: "Aoife Cummins is a PhD Candidate in Global Health at McMaster University, contributing her research expertise to Reframery's work on inclusive and community-oriented entrepreneurship.",
  },
  {
    name: "Saniyah Farzeen",
    role: "Research Assistant",
    email: "farzeens@mcmaster.ca",
    linkedin: "saniyah-farzeen",
    image:
      "https://reframery.org/_next/static/media/saniyah-farzeen.6b17ac8d.jpg",
    bio: "Saniyah Farzeen is a Research Assistant at McMaster University, supporting Reframery's research and community engagement efforts.",
  },
  {
    name: "Fatima Gohar",
    role: "Research & Curriculum Development Specialist",
    email: "goharf@mcmaster.ca",
    linkedin: "-fatimagohar",
    image: "https://reframery.org/_next/static/media/fatima-gohar.73b919aa.jpg",
    bio: "Fatima Gohar is a student in the Integrated Business & Humanities Program at DeGroote School of Business, specializing in Sustainability, Global Peace and Social Justice. She develops research and curriculum materials that support Reframery's global entrepreneurship programs.",
  },
  {
    name: "Alessia Garcia",
    role: "Curriculum Development Specialist",
    email: "garcia25@mcmaster.ca",
    linkedin: "alessia-garcia",
    image:
      "https://reframery.org/_next/static/media/alessia-garcia.ef46ce10.jpg",
    bio: "Alessia Garcia is a Curriculum Development Specialist at McMaster University, creating educational resources that help entrepreneurs in marginalized communities develop business skills.",
  },
  {
    name: "Dilrose Grewal",
    role: "Media Strategy Specialist",
    email: "grewad16@mcmaster.ca",
    linkedin: "dilrosegrewal",
    image:
      "https://reframery.org/_next/static/media/dilrose-grewal.0db48416.jpg",
    bio: "Dilrose Grewal is a Media Strategy Specialist at McMaster University, helping shape Reframery's communications and outreach to amplify its impact on marginalized entrepreneurial communities.",
  },
  {
    name: "Sehyeon (Julie) Hong",
    role: "Research & Curriculum Development Specialist",
    email: "hongs39@mcmaster.ca",
    linkedin: "hong-sehyeon",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/260773199_image.png",
    bio: "Aligned with CRCE's mission to empower marginalized communities in innovative business ventures, my role is crucial for developing and writing course material that equips engineering students with the skills needed to navigate and succeed in a high-tech business environments. My responsibilities primarily involve creating in-depth course materials by researching and developing business cases. These cases integrate biomedical engineering with entrepreneurial principles, encouraging students to apply analytical tools to address business challenges within the broader context of the biomedical industry.",
  },
  {
    name: "Neha Kazi",
    role: "Curriculum Development Specialist",
    email: "kazin3@mcmaster.ca",
    linkedin: "neha-kazi",
    image: "https://reframery.org/_next/static/media/neha-kazi.59636f7b.jpg",
    bio: "Neha Kazi is a Curriculum Development Specialist at McMaster University, developing learning materials that advance Reframery's mission of inclusive entrepreneurship education.",
  },
  {
    name: "Rafi Lambert-Greene",
    role: "Research & Curriculum Development Specialist",
    email: "lamber4@mcmaster.ca",
    linkedin: "rafi-lambert-greene",
    image:
      "https://reframery.org/_next/static/media/rafi-lambert-greene.4cbc7ee4.jpg",
    bio: "Rafi Lambert-Greene is a student in the Integrated Business & Humanities Program at DeGroote School of Business with a focus on Sustainability, Global Peace and Social Justice. He develops research and curriculum materials for Reframery's entrepreneurship programs.",
  },
  {
    name: "Tabitha Lothian",
    role: "Research & Curriculum Development Specialist",
    email: "lothiant@mcmaster.ca",
    linkedin: null,
    image: PLACEHOLDER + "Tabitha+Lothian",
    bio: "Tabitha Lothian is a Research & Curriculum Development Specialist at McMaster University, contributing to the development of educational materials for Reframery's global entrepreneurship programs.",
  },
  {
    name: "Musfirah Muzafar",
    role: "Business Research & Development Strategist",
    email: "muzafarm@mcmaster.ca",
    linkedin: "musfirahmuzafar",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/b8b09cc97_image.png",
    bio: "I am responsible for developing comprehensive modules on fundamental business principles, tailored to accommodate varying levels of complexity in business plans and operations across different entrepreneurial learner groups globally. I adapt resource structures for optimal learning outcomes, and actively contribute to research initiatives by gathering and analyzing existing research/data for case development and workshop advancement. I have also served as a bridge between Reframery and partner entities maintaining strong community ties. My goal is to strengthen my business expertise, strong research skills, a cross-cultural understanding, communication abilities, and work with those who share my passion of a global outlook on business.",
  },
  {
    name: "Hayden Piper",
    role: "Project Development Officer",
    email: "piperh@mcmaster.ca",
    linkedin: "haleycpiper",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/682990004_image.png",
    bio: "In my role, I lead outreach efforts to potential partners, identifying and engaging key collaborators to advance our research objectives. I coordinate and document meetings between these partners and our research team, ensuring productive dialogue and continuity. Additionally, I support our grant development process by drafting letters of support and preparing essential documents for our proposals. These responsibilities are crucial for nurturing partnerships and securing funding necessary for our projects' success.",
  },
  {
    name: "Allison Preyra",
    role: "Business Research Advisor",
    email: "preyraa@mcmaster.ca",
    linkedin: "allisonpreyra",
    image:
      "https://media.base44.com/images/public/69573a816ee3f6e4126a3794/da4c1acf8_image.png",
    bio: "Allison Preyra is pursuing her B. Comm degree at McMaster University in the Integrated Business and Humanities program. She is responsible for developing content used within the Reframery course in order to provide advising services to entrepreneurs globally. Allison's focus has been on creating easily accessible media that provides foundational knowledge on an array of topics including digital marketing, e-commerce and sales. She creates interactive resources that are leveraged by students who implement her advice in their professional endeavors.",
  },
  {
    name: "Qi (Cassie) Ruan",
    role: "Research Assistant",
    email: "ruanq@mcmaster.ca",
    linkedin: "cassie-ruan-b87266226",
    image: "https://reframery.org/_next/static/media/qi-ruan.1009a197.jpg",
    bio: "Qi (Cassie) Ruan is a Research Assistant at McMaster University, supporting research projects that advance Reframery's mission of empowering marginalized entrepreneurs globally.",
  },
  {
    name: "Salina Tellis",
    role: "Former Research & Curriculum Development Specialist",
    email: "telliss@mcmaster.ca",
    linkedin: "salina-tellis",
    image:
      "https://reframery.org/_next/static/media/salina-tellis.7e1af284.jpg",
    bio: "As a Curriculum Research & Design Specialist, I manage multiple projects and research global business environments in order to construct and write educational, discussion-prompting case studies. In addition, I develop training materials to facilitate learning among entrepreneurial cohorts regarding principles of inclusion and social responsibility, while aligning economic, social, and environmental goals.",
  },
  {
    name: "Margaux Williams-Kelly",
    role: "Former Graduate Research Assistant",
    email: "willm7@mcmaster.ca",
    linkedin: "margaux-williams-kelly",
    image:
      "https://reframery.org/_next/static/media/margaux-williams-kelly.6ec04c4c.jpg",
    bio: "Margaux Williams-Kelly completed an MSc in Global Health at McMaster University. She served as a Graduate Research Assistant at Reframery, contributing to research on inclusive entrepreneurship and global health.",
  },
  {
    name: "Mia Aamir",
    role: "Research Assistant (Independent)",
    email: null,
    linkedin: null,
    image: PLACEHOLDER + "Mia+Aamir",
    bio: "As a Research Assistant, I play a crucial role in the collection, compilation, and analysis of firsthand research data. My responsibilities include creating detailed reports based on my findings and utilizing this information to advance ongoing research projects.",
  },
]
