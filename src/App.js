import "./App.css";
import ResponsiveAppBar from "./components/Appbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p> no page to show </p>} />
      </Routes>
    </div>
  );
}

export default App;
