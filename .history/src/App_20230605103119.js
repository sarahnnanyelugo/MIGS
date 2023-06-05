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
import History from "./pages/AboutUs/History/History";
import Achievements from "./pages/AboutUs/Achievements/Achievements";
import ContactUs from "./pages/AboutUs/ContactUs/ContactUs";
import Admission from "./pages/Admission/Admission";
import EYFS from "./pages/Academics/EYFS/EYFS";
import PrimarySchool from "./pages/Academics/PrimarySchool/PrimarySchool";
import SpecialEducation from "./pages/Academics/SpecialEducation/SpecialEducation";
import JuniorSecondary from "./pages/Academics/JuniorSecondary/JuniorSecondary";
import Gallery from "./pages/Gallery/Gallery";
import IEC from "./pages/IEC/IEC";

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
        <Route path="history" element={<History />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="admission" element={<Admission />} />
        <Route path="eyfs" element={<EYFS />} />
        <Route path="primary" element={<PrimarySchool />} />
        <Route path="special-edu" element={<SpecialEducation />} />
        <Route path="junior-sec" element={<JuniorSecondary />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="iec" element={<IEC />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
