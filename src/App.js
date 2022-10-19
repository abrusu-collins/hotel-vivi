import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RoomsSuites from "./components/RoomsSuites";
import PhotosVideos from "./components/PhotosVideos";
import Offers from "./components/Offers";
import SPA from "./components/SPA";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

import Romantic from "./components/Offers components/Romantic";
import FamilyAndKids from "./components/Offers components/FamilyAndKids";
import Wellness from "./components/Offers components/Wellness";
import Christmas from "./components/Offers components/Christmas";
import SuitelySensational from "./components/Offers components/SuitelySensational";
import EarlyBookers from "./components/Offers components/EarlyBookers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms&suites" element={<RoomsSuites />} />
        <Route path="/photos&videos" element={<PhotosVideos />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/spa" element={<SPA />} />
        <Route path="*" element={<Error404 />} />
        {/* Offer routes */}
        <Route path="/offers/romanticoffer" element={<Romantic />} />
        <Route path="/offers/familyandkids" element={<FamilyAndKids />} />
        <Route path="/offers/wellnessandspa" element={<Wellness />} />
        <Route path="/offers/christmas" element={<Christmas />} />
        <Route path="/offers/suitelysensational" element={<SuitelySensational />} />
        <Route path="/offers/earlybookers" element={<EarlyBookers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
