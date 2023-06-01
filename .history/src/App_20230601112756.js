import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/scrollToTop";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import OurMission from "./pages/AboutUs/OurMission/OurMission";
import WhoWeAre from "./pages/AboutUs/WhoWeAre/WhoWeAre";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<WhoWeAre />} />
        <Route path="our-mission" element={<OurMission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
