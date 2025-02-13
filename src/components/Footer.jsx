
import { useTheme } from "../context/ThemeContext";
import { socials } from "../data/details.jsx";


const Footer = () => {
  const { theme } = useTheme();

  return (
    <>
      <footer>
        <div className={`flex flex-col items-center px-4 py-6 border-t footer-wrapper justify-evenly md:flex-row ${theme === "light" ? "text-black bg-sky-100 border-t-gray-600" : "text-slate-200 bg-slate-950 border-t-slate-500"}`}>
          <div className="copyright-info lg:text-xl">
            &copy; Santhosh Mani {new Date().getFullYear()}
          </div>
          <div className="flex py-4">
            {socials.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className={`flex items-center px-4 transition duration-300 justify-evenly lg:text-xl ${theme === "light" ? "hover:text-blue-500" : "hover:text-sky-500"}`}
                >
                  <span className="px-1">{social.icon}</span>
                  <span className="px-2">{social.name}</span>
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