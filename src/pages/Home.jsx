import { FaGithub } from "react-icons/fa";
import { Header, Projects, Footer, SpaceContainer } from "../components";
import CursorFollowingGraph from "../components/CursorFollowingGraph";
import { SiGmail } from "react-icons/si";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="relative flex flex-col justify-center min-h-screen my-auto font-mono lg:items-start home-hero bg-gray-900 text-white fadeIn"
        id="canvas-bg"
      >
        <SpaceContainer />
        <CursorFollowingGraph />
        <div className="m-4 mx-auto leading-relaxed tracking-tight text-left sm:text-left md:text-2xl sm:w-2/3 w-10/12 px-6 z-10">
          <h2 className="text-4xl text-left  sm:text-5xl lg:text-6xl contrast-200 py-8 tracking-tighter leading-relaxed">
            Hi, I&apos;m Santhosh
          </h2>
          I love building web applications, tinkering with web security, Machine
          Learning &amp; contributing to Open Source Software.
          <h3 className="text-2xl py-4 text-left sm:text-3xl lg:text-4xl lg:pt-12 tracking-tight font-normal">
            Connect With Me
          </h3>
          <div className="flex flex-row space-x-4">
            <a
              href="https://github.com/santhoshmani1"
              target="_blank"
              rel="noreferrer"
              aria-label={"github"}
              className="flex items-center transition duration-500 justify-evenly lg:text-xl py-2 px-6 rounded-xl cursor-pointer border-2 text-slate-100 border-slate-400 hover:bg-black hover:text-white hover:border-white"
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
              className="flex items-center transition duration-500 justify-evenly lg:text-xl py-2 lg:py-3 px-8 rounded-xl cursor-pointer border-2  text-slate-100 border-slate-400 hover:bg-black hover:text-white hover:border-white"
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
