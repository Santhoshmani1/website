import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import icon from "../assets/S.png"

const navigationListItems = [
  { label: 'Home', path: '/#' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Blog', path: '/blog/#' },
  { label: 'Contact', path: '/#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="fixed z-10 w-full shadow-md bg-gray-50 dark:bg-gray-950 dark:text-slate-200">
      <div className="container px-4 py-2 mx-auto lg:px-6 md:flex md:items-center md:justify-evenly">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900 lg:text-3xl dark:text-white" style={{ fontFamily: "Montserrat" }}>
            <Link to="/" className="text-center transition duration-200 hover:text-blue-400">
              <img src={icon} alt="S icon" className='relative inline-block w-10 h-10 mx-2 rounded-lg bottom-1' />
              Santhosh Mani
            </Link>
          </div>
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="material-icons hover:text-blue-500">close</span>
            ) : (
              <span className="material-icons hover:text-blue-500">menu</span>
            )}
          </button>
        </div>
        <nav className={`md:flex transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          <ul className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-10 md:space-y-0">
            {navigationListItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="font-sans font-bold text-left text-gray-400 transition duration-200 hover:text-white" style={{ fontFamily: 'Montserrat' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center justify-center p-2'>
            <a href={"https://www.upwork.com/freelancers/~0115077b7087cbda61"} target='_blank' rel='noreferrer' className='p-2 mx-8 font-mono font-bold text-center text-gray-300 duration-300 border border-white shadow-md sm:text-lg r hover:bg-slate-950 rounded-xl hover:text-white shadow-green-600 hover:shadow-blue-600'>Hire on Upwork <span className="text-sm font-bold text-blue-800 material-icons animate-pulse">arrow_outward</span></a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;