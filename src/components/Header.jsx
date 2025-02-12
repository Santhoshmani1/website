import { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import icon from "../assets/S.png";
import { useTheme } from "../context/ThemeContext";

const navigationListItems = [
  { label: "Home", path: "/#" },
  { label: "Experience", path: "/#experience" },
  { label: "Projects", path: "/#projects" },
  { label: "Blog", path: "/blog/#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu");
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      if (theme === "light") {
        headerRef.current.classList.remove("bg-slate-900", "border-b-slate-600", "text-white");
        headerRef.current.classList.add("bg-sky-50", "border-b-gray-200", "text-black");
      } else {
        headerRef.current.classList.remove("bg-sky-50", "border-b-gray-200", "text-black");
        headerRef.current.classList.add("bg-slate-900", "border-b-slate-600", "text-white");
      }
    }
  }, [theme]);

  return (
    <header ref={headerRef} className="fixed z-20 w-full p-1 text-xs border-b rounded-sm shadow-md md:px-32">
      <div className="container px-4 py-2 mx-auto lg:px-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="text-xl lg:text-3xl">
            <Link
              to="/"
              className="text-center transition duration-200 hover:text-blue-400"
            >
              <img
                src={icon}
                alt="S icon"
                className="relative inline-block w-10 h-10 mx-2 rounded-lg"
              />
              Santhosh Mani
            </Link>
          </div>
          <div>
            <button
              className="material-icons lg:ml-60"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "dark_mode" : "light_mode"}
            </button>
          </div>
          <button
            className="material-icons sm:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              setMenuIcon(isOpen ? "menu" : "close");
            }}
          >
            {menuIcon}
          </button>
        </div>

        <nav
          className={`md:flex transition-all duration-500 ease-in-out ${isOpen ? "nav-open" : "nav-closed"
            } z-10`}
        >
          <ul className="flex flex-col items-center justify-center md:flex-row md:space-x-10 md:space-y-0">
            {navigationListItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-lg leading-loose text-left transition duration-200 hover:underline"
                  onClick={() => {
                    setIsOpen(false);
                    setMenuIcon("menu");
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
