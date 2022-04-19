import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "../src/components/Authentication/Login/Login";

//Pages
import About from "../src/pages/About/About";
import Contact from "../src/pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
// Style
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
