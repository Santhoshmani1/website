import { FaGithub } from "react-icons/fa";
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiNodedotjs, SiNpm, SiReact, SiTailwindcss } from "react-icons/si";
import playStoreIcon from '../assets/playstore.avif'
import InferhubImg from "../assets/inferhub.png";
import ClearspaceImg from "../assets/clearspace.png";
import chromeDino from '../assets/chromedino.gif'
import SpaceContainer from "./SpaceContainer";
import { GiGemini } from "react-icons/gi";

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
      { name: "Gemini", color: "red", icon: <GiGemini /> },
      { name: "Tailwind CSS", color: "#069aed", icon: <SiTailwindcss /> },
    ],
    githubSource: "https://www.github.com/santhoshmani1/Play-Monitor",
    liveLink: "https://playmonitor.vercel.app",
  },
  {
    id: 2,
    title: "Inferhub",
    coverImage: InferhubImg,
    description: "Inferhub lets users to generate high quality AI images from text prompts with the stable diffusion SDXL base model inference API available on Huggingface",
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
    description: "Clear Space is a browser extension which helps users to remove distractions from popular social media websites. It removes distractive features like watch recommendations, comments and shorts videos sections from youtube",
    category: "Web",
    technologies: [
      { name: "Javascript", color: "yellow", icon: <SiJavascript /> },
      { name: "HTML", color: "orange", icon: <SiHtml5 /> },
      { name: "CSS", color: "blue", icon: <SiCss3 /> },
    ],
    githubSource: "https://www.github.com/santhoshmani1/Clear-space",
    liveLink: "",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="font-sans dark:bg-gray-950 dark:text-slate-200">
      <SpaceContainer />
      <div className="flex flex-col items-center justify-center md:flex-row">
        <h2
          className="px-10 m-2 text-4xl font-bold leading-relaxed text-center"
        >
          Projects
        </h2>
        {/* <div className="pt-10"><img src={chromeDino} alt="dino" className="py-2 mx-auto h-60 rounded-xl lg:h-60" /></div> */}
      </div>

      <div className="flex justify-center p-2 m-auto lg:gap-5 projects-list sm:flex-row flex-col w-5/6 lg:w-3/4 items-stretch">
        {projectsList.map((project) => {
          const {
            id,
            title,
            description,
            githubSource,
            technologies,
            liveLink,
          } = project;
          return (
            <div key={id} className="px-4 py-4 mx-auto my-4 text-gray-400 duration-200 md:w-4/5 sm:w-full rounded-2xl bg-slate-950 hover:bg-slate-950 border  border-gray-600 flex flex-col justify-around">
              <h3 className="py-2 text-2xl font-bold text-center text-slate-300 flex self-center gap-2">
                {title}</h3>
              <div className="flex flex-col">
                <div className="flex-col text-sm ">
                  <div className="w-full">
                    <p className="p-2 leading-relaxed tracking-normal">{description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 ">
                    {technologies.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-center p-2 my-0.5 text-xs bg-gray-900 rounded-lg"
                        >
                          <span style={{ color: tech.color }}>{tech.icon}</span>
                          <span className="pl-2">{tech.name}</span>
                        </div>
                      );
                    }
                    )}
                  </div>
                  <div className="flex flex-col items-center links-container justify-evenly  sm:flex-row">
                    {liveLink && (
                      <a className="p-2 m-2 hover:text-white duration-300 underline rounded-lg" href={liveLink} target="_blank" rel="noreferrer">
                        View Live 🌐
                      </a>
                    )}
                    <a href={githubSource} target="_blank" rel="noreferrer">
                      <button className="p-2 hover:text-white duration-300 underline rounded-lg">
                        View source <FaGithub className="inline-block" />{" "}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

