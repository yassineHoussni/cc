import React from 'react'
import Main from './Main'
import Footer from './Footer'
import Navbar from './Navbar'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function All() {

    
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/h" element={<Main msg='HTML'/>}/>
        <Route path="/CSS" element={<Main  msg='CSS'/>} />
        <Route path="/JavaScript" element={<Main  msg='JavaScript'/>} />
    </Routes>
    </BrowserRouter>


   
  )
}
