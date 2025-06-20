import { useState, useEffect } from "react";
import { FiSearch, FiArrowUp, FiArrowDown } from "react-icons/fi";
import {
	Header,
	Footer,
	PostCover,
	LoadingAnimation,
	ScrollProgress,
} from "../components";
import "../styles/blogpost.css";
import { fetchPosts } from "../api/posts";

const Blog = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [sortDirection, setSortDirection] = useState("desc");
	const [selectedTag, setSelectedTag] = useState("");
	const [allTags, setAllTags] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			setLoading(true);
			try {
				const postsData = await fetchPosts();
				setBlogPosts(postsData);

				// Extract all unique tags
				const tagsSet = new Set();
				postsData.forEach((post) => {
					if (post.tags && Array.isArray(post.tags)) {
						post.tags.forEach((tag) => tagsSet.add(tag));
					}
				});

				setAllTags([...tagsSet]);
			} catch (error) {
				console.error("Error fetching posts:", error);
			} finally {
				setLoading(false);
			}
		};

		getPosts();
	}, []);

	useEffect(() => {
		applyFilter();
	}, []);

	function applyFilter() {
		const filterCategory = new URLSearchParams(window.location.search).get(
			"category",
		);
		if (!filterCategory) {
			return;
		}
		setSelectedTag(filterCategory);
	}

	useEffect(() => {
		const sortedPosts = [...blogPosts].sort((a, b) => {
			const dateA = new Date(a.created_at);
			const dateB = new Date(b.created_at);
			return sortDirection === "desc" ? dateB - dateA : dateA - dateB;
		});

		setBlogPosts(sortedPosts);
	}, [sortDirection]);

	return (
		<section className="bg-grid-1-s-2-neutral-950">
			<ScrollProgress />
			<Header />
			<div
				className="min-h-screen px-4 pt-12 font-mono bg-black md:px-6 lg:pt-20 text-slate-200 bg-grid-24-s-2-neutral-950"
				id="canvas-bg">
				<div className="flex flex-col max-w-5xl px-12 mx-auto">
					<h2
						className="pt-4 font-mono text-2xl leading-relaxed text-center"
						id="blog">
						Blog
					</h2>

					<div className="flex flex-col items-center justify-between w-full gap-4 p-4 my-8 md:flex-row md:justify-between">
						<div className="relative w-full md:w-1/2">
							<FiSearch className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
							<input
								type="text"
								placeholder="Search posts..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full px-12 py-3 text-white border border-gray-300 rounded-2xl search-input bg-gray-950 focus:outline-none"
							/>
						</div>

						<div className="flex items-center justify-between w-full gap-4 md:w-1/2">
							<div className="flex items-center space-x-2">
								<span className="text-sm font-bold text-gray-300">Sort:</span>
								<button type="button"
									onClick={() =>
										setSortDirection(sortDirection === "desc" ? "asc" : "desc")
									}
									className="flex items-center px-6 py-1.5 space-x-1 text-lg border border-gray-300 rounded-2xl hover:bg-gray-800">
									<span>Date</span>
									{sortDirection === "desc" ? (
										<FiArrowDown className="text-white" />
									) : (
										<FiArrowUp className="text-white" />
									)}
								</button>
							</div>

							<div className="flex items-center space-x-2">
								<span className="text-sm font-bold text-gray-300">Filter:</span>
								<select
									value={selectedTag}
									onChange={(e) => setSelectedTag(e.target.value)}
									className="px-6 mx-2 text-lg rounded-2xl py-1.5 border bg-gray-900 border-gray-700 text-white focus:outline-none focus:border-black">
									<option value="">All</option>
									{allTags.map((tag) => (
										<option key={tag} value={tag}>
											{tag}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					{loading ? (
						<LoadingAnimation />
					) : (
						<PostCover
							blogPosts={blogPosts}
							searchTerm={searchTerm}
							selectedTag={selectedTag}
						/>
					)}
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Blog;
