import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar() {
    return (
        <Router>
        <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-scroll-header>
          <div className="container">
                <Link className="navbar-brand me-3 me-xl-4" to="\">
                    <img className="d-block" src="assets/img/logo/logo-dark.png" width={136} alt="Odibola Properties" />
                </Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            {/* <a className="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="city-guide-home-v1.html#signin-modal" data-bs-toggle="modal"><i className="fi-user me-2" />Get Started</a> */}
            <Link className="btn btn-primary btn-sm d-none d-lg-block ms-2 order-lg-3" to="login">
                <i className="fi-user me-2" />Login/Register
            </Link>
            <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
                
                    <ul className="navbar-nav navbar-nav-scroll" style={{maxHeight: '35rem'}}>
                        {/* Menu items*/}
                        <li className="nav-item active">
                            <Link className="nav-link" to="\">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="about">About Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="services">Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="properties">Properties</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="gallery">Gallery</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="https://blog.odibolaproperties.com" target="_blank">Blog</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="gallery">Contact Us</Link>
                        </li>

                        <li className="nav-item d-lg-none">
                            <Link className="nav-link btn btn-primary text-white" to="login">
                                <i className="fi-user me-2" />Login/Register
                            </Link>
                        </li>
                    </ul>
            </div>
          </div>
        </header>
        </Router>
      );
}
export default Navbar