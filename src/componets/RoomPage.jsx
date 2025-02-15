import React from 'react'
import Booking from './partials/Booking'
import Subscribe from './partials/Subscribe'
import Testimonials from './partials/Testimonials'
import Room from './Room'

export default function RoomPage() {
  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/ban2.png)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Rooms</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Rooms</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        <Booking/>
        <Room/>
        <div className="container-xxl py-5">
             <div className="container">
             <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid  room-img" src="img/low3.jpg" alt=""/>
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
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid room-img" src="img/low.jpg" alt=""/>
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
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid room-img" src="img/low5.jpg" alt=""/>
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
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
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <Testimonials/>
        <Subscribe/>

    </>
  )
}
