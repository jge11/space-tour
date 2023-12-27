import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Techonology from "./pages/Technology";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import NavBar from "./pages/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/space-tour" element={<Home />} />
          <Route path="/space-tour/Destination" element={<Destination />} />
          <Route path="space-tour/Crew" element={<Crew />} />
          <Route path="/space-tour/Techonology" element={<Techonology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
