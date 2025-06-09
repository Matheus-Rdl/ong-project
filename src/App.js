import "./App.css";
import NavBar from "./components/NavBar/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Courses from "./pages/Courses.js";
import Economic from "./pages/Economic.js";
import Settings from "./pages/Settings.js";
import { ImMenu3 } from "react-icons/im";

function App() {
  return (
    <Router>
      <header className="header">
        <p>Ong Amigos da Esperança | 07/06/2025 | Cedeck Sylvain</p>
        <ImMenu3 />
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/economic" element={<Economic />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
