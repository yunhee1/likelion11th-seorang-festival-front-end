import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import MapPage from "./pages/MapPage/MapPage";
import DevelopersPage from "./pages/DevelopersPage/DevelopersPage";
import NbtiPage from "./pages/NbtiPage/NbtiPage";
import "./css/container.scss";
import GuestbookPage from "./pages/GuestbookPage/GuestbookPage";
import NbtiTestPage from "./pages/NbtiTestPage/NbtiTestPage";
import NbtiResult from "./pages/NbtiTestPage/NbtiResult";

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
          <Route path="/nbti/test" element={<NbtiTestPage />} />
          <Route path="/nbti/test/result" element={<NbtiResult />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
