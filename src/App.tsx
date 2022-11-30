import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import OfferDetails from "./pages/OfferDetails";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/recover" element={<Recover/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/offer/details" element={<OfferDetails/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
