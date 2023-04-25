import React from "react";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Sidebar from "../components/Navbar";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <section className="flex overflow-hidden max-w-screen">
      <Sidebar />
      <div className="flex flex-col w-full sm:ml-[69px]">
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
