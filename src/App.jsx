import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

import Lightning from "./components/Lightning"; // 👈 import Lightning
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* 🔥 Lightning Background */}
      <Lightning hue={220} speed={1.2} intensity={1.2} size={1} />

      <div className="container mx-auto px-8 relative z-10">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Home route shows Hero + all sections */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Technologies />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              }
            />
            {/* Other routes show only their own section */}
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
