import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import './App.css';
import Blog from './Components/Blog/Blog';
import BlogView from './Components/Blog/BlogView'; // Importa el componente BlogView aquí
import VideoBackgroundComponent from './Components/VideoBackgroundComponent/VideoBackgroundComponent';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import CreatePost from './Components/CreatePost/CreatePost';
import AdminHome from './Components/AdminHome/AdminHome';
import AdminCrud from './Components/Admin/AdminCrud';
import ProductForm from './Components/ProductForm/ProductForm';
import ProductDetail from './Components/ProductForm/ProductDetail';
import ProductList from './Components/ProductForm/ProductList';
import PaymentGateway from './Components/Payment/Payment';
import Cart from './Components/Cart/Cart';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <div>
        <VideoBackgroundComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin-home' element={<AdminHome />} />
          <Route path='/admin-login' element={<AdminLogin setIsAuth={setIsAuth} />} />
          <Route path='/admin-crud' element={<AdminCrud setIsAuth={setIsAuth} />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/product-form' element={<ProductForm />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetail />} />

          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog isAuth={isAuth} />} />
          <Route path='/blog/:id' element={<BlogView />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />

          <Route path='/payment' element={<PaymentGateway />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
