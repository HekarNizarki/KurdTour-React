import "./App.css";
import ResponsiveAppBar from "./components/Appbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import ViewCityPlasess from "./components/ViewCityPlasess";
import SingleLocation from "./components/SigleLocation";
import Favplases from "./components/Favplases";

function App() {
  return (
    <div className="bg-teal-50 w-screen h-screen">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/favplases/:fav" element={<Favplases />} />
        <Route path="/locations/:locationtitle" element={<SingleLocation />} />
        <Route path="/contact" element={<Search />} />
        <Route path="/profile/:idProfile" element={<Profile />} />
        <Route path="/:id" element={<ViewCityPlasess />} />
        <Route path="*" element={<p> no page to show </p>} />
      </Routes>
    </div>
  );
}

export default App;
