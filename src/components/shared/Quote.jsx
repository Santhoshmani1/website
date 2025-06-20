const Quote = ({ content }) => {
	if (!content) return null;

	return (
		<blockquote className="p-4 text-sm italic tracking-tight text-gray-200 bg-transparent border border-l-2 border-gray-500 md:text-xl rounded-2xl border-l-gray-400 ">
			{content}
		</blockquote>
	);
};

export default Quote;
