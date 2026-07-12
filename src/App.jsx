import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./components/blog/Post.jsx";
import Music from "./pages/Music";
import MusicPost from "./pages/MusicPost";
import { BackToTop } from "./components/index.js";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} id="1" />
				<Route path="/blog" element={<Blog />} id="2" />
				<Route path="/blog/:id" element={<Post />} />
				<Route path="/music" element={<Music />} />
				<Route path="/music/:id" element={<MusicPost />} />
			</Routes>
			<BackToTop />
		</>
	);
};

export default App;
