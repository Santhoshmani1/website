import { Link } from "react-router-dom";

import CoverImage from "./CoverImage";
import NoPostsFound from "./NoPostsFound";
import PostedDate from "./PostedDate";
import PostDescription from "./PostDescription";
import ReadMore from "./ReadMore";
import TagContainer from "./TagContainer";

const PostCover = ({ blogPosts, searchTerm = "", selectedTag = "" }) => {
	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			searchTerm === "" ||
			post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.description?.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesTag = selectedTag === "" || (post.tags?.includes(selectedTag));
		return matchesSearch && matchesTag;
	});

	if (filteredPosts.length === 0) {
		return <NoPostsFound searchTerm={searchTerm} selectedTag={selectedTag} />;
	}

	return (
		<div className="grid gap-8 mt-8">
			{filteredPosts.map((post) => (
				<Link
					to={`/blog/${post.id}`}
					key={post.id}
					className="flex flex-col h-full overflow-hidden transition-all duration-300 blog-card ">
					<h3 className="text-xl font-bold tracking-tight text-blue-400 lg:text-3xl hover:underline">
						{post.title}
					</h3>
					<CoverImage
						coverImageSrc={post?.cover_image}
						altText={post.title}
						className=""
					/>
					<PostDescription
						content={post.content}
						description={post.description}
					/>
					<ReadMore />
					<div className="flex flex-wrap items-center mb-3 space-x-2 text-sm text-gray-600 dark:text-gray-400">
						<PostedDate created_at={post.created_at} />
						<TagContainer tags={post.tags} />
					</div>
				</Link>
			))}
		</div>
	);
};

export default PostCover;
