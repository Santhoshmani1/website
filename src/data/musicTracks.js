// Static metadata for known files (indexed by filename)
const staticMetadata = {
	"Interstellar_theme_08_06_26.mp3": {
		instrument: "Piano",
		tags: ["Piano", "Movie Theme", "Sci-Fi", "Practice"],
		created_at: "2026-06-08T22:30:00+05:30",
		description: "Trying to capture Hans Zimmer's cosmic build-up on a standard keyboard. There's no organ here, just me trying not to speed up the tempo as the tension grows. Playing this makes me feel like I'm drifting in space, or maybe just waiting for a really long build script to finish."
	},
	"bombay_theme_interlude.mp3": {
		instrument: "Piano",
		tags: ["Piano", "A.R. Rahman", "Tollywood", "Practice"],
		created_at: "2026-04-10T18:45:00+05:30",
		description: "Trying to adapt the famous Naveen Kumar flute interlude onto the piano keys. Obviously, you can't slide between notes on a keyboard, so I'm playing it with a light touch to fake the woodwind flow. It's a fun challenge!"
	},
	"manam_theme_08_06_26.mp3": {
		instrument: "Piano",
		tags: ["Piano", "Anup Rubens", "Nostalgia", "Practice"],
		created_at: "2026-06-08T21:15:00+05:30",
		description: "A keyboard practice take of the Manam theme. The melody is so warm and nostalgic. Recorded this one evening to unwind after a day of reverse engineering."
	},
	"nijamadhe_pilla.mp3": {
		instrument: "Piano",
		tags: ["Piano", "Anirudh", "Romance", "Practice"],
		created_at: "2026-05-05T19:30:00+05:30",
		description: "Anirudh's composition from '3' played on keys. Translating the highly expressive vocal line to the piano without it sounding robotic is a serious workout for my fingers."
	},
	"nisaresa_jeans_theme.mp3": {
		instrument: "Piano",
		tags: ["Piano", "A.R. Rahman", "Nostalgia", "Practice"],
		created_at: "2026-02-28T22:00:00+05:30",
		description: "Pure 90s nostalgia. The legendary 'Nisaresa' background score from Jeans. This simple motif is so powerful. I recorded this keyboard take trying to focus on the soft, delicate dynamics of the intro before the orchestrations would normally sweep in."
	},
	"sundari_nene_nuvvanta_14_06_26.mp3": {
		instrument: "Piano",
		tags: ["Piano", "Ilaiyaraaja", "Classical", "Practice"],
		created_at: "2026-06-14T17:40:00+05:30",
		description: "Trying to capture the grandeur of Ilaiyaraaja's Dalapathi theme on the keyboard. It's a massive orchestration, so playing it solo on piano is a work in progress."
	},
	"vaseegara_intro_08_06_26.mp3": {
		instrument: "Piano",
		tags: ["Piano", "Harris Jayaraj", "Romance", "Practice"],
		created_at: "2026-06-08T20:50:00+05:30",
		description: "The opening keys of Vaseegara/Zara Zara are etched into the core memories of anyone who grew up in the early 2000s. It's a short recording of just the intro theme, focusing on the weight of each key and the space between notes."
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
		instrument: "Piano",
		tags: ["Piano", "Practice"],
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
