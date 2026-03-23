import { Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import Footer from './Footer';
import CustomCursor from '../components/CustomCursor';
import '../DESIGN/App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={
          <div className="portfolio-layout">
            <Header />
            <main className="portfolio-content">
              <Hero />
              <Projects />
              <Experience />
              <About />
              <Skills />
              <Footer />
            </main>
          </div>
        } />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;