import { FaLinkedinIn, FaGithub, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    name: "Mail",
    url: "mailto:pitakasanthosh@gmail.com",
    icon : <SiGmail />
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
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className='flex flex-col items-center py-6 text-slate-200 bg-slate-950 border-t border-t-slate-500 footer-wrapper justify-evenly md:flex-row px-4'>
          <div className='copyright-info lg:text-xl'>
            &copy; Santhosh Mani {new Date().getFullYear()}
          </div>
          <div className='flex py-4'>
            {socials.map((social, index) => {
              return (

                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={social.name}
                  className='flex items-center px-4 transition duration-300 justify-evenly lg:text-xl hover:text-sky-500'
                  >
                    <span className='px-1'>{social.icon}</span>
                    <span className='px-2'>{social.name}</span>
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
