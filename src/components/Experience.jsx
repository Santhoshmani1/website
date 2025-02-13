import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "../context/ThemeContext";
import { experienceDetails } from "../data/details.jsx";
import SpaceContainer from "./SpaceContainer";

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
