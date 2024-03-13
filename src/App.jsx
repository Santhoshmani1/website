import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from './pages/Post'
import Blog from './pages/Blog'

 const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} id="1"/>
        <Route path="/blog" element={<Blog />} id="2" />
      </Routes>
    </>
  );
};

export default App;