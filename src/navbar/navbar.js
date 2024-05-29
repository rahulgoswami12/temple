import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home'; 
import Badri from '../components/badri';  
import Badriii from '../components/badriii'; 
import Botom from '../components/botom';


const Navbar = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/badri" element={<Badri />} />
      <Route path="/botom" element={<Botom />} />
      <Route path="/badriii" element={<Badriii />} />
    </Routes>
  </Router>
  )
}

export default Navbar