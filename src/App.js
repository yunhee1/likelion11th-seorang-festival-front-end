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
import WritingPage from "./pages/GuestbookPage/WritingPage";
import PinkMemoPage from "./pages/GuestbookPage/PinkMemoPage.js";
import GreenMemoPage from "./pages/GuestbookPage/GreenMemoPage.js";
import BlueMemoPage from "./pages/GuestbookPage/BlueMemoPage.js";
import YellowMemoPage from "./pages/GuestbookPage/YellowMemoPage.js";
import PurpleMemoPage from "./pages/GuestbookPage/PurpleMemoPage.js";
import BrownMemoPage from "./pages/GuestbookPage/BrownMemoPage.js";
// import GuestbookWritingPage from "./pages/GuestbookPage/GuestbookWritingPage";

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
          <Route path="/pinkmemo" element={<PinkMemoPage />} />
          <Route path="/yellowmemo" element={<YellowMemoPage />} />
          <Route path="/greenmemo" element={<GreenMemoPage />} />
          <Route path="/bluememo" element={<BlueMemoPage />} />
          <Route path="/purplememo" element={<PurpleMemoPage />} />
          <Route path="/brownmemo" element={<BrownMemoPage />} />
          <Route path="/writing" element={<WritingPage />} />
          {/* <Route path="/writing" element={<GuestbookWritingPage />} /> */}
          <Route path="/nbti/test" element={<NbtiTestPage />} />
          <Route path="/nbti/test/result" element={<NbtiResult />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
