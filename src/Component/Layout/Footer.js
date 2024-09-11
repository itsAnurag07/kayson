import { Link } from "react-router-dom";
import React  from 'react';
export default function Footer() {
  return (
    <>
    <div className="container-fluid footer_section p-5" >
      <div className="row">
        <div className="col-md-6 ">
          <h4 className="footer_text">KAYSON THINNERS AND CHEMICALS</h4>
          <h6 className="footer_text2 mt-3">Village Chandersain - Kangniwal<br/>Old Hoshiarpur Road, Jalandhar - 144025</h6>
        </div>
        <div className="col-md-6 p-  ">
          <div className="footer_text2 mb-5 d-flex justify-content-end">
            <span className="footer_text2 mt-4 me-3">Locate Nearest Store</span>
            {/* <div className="social_icons d-flex">
              <Link
                className="btn btn-sm-square btn-light rounded-circle ms-2"
                to="/"
                target="_blank"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
              <Link
                className="btn btn-sm-square btn-light  rounded-circle ms-2"
                to="/"
                target="_blank"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
              <Link
                className="btn btn-sm-square btn-light  rounded-circle ms-2"
                to="/"
                target="_blank"
              >
                <i className="fab fa-youtube fa-2x"></i>
              </Link>
              

            </div> */}
          </div>
      
         <div className="footer_text2 mb-5 d-flex justify-content-end">
            <div className="text-white footer_website-link me-2">
              <i className="fa fa-phone-alt  mt-2 me-2"></i>+91-181-5039476
            </div>
            <div className="vertical-border me-2"></div>
            <Link
              className="text-white  footer_email-link me-2"
              to="/"
              target="_blank"
            >
              <i className="fa fa-envelope mt-2 me-2"></i>info@kaysonpaints.com
            </Link>
            <div className="vertical-border me-2"></div>
            <Link
              className="text-white  footer_email-link me-2"
              to="/"
              target="_blank"
            >
           www.Kaysonpaints.com
            </Link>
          
           
          </div>
        </div>
        </div>
        </div>
        <div className="orange-strip "></div> {/* Orange strip */}
        <div className="blue-strip"></div> {/* Orange strip */}

     
    
   
      </>
  );
}
