import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import BasicTab from "./components/BasicTab";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/s" element={<Second/>}/>
        <Route path="/t" element={<Third/>}/>
        <Route path="/tab" element={<BasicTab/>}/>

      </Routes>
    </>
  );
}

export default App;
