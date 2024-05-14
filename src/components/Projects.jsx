import { FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import playStoreIcon from '../assets/playstore.avif'
import InferhubImg from "../assets/inferhub.png";
import ClearspaceImg from "../assets/clearspace.png";
import chromeDino from '../assets/chromedino.gif'
import SpaceContainer from "./SpaceContainer";

const projectsList = [
  {
    id: 1,
    title: "Play Monitor",
    coverImage: playStoreIcon,
    description: `Google Play monior helps android development teams to analyse user reviews and gain insights of 3 categories : New feature requests, Bug reports & Design improvements using gemini 1.5 pro`,
    category: "Web",
    githubSource: "https://www.github.com/santhoshmani1/Inferhub",
    liveLink: "https://inferhub.vercel.app/",
  },
  {
    id: 2,
    title: "Inferhub",
    coverImage: InferhubImg,
    description: "Inferhub lets users to generate high quality AI images from text prompts with the stable diffusion SDXL base model inference API available on Huggingface.",
    category: "Web",
    githubSource: "https://www.github.com/santhoshmani1/Inferhub",
    liveLink: "https://inferhub.vercel.app/",
  },
  {
    id: 3,
    title: "Clear space",
    coverImage: ClearspaceImg,
    description: "Clear Space is a browser extension which helps users to remove distractions from popular social media websites. It removes distractive features like watch recommendations, comments section and shorts videos from youtube",
    category: "Web",

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
          style={{ fontFamily: "Montserrat" }}
        >
          Projects
        </h2>
        <div className="pt-10"><img src={chromeDino} alt="dino" className="py-2 mx-auto h-60 rounded-xl lg:h-60" /></div>
      </div>

      <div className="flex flex-col items-center justify-center p-2 m-auto lg:gap-10 lg:grid-rows-2 lg:grid-cols-2 lg:grid projects-list">
        {projectsList.map((project) => {
          const {
            id,
            title,
            description,
            coverImage,
            githubSource,
            liveLink,
            npmWebsite
          } = project;
          return (
            <div key={id} className="w-4/5 px-4 py-4 mx-auto my-8 text-gray-400 duration-200 border border-gray-700 cursor-default hover:shadow-md hover:shadow-blue-400 sm:w-full rounded-2xl dark:bg-slate-950 hover:bg-slate-950 hover:text-slate-200" style={{ fontFamily: "Montserrat" }}>
              <h3 className="p-2 text-2xl font-bold text-center">{title}</h3>
              <div className="flex flex-col items-center justify-between sm:flex-row">
                <img src={coverImage} alt={title + "image"} className="object-cover h-24 p-4 rounded-xl w-30 md:h-40 md:w-40" />
                <p className="p-2 leading-relaxed tracking-wide sm:text-lg">{description}</p>
              </div>
              <div className="flex flex-col items-center links-container justify-evenly sm:flex-row">
                {
                  npmWebsite && (
                    <a className="px-8 py-3 m-2 text-sm font-bold text-white bg-red-500 hover:bg-red-700 lg:text-lg rounded-xl" href={npmWebsite} target="_blank" rel="noreferrer">
                      install via npmjs <SiNpm className="inline-block mx-2" />
                    </a>
                  )
                }
                {liveLink && (
                  <a className="px-8 py-3 m-2 text-sm font-bold text-white duration-300 bg-gray-900 border border-gray-400 rounded-lg sm:text-lg hover:bg-black hover:shadow-md hover:shadow-blue-600" href={liveLink} target="_blank" rel="noreferrer">
                    View Live 🌐
                  </a>
                )}
                <a href={githubSource} target="_blank" rel="noreferrer">
                  <button className="px-8 py-3 m-2 text-sm font-bold text-white duration-300 bg-gray-900 border border-gray-400 rounded-lg hover:bg-gray-950 sm:text-lg hover:border-blue-600 hover:shadow-md hover:shadow-blue-600">
                    View source <FaGithub className="inline-block" />{" "}
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

