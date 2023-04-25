import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./components/BlogPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:blogName" element={<BlogPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default App;
