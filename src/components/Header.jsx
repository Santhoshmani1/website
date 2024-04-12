import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import icon from "../assets/S.png"

const navigationListItems = [
  { label: 'Home', path: '/#' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Contact', path: '/#contact' },
  { label : 'Blog', path : '/blog/#'},
  {label :"Resume", path : "/resume"}
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="bg-gray-50 dark:bg-gray-800 dark:text-slate-200 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 md:flex md:items-center md:justify-around">
        <div className="flex items-center justify-between">
          <div className="text-lg md:text-2xl lg:text-3xl font-bold dark:text-white text-gray-900" style={{fontFamily:"Montserrat"}}>
            <Link to="/" className="hover:text-blue-400 transition duration-200">
              <img src={icon} alt="S icon" className='w-10 relative bottom-1 h-10 inline-block mx-2 rounded-lg'  />
              Santhosh Mani 
            </Link>
          </div>
          <button
            className="md:hidden block"
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
          <ul className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-2 md:space-y-0">
            {navigationListItems.map((item, index) => (
              <li key={index} className='text-lg'>
                <Link
                  to={item.path}
                  className="hover:underline transition duration-200 font-sans text-lg text-left hover:text-blue-600" style={{fontFamily: 'Montserrat'}}
                  onClick={() => setIsOpen(false)}
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