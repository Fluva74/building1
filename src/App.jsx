import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
import Jumbo1 from "./components/Jumbo1.jsx";
import Showcase from "./components/Showcase.jsx";
import Quote from "./components/Quote.jsx";
import Footer from "./components/Footer.jsx";



function App() {
  return (
  <Router>
      <div className="App">
      <Topbar />
      <Jumbo1 />
      <Showcase />
      <Quote />
        <Footer />
     </div>
    </Router>
  );
}

export default App;
