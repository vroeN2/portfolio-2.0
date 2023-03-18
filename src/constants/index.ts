import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docmaticPreview,
  dndPreview,
  threejs,
  nextjs,
  sass,
  less,
  cypress,
  fujitsu,
  docmatic,
  hd,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Designer",
    icon: creator,
  },
  {
    title: "Tester",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "less",
    icon: less,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "cypress",
    icon: cypress,
  },
];

const experiences = [
  {
    title: "Receptionist",
    company_name: "Hotel Daisy",
    icon: hd,
    iconBg: "#000",
    date: "2015 - 2021",
    points: [],
  },
  {
    title: "Front-end Developer",
    company_name: "docmatic",
    icon: docmatic,
    iconBg: "#fff",
    date: "2021 - 2022",
    points: [
      "Creating the visual layer of the application",
      "Integrating the front-end with the back-end",
      "Testing application performance",
      "Designing the structure and appearance of web pages",
      "Developing functionalities to improve User Experience",
      "Taking care of the balance between functionality and aesthetics of the website",
      "Collaborating with back-end and web designers",
    ],
  },
  {
    title: "SDA",
    company_name: "Fujitsu",
    icon: fujitsu,
    iconBg: "#fff",
    date: "2023 - Present",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "My son makes great websites. I think that's called a programmer. Yes, my son is a sensational programmer.",
    name: "Mom Beata",
    designation: "Mom",
    company: "origin/home",
    image:
      "https://www.emmys.com/sites/default/files/styles/show_detail/public/shows/mom-2016-600x600.jpg?itok=mIXceYjI",
  },
  {
    testimonial:
      "I really like the design direction for this project of yours. This portfolio page is enough that someone says, 'we definitely need to interview this guy'.",
    name: "Derek",
    designation: "Friend",
    company: "some company, yes",
    image: "https://zweberfarms.files.wordpress.com/2010/02/tounging-cow.jpg",
  },
  {
    testimonial:
      "And here is the place for your testimonials! I'm very eager to show what I can do.",
    name: "Future Boss",
    designation: "CEO",
    company: "my new company",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "docmatic",
    description:
      "My first commercial job as front-end developer. I was responsible for creating Tags feature for the documents section. I wal also developing hero page for the page containing all company's demos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "cypress",
        color: "pink-text-gradient",
      },
      {
        name: "cucumber",
        color: "pink-text-gradient",
      },
    ],
    image: docmaticPreview,
    source_code_link: "",
  },
  {
    name: "DnD Spell List",
    description:
      "Web application made as side project, to make one of my hobbies easier. It is spell base for popular TTRPG game Dungeons and Dragons.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: dndPreview,
    source_code_link: "https://github.com/vroeN2/dnd5eSpells",
  },
];

export { services, technologies, experiences, testimonials, projects };
