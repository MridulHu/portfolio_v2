import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
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
