
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGmail,
} from "react-icons/si";

import { playStoreIcon, InferhubImg, ClearspaceImg, EncodexImg, Stanford, SummerofBitcoinIcon, IIMVIcon } from "../assets/index.js";

const projectsList = [
  {
    id: 1,
    title: "Play Monitor",
    coverImage: playStoreIcon,
    description: `Google Play monior helps android development teams to analyse user reviews and gain insights of 3 categories : New feature requests, Bug reports & Design improvements using gemini 1.5 pro`,
    category: "Web",
    technologies: [
      { name: "React", color: "#069", icon: <SiReact /> },
      { name: "Node.js", color: "green", icon: <SiNodedotjs /> },
      { name: "Express.js", color: "gray", icon: <SiExpress /> },
      { name: "Tailwind CSS", color: "#069aed", icon: <SiTailwindcss /> },
    ],
    githubSource: "https://www.github.com/santhoshmani1/Play-Monitor",
    liveLink: "https://playmonitor.vercel.app",
  },
  {
    id: 2,
    title: "Inferhub",
    coverImage: InferhubImg,
    description:
      "Inferhub lets users to generate high quality AI images from text prompts with the stable diffusion SDXL base model inference API available on Huggingface",
    category: "Web",
    githubSource: "https://www.github.com/santhoshmani1/Inferhub",
    liveLink: "https://inferhub.vercel.app/",
    technologies: [
      { name: "HF Inference API", color: "white", icon: "🤗" },
      { name: "React", color: "#069", icon: <SiReact /> },
      { name: "Tailwind", color: "#069aed", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 3,
    title: "Clear space",
    coverImage: ClearspaceImg,
    description:
      "Clear Space is a browser extension which helps users to remove distractions from popular social media websites. It removes distractive features like watch recommendations, comments and shorts videos sections from youtube",
    category: "Web",
    technologies: [
      { name: "Javascript", color: "yellow", icon: <SiJavascript /> },
      { name: "HTML", color: "orange", icon: <SiHtml5 /> },
      { name: "CSS", color: "blue", icon: <SiCss3 /> },
    ],
    githubSource: "https://www.github.com/santhoshmani1/Clear-space",
    liveLink: "",
  },
  {
    id: 4,
    title: "EncodeX",
    coverImage: EncodexImg,
    description:
      "Encodex is a simple command-line interface (CLI) tool for encoding and decoding operations. It supports various encoding formats such as Base64, ASCII, URL, Hex, and HTML and also decoding JWT Tokens",
    category: "CLI",
    technologies: [
      { name: "Python", color: "#069", icon: <SiPython /> },
    ],
    githubSource: "https://github.com/Santhoshmani1/encodex",
    liveLink: "",
  },
  {
    id: 5,
    title: "Canvas",
    coverImage: "",
    description:
      "Canvas is a simple, easy-to-use Java application that allows users to draw on a digital canvas. It provides various tools such as a brush, eraser, color picker, and the ability to save your artwork.",
    category: "GUI",
    technologies: [
      { name: "Java", color: "#069", icon: <FaJava /> },
    ],
    githubSource: "https://github.com/Santhoshmani1/Canvas",
    liveLink: "",
  }
];

const experienceDetails = [
  {
    id: 1,
    title: "Indian Institute of Management, Vizag",
    role: "Web developer Intern",
    date: "August 2024 - October 2024",
    icon: IIMVIcon,
    description:
      "I worked on the development of the Inter-Disciplinary Decision sciences & Analytics Lab website, and built Automation tooling for data extraction, processing from Images and PDFs using Optical Character Recognition (OCR) and Natural Language Processing (NLP) techniques using Python.",
  },
  {
    id: 2,
    title: "Stanford Codein Place",
    role: "Section Leader",
    date: "April 2024 - May 2024",
    icon: Stanford,
    description:
      "I Volunteered as section leader during the summer over the course of 6 weeks & taught 15 people from 8 different countries to assist  about karel(an interactive game to learn to code), programming in python and computer graphics.",
  },
  {
    id: 3,
    title: "Summer Of Bitcoin",
    role: "Apprentice",
    date: "February 2024 - March 2024",
    icon: SummerofBitcoinIcon,
    description:
      "Selected as an apprentice in the summer of bitcoin program, where I learned about the fundamentals of bitcoin, blockchain, and cryptography.",
  },
];

const socials = [
  {
    name: "Mail",
    url: "mailto:pitakasanthosh@gmail.com",
    icon: <SiGmail />,
  },
  {
    name: "GitHub",
    url: "https://github.com/santhoshmani1",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/santhoshmanip",
    icon: <FaLinkedinIn />,
  },
];

export { experienceDetails, projectsList, socials };
