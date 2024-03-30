import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from './pages/Blog'
import Resume from "./pages/Resume";

 const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} id="1"/>
        <Route path="/blog" element={<Blog />} id="2" />
        <Route path="/resume" element={<Resume />} id="3" />
      </Routes>
    </>
  );
};

export default App;