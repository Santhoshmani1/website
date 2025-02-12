import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Stanford from "../assets/experience/stanford.png";
import SummerofBitcoinIcon from "../assets/experience/summerofbitcoin.png";
import IIMVIcon from "../assets/experience/iimv.png";
import "react-vertical-timeline-component/style.min.css";
import SpaceContainer from "./SpaceContainer";
import { useTheme } from "../context/ThemeContext";

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

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className={`${theme === "light" ? "bg-slate-100 text-black" : "bg-black text-blue-200"}`}>
      <SpaceContainer />
      <h2 className="py-8 text-2xl text-center lg:text-4xl">Experience</h2>
      <VerticalTimeline
        animate={true}
        layout="1-column-left"
        lineColor="#069aed"
        className="w-5/6 lg:w-3/5"
      >
        {experienceDetails.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            date={
              <div className="flex items-center justify-center text-center">
                <span className="px-2 material-icons">schedule</span>
                {experience.date}
              </div>
            }
            iconStyle={
              theme === "light"
                ? { background: "rgb(255,255,255)", color: "#069aed" }
                : { background: "rgb(3,7,18)", color: "#069aed" }
            }
            icon={
              <img
                src={experience?.icon}
                alt={experience?.title}
                className="rounded-full"
              />
            }
            contentStyle={{ background: theme === "light" ? "rgb(255,255,255)" : "rgb(3,7,18)" }}
          >
            <div className={`${theme === "light" ? "text-black" : "text-blue-200"}`}>
              <h3 className="text-xl text-blue-400">{experience.title}</h3>
              <h4 className="text-lg text-yellow-500">{experience.role}</h4>
              <ul className="px-2 py-4 text-sm leading-relaxed lg:px-8 sm:text-lg">
                <li className="list-disc">{experience.description}</li>
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
