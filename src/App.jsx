import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./components/blog/Post.jsx";
import { BackToTop } from "./components/index.js";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} id="1" />
				<Route path="/blog" element={<Blog />} id="2" />
				<Route path="/blog/:id" element={<Post />} />
			</Routes>
			<BackToTop />
		</>
	);
};

export default App;
