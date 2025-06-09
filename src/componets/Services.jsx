import React from 'react'
import { FaWifi } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
export default function Services() {
  return (
    <>
    {/* <!-- Service Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                   <FaWifi className='fs-2' />
                                </div>
                            </div>
                            <h5 className="mb-3">Free Internet</h5>
                            <p className="text-body mb-0">Throughout your stay, stay connected with free, fast wifi internet.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <a className="service-item rounded" href="/">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                  <GiCoffeeCup className='fs-2' />
                                </div>
                            </div>
                            <h5 className="mb-3">Coffee & Tea Excellent</h5>
                            <p className="text-body mb-0">Savor a variety of fine teas and freshly prepared coffee at any time.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="service-item rounded" href="/">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <TbAirConditioning className='fs-2' />
                                </div>
                            </div>
                            <h5 className="mb-3">AC Rooms</h5>
                            <p className="text-body mb-0">Unwind in our air-conditioned rooms, which have been thoughtfully constructed for your convenience and comfort.</p>
                        </a>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <a className="service-item rounded" href="/">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-swimmer fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Sports & Gaming</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div> */}
                    {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="service-item rounded" href="/">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-glass-cheers fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Event & Party</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div> */}
                    {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-dumbbell fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">GYM & Yoga</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}
    </>
  )
}
