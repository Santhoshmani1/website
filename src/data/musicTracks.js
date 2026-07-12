// Static metadata for known files (indexed by filename)
const staticMetadata = {
	"Memory Reboot.mp3": {
		instrument: "Piano",
		tags: ["Piano", "Chill", "Synthwave", "Practice"],
		created_at: "2026-07-12T14:56:00+05:30",
		description: "A mellow piano practice session performing Memory Reboot."
	}
};

// Dynamically discover all MP3 files under public/Music
const mp3Modules = import.meta.glob("../../public/Music/*.mp3");

export const musicTracks = Object.keys(mp3Modules).map((filePath) => {
	const filename = filePath.substring(filePath.lastIndexOf("/") + 1);
	
	// Clean up title from filename
	const title = filename
		.replace(/\.mp3$/i, "")
		.replace(/[_-]+/g, " ")
		.replace(/\b\w/g, (char) => char.toUpperCase());
		
	const id = filename
		.toLowerCase()
		.replace(/\.mp3$/i, "")
		.replace(/[^a-z0-9]+/g, "-");

	const meta = staticMetadata[filename] || {
		instrument: filename.toLowerCase().includes("flute") ? "Flute" : "Piano",
		tags: [filename.toLowerCase().includes("flute") ? "Flute" : "Piano", "Practice"],
		created_at: new Date().toISOString(),
		description: `Practice recording of ${title}.`
	};

	return {
		id,
		title,
		filename,
		src: `/Music/${filename}`, // Served statically at root /Music/
		...meta
	};
});
