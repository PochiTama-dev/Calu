import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './Components/Home/Home';
import  About  from './Components/About/About';
import  Contact  from './Components/Contact/Contact';
import  Services  from './Components/Services/Services';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;

