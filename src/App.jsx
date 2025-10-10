import "./App.css";
import portfolioInfo from "./data/personalInfo.json";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="text-white">
      <Navbar logo={portfolioInfo.logo}></Navbar>
      <Herosection name={portfolioInfo.name}></Herosection>
      <Footer logo={portfolioInfo.logo}></Footer>
    </div>
  );
}

export default App;
