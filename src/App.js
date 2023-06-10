import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Techonology from "./components/Technology";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import NavBar from "./components/NavBar";
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
