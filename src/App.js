import "./App.css";
import MainComponent from "./pages/MainComponent/MainComponent";
import { Routes, Route } from "react-router-dom";
import CursosComponent from "./pages/CursosComponent/CursosComponent";
import LearnComponent from "./pages/LearnComponent/CursosComponent";
import Navbar from "./components/Navbar/Navbar";
import LoginComponent from "./pages/LoginComponent/LoginComponent";
import RegisterComponent from "./pages/RegisterComponent/LoginComponent.jsx";
import { UserContext } from "./UserContext";
import React, { useContext } from "react";
import ParidaCOM from "./pages/PartidaCOM/ParidaCOM";

function App() {
  const { isUserLoggedIn } = useContext(UserContext);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<MainComponent />} />
        <Route path="/partidacom" element={<ParidaCOM />} />
        <Route path="/cursos" element={<CursosComponent />} />
        <Route path="/learn" element={<LearnComponent />} />
        <Route path="/profile" element={<LearnComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </div>
  );
}

export default App;
