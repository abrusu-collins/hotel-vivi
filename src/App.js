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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
