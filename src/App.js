import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Navbar from "./components/Home components/Navbar";
import Home from "./components/Home";
import Rooms_Suites from "./components/Rooms & Suites";
import Photos_Videos from "./components/Photos & Videos";
import Offers from "./components/Offers";
import SPA from "./components/SPA";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={</>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
