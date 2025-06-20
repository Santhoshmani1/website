import { FiTag } from "react-icons/fi";

const Tag = ({ label }) => {
	return (
		<span
			key={label}
			className="flex items-center px-4 py-2 text-xs text-white transition-colors duration-200 border border-gray-300 rounded-lg cursor-pointer bg-gray-950 tag-badge dark:border-gray-700 hover:bg-gray-800 hover:text-blue-400">
			<FiTag className="mr-1" size={10} />
			{label}
		</span>
	);
};

export default Tag;
