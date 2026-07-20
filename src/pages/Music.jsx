import { useState, useEffect } from "react";
import { FiSearch, FiArrowUp, FiArrowDown } from "react-icons/fi";
import {
	Header,
	Footer,
	ScrollProgress,
	SpaceContainer,
} from "../components";
import MusicCover from "../components/music/MusicCover";
import { musicTracks } from "../data/musicTracks";

const Music = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortDirection, setSortDirection] = useState("desc");
	const [selectedTag, setSelectedTag] = useState("");
	const [allTags, setAllTags] = useState([]);

	useEffect(() => {
		// Extract all unique tags
		const tags = Array.from(
			new Set(musicTracks.flatMap((track) => track.tags || [])),
		);
		setAllTags(tags);
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

	// Compute sorted tracks directly during render to prevent state sync lag/race conditions
	const sortedTracks = [...musicTracks].sort((a, b) => {
		const dateA = new Date(a.created_at);
		const dateB = new Date(b.created_at);
		return sortDirection === "desc" ? dateB - dateA : dateA - dateB;
	});

	return (
		<section className="bg-grid-1-s-2-neutral-950">
			<ScrollProgress />
			<Header />
			<div
				className="min-h-screen px-4 pt-12 font-mono bg-black md:px-6 lg:pt-20 text-slate-200 bg-grid-24-s-2-neutral-950">
				<div className="flex flex-col max-w-5xl px-4 mx-auto lg:px-12">
					<SpaceContainer />
					<h2
						className="pt-4 font-mono text-2xl leading-relaxed text-center"
						id="music">
						Music Recordings
					</h2>
					<p className="text-center text-slate-400 text-sm mt-2 max-w-xl mx-auto font-light">
					</p>
					
					<div className="flex flex-col items-center justify-between gap-6 my-12 md:flex-row">
						<div className="relative w-full md:flex-1">
							<FiSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4" />
							<input
								type="text"
								placeholder="Search recordings..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full py-3 pl-12 pr-4 text-white transition-colors duration-300 border border-gray-800 rounded-full shadow-lg bg-gray-900/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500"
							/>
						</div>

						<div className="flex items-center justify-center w-full gap-6 md:w-auto md:justify-end">
							<button
								type="button"
								onClick={() => setSortDirection(sortDirection === "desc" ? "asc" : "desc")}
								className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-gray-300 transition-colors duration-300 border border-gray-800 rounded-full shadow-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500"
							>
								<span>Date</span>
								{sortDirection === "desc" ? (
									<FiArrowDown className="w-4 h-4" />
								) : (
									<FiArrowUp className="w-4 h-4" />
								)}
							</button>

							<div className="relative">
								<select
									value={selectedTag}
									onChange={(e) => setSelectedTag(e.target.value)}
									className="w-full px-4 py-3 text-sm text-gray-300 transition-colors duration-300 border border-gray-800 rounded-full appearance-none cursor-pointer bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 pr-10"
								>
									<option value="">All Tags</option>
									{allTags.map((tag) => (
										<option key={tag} value={tag}>
											{tag}
										</option>
									))}
								</select>
								<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
									<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
								</div>
							</div>
						</div>
					</div>

					<MusicCover
						tracks={sortedTracks}
						searchTerm={searchTerm}
						selectedTag={selectedTag}
					/>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Music;
