
import Products from "./Product";
import React  from 'react';

import Hero from "./Hero";
import Inspiration from "./Insipiration";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Banner from "./Banner";
import InspirationHome from "./InspirationHome";
import ColorSlider from "./slider/colorslider";

export default function Home(){
    return(
        <>
        <div className="container-fluid px-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="Assets/img/banners/banner 1.webp"
                alt="logo"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                   
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="carousel-item">
              <img
                className="w-100"
                src="Assets/img/banners/web banner-02.webp"
                alt="logo"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div
                    className="row justify-content-start "
                    style={{ marginLeft: "20px" }}
                  >
                        
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      <Contact/>
     {/* <ColorSlider/> */}
      <InspirationHome/>
      </div>
      <Products/>
      <Hero/>
      <Banner/>
      <Inspiration/>
      <Testimonial/>
    
        </>
    )
}