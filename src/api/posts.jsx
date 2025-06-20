import { createClient } from "@supabase/supabase-js";

async function fetchPosts() {
	const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_ANON_KEY,
	);

	const { data: posts, error } = await supabase
		.from("posts")
		.select("*")
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}

	// Process posts if needed (e.g., parse tags, format dates, etc.)
	if (posts) {
		// Extract all unique tags from posts
		const tags = new Set();
		posts.forEach((post) => {
			if (post.tags && Array.isArray(post.tags)) {
				post.tags.forEach((tag) => tags.add(tag));
			}
		});

		return posts;
	}

	return [];
}

export { fetchPosts };
