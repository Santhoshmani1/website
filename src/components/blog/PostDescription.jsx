const PostDescription = ({ description, content }) => {
	const getExcerpt = (content, maxLength = 120) => {
		if (!content) return "";
		return content.length > maxLength
			? `${content.substring(0, maxLength)}...`
			: content;
	};

	return (
		<p className="flex-grow leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-lg">
			{description || getExcerpt(content)}
		</p>
	);
};

export default PostDescription;
