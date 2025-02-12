import { FaGithub } from "react-icons/fa";
import { Header, Projects, Footer, SpaceContainer } from "../components";
import CursorFollowingGraph from "../components/CursorFollowingGraph";
import { SiGmail } from "react-icons/si";
import Experience from "../components/Experience";
import { Analytics } from "@vercel/analytics/react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Analytics />
      <Header />
      <div
        className={`relative flex flex-col justify-center min-h-screen my-auto font-mono lg:items-start home-hero ${theme === "light" ? "bg-slate-50 text-black" : "bg-gray-900 text-white"
          } fadeIn`}
        id="canvas-bg"
      >
        <SpaceContainer />
        <CursorFollowingGraph />
        <div className="z-10 w-10/12 px-6 m-4 mx-auto text-lg leading-relaxed tracking-tight text-left sm:text-left md:text-2xl sm:w-2/3">
          <h2 className="py-8 text-4xl leading-relaxed tracking-tighter text-left sm:text-5xl lg:text-6xl contrast-200">
            Hi, I&apos;m Santhosh
          </h2>
          I love building web applications, tinkering with web security, Machine
          Learning &amp; contributing to Open Source Software.
          <h3 className="py-4 text-2xl font-normal tracking-tight text-left sm:text-3xl lg:text-4xl lg:pt-12">
            Connect With Me
          </h3>
          <div className="flex flex-col justify-start w-5/6 sm:flex-row sm:w-3/5">
            <a
              href="https://github.com/santhoshmani1"
              target="_blank"
              rel="noreferrer"
              aria-label={"github"}
              className="flex items-center px-12 py-3 mx-2 my-4 text-white transition duration-500 border-2 cursor-pointer justify-evenly lg:text-xl rounded-xl border-slate-400 hover:text-white bg-slate-950 hover:bg-black hover:border-white"
            >
              <span className="px-1">
                <FaGithub />
              </span>
              <span className="px-2">Github</span>
            </a>

            <a
              href="mailto:pitakasanthosh@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label={"mail"}
              className="flex items-center px-12 py-3 mx-2 my-4 text-white transition duration-500 border-2 cursor-pointer justify-evenly lg:text-xl lg:py-3 rounded-xl border-slate-400 bg-gray-950 hover:bg-black hover:text-white hover:border-white"
            >
              <span className="px-1">
                <SiGmail />
              </span>
              <span className="px-2">Mail</span>
            </a>
          </div>
        </div>
      </div>
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;