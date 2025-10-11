import "./App.css";
import portfolioInfo from "./data/personalInfo.json";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Footer from "./components/footer";
import SocialSide from "./components/socials-side";
import ScrollToTop from "./components/scrollToTop";
import KeySkills from "./components/skills/keySkills";
import KeyProjects from "./components/projects/keyProjects";

function App() {
  return (
    <div className="text-white">
      <Navbar logo={portfolioInfo.logo}></Navbar>
      <Herosection name={portfolioInfo.name}></Herosection>
      <KeySkills></KeySkills>
      <KeyProjects></KeyProjects>
      <div className="invisible sm:visible">
        <SocialSide />
      </div>
      <ScrollToTop />
      <Footer logo={portfolioInfo.logo}></Footer>
    </div>
  );
}

export default App;
