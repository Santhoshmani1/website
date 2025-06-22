import { useState, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { SIcon } from "../../assets/index.js";

const navigationListItems = [
	{ label: "Home", path: "/#" },
	{ label: "Projects", path: "/#projects" },
	{ label: "Blog", path: "/blog/#" },
	{ label: "Github", path: "https://github.com/santhoshmani1" },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuIcon, setMenuIcon] = useState("menu");
	const headerRef = useRef(null);

	return (
		<header
			ref={headerRef}
			className="fixed z-20 w-full p-1 text-xs text-white border-b rounded-sm shadow-md md:px-36 bg-slate-950 border-b-slate-600">
			<div className="container px-4 py-2 mx-auto lg:px-6 md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<div className="text-xl lg:text-3xl lg:pl-24">
						<Link to="/" className="text-center transition duration-200">
							<img
								src={SIcon}
								alt="S icon"
								className="relative inline-block w-10 h-10 mx-2 rounded-lg"
							/>
							Santhosh
						</Link>
					</div>
					<div></div>
					<button
						className="material-icons sm:hidden"
						title="menu" type="button"
						onClick={() => {
							setIsOpen(!isOpen);
							setMenuIcon(isOpen ? "menu" : "close");
						}}>
						{menuIcon}
					</button>
				</div>

				<nav
					className={`md:flex transition-all duration-50 ease-in-out lg:pr-20 ${
						isOpen ? "nav-open" : "nav-closed"
					} z-10`}>
					<ul className="flex flex-col items-center justify-center md:flex-row md:space-x-10 md:space-y-0">
						{navigationListItems.map((item) => (
							<li key={item.label}>
								<Link
									to={item.path}
									className="text-base leading-loose text-left transition duration-300 text-slate-300 hover:underline hover:text-blue-400"
									onClick={() => {
										setIsOpen(false);
										setMenuIcon("menu");
									}}>
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
