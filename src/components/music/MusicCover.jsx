import { Link } from "react-router-dom";
import { PsyduckImg } from "../../assets";

const formatDate = (dateString) => {
	if (!dateString) return "";
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

const MusicCover = ({ tracks, searchTerm = "", selectedTag = "" }) => {
	const filteredTracks = tracks.filter((track) => {
		const matchesSearch =
			searchTerm === "" ||
			track.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			track.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			track.instrument?.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesTag = selectedTag === "" || track.tags?.includes(selectedTag);
		return matchesSearch && matchesTag;
	});

	if (filteredTracks.length === 0) {
		return (
			<div className="p-8 text-center">
				<img
					src={PsyduckImg}
					alt="Psyduck searched for tracks tirelessly! but No results found. psy ay!"
					className="h-auto mx-auto mb-4 text-white lg:w-60 rounded-xl"
				/>
				<p className="text-xl text-gray-500 dark:text-gray-400">
					{searchTerm || selectedTag
						? "No recordings match your search."
						: "No recordings available."}
				</p>
			</div>
		);
	}

	return (
		<div className="grid gap-8 my-8 md:my-12">
			{filteredTracks.map((track) => (
				<Link
					to={`/music/${track.id}`}
					key={track.id}
					className="flex flex-col md:flex-row h-full my-4 overflow-hidden transition-all duration-300 border border-gray-900 rounded-xl bg-gray-950/40 backdrop-blur-sm hover:border-sky-500/40 hover:bg-gray-900/40 p-5 gap-6 group blog-card"
				>
					{/* Custom Premium Cover Representing Instrument */}
					<div className="relative w-full md:w-48 h-36 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-black border border-gray-800">
						{/* Dynamic gradient background based on instrument */}
						<div
							className={`absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30 ${
								track.instrument === "Piano"
									? "bg-gradient-to-tr from-amber-500 to-indigo-500"
									: "bg-gradient-to-tr from-sky-400 to-emerald-400"
							}`}
						/>
						{/* Subtle Grid overlay */}
						<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />
						
						{/* Instrument icon / label */}
						<div className="relative z-10 flex flex-col items-center gap-2">
							{track.instrument === "Piano" ? (
								<svg
									className="w-12 h-12 text-amber-400 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
									/>
								</svg>
							) : (
								<svg
									className="w-12 h-12 text-sky-400 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4m8 0h8m-8 4h.01M12 16h.01M10 16H8m8 0h-2"
									/>
								</svg>
							)}
							<span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
								{track.instrument}
							</span>
						</div>

						{/* Interactive Hover Play overlay */}
						<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<div className="w-10 h-10 rounded-full border border-sky-400 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
								<svg
									className="w-5 h-5 text-sky-400 fill-current ml-0.5"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</div>
					</div>

					{/* Metadata and content */}
					<div className="flex flex-col flex-1 justify-between">
						<div>
							<div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono">
								<span>{formatDate(track.created_at)}</span>
								<span className="text-gray-700">•</span>
								<span className="text-sky-400/80">{track.instrument} Recording</span>
							</div>
							
							<h3 className="text-xl font-bold tracking-tight text-slate-100 lg:text-2xl mt-2 hover:text-sky-400 transition-colors duration-200">
								{track.title}
							</h3>
							
							<p className="text-slate-400 text-sm font-light leading-relaxed mt-2 line-clamp-2">
								{track.description}
							</p>
						</div>

						<div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
							{/* Tags */}
							<div className="flex flex-wrap gap-1.5">
								{track.tags?.map((tag) => (
									<span
										key={tag}
										className="px-2.5 py-0.5 text-[10px] font-mono border border-gray-800 bg-gray-900/60 text-slate-400 rounded-full hover:border-sky-500/30 hover:text-sky-300 transition-all"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="flex items-center gap-1 text-xs text-sky-400 font-bold group-hover:translate-x-1 transition-transform duration-200">
								<span>Listen & Track</span>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default MusicCover;
