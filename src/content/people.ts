import type { Social } from "@/lib/socials";

import placeholder from "@/images/people/placeholder.png";

import addisuLashitew from "@/images/people/addisu-lashitew.jpg";
import anaSiqueira from "@/images/people/ana-siquiera.jpg";
import baniyelmeZoogah from "@/images/people/baniyelme-zoogah.jpg";
import bensonHonig from "@/images/people/benson-honig.jpg";
import brentMcKnight from "@/images/people/brent-mcknight.jpg";
import jacquesCarette from "@/images/people/jacques-carette.jpg";
import javidNafari from "@/images/people/javid-nafari.jpg";
import khalidNainar from "@/images/people/khalid-nainar.jpg";
import nancyDoubleday from "@/images/people/nancy-doubleday.jpg";
import sandeepRaha from "@/images/people/sandeep-raha.jpg";
import sashVaid from "@/images/people/sash-vaid.jpg";
import toliAmare from "@/images/people/toli-amare.jpg";
import trishRuebottom from "@/images/people/trish-ruebottom.jpg";
import yoontaeJeon from "@/images/people/yoontae-jeon.jpg";

import alexandraDavid from "@/images/people/alexandra-david.jpg";
import danielaBolzani from "@/images/people/daniela-bolzani.jpg";
import dominikaBosekRak from "@/images/people/dominika-bosek.jpg";
import johnChinnick from "@/images/people/john-chinnick.jpeg";
import josephLampel from "@/images/people/joseph-lampel.jpg";
import kimKlyver from "@/images/people/kim-klyver.jpg";
import mariaAluchna from "@/images/people/maria-aluchna.jpeg";
import martaPachocka from "@/images/people/marta-pachocka.jpg";
import michelleRichey from "@/images/people/michelle-richey.jpg";
import mikaelSamuelsson from "@/images/people/mikael-samuelsson.jpg";
import shahamakRezaei from "@/images/people/shahamak-rezaei.png";

export type Person = {
  image: ImageMetadata;
  name: string;
  title?: string;
  bio?: string;
  subTitles?: string[];
  socials: Social[];
};

class PersonBuilder {
  private person: Person;

  constructor(name: string, image: ImageMetadata) {
    this.person = {
      image,
      name,
      socials: [],
    };
  }

  title(title: string) {
    this.person.title = title;
    return this;
  }

  subTitles(...subTitles: string[]) {
    this.person.subTitles = subTitles;
    return this;
  }

  bio(bio: string) {
    this.person.bio = bio;
    return this;
  }

  socials(...socials: Social[]) {
    this.person.socials = socials;
    return this;
  }

  build() {
    return this.person;
  }
}

const person = (name: string, image: ImageMetadata = placeholder) =>
  new PersonBuilder(name, image);

const DSB = "DeGroote School of Business";
const McMaster = "McMaster University";
const SGH = "SGH Warsaw School of Economics";

export const coreMembers: Person[] = [
  person("Benson Honig, Ph.D.", bensonHonig)
    .title("Director, CRCE")
    .subTitles(
      "Business Research Chair in Social Entrepreneurship",
      "Co-founder Reframery",
      DSB,
      McMaster
    )
    .socials({ type: "Email", label: "bhonig@mcmaster.ca" })
    .build(),

  person("Ana Cristina Siqueira", anaSiqueira)
    .subTitles(
      "Associate Professor of Management",
      "Director of the Center for Socially Responsible Entrepreneurship and Innovation",
      "Cotsakos College of Business, William Paterson University",
      "Co-Founder of Reframery"
    )
    .socials({ type: "Email", label: "siqueiraa@wpunj.edu" })
    .build(),

  person("Javid Nafari", javidNafari)
    .subTitles("PhD Candidate", DSB)
    .socials({ type: "Email", label: "nafarij@mcmaster.ca" })
    .build(),

  person("Toli Amare", toliAmare)
    .subTitles("PhD Candidate", DSB)
    .socials({ type: "Email", label: "amaret1@mcmaster.ca" })
    .build(),

  person("Sandeep Raha, PhD.", sandeepRaha)
    .subTitles(
      "Associate Professor, Department of Pediatrics",
      "Director, McMaster Children and Youth University",
      "Chair of Admissions, Medical Sciences Graduate Programme",
      "Associate Member of the Department of Biochemistry and Biomedical Sciences",
      "McMaster University Medical Centre, Rm 3N11C-J"
    )
    .socials({ type: "Email", label: "rahas@mcmaster.ca" })
    .build(),

  person("Trish Ruebottom, Ph.D.", trishRuebottom)
    .subTitles(
      "Associate Professor, Human Resources and Management",
      DSB,
      McMaster
    )
    .socials({ type: "Email", label: "ruebottt@mcmaster.ca" })
    .build(),

  person("Brent McKnight, B. Eng & Mgmt, MBA, PhD.", brentMcKnight)
    .subTitles(
      "Associate Professor, Strategic Management,",
      DSB,
      "Program Director, Integrated Business and Humanities",
      "Co-Chair and Founder, Interdisciplinary Minor in Sustainability"
    )
    .socials({ type: "Email", label: "mcknigba@mcmaster.ca" })
    .build(),

  person("Baniyelme Zoogah", baniyelmeZoogah)
    .subTitles(
      "Associate Professor, Human Resources & Management",
      DSB,
      McMaster
    )
    .socials({ type: "Email", label: "zoogahb@mcmaster.ca" })
    .build(),

  person("Dr. Sash Vaid", sashVaid)
    .subTitles("Assistant Professor, DeGroote School of Business", McMaster)
    .socials({ type: "Email", label: "vaids1@mcmaster.ca" })
    .bio(
      "As a marketing professor, Vaid is currently exploring the discipline's interfaces as he builds on his dissertation, entitled, “Interface of Salesforce with Marketing and Digital”. Vaid's research focuses on marketing interfaces, along two dimensions that are intrinsic and extrinsic to the firm, specifically - functional and technological. The first dimension explores marketing's interfaces with other functions within the firm: sales, operations, finance, human resource, among others. The second dimension investigates marketing's interfaces with a range of technologies associated with: data breaches, consumer policies, AI, lead generation, marketing automation systems, healthcare, and mobility/geodata."
    )
    .build(),

  person("Addisu Lashitew", addisuLashitew)
    .subTitles(
      "Associate Professor, Strategic Management,",
      DSB,
      "Non-Resident Fellow at the Brookings Institution",
      "(Washington DC, USA)"
    )
    .socials({ type: "Email", label: "lashitea@mcmaster.ca" })
    .build(),

  person("Yoontae Jeon", yoontaeJeon)
    .subTitles(
      "Assistant Professor, Finance & Business Economics",
      DSB,
      McMaster
    )
    .socials({ type: "Email", label: "yoontae.jeon@mcmaster.ca" })
    .build(),

  person("Jacques Carette", jacquesCarette)
    .subTitles(
      "Associate Professor, Department of Computing and Software",
      "Faculty of Engineering",
      McMaster
    )
    .socials({ type: "Email", label: "carette@mcmaster.ca" })
    .build(),

  person("James Gillett")
    .subTitles(
      "Associate Professor, Health, Aging & Society,",
      "Faculty of Social Sciences",
      "Director, Faculty of Social Sciences,",
      McMaster,
      "Member, McMaster Institute for Research on Aging (MIRA),",
      McMaster
    )
    .socials({ type: "Email", label: "gillett@mcmaster.ca" })
    .build(),

  person("S.M. Khalid Nainar, PhD, CPA, CGA", khalidNainar)
    .subTitles(
      "Professor of Accounting and Financial Management Services",
      DSB,
      McMaster
    )
    .socials({ type: "Email", label: "nainar@mcmaster.ca" })
    .build(),

  person("Nancy Doubleday", nancyDoubleday)
    .subTitles(
      "Professor, Department of Philosophy",
      "Hope Chair in Peace and Health",
      McMaster
    )
    .socials({ type: "Email", label: "doublen@mcmaster.ca" })
    .build(),
];

export const advisoryCommittee: Person[] = [
  person("Shahamak Rezaei", shahamakRezaei)
    .subTitles(
      "Associate Professor, Department of Social Sciences and Business",
      "Roskilde University, Denmark"
    )
    .socials({ type: "Email", label: "shre@ruc.dk" })
    .build(),

  person("Mikael Samuelsson", mikaelSamuelsson)
    .subTitles(
      "Professor, Graduate School of Business",
      "University of Cape Town"
    )
    .socials({ type: "Email", label: "mikael.samuelsson@uct.ac.za" })
    .build(),

  person("John Chinnick", johnChinnick)
    .subTitles("Senior Vice President Business Development", "Invisible Sky")
    .socials({ type: "Email", label: "johnchinnick@invisiblesky.ca" })
    .build(),

  person("Alexandra David", alexandraDavid)
    .subTitles(
      "Senior Researcher, Westphalian University Gelsenkirchen",
      "Institute for Work and Technology"
    )
    .socials({ type: "Email", label: "david@iat.eu" })
    .build(),

  person("Michelle Richey", michelleRichey)
    .subTitles(
      "Senior Lecturer in Technology and Entrepreneurship",
      "Loughborough Business School",
      "Loughborough University, United Kingdom"
    )
    .socials({ type: "Email", label: "m.richey@lboro.ac.uk" })
    .build(),

  person("Maria Aluchna", mariaAluchna)
    .subTitles("Associate Professor", SGH)
    .socials({ type: "Email", label: "maria.aluchna@sgh.waw.pl" })
    .build(),

  person("Joseph Lampel", josephLampel)
    .subTitles(
      "Eddie Davies Professor of Enterprise and Innovation Management",
      "The University of Manchester"
    )
    .socials({ type: "Email", label: "joseph.lampel@manchester.ac.uk" })
    .build(),

  person("Kim Klyver", kimKlyver)
    .subTitles(
      "Professor in Entrepreneurship at University of Southern Denmark",
      "Adjunct professor at University of Adelaide"
    )
    .socials({ type: "Email", label: "kkl@sam.sdu.dk" })
    .build(),

  person("Daniela Bolzani", danielaBolzani)
    .subTitles("Associate Professor in management", "The University of Bologna")
    .socials({ type: "Email", label: "daniela.bolzani@unibo.it" })
    .build(),

  person("Dominika Bosek-Rak", dominikaBosekRak)
    .subTitles("Assistant Professor", SGH)
    .socials({ type: "Email", label: "dbosek@sgh.waw.pl" })
    .build(),

  person("Marta Pachocka", martaPachocka)
    .subTitles("Assistant Professor", `${SGH} and Centre of Migration Research`)
    .socials({ type: "Email", label: "mpachoc@sgh.waw.pl" })
    .build(),
];
