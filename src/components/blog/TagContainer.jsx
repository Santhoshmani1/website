import Tag from "./Tag";

const TagContainer = ({ tags }) => {
	if (!tags || tags.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col flex-grow py-2">
			<div className="flex flex-wrap gap-2 mt-1">
				{tags.map((tag) => (
					<Tag label={tag} key={tag} />
				))}
			</div>
		</div>
	);
};

export default TagContainer;
