import { Link } from "react-router-dom";
import React  from 'react';
export default function Header() {
  return (
    <>
      {/* TopNav-bar Start */}
      <div className="container-fluid Top_Nav  text-white d-none d-lg-flex">
        <div className="container py-3">
          <div className="d-flex ">
            <div className="ms-auto d-flex align-items-center">
              <div className="text-white ms-2 website-link">
                <i className="fa fa-phone-alt me-"></i>+91-181-5039476
              </div>
              <div className="vertical-border"></div>
              <Link
                className="text-white ms-2 email-link" // Add email-link class
                to="/"
                target="_blank"
              >
                <i className="fa fa-envelope me-1"></i>info@kaysonpaints.com
              </Link>
              <div className="vertical-border"></div>
              <Link
                className="text-white ms-2 website-link" // Add website-link class
                to="/"
                target="_blank"
              >
                www.Kaysonpaints.com
              </Link>
              <div className="vertical-border"></div>
              <div className="ms-3 d-flex">
                <Link
                  className="btn btn-sm-square btn-light  rounded-circle ms-2"
                  to="/"
                  target="_blank"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </Link>
                <Link
                  className="btn btn-sm-square btn-light  rounded-circle ms-2"
                  to="/"
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </Link>
                <Link
                  className="btn btn-sm-square btn-light  rounded-circle ms-2"
                  to="/"
                  target="_blank"
                >
                  <i className="fab fa-youtube fa-lg"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TopNav-bar ends */}

      {/* NavBAr starts */}
      <div class="container-fluid bg-white ">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
            <a href="#" class="navbar-brand d-lg-none1 ">
              <img
                src="/Assets/img/Kayson_Logo_Final.jpg"
                class="imglogo"
                alt="kayson_Logo"
                style={{ height: "90px", width: "150px" }}
              />
            </a>

            <button
              type="button"
              class="navbar-toggler "
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav p-4">
                <Link to="/" class="nav-item nav-link active me-4">
                Home
                </Link>
                <Link to="/ourproducts" class="nav-item nav-link active me-4">
                Products
                </Link>

                <Link to="/presence" class="nav-item nav-link active me-4">
                 Presence
                </Link>

                <Link to="/about" class="nav-item nav-link active me-4 ">
                  About
                </Link>
                <Link to="/" class="nav-item nav-link active me-4">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* NAvbar Ends */}
    </>
  );
}
