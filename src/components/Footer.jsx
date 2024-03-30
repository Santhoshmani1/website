import { FaLinkedinIn, FaGithub, } from "react-icons/fa";
import { SiX } from "react-icons/si";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/santhoshmanip",
    icon: <FaLinkedinIn />,
  },
  {
    name: "GitHub",
    url: "https://github.com/santhoshmani1",
    icon: <FaGithub />,
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
        <div className="footer-wrapper bg-black text-white p-5 flex justify-evenly items-center md:flex-row  flex-row" style={{ fontFamily: "Montserrat" }}>
          <div className="copyright-info">
              &copy; Santhosh Mani  {new Date().getFullYear()}
          </div>
          <div className="flex justify-center items-center py-2">
            {socials.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="text-3xl mx-4 transition duration-200 hover:text-blue-500"
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
