const CoverImage = ({ title, coverImageSrc }) => {
	return (
		<div className="mb-4 overflow-hidden">
			<img
				src={coverImageSrc}
				alt={title}
				className="object-cover w-full h-auto transition-all duration-300 grayscale hover:grayscale-0"
			/>
		</div>
	);
};

export default CoverImage;
