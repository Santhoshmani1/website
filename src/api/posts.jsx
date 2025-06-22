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


	return posts || [];
}

export { fetchPosts };
