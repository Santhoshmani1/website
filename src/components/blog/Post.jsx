import { createClient } from "@supabase/supabase-js";
import { marked } from "marked";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Header, Footer, SpaceContainer, ScrollProgress } from "..";
import CoverImage from "./CoverImage";
import LoadingAnimation from "./LoadingAnimation";
import PostedDate from "./PostedDate";
import TagContainer from "./TagContainer";
import NoPostsFound from "./NoPostsFound";

const Post = () => {
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		fetchPost();
	}, [id]);

	async function fetchPost() {
		setLoading(true);
		try {
			const supabase = createClient(
				import.meta.env.VITE_SUPABASE_URL,
				import.meta.env.VITE_SUPABASE_ANON_KEY,
			);

			const { data, error } = await supabase
				.from("posts")
				.select("*")
				.eq("id", id)
				.single();

			if (error) {
				console.error("Error fetching post:", error);
				return;
			}

			setPost(data);

			if (data?.title) {
				document.title = `${data.title} | Blog`;
			}
		} catch (error) {
			console.error("Error in fetchPost:", error);
		} finally {
			setLoading(false);
		}
	}

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
				<div className="max-w-3xl px-4 mx-auto">
					<SpaceContainer />
					<Link
						to="/blog"
						className="flex items-center mb-8 text-lg text-gray-600 underline md:text-xl dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400">
						<FiArrowLeft className="mr-2" />
						Back to Blog
					</Link>

					<div className="pb-8 mb-8 border-b border-gray-200 dark:border-gray-800">
						<CoverImage />
						<h1 className="mb-4 text-3xl font-bold leading-tight text-sky-600 lg:text-4xl dark:text-white">
							{post.title}
						</h1>

						<div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
							<PostedDate created_at={post.created_at} />
							<TagContainer tags={post.tags} />
						</div>
					</div>

					<div
						className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-black dark:prose-a:text-white prose-a:underline"
						dangerouslySetInnerHTML={{
							__html: post.content ? marked(post.content) : "",
						}}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Post;
