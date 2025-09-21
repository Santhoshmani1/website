import { createClient } from "@supabase/supabase-js";

async function fetchPost({ id }) {
    try {
        const supabase = createClient(
            import.meta.env.VITE_SUPABASE_URL,
            import.meta.env.VITE_SUPABASE_ANON_KEY,
        );

        const { data, error } = await supabase
            .from("posts")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            console.error("Error fetching post:", error);
            throw error;
        }

        return data || null;

    } catch (error) {
        console.error("Error in fetchPost:", error);
        throw error;
    }
}

export { fetchPost };