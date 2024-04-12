import Header from "../components/Header";
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Header />

      <div className="home-hero dark:bg-gray-900 dark:text-white min-h-screen my-auto flex justify-center items-center fadeIn" style={{ fontFamily: "Montserrat" }}>
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-center text-gray-200">
            Welcome to my portfolio{" "}
            <span className="animate-pulse">👋</span>
          </h2>
          <div className="text-lg py-4 w-4/5 lg:w-1/2 sm:text-center text-center m-auto leading-relaxed text-gray-700 dark:text-slate-100">
            <div className="mx-auto ml-4 md:text-center sm:text-left text-center">
              My name is Santhosh mani. I am a second year engineering
              undergraduate. I love building products on the web with Javascript, Node.js & React.js.
            </div>
            <div className="my-2 leading-relaxed md:text-center text-center">
              My interests lies in the fields of{" "}
              <div className="text-xl text-blue-500 font-bold">
                Machine learning &amp; Full stack development.
              </div>{" "}
            </div>
          </div>

          <div className="flex justify-center flex-col sm:flex-row w-3/4 m-auto ">
            <a
              href="https://www.github.com/santhoshmani1/"
              className="px-8 py-4 bg-slate-800 hover:bg-black hover:text-white m-2 text-slate-200 text-lg font-semibold rounded-md transition-all duration-500 ease-in-out"
            >
              Github profile <FaGithub className="inline-block mx-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/santhoshmanip"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 hover:text-white m-2 text-slate-200 text-lg font-semibold rounded-md transition-all duration-500 ease-in-out"
            >
              Linkedin profile <FaLinkedin className="inline-block mx-1" />
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
