// import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <>
        {/* <div className="container-fluid px-0 my-5"> */}
        <div className="container-fluid px-5 my-5">
        <div className="row">
          <div className="col-md-5">
          <div className="oval">
              <img
                 src="Assets/icons/ICONS.png"
                alt="Why Choose Us?"
                style={{ width: "400px", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="bg-white  ">
              <div className="row whychooseus_icons g-5 pt-1 mb-5">
                <div className="col-sm-6">
                  <img
                    className="img-fluid0 "
                    src="Assets/icons/ICONS-01.png"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                  <span className="heading_text">QUALITY FIRST</span>
                  <h6 className="text-orange">
                    Commitment to delivering top-notch paint products with
                    unwavering quality standards.
                  </h6>
                </div>
                <div className="col-sm-6">
                  <img
                    className="img-fluid0 "
                    src="Assets/icons/ICONS-02.png"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                  <span className="heading_text">INNOVATION DRIVE</span>
                  <h6 className="text-orange">
                    Foster a culture of continuous improvement and
                    forward-thinking to stay ahead in the industry.
                  </h6>
                </div>
                <div className="col-sm-6">
                  <img
                    className="img-fluid0 "
                    src="Assets/icons/ICONS-03.png"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                  <span className="heading_text">CUSTOMER FOCUS</span>
                  <h6 className="text-orange">
                    Prioritize customer needs, providing exceptional products
                    and services that exceed expectations.
                  </h6>
                </div>

                <div className="col-sm-6">
                  <img
                    className="img-fluid0"
                    src="Assets/icons/ICONS-04.png"
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <span className="heading_text">INTEGRITY MATTERS</span>
                  <h6 className="text-orange">
                    Uphold the highest levels of honesty, transparency, and
                    ethical conduct in all business interactions.
                  </h6>
                </div>
                <div className="col-sm-6">
                  <img
                    className="img-fluid0 "
                    src="Assets/icons/ICONS-05.png"
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <span className="heading_text">REABILITY ASSURANCE</span>
                  <h6 className="text-orange">
                    Maintain a track record of consistent and reliable product
                    delivery, building trust with customers.
                  </h6>
                </div>

                <div className="col-sm-6">
                  <img
                    className="img-fluid0 "
                    src="Assets/icons/ICONS-06.png"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                  <span className="heading_text">
                    ENVIROMENTAL  RESPONSIBILITY
                  </span>
                  <h6 className="text-orange">
                    Minimizing our environmental footprint by developing and
                    promoting eco-friendly paint solutions.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
