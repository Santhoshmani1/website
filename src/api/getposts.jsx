import { supabase } from "./supabaseClient.jsx";

async function fetchPosts() {
	try {
		// Fetch posts and their related tags in a single query.
		// This requires a many-to-many relationship set up in Supabase:
		// posts <-> post_tags <-> tags
		const { data, error } = await supabase
			.from("posts")
			.select("*, post_tags(tags(tag_name))")
			.order('created_at', { ascending: false });

		if (error) {
			console.error("Error fetching posts:", error);
			throw error;
		}

		// Process data to flatten tags into a simple array of strings for each post.
		const postsWithTags = data.map(post => ({
			...post,
			tags: post.post_tags.map(pt => pt.tags.tag_name)
		}));

		return postsWithTags || [];
	} catch (error) {
		console.error("Error in fetchPosts:", error);
		throw error;
	}
}

export { fetchPosts };