import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/recover" element={<Recover/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
