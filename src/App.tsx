import Certifications from "./components/certifications";
import ContactMe from "./components/contactme";
import EduEx from "./components/eduex.tsx";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import NavBar from "./components/navbar";
import Skills from "./components/skills";

/** NavBar - Introduction(Header, About Me) - Skills - Professional Experience - Projects - Education - Certifications - Contact Me - Footer */
function App() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <Skills />
      <EduEx />
      <Certifications />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
