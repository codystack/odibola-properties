import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
    return(
        <div>
            <Navbar />
            <Router>
            {/* Hero Section */}
            <section className="container py-5 mt-5 mb-lg-3">
                <div className="row align-items-center mt-md-2">
                <div className="col-lg-7 order-lg-2 mb-lg-0 mb-4 pb-2 pb-lg-0"><img className="d-block mx-auto" src="assets/img/city-guide/home/hero-img.png" width={746} alt="Hero" /></div>
                <div className="col-lg-5 order-lg-1 pe-lg-0">
                    <h1 className="display-5 mb-4 me-lg-n5 text-lg-start text-center">Landlords grow rich in their <span className="text-primary">sleep.</span></h1>
                    <p className="text-lg-start text-center mb-0 mb-lg-1 fs-lg">“Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.”</p>
                    {/* Search form*/}
                    <div className="me-lg-n5">
                        
                        <div className="flex-shrink-0 text-lg-start text-center">
                            <Link to="policy" className="me-2">
                                <img src="assets/img/icons/apple.svg" alt="Google Play" width={134} />
                            </Link>

                            <Link to="policy">
                                <img src="assets/img/icons/googleplay.svg" alt="Google Play" width={120} />
                            </Link>

                        </div>
                        {/* <button className="btn btn-outline-primary btn-lg w-100 w-md-auto ms-sm-3" type="button">Search</button>
                        <button className="btn btn-primary btn-lg w-100 w-md-auto ms-sm-3" type="button">Search</button> */}
                    </div>
                </div>
                </div>
            </section>
            {/* Services */}
            <section className="container mb-5">
                <div className="row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4">
                <div className="col"><a className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-rent.html">
                    <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i className="fi-real-estate-house" /></div>
                    <h3 className="icon-box-title fs-base mb-0">Property Development</h3></a></div>
                <div className="col"><a className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-sale.html">
                    <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i className="fi-apartment" /></div>
                    <h3 className="icon-box-title fs-base mb-0">Property Management</h3></a></div>
                <div className="col"><a className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-rent.html">
                    <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i className="fi-shop" /></div>
                    <h3 className="icon-box-title fs-base mb-0">Building Construction</h3></a></div>
                <div className="col"><a className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-sale.html">
                    <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i className="fi-security" /></div>
                    <h3 className="icon-box-title fs-base mb-0">Document Verification</h3></a></div>
                <div className="col"><a className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-rent.html">
                    <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i className="fi-house-chosen" /></div>
                    <h3 className="icon-box-title fs-base mb-0">Project Management</h3></a></div>
                <div className="col">
                    <div className="dropdown h-100"><a className="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" href="real-estate-home.html#" data-bs-toggle="dropdown">
                        <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i className="fi-dots-horisontal" /></div>
                        <h3 className="icon-box-title fs-base mb-0">More</h3></a>
                    <div className="dropdown-menu dropdown-menu-end my-1">
                        <a className="dropdown-item fw-bold" href="real-estate-catalog-sale.html"><i className="fi-single-bed fs-base opacity-60 me-2" />Architectural Designs</a>
                        <a className="dropdown-item fw-bold" href="real-estate-catalog-rent.html"><i className="fi-computer fs-base opacity-60 me-2" />Building Interior Artistry</a>
                        <a className="dropdown-item fw-bold" href="real-estate-catalog-sale.html"><i className="fi-real-estate-buy fs-base opacity-60 me-2" />Consultancy Services</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="container mb-5 mt-5 pb-2 pb-lg-4">
                <div className="row align-items-center mt-5">
                    <div className="col-md-5">
                        <img className="d-block mx-md-0 mx-auto mb-md-0 mt-5 mb-4" src="assets/img/111181.png" width={416} alt="Illustration" />
                    </div>
                    <div className="col-xxl-6 col-md-7 mt-5 text-md-start text-center">
                        <h2>Who we are</h2>
                        <p className="pb-3 fs-lg">Odibola Properties has incised on her Enterprise, Trust, Quality and affordable deliverables in Real Estate development over the years in Nigeria.</p>
                        <p className="pb-3 fs-lg">Our Team is poised at providing optimum Services of purchase, sale and leasing of land and landed property. We deliver positive results and enhanced value for client through a combination of expert analysis, market Knowledge talent and collaboration. </p>
                        <Link className="btn btn-lg btn-primary" to="about">Read More</Link>
                    </div>
                </div>
            </section>

            <section className="container mt-n3 mt-md-0 mb-5 pb-lg-4">
                <h2 className="h3 mb-4 pb-2">What’s new in Berlin</h2>
                {/* Carousel*/}
                <div className="tns-carousel-wrapper">
                <div className="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#carousel-controls&quot;}">
                    {/* Item*/}
                    <div>
                    <div className="row">
                        <div className="col-md-7 mb-md-0 mb-3"><img className="position-relative rounded-3 zindex-5" src="assets/img/city-guide/home/new-1.jpg" alt="Article" /></div>
                        <div className="col-md-5">
                        <h3 className="h4 from-top">Amusement Park</h3>
                        <ul className="list-unstyled delay-2 from-end">
                            <li className="mb-1 fs-sm"><i className="fi-map-pin text-muted me-2 fs-base" />Ollenhauer Str. 29, 10118</li>
                            <li className="mb-1 fs-sm"><i className="fi-clock text-muted me-2 fs-base" />9:00 – 23:00</li>
                            <li className="mb-1 fs-sm"><i className="fi-wallet text-muted me-2 fs-base" />$$</li>
                        </ul>
                        <p className="pb-2 delay-3 from-end d-none d-lg-block">Blandit lorem dictum in&nbsp;velit. Et&nbsp;nisi at&nbsp;faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim ut&nbsp;quis&nbsp;ac. Amet, cras orci justo, tortor nisl aliquet. Enim tincidunt tellus nunc, nulla arcu posuere quis. Velit turpis orci venenatis risus felis, volutpat convallis varius. Enim non euismod adipiscing a&nbsp;enim.</p><a className="btn btn-primary rounded-pill delay-4 scale-up" href="city-guide-single.html">View more<i className="fi-chevron-right fs-sm ms-2" /></a>
                        </div>
                    </div>
                    </div>
                    {/* Item*/}
                    <div>
                    <div className="row">
                        <div className="col-md-7 mb-md-0 mb-3"><img className="position-relative rounded-3 zindex-5" src="assets/img/city-guide/home/new-2.jpg" alt="Article" /></div>
                        <div className="col-md-5">
                        <h3 className="h4 from-top">Mall of Berlin</h3>
                        <ul className="list-unstyled delay-2 from-end">
                            <li className="mb-1 fs-sm"><i className="fi-map-pin text-muted me-2 fs-base" />Ollenhauer Str. 29, 10118</li>
                            <li className="mb-1 fs-sm"><i className="fi-clock text-muted me-2 fs-base" />10:00 – 20:00</li>
                            <li className="mb-1 fs-sm"><i className="fi-wallet text-muted me-2 fs-base" />$$</li>
                        </ul>
                        <p className="pb-2 delay-3 from-end d-none d-lg-block">Sem nibh urna id arcu. Quis tortor vestibulum morbi volutpat. Et duis et sed tellus. Egestas ultrices viverra in pretium nec. Dui ornare fusce vel fringilla scelerisque posuere pharetra ut. Dui donec sapien, dictum nunc varius.</p><a className="btn btn-primary rounded-pill delay-4 scale-up" href="city-guide-single.html">View more<i className="fi-chevron-right fs-sm ms-2" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Carousel custom controls*/}
                <div className="tns-carousel-controls pt-2 mt-4" id="carousel-controls">
                <button className="me-3" type="button"><i className="fi-chevron-left fs-xs" /></button>
                <button type="button"><i className="fi-chevron-right fs-xs" /></button>
                </div>
            </section>
            </Router>
            <Footer />
        </div>
    );
}
export default Home