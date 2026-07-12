import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header, Footer, SpaceContainer, ScrollProgress } from "../components";
import { musicTracks } from "../data/musicTracks";

const formatDate = (dateString) => {
	if (!dateString) return "";
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

const MusicPost = () => {
	const { id } = useParams();
	const [track, setTrack] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const foundTrack = musicTracks.find((t) => t.id === id);
		setTrack(foundTrack);
		setLoading(false);
	}, [id]);

	// Global keyboard controls to play/pause (Space) and seek (Left/Right arrows)
	useEffect(() => {
		const handleGlobalKeyDown = (e) => {
			if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") {
				return;
			}

			try {
				const iframe = document.querySelector("iframe");
				if (iframe && iframe.contentWindow && iframe.contentWindow.playerControl) {
					const player = iframe.contentWindow.playerControl;
					if (e.key === " " || e.code === "Space") {
						e.preventDefault();
						player.togglePlay();
					} else if (e.key === "ArrowRight" || e.code === "ArrowRight") {
						e.preventDefault();
						player.seekForward();
					} else if (e.key === "ArrowLeft" || e.code === "ArrowLeft") {
						e.preventDefault();
						player.seekBackward();
					} else if (e.key === "ArrowUp" || e.code === "ArrowUp") {
						e.preventDefault();
						player.volumeUp();
					} else if (e.key === "ArrowDown" || e.code === "ArrowDown") {
						e.preventDefault();
						player.volumeDown();
					}
				}
			} catch (err) {
				console.warn("Player control not ready yet inside iframe:", err);
			}
		};

		window.addEventListener("keydown", handleGlobalKeyDown);
		return () => window.removeEventListener("keydown", handleGlobalKeyDown);
	}, []);

	if (loading) {
		return (
			<>
				<Header />
				<div className="min-h-screen flex items-center justify-center bg-black">
					<div className="animate-pulse text-sky-400 font-mono">Loading recording details...</div>
				</div>
				<Footer />
			</>
		);
	}

	if (!track) {
		return (
			<>
				<Header />
				<div className="min-h-screen px-4 py-24 text-center bg-black flex flex-col items-center justify-center font-mono text-slate-200">
					<h2 className="text-2xl font-bold text-red-400">Recording Not Found</h2>
					<p className="text-gray-400 mt-2">The requested track could not be loaded.</p>
					<Link to="/music" className="mt-6 text-sky-400 hover:underline">
						&larr; Back to Recordings
					</Link>
				</div>
				<Footer />
			</>
		);
	}

	// Local relative URL for the preview player
	const playerUrl = `/visualizer_notes.html?src=${encodeURIComponent(track.src)}&title=${encodeURIComponent(track.title)}&mode=radial&t=${new Date().getTime()}`;

	return (
		<>
			<Header />
			<ScrollProgress />
			<div className="min-h-screen py-12 font-mono bg-black bg-grid-24-s-2-neutral-950 text-slate-200 lg:py-20">
				<div className="max-w-4xl px-4 mx-auto">
					<SpaceContainer />

					{/* Navigation Back */}
					<Link to="/music" className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 mb-6 transition-colors duration-200">
						&larr; Back to Recordings
					</Link>

					{/* Title & Metadata */}
					<div className="pb-6 mb-8 border-b border-gray-800">
						<div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
							<span>{track.instrument} Recording</span>
							<span>•</span>
							<span>{formatDate(track.created_at)}</span>
						</div>
						<h1 className="mb-4 text-3xl font-bold leading-tight text-slate-100 lg:text-4xl">
							{track.title}
						</h1>

						{/* Tags */}
						<div className="flex flex-wrap gap-2 mt-3">
							{track.tags?.map((tag) => (
								<span
									key={tag}
									className="px-3 py-1 text-xs border border-sky-500/20 bg-sky-500/10 text-sky-300 rounded-full"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					{/* Embedded Interactive Visualizer Player */}
					<div className="relative mb-8 rounded-xl overflow-hidden border border-gray-800 bg-gray-950/80 shadow-2xl">
						<div className="absolute top-2 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
							<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
							<span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 font-sans">
								Live Sound Bloom Engine
							</span>
						</div>
						<iframe
							src={playerUrl}
							width="100%"
							height="380"
							style={{ border: 0, overflow: "hidden", display: "block" }}
							loading="lazy"
							allow="autoplay; microphone"
							title={track.title}
						/>
					</div>

					{/* Description & Performance Notes */}
					<div className="mt-8">
						<h2 className="text-lg font-bold text-sky-400 border-b border-gray-900 pb-2 mb-3">
							Performance Notes
						</h2>
						<p className="text-slate-300 font-light leading-relaxed text-sm">
							{track.description}
						</p>
					</div>

				</div>
			</div>
			<Footer />
		</>
	);
};

export default MusicPost;
