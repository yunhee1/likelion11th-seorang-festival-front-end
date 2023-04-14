import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import MapPage from "./pages/MapPage/MapPage";
import DevelopersPage from "./pages/DevelopersPage/DevelopersPage";
import NbtiPage from "./pages/NbtiPage/NbtiPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="background">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booth-map" element={<MapPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/nbti" element={<NbtiPage />} />
      </Routes>
    </div>
  );
}

export default App;
