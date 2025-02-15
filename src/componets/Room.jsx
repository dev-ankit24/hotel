import React from 'react'
import { Link } from 'react-router-dom'
export default function Room() {
  return (
    <>
    
    {/* <!-- Room Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative" height={"110px"}>
                                <img className="img-fluid room-img" src="img/low.jpg" height={"110px"} width={"100%"} alt=""/>
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Junior Suite</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                                    <Link to="/booking" className="btn btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative"  >
                                <img className="img-fluid room-img" src="img/low1.jpg"    width={"100%"} alt=""/>
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Executive Suite</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                                    <Link  to="/booking" className="btn btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative" >
                                <img className="img-fluid room-img" src="img/low.jpg"  alt=""/>
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">&#8377; 1000/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Super Deluxe</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                                    <Link to="/booking" className="btn btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Room End --> */}
    </>
  )
}
