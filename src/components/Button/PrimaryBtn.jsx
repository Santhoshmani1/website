import { BsArrowUpRightSquare } from "react-icons/bs";

const PrimaryBtn = ({ label, link, icon }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="relative flex items-center gap-2 py-2 pr-8 my-4 mr-8 font-bold tracking-tighter text-white transition duration-500 cursor-pointer hover:underline md:py-3 md:text-xl hover:scale-110 lg:text-2xl hover:text-sky-400">
			{icon}
			{label}
			<BsArrowUpRightSquare className="absolute text-lg transition duration-300 right-1 hover:scale-110" />
		</a>
	);
};

export default PrimaryBtn;
