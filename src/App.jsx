import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import portfolioInfo from "./data/personalInfo.json";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Footer from "./components/footer";
import SocialSide from "./components/socials-side";
import ScrollToTop from "./components/scrollToTop";
import KeySkills from "./components/skills/keySkills";
import KeyProjects from "./components/projects/keyProjects";
import Testimonials from "./components/testimonials/testimonials";

// Home Page Component
function HomePage() {
  return (
    <>
      <Herosection name={portfolioInfo.name}></Herosection>
      <KeySkills></KeySkills>
      <KeyProjects></KeyProjects>
      <Testimonials></Testimonials>
    </>
  );
}

// Placeholder About Me Component
function AboutMePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-400 text-lg">This page is coming soon...</p>
      </div>
    </div>
  );
}

// Placeholder Contact Me Component
function ContactMePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
        <p className="text-gray-400 text-lg">This page is coming soon...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="text-white">
        <Navbar logo={portfolioInfo.logo}></Navbar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contact-me" element={<ContactMePage />} />
        </Routes>

        <div className="invisible sm:visible">
          <SocialSide />
        </div>
        <ScrollToTop />
        <Footer logo={portfolioInfo.logo}></Footer>
      </div>
    </Router>
  );
}

export default App;
