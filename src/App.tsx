import "./App.css";
import NavBar from "./components/navbar";
import Introduction from "./components/introduction";
import Footer from "./components/footer";
import ContactMe from "./components/contactme";
import Skills from "./components/skills";
import EduEx from "./components/eduex";
import Certifications from "./components/certifications";
import Volunteering from "./components/volunteering";

function App() {
  return (
    <div>
      <NavBar />
      <div className="sm:px-64 bg-honeydew">
        <Introduction />
        <Skills />
        <EduEx />
        <Volunteering />
        <Certifications />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
