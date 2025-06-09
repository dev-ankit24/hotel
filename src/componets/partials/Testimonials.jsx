import React from 'react'

export default function Testimonials() {
  return (
    <>
    {/* !-- Testimonial Start --> */}
    <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="owl-carousel testimonial-carousel py-5">
                <h1>hello</h1>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>I stayed here on a business trip; the rooms were clean, the staff was helpful, and the hotel was well-run." I would highly recommend it if you happen to be around.</p>
                        <div className="d-flex align-items-center">
                            {/* <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: "45px", height: "45px"}}/> */}
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>We reserved the hall for a modest family gathering. Everything went without a hitch. The food was delicious, and the service was excellent. Many thanks to the crew.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: "45px", height: "45px"}}/>
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>Being close to the metro makes the location extremely convenient. The rooms were comfortable and well-kept. Overall, good value.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: "45px" ,height: "45px"}}/>
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
