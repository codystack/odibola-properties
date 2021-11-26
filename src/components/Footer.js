
import React from "react";

import { BrowserRouter as Router, Link }from "react-router-dom";

function Footer() {
    return (
        <footer className="footer pt-lg-5 pt-4 bg-dark text-light">
          <div className="container mb-4 py-4 pb-lg-5">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6 col-sm-4">
                <div className="mb-4 pb-sm-3"><a className="d-inline-block" href="city-guide-home-v1.html"><img src="assets/img/logo/logo-light.png" width={216} alt="Logo" /></a></div>
                <ul className="nav nav-light flex-column">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal text-light text-nowrap" href="mailto:info@odibolaproperties.com"><i className="fi-mail mt-n1 me-1 align-middle text-primary" />info@odibolaproperties.com</a></li>
                  <li className="nav-item mb-2"><span className="nav-link p-0 fw-normal text-light text-nowrap"><i className="fi-device-mobile mt-n1 me-1 align-middle text-primary" />08187339710, 07062824485, <br />08085912630</span></li>
                </ul>
              </div>
              {/* Links*/}
              <div className="col-lg-2 col-md-3 col-sm-4">
                <h3 className="fs-base text-light">Quick links</h3>
                <ul className="list-unstyled fs-sm">
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">Top cities</a></li>
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">Accommodation</a></li>
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">Cafes &amp; restaurants</a></li>
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">Events</a></li>
                </ul>
              </div>
              {/* Links*/}
              <div className="col-lg-2 col-md-3 col-sm-4">
                <h3 className="fs-base text-light">Profile</h3>
                <ul className="list-unstyled fs-sm">
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">My account</a></li>
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">Favorites</a></li>
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">My listings</a></li>
                  <li><a className="nav-link-light" href="city-guide-home-v1.html#">Add listing</a></li>
                </ul>
              </div>
              {/* Subscription form*/}
              <div className="col-lg-4 offset-lg-1">
                <h3 className="h4 text-light">Subscribe to our newsletter</h3>
                <p className="fs-sm mb-4 opacity-60">Don’t miss any relevant vacancies!</p>
                <form className="form-group form-group-light" style={{maxWidth: '500px'}}>
                  <div className="input-group input-group-sm"><span className="input-group-text text-muted"><i className="fi-mail" /></span>
                    <input className="form-control" type="email" placeholder="Your email" />
                  </div>
                  <button className="btn btn-primary btn-sm" type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="py-4 border-top border-light">
            <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between py-2">
              {/* Copyright*/}
              <p className="order-lg-1 order-2 fs-sm mb-2 mb-lg-0"><span className="text-light opacity-60">© {(new Date().getFullYear())} Odibola Properties. All Rights Reserved. </span></p>
              <div className="d-flex flex-lg-row flex-column align-items-center order-lg-2 order-1 ms-lg-4 mb-lg-0 mb-4">
                {/* Links*/}
                <div className="d-flex flex-wrap fs-sm mb-lg-0 mb-4 pe-lg-4">
                    <Router>
                        <Link className="nav-link-light px-2 mx-1" to="policy">Privacy Policy</Link>
                        <Link className="nav-link-light px-2 mx-1" to="terms">Terms of Use</Link>
                    </Router>
                </div>
                <div className="d-flex align-items-center">
                  
                    {/* Socials*/}
                    <div className="ms-4 ps-lg-2 text-nowrap">
                        <a className="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2" href="city-guide-home-v1.html#">
                          <i className="fi-facebook" />
                        </a>

                        <a className="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2" href="city-guide-home-v1.html#">
                            <i className="fi-twitter" />
                        </a>

                        <a className="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2" href="city-guide-home-v1.html#">
                            <i className="fi-instagram" />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
}
export default Footer