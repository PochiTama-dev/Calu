import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import './App.css';
import Blog from './Components/Blog/Blog';
import VideoBackgroundComponent from './Components/VideoBackgroundComponent/VideoBackgroundComponent';
import AdminLogin from './Components/AdminLogin/AdminLogin'
import CreatePost from './Components/CreatePost/CreatePost';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <VideoBackgroundComponent/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/AdminLogin' element={<AdminLogin setIsAuth={setIsAuth} />} />
        <Route path='/CreatePost' element={<CreatePost/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
