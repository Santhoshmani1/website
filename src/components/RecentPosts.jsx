import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/posts";

const RecentPosts = () => {
	const [recentPosts, setRecentPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getRecentPosts() {
			try {
				setLoading(true);
				const allPosts = await fetchPosts();
				const latest = allPosts.slice(0, 3);
				setRecentPosts(latest);
			} catch (error) {
				console.error("Error fetching recent posts:", error);
			} finally {
				setLoading(false);
			}
		}

		getRecentPosts();
	}, []);

	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString("en-US", options);
	};
	return (
		<section id="recent-posts" className="px-4 py-20 bg-black">
			<div className="max-w-5xl mx-auto">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-4xl tracking-tight text-white md:text-4xl">
						Latest From{" "}
						<span className="font-normal text-transparent bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text">
							the Blog
						</span>
					</h2>
					<div className="w-16 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
					<p className="max-w-2xl mx-auto text-sm font-light text-gray-300 md:text-base">
						Writeups on web applications and Android security, Notes on books I
						read, and General stuff I find interesting.
					</p>
				</div>

				{loading ? (
					<div className="flex justify-center my-16">
						<div className="w-6 h-6 border border-t-0 border-r-0 rounded-full border-sky-300/30 animate-spin"></div>
					</div>
				) : recentPosts.length > 0 ? (
					<div className="grid gap-12 px-4 my-12 md:grid-cols-3">
						{recentPosts.map((post) => (
							<a key={post.id} href={`/blog/${post.id}`} className="group">
								<article className="flex flex-col h-full transition-opacity duration-300 hover:opacity-95">
									{post.cover_image && (
										<div className="relative aspect-[16/9] mb-5 overflow-hidden">
											<img
												src={post.cover_image}
												alt={post.title}
												className="object-cover w-full h-full transition-transform duration-700 ease-in-out rounded-sm group-hover:scale-105"
											/>
											<div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-100"></div>
										</div>
									)}
									<div className="flex items-center mb-3 space-x-1 text-xs font-light text-gray-400">
										<time dateTime={post.created_at}>
											{formatDate(post.created_at)}
										</time>
									</div>
									<h3 className="mb-3 text-xl font-light text-white transition-colors duration-300 group-hover:text-sky-400">
										{post.title}
									</h3>
									<p className="mb-4 text-sm font-light text-gray-400 line-clamp-2">
										{post.description}
									</p>
									<div className="mt-auto">
										<span className="inline-flex items-center text-xs font-light tracking-wider transition-colors duration-300 text-sky-500 group-hover:text-sky-400">
											READ MORE
											<FaArrowRight className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
										</span>
									</div>
								</article>
							</a>
						))}
					</div>
				) : (
					<p className="my-12 text-sm font-light text-center text-gray-500">
						No articles published yet
					</p>
				)}

				<div className="flex items-center justify-center">
					<Link
						to="/blog/#"
						className="px-12 py-3 mx-auto mt-6 text-lg font-bold bg-black border hover:bg-gray-950 rounded-3xl text-sky-400 hover:text-sky-600 hover:bottom-1">
						View All Posts
						{<FaArrowRight className="inline ml-2" />}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default RecentPosts;
