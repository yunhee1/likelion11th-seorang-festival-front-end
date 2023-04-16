import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import MapPage from "./pages/MapPage/MapPage";
import DevelopersPage from "./pages/DevelopersPage/DevelopersPage";
import NbtiPage from "./pages/NbtiPage/NbtiPage";
import Nav from "./components/Nav";
import "./css/container.scss";

function App() {
  return (
    <div className="background">
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booth-map" element={<MapPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/nbti" element={<NbtiPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
