import React from 'react'
import { Link } from 'react-router-dom'
export default function Brand() {
  return (
    <>
    {/* <!-- Video Start --> */}
        <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5  brand-btn">
                        <h6 className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
                        <h1 className="text-white mb-4">Discover A Tomar Hospitality Luxurious Rooms</h1>
                        <p className="text-white mb-4">Modern comfort meets timeless elegance. Prime location, warm service. Unwind, relax, and stay with style. Where every moment feels just right.</p>
                        
                        <div className='brand-btn1'>
                        {/* <Link to="/room" href="" className="btn btn-primary py-md-3 px-md-5 me-3">Our Rooms</Link> */}
                        <Link to="/booking" className="btn btn-light brand-btn py-md-3 px-md-5">Book A Room</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">

                    <div className="video">
                    <img src="/img/Home/slider/multi-frame.png" className='brand-img'   alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                    
                    </div>
                    <div className="modal-body">
                        <!-- 16:9 aspect ratio -->
                        <div className="ratio ratio-16x9">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Video Start --> */}
    </>
  )
}
