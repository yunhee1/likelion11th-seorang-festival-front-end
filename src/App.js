import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import MapPage from "./pages/MapPage/MapPage";
import DevelopersPage from "./pages/DevelopersPage/DevelopersPage";
import NbtiPage from "./pages/NbtiPage/NbtiPage";
import "./css/container.scss";
import GuestbookPage from "./pages/GuestbookPage/GuestbookPage";

function App() {
  return (
    <div className="background">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booth-map" element={<MapPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/nbti" element={<NbtiPage />} />
          <Route path="/guest" element={<GuestbookPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
