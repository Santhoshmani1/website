import blogPosts from "../../data/blogPosts";
import Header from "../Header";
import Footer from "../Footer";

const Post = () => {
  const blogId = window.location.href.split("blog/")[1];
  const article = blogPosts.find((post) => post.slug === blogId);
  setTimeout(() => {
    const articleBody = document.querySelector(".article-body");
    articleBody.innerHTML = article.body.content;
  }, 50);

  return (
    <>
      <Header /> c
      <div className="py-20 font-mono dark:bg-gray-950 dark:text-slate-200">
        <div className="flex items-center justify-evenly">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            {article.title}
          </h2>
        </div>
        <div className="mx-auto font-mono text-lg text-white article-body lg:w-3/5 lg:text-xl dark:text-slate-300"></div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
