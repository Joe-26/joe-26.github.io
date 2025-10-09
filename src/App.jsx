import "./App.css";
import portfolioInfo from "./data/personalInfo.json";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Footer logo={portfolioInfo.logo}></Footer>
    </>
  );
}

export default App;
