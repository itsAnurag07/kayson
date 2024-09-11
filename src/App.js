
import './App.css';
import React  from 'react';
// import Swiper from 'swiper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Component/Layout/Master';
import Home from './Component/Home';
import Products from './Component/Product';
import Hero from './Component/Hero';
import Inspiration from './Component/Insipiration';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Colorslider from './Component/slider/colorslider';
import Contact2 from './Component/contact2';
import Banner from './Component/Banner';
import InspirationHome from './Component/InspirationHome';
import Ourproducts from './Component/Ourproducts';
import About from './Component/About';
import Contactus from './Component/Contactus';
import Presence from './Component/Presence';



function App() {


  
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Master/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/products' element={<Products/>}></Route> 
    <Route path='/hero' element={<Hero/>}></Route>
    <Route path='/inspiration' element={<Inspiration/>}></Route>
    <Route path='/testimonial' element={<Testimonial/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/contact2' element={<Contact2/>}></Route>
    <Route path='/colorslider' element={<Colorslider/>}></Route>
    <Route path='/banner' element={<Banner/>}></Route>
    <Route path='/inspirationHome' element={<InspirationHome/>}></Route>
    <Route path='/ourproducts' element={<Ourproducts/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contactus' element={<Contactus/>}></Route>
    <Route path='/presence' element={<Presence/>}></Route>

    
    </Route>
   </Routes>
   </BrowserRouter>
</>
  );
}

export default App;
