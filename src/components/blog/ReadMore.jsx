import { FiArrowRight } from "react-icons/fi";

const ReadMore = () => {
	return (
		<div className="pt-2 mt-auto">
			<span className="inline-flex items-center text-black underline duration-200 hover:font-bold hover:underline dark:text-white lg:text-lg">
				Read more
				<FiArrowRight className="ml-2" size={16} />
			</span>
		</div>
	);
};

export default ReadMore;
