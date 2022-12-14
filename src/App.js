import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RoomsSuites from "./components/RoomsSuites";
import Gallery from "./components/Gallery";
import Offers from "./components/Offers";
import SPA from "./components/SPA";
import RestaurantBar from "./components/RestaurantBar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

import Romantic from "./components/Offers components/Romantic";
import FamilyAndKids from "./components/Offers components/FamilyAndKids";
import Wellness from "./components/Offers components/Wellness";
import Christmas from "./components/Offers components/Christmas";
import SuitelySensational from "./components/Offers components/SuitelySensational";
import Meetings from "./components/Offers components/Meetings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms&suites" element={<RoomsSuites />} />
        <Route path="/restaurant&bar" element={<RestaurantBar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/spa" element={<SPA />} />
        <Route path="*" element={<Error404 />} />

        {/* Offer routes */}
        <Route path="/offers/romanticoffer" element={<Romantic />} />
        <Route path="/offers/familyandkids" element={<FamilyAndKids />} />
        <Route path="/offers/wellnessandspa" element={<Wellness />} />
        <Route path="/offers/christmas" element={<Christmas />} />
        <Route path="/offers/suitelysensational" element={<SuitelySensational />} />
        <Route path="/offers/meetingsoffer" element={<Meetings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
