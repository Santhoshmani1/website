import { FaLinkedinIn, FaGithub, } from "react-icons/fa";
import { SiGmail, SiX } from "react-icons/si";

const socials = [
  {
    name: "Email",
    url: "mailto:pitakasanthosh@gmail.com",
    icon: <SiGmail />
  },
  {
    name: "GitHub",
    url: "https://github.com/santhoshmani1",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/santhoshmanip",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/@Santhoshmani_P",
    icon: <SiX />,
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col items-center py-3 font-mono hover:text-white text-slate-100 bg-slate-950 footer-wrapper justify-evenly md:flex-row">
          <div className="text-lg copyright-info lg:text-xl">
            &copy; Santhosh Mani  {new Date().getFullYear()}
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            {socials.map((social, index) => {
              return (
                <div key={index} className="flex items-center p-2 m-2 mx-2 text-sm text-gray-400 duration-300 border-2 border-blue-900 justify-evenly hover:border-blue-500 rounded-xl hover:text-slate-50 hover:cursor-pointer hover:bg-slate-950 focus:border-blue-800 hover:shadow-sm hover:shadow-green-400">
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex items-center text-sm transition duration-200 justify-evenly lg:text-xl"
                  >
                    <span className="px-2">{social.name}</span>
                    <span className="px-1">{social.icon}</span>
                    <span className="text-sm font-semibold text-blue-800 material-icons animate-pulse">arrow_outward</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
