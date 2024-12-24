import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import icon from "../assets/S.png";

const navigationListItems = [
  { label: "Home", path: "/#" },
  { label: "Experience", path: "/#experience" },  
  { label: "Projects", path: "/#projects" },
  { label: "Blog", path: "/blog/#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu");

  return (
    <header className="p-1 z-20 w-full shadow-md bg-slate-800 text-white border-b border-b-slate-600 rounded-sm fixed">
      <div className="container px-4 py-2 mx-auto lg:px-6 md:flex md:items-center md:justify-evenly">
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
          <button
            className="material-icons text-white sm:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              setMenuIcon(isOpen ? "menu" : "close");
            }}
          >
            {menuIcon}
          </button>
        </div>

        <nav
          className={`md:flex transition-all duration-500  ease-in-out ${isOpen ? "nav-open" : "nav-closed"} z-10 text-white`}
        >
          <ul className="flex flex-col items-center justify-center md:flex-row md:space-x-10 md:space-y-0">
            {navigationListItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-lg leading-loose text-left text-gray-100 hover:underline transition duration-200 hover:text-white"
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
