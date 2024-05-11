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
        <div className="flex flex-col items-center py-3 hover:text-white text-slate-100  bg-slate-950  footer-wrapper justify-evenly md:flex-row sm:font-mono lg:font-sans">
          <div className="copyright-info lg:text-2xl text-lg">
            &copy; Santhosh Mani  {new Date().getFullYear()}
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            {socials.map((social, index) => {
              return (
                <div key={index} className="flex items-center justify-evenly px-8 py-2 m-2 mx-2 border-2 border-blue-900 hover:border-blue-500 rounded-xl text-gray-400 hover:text-slate-50 hover:cursor-pointer ">
                  <span>{social.name}</span>
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="mx-4 text-3xl transition duration-200"
                  >
                    {social.icon}
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
