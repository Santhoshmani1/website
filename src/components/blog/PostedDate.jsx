const formatDate = (dateString) => {
	if (!dateString) return "";
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

const PostedDate = ({ created_at }) => {
	return (
		<div className="flex items-center text-lg">{formatDate(created_at)}</div>
	);
};

export default PostedDate;
