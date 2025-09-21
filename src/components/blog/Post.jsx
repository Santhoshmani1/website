import { marked } from "marked";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import { Header, Footer, SpaceContainer, ScrollProgress } from "..";
import CoverImage from "./CoverImage";
import LoadingAnimation from "./LoadingAnimation";
import PostedDate from "./PostedDate";
import TagContainer from "./TagContainer";
import NoPostsFound from "./NoPostsFound";
import TableOfContents from "./TableOfContents";
import ReadingTime from "./ReadingTime";
import { fetchPost } from "../../api/getpost";

marked.use({
	headerIds: true,
	mangle: false,
});

const Post = () => {
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [toc, setToc] = useState([]);
	const [showToc, setShowToc] = useState(false);
	const contentRef = useRef(null);
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		fetchPost({ id })
			.then((data) => {
				setPost(data);
			})
			.catch((error) => {
				console.error("Error fetching post:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	useEffect(() => {
		if (post?.content && contentRef.current) {
			setTimeout(() => {
				const headings = contentRef.current.querySelectorAll("h1, h2, h3");
				const tocItems = [];

				headings.forEach((heading, index) => {
					if (parseInt(heading.tagName[1]) > 3) return;

					if (!heading.id) {
						heading.id = `heading-${index}`;
					}

					tocItems.push({
						id: heading.id,
						text: heading.textContent,
						level: parseInt(heading.tagName[1]),
					});
				});

				setToc(tocItems);
				setShowToc(tocItems.length > 0);
			}, 100);
		}
	}, [post?.content]);

	const scrollToHeading = (e, id) => {
		e.preventDefault();

		const element = document.getElementById(id);
		if (element) {
			const header = document.querySelector("header");
			const headerHeight = header ? header.offsetHeight : 0;

			// Calculate position with offset
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - headerHeight - 20; // 20px extra padding

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	if (loading) {
		return (
			<>
				<Header />
				<LoadingAnimation />
				<Footer />
			</>
		);
	}

	if (!post) {
		return (
			<>
				<Header />
				<div className="min-h-screen px-4 py-24 text-center bg-black">
					<NoPostsFound />
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<ScrollProgress />
			<div className="min-h-screen py-12 font-mono bg-black bg-grid-24-s-2-neutral-950 dark:text-slate-200 lg:py-20">
				<div className="max-w-6xl px-4 mx-auto">
					<SpaceContainer />
					<div className="pb-8 mb-8 border-b border-gray-200 dark:border-gray-800">
						<CoverImage />
						<h1 className="mb-4 text-3xl font-bold leading-tight text-sky-600 lg:text-4xl dark:text-white">
							{post.title}
						</h1>
						<div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
							<PostedDate created_at={post.created_at} />
							<ReadingTime text={post.content} />
							<TagContainer tags={post.tags} />
						</div>
					</div>

					{showToc && (
						<div className="blog-toc-mobile">
							<TableOfContents toc={toc} scrollToHeading={scrollToHeading} />
						</div>
					)}

					<div className="px-6 blog-layout">
						<div className="blog-content-with-toc">
							<div
								ref={contentRef}
								className="font-light prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-black dark:prose-a:text-white prose-a:underline"
								dangerouslySetInnerHTML={{
									__html: post.content ? marked(post.content) : "",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Post;
