import Header from "../components/Header";
import Footer from "../components/Footer";
import blogPosts from "../data/blogPosts";
import PostCover from "../components/blog/PostCover.jsx";
import "../styles/blogpost.css";
import CursorFollowingGraph from "../components/CursorFollowingGraph.jsx";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-12 font-mono lg:pt-20 dark:bg-gray-950 dark:text-slate-200" id="canvas-bg">
        <CursorFollowingGraph />
        <h2
          className="pt-4 font-sans text-4xl leading-relaxed text-center"
          id="blog"
        >
          Blog
        </h2>
        
        {/* <PostCover blogPosts={blogPosts} /> */}

        <p className="text-center py-10 text-3xl">
          Coming Soon...
        </p>

      </div>
      <Footer />
    </>
  );
};

export default Blog;
