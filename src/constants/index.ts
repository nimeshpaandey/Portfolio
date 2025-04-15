import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Gamer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Anarkali",
    companyName: "Billa Gang",
    icon: starbucks,
    iconBg: "#383E56",
    date: " ---- ",
    points: [
      " -- -- -- -- -- -- "
    ],
  },
  {
    title: "Chaman",
    companyName: "Space 69",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " ---- ",
    points: [
      " -- -- -- -- -- -- "
    ],
  },
  {
    title: "Dogesh",
    companyName: "Dogesh Corp.",
    icon: shopify,
    iconBg: "#383E56",
    date: " ---- ",
    points: [
      " -- -- -- -- -- -- "
    ],
  },
  {
    title: "Nimbu Don",
    companyName: "Macrohard",
    icon: meta,
    iconBg: "#E6DEDD",
    date: " ---- ",
    points: [
      " -- -- -- -- -- -- "
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Bhai bahut gaand faad website hai.",
    name: "Sachin Nishad",
    designation: "Aspiring Lawyer",
    company: "Deewani",
    image: "../src/assets/users/sachin.png",
  },
  {
    testimonial:
      "Bhai mujhe dikh hi nahi rha, maa kasam.",
    name: "Vishnu Singh",
    designation: "Aspiring Vidhayak",
    company: "India",
    image: "../src/assets/users/vishnu.png",
  },
  {
    testimonial:
      "Mujhe nind aa rhi hai pehle so leti hoon.",
    name: "Pallavi Gupta",
    designation: "Chhoti Chudail",
    company: "IIT Dhanbad",
    image: "../src/assets/users/pallavi.png",
  },
];

const projects: TProject[] = [
  {
    name: "Study Buddy",
    description:
      "An Al-powered chatbot that recommends study materials and helps with doubt resolution. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini-Api",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: " ",
  },
  
    
];

export { services, technologies, experiences, testimonials, projects };
