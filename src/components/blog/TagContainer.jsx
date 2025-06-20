import Tag from "./Tag";

const TagContainer = ({ tags }) => {
	if (!tags || tags.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col flex-grow p-6">
			<div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
				{tags.map((tag) => (
					<Tag label={tag} key={tag} />
				))}
			</div>
		</div>
	);
};

export default TagContainer;
