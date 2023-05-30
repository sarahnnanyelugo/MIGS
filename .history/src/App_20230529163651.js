import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div className="col-md-4">
        <h1>One</h1>
      </div>
      <div className="col-md-4">
        <h1>One</h1>
      </div>
      <div className="col-md-4">
        <h1>One</h1>
      </div>
    </div>
  );
}

export default App;
