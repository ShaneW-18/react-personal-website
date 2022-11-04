import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import StarfieldAnimation from 'react-starfield-animation'


function App() {
  return (
    <div className="App">
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          bottom: '0px',
        
        }}
        numParticles={800}
      particleSpeed={0}
      dx={0.000000001} // x speed of stars in px/frame, default 0.05
      dy={0.000000001}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
