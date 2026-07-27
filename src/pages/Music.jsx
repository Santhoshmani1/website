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
		<section className="bg-grid-1-s-2-neutral-950 relative overflow-hidden">
			{/* Ambient background glows for premium look */}
			<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

			<ScrollProgress />
			<Header />
			<div
				className="min-h-screen px-4 pt-8 font-mono bg-black md:px-6 lg:pt-20 text-slate-200 bg-grid-24-s-2-neutral-950 relative z-10">
				<div className="flex flex-col max-w-5xl px-4 mx-auto lg:px-12">
					<SpaceContainer />
					
					{/* Header section with gradient title & accent border */}
					<div className="text-center max-w-3xl mx-auto space-y-4">
						<h2
							className="font-extrabold text-3xl md:text-5xl tracking-tighter bg-gradient-to-r from-white via-slate-100 to-sky-400 bg-clip-text text-transparent leading-normal"
							id="music">
							Music Recordings
						</h2>
						<div className="h-[2px] w-12 bg-sky-500 mx-auto rounded-full mt-2" />
						<p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed italic border-l-2 border-sky-500/20 pl-4 py-1 mt-4 text-left md:text-center">
							Music has always been a quiet creative outlet for me. I'm especially drawn to A.R. Rahman's instrumental compositions, which inspired me to learn the piano during college. I also play the flute from time to time. This collection brings together those recordings and serves as a small archive of a hobby that has stayed with me over the years.
						</p>
					</div>

					{/* Collection Stats Dashboard */}
					{/* <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto my-8 text-center border border-slate-900/60 bg-slate-950/30 rounded-2xl p-4 backdrop-blur-sm shadow-xl">
						<div className="flex flex-col justify-center">
							<span className="text-2xl md:text-3xl font-bold text-sky-400">{musicTracks.length}</span>
							<span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Total Tracks</span>
						</div>
						<div className="flex flex-col justify-center border-x border-slate-900/60">
							<span className="text-2xl md:text-3xl font-bold text-sky-400">1</span>
							<span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Instrument</span>
						</div>
						<div className="flex flex-col justify-center">
							<span className="text-2xl md:text-3xl font-bold text-sky-400">2026</span>
							<span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Archived Since</span>
						</div>
					</div> */}

					{/* Search & Dynamic Tag Filter Section */}
					<div className="flex flex-col gap-6 mt-8 mb-4 w-full">
						<div className="flex flex-col items-center justify-between gap-4 md:flex-row w-full">
							{/* Search Input */}
							<div className="relative w-full md:flex-1">
								<FiSearch className="absolute text-slate-500 transform -translate-y-1/2 top-1/2 left-4 w-4 h-4" />
								<input
									type="text"
									placeholder="Search recordings..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full py-3.5 pl-12 pr-4 text-sm text-white transition-all duration-300 border border-slate-800 rounded-full shadow-inner bg-slate-950/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 placeholder-slate-600"
								/>
							</div>

							{/* Sort Button */}
							<button
								type="button"
								onClick={() => setSortDirection(sortDirection === "desc" ? "asc" : "desc")}
								className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 text-sm text-slate-300 transition-all duration-300 border border-slate-800 rounded-full bg-slate-950/40 backdrop-blur-md hover:bg-slate-900/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
							>
								<span className="font-mono text-xs uppercase tracking-wider">Date</span>
								{sortDirection === "desc" ? (
									<FiArrowDown className="w-4 h-4 text-sky-400" />
								) : (
									<FiArrowUp className="w-4 h-4 text-sky-400" />
								)}
							</button>
						</div>
						
						{/* Inline Tag Filter for Desktop/Tablet */}
						{allTags.length > 0 && (
							<div className="hidden sm:block">
								<div className="flex flex-col gap-2">
									<span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Filter by Tag:</span>
									<div className="flex flex-wrap gap-2">
										<button
											type="button"
											onClick={() => setSelectedTag("")}
											className={`px-3.5 py-1.5 text-xs rounded-full border transition-all duration-300 font-mono ${
												selectedTag === ""
													? "bg-sky-500/10 border-sky-400/50 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.1)]"
													: "border-slate-800 bg-slate-950/20 text-slate-400 hover:border-slate-700 hover:text-slate-200"
											}`}
										>
											All Tags
										</button>
										{allTags.map((tag) => (
											<button
												key={tag}
												type="button"
												onClick={() => setSelectedTag(tag)}
												className={`px-3.5 py-1.5 text-xs rounded-full border transition-all duration-300 font-mono ${
													selectedTag === tag
														? "bg-sky-500/10 border-sky-400/50 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.1)]"
														: "border-slate-800 bg-slate-950/20 text-slate-400 hover:border-slate-700 hover:text-slate-200"
												}`}
											>
												{tag}
											</button>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Mobile Select Dropdown */}
						{allTags.length > 0 && (
							<div className="relative sm:hidden w-full">
								<select
									value={selectedTag}
									onChange={(e) => setSelectedTag(e.target.value)}
									className="w-full px-4 py-3 text-sm text-slate-300 transition-colors duration-300 border border-slate-800 rounded-full appearance-none cursor-pointer bg-slate-950/40 backdrop-blur-md hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 pr-10 font-mono"
								>
									<option value="" className="bg-slate-950">All Tags</option>
									{allTags.map((tag) => (
										<option key={tag} value={tag} className="bg-slate-950">
											{tag}
										</option>
									))}
								</select>
								<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
									<svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
							</div>
						)}
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
