
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from "./components/Header";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import UserOne from "./pages/UserOne";



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/userOne" element={<UserOne />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
