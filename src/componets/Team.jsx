import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
export default function Team() {
  return (
<>
<div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Customer</h6>
                    <h1 className="mb-5">Customer  <span className="text-primary "> Review</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid-team" src="/img/cus1.jpg" alt=""/>
                                {/* <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div> */}
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Keshav Dutt</h5>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                {/* <small>Designation</small> */}
                                <p><sup><RiDoubleQuotesL className='text-success fs-3' /></sup>We reserved the hall for a modest family gathering. Everything went without a hitch. The food was delicious, and the service. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid-team" src="/img/cus2.jpg" alt=""/>
                                {/* <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div> */}
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Aryan </h5>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-half text-warning"></i>
                                {/* <small>Designation</small> */}
                                <p><sup><RiDoubleQuotesL className='text-success fs-3' /></sup>Being close to the metro makes the location extremely convenient. The rooms were comfortable and well-kept. Overall, good value. </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid-team" src="/img/cus3.jpg" alt=""/>
                                {/* <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div> */}
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Vijay Raj Singh</h5>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-half text-warning"></i>
                                {/* <small>Designation</small> */}
                                <p><sup><RiDoubleQuotesL className='text-success fs-3' /></sup>I stayed here on a business trip; the rooms were clean, the staff was helpful, and the hotel was well-run." I would highly recommend.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid-team" src="/img/cus41.jpg" alt=""/>
                                {/* <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div> */}
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Prem Malhotra</h5>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-half text-warning"></i>
                                {/* <small>Designation</small> */}
                               <p> <sup><RiDoubleQuotesL className='text-success fs-3' /></sup> I thought the event area was set up well. We had what we needed, including a projector, microphone, and comfortable seats.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}
</>
    )
}
