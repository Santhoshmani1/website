import { useState, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiNpm, SiOpencv, SiPython, SiReact, SiTailwindcss, SiTensorflow } from "react-icons/si";
import InferhubImg from "../assets/inferhub.png";
import ClearspaceImg from "../assets/clearspace.png";
import npmCliTour from "../assets/npm-cli-tour.png";
import jwtGenKey from '../assets/JWT-gen-key.png'
import SLRImg from "../assets/SLR.png";
import SpaceContainer from "../components/SpaceContainer"

const projectCategories = ["All", "Web", "Machine learning",]
const projectsList = [
  {
    id: 1,
    title: "Sign language recognition with LSTM",
    coverImage: SLRImg,
    description: "Real Sign language recognition using LSTM based NN with tensorflow sequential model.",
    category: "Machine learning",
    techStack: [
      {
        name: "Python",

        icon: <SiPython />,
        color: "#3776AB" // Python color
      },
      {
        name: "Tensorflow",
        icon: <SiTensorflow />,
        color: "#FF6F00" // TensorFlow color
      },
      {
        name: "Open cv",
        icon: <SiOpencv />,
        color: "#5C3EE8" // OpenCV color
      }
    ],
    githubSource: "https://github.com/santhoshmani1/sign-language-recognition",
    liveLink: "",
  },
  {
    id: 2,
    title: "Inferhub",
    coverImage: InferhubImg,
    description: "Utilizing the Stable Diffusion XL model, this project showcases the power of text-to-image generation. The model, powered by Hugging Face's inference API.",
    techStack: [
      {
        name: "Javascript",
        icon: <SiJavascript />,
        color: "#F7DF1E" // JavaScript color
      },
      {
        name: "React",
        icon: <SiReact />,
        color: "#61DAFB" // React color
      }, {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "#38B2AC" // Tailwind CSS color
      }
    ],
    category: "Web",
    githubSource: "https://www.github.com/santhoshmani1/Inferhub",
    liveLink: "https://inferhub.vercel.app/",
  },
  {
    id: 3,
    title: "Clear space",
    coverImage: ClearspaceImg,
    description: "Clear Space is a chrome extension which helps users to remove distractions from Youtube shorts, instagram reels and helps to stay focussed.",
    techStack: [
      {
        name: "Javascript",
        icon: <SiJavascript />,
        color: "#F7DF1E" // JavaScript color
      },
      {
        name: "HTML",
        icon: <SiHtml5 />,
        color: "#E34F26" // HTML5 color
      },
      { name: "CSS", icon: <SiCss3 />, color: "#1572B6" } // CSS3 color
    ],
    category: "Web",

    githubSource: "https://www.github.com/santhoshmani1/Clear-space",
    liveLink: "",
  },
];


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [inViewStates, setInViewStates] = useState([]);
  // const projectRefs = projectsList.map(() => useRef(null));
  //   setInViewStates(projectRefs.map(ref => {
  //     const { inView } = useInView({
  //       threshold: 0.5,
  //       delay: 300,
  //       trackVisibility: true,
  //       ref: ref.current
  //     });

  //     return inView;
  //   }));
  return (
    <section id="projects" className="dark:bg-gray-950 dark:text-slate-200">
      <SpaceContainer />
      <h2
        className="text-4xl text-center m-2 leading-relaxed"
        style={{ fontFamily: "Montserrat" }}
      >
        Projects
      </h2>

      <div className="categories-chips-container flex justify-center items-center m-2 select-none mx-auto flex-wrap">
        {projectCategories.map((category, index) => (
          <span
            key={index}
            className={`px-4 py-2 m-1 border-2 border-black dark:border-blue-800 rounded-3xl text-sm md:text-lg lg:text-xl cursor-pointer transition-all duration-400 ease-linear font-bold text-center 
        ${selectedCategory === category ? 'bg-black text-slate-200 dark:border-blue-200' : 'hover:bg-black hover:text-slate-200'}`}
            style={{ fontFamily: "Montserrat" }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="projects-list lg:w-1/2 m-auto p-2">
        {projectsList.filter((project) => (selectedCategory === "All") || (project.category === selectedCategory)).map((project) => {
          const {
            id,
            title,
            description,
            coverImage,
            techStack,
            githubSource,
            liveLink,
            npmWebsite
          } = project;
          return (
            <div key={id} className="py-4 px-4 hover:shadow-md hover:shadow-blue-400 my-8 w-4/5  mx-auto sm:w-full rounded-2xl bg-slate-50 dark:bg-zinc-950" style={{ fontFamily: "Montserrat" }}>
              <h3 className="text-2xl font-bold p-2 text-center text-blue-600">{title}</h3>
              <div className="flex justify-between items-center flex-col sm:flex-row">
                <img src={coverImage} alt={title + "image"} className="w-40 h-40 p-2 rounded-xl object-cover" />
                <p className="sm:text-lg px-4 py-2 leading-relaxed text-sm">{description}</p>
              </div>
              <div className="p-2 flex flex-row justify-center items-center flex-wrap">
                {techStack.map((tech, index) => (
                  <div className="border-2 skill-info m-2 px-4 py-2 rounded-xl text-center flex justify-center items-center text-sm bg-gray-150" key={index}>
                    <span>{tech.name}</span>
                    <span className="inline-block px-4 text-xl" style={{ color: tech.color }} key={index}>{tech.icon}</span>
                  </div>
                ))}
              </div>
              <div className="links-container flex justify-evenly items-center sm:flex-row flex-col">
                {
                  npmWebsite && (
                    <a className="py-4 px-6 rounded-md m-2 bg-red-500 hover:bg-red-700 font-bold text-white text-sm lg:text-lg" href={npmWebsite} target="_blank" rel="noreferrer">
                      install via npmjs <SiNpm className="inline-block mx-2" />
                    </a>
                  )
                }
                {liveLink && (
                  <a className="py-4 px-6 rounded-md m-2 bg-blue-500 hover:bg-blue-700 font-bold text-white text-sm sm:text-lg" href={liveLink} target="_blank" rel="noreferrer">
                    View Live Demo 🌐
                  </a>
                )}
                <a href={githubSource} target="_blank" rel="noreferrer">
                  <button className="py-4 px-6 rounded-md m-2 bg-gray-900 hover:bg-gray-950 font-bold text-white text-sm sm:text-lg border-2 hover:border-blue-600">
                    View source on <FaGithub className="inline-block mx-1" />{" "}
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

