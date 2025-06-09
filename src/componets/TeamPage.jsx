import React from 'react'
import Booking from './partials/Booking'
import Subscribe from './partials/Subscribe'
import Team from './Team'

export default function TeamPage() {
  return (
  <>
  {/* !-- Page Header Start --> */}
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/ban2.png)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Our Customer</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        <Booking/>
        <Team/>
        <div className="container">
        <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <Subscribe/>
  </>
  )
}
