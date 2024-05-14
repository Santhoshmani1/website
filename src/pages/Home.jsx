import Header from "../components/Header";
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import SpaceContainer from "../components/SpaceContainer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center min-h-screen my-auto font-mono lg:items-start home-hero dark:bg-gray-900 dark:text-white fadeIn" id="home-bg">
        <SpaceContainer />
        <div className="container px-2 py-5 mx-auto lg:w-3/5">
          <h2 className="text-3xl font-bold text-center text-gray-200 sm:text-5xl lg:text-6xl">
            Welcome to my Website{" "}
          </h2>

          <div className="w-5/6 m-4 mx-auto leading-relaxed text-center md:text-center sm:text-left md:text-2xl lg:w-3/4 text-slate-300">
            My name is Santhosh mani. <div>I&apos;m a Full stack developer &amp; Freelance software developer from India.</div>
          </div>

          <div className="w-5/6 m-4 mx-auto leading-relaxed text-center md:text-center sm:text-left md:text-2xl text-slate-300 lg:w-3/4">
            I love building web applications, tinkering with web security &amp; contributing to OSS.
          </div>

          <div className="flex flex-col justify-center py-4 mx-auto lg:w-3/4 sm:flex-row">
            <a
              href="https://www.upwork.com/freelancers/~0115077b7087cbda61"
              className="w-4/5 px-8 py-4 m-4 mx-auto text-lg font-semibold text-center transition-all duration-500 ease-in-out border-2 border-gray-600 rounded-md shadow-md bg-zinc-950 hover:bg-black hover:text-white text-slate-100 hover:shadow-blue-600 shadow-gray-600 hover:cursor-pointer lg:mx-2 "
            >
              Hire on Upwork <SiUpwork className="inline-block mx-1 text-green-600" />
            </a>
            <a
              href="https://www.github.com/santhoshmani1/"
              className="w-4/5 px-8 py-4 m-4 mx-auto text-lg font-semibold text-center transition-all duration-500 ease-in-out border-2 border-gray-600 rounded-md shadow-md bg-zinc-950 hover:bg-black hover:text-white text-slate-100 hover:shadow-blue-600 shadow-gray-600 hover:cursor-pointer lg:mx-2"
            >
              Github profile <FaGithub className="inline-block mx-1" />
            </a>
          </div>
        </div>
      </div>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
