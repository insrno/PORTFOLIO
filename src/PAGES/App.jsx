import { Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import Footer from './Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/portfolio" element={
        <div className="bg-[var(--color-bg)] text-[var(--color-primary)] font-sans">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      } />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;