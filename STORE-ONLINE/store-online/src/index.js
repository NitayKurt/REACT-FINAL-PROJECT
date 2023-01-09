import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './screens/Home'
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import bootstrap: 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './screens/About';
import Products from './screens/Products';
import AllProducts from './screens/AllProducts';
import ContactUs from './screens/ContactUs';
import Inside from './screens/products/Inside';
import Outside from './screens/products/Outside';
import Underwater from './screens/products/Underwater';

// 1. import the BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
        <Route path='/products/outside' element={<Outside/>}/>
        <Route path='/products/inside' element={<Inside/>}/>
        <Route path='/products/underwater' element={<Underwater/>}/>
     {/* כאן צריך להיכנס שלוש קטגוריות ללחיצה "בפנים, בחוץ,מתחת למים" */}
      
      <Route path='/allproducts' element={<AllProducts/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      {/* 404 - NOT FOUND ROUTING */}
      <Route path='*' element={<h3 className='text-center alert alert-danger'>
        404 - PAGE NOT FOUND</h3>}/>
    </Routes>
    <FooterNavBar/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();