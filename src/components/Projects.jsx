import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { projectsList } from "../data/details.jsx";
import SpaceContainer from "./SpaceContainer";


const Projects = () => {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`font-sans py-4 ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-950 text-slate-200"}`}
    >
      <SpaceContainer />
      <div className="flex flex-col items-center justify-center md:flex-row">
        <h2 className="px-10 m-2 text-4xl font-bold leading-relaxed text-center">
          Projects
        </h2>
      </div>
      <h3 className="p-4 font-normal text-center ">I like to work on side projects on my free time :)</h3>
      <div className="flex flex-col items-stretch justify-center w-11/12 p-2 m-auto lg:gap-5 projects-list lg:w-3/4">
        {projectsList.map((project) => {
          const {
            id,
            coverImage,
            title,
            description,
            githubSource,
            technologies,
            liveLink,
          } = project;
          return (
            <div
              key={id}
              className={`px-2 py-4 mx-auto my-4 duration-200 md:w-4/5 sm:w-full rounded-2xl ${theme === "light" ? "bg-white text-black border-gray-200" : "bg-slate-950 text-gray-200 border-gray-600"} flex flex-col justify-around`}
            >
              <h3 className="flex self-center gap-2 py-2 text-2xl text-center">
                {title}
              </h3>
              <div className="flex flex-col m-auto text-center lg:w-3/4">
                <div className="flex-col text-sm ">
                  <div className="w-full">
                    {coverImage && <img src={coverImage} className="w-3/4 h-40 lg:max-w-64 lg:h-48" />}
                    <p className="p-2 pl-8 leading-relaxed tracking-normal text-left">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-1 px-2 py-4">
                    {technologies.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex items-center justify-center p-3 my-0.5 text-xs rounded-lg ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-900 text-white"}`}
                        >
                          <span style={{ color: tech.color }}>{tech.icon}</span>
                          <span className="pl-2">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-row items-center justify-center links-container">
                    {liveLink && (
                      <a
                        className={`p-2 m-2 underline duration-300 rounded-lg ${theme === "light" ? "hover:text-black hover:bg-gray-200" : "hover:text-white hover:bg-gray-800"} transition-all`}
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Live 🌐
                      </a>
                    )}
                    <a href={githubSource} target="_blank" rel="noreferrer">
                      <button className={`p-2 underline duration-300 rounded-lg ${theme === "light" ? "hover:text-black hover:bg-gray-200" : "hover:text-white hover:bg-gray-800"} transition-all`}>
                        View source <FaGithub className="inline-block" />{" "}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Projects;