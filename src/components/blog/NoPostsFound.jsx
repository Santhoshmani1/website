import { PsyduckImg } from "../../assets";

const NoPostsFound = ({ searchTerm, selectedTag }) => {
	return (
		<div className="p-8 text-center">
			<img
				src={PsyduckImg}
				alt="Psyduck searched for posts tirelessly! but No results found. psy ay!"
				className="h-auto mx-auto mb-4 text-white lg:w-60 rounded-xl"
			/>
			<p className="text-xl text-gray-500 dark:text-gray-400">
				{searchTerm || selectedTag
					? "No posts match your search."
					: "No posts available."}
			</p>
		</div>
	);
};

export default NoPostsFound;
