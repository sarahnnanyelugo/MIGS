import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/scrollToTop";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        {/* <Route path="tech-hub-page" element={<TechHub />} />
        <Route path="team-hire" element={<TeamHire />} />
        <Route path="hire-page" element={<HiringPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
