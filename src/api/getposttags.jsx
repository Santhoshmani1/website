import { supabase } from "./supabaseClient.jsx";

async function fetchPostTags({ id }) {
    try {
        // This query joins post_tags with the tags table
        // and fetches all tag details for a given post_id.
        const { data, error } = await supabase
            .from('post_tags')
            .select('tags(*)') // This selects all columns from the related 'tags' table
            .eq('post_id', id);

        if (error) {
            console.error("Error fetching post tags:", error);
            throw error;
        }

        // The data from Supabase will be an array of objects like:
        // [{ tags: { id: 1, tag_name: 'React' } }, { tags: { id: 2, tag_name: 'JavaScript' } }]
        // We map this to get a simple array of tag objects.
        const tags = data ? data.map(item => item.tags) : [];
        return tags;

    } catch (error) {
        console.error("Error in fetchPostTags:", error);
        throw error;
    }
}

async function fetchAllTags() {
    try {
        const { data, error } = await supabase
            .from('tags')
            .select('*');

        if (error) {
            console.error("Error in fetchAllTags:", error);
            throw error;
        }

        return data || [];

    } catch (error) {
        console.error("Error in fetchAllTags:", error);
        throw error;
    }
}

export { fetchPostTags, fetchAllTags };