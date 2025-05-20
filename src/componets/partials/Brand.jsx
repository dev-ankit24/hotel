import React from 'react'
import { Link } from 'react-router-dom'
export default function Brand() {
  return (
    <>
    {/* <!-- Video Start --> */}
        <div class="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div class="row g-0">
                <div class="col-md-6 bg-dark d-flex align-items-center">
                    <div class="p-5  brand-btn">
                        <h6 class="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
                        <h1 class="text-white mb-4">Discover A Tomar Hospitality Luxurious Rooms</h1>
                        <p class="text-white mb-4">Modern comfort meets timeless elegance. Prime location, warm service. Unwind, relax, and stay with style. Where every moment feels just right.</p>
                        
                        <div className='brand-btn1'>
                        {/* <Link to="/room" href="" class="btn btn-primary py-md-3 px-md-5 me-3">Our Rooms</Link> */}
                        <Link to="/booking" class="btn btn-light brand-btn py-md-3 px-md-5">Book A Room</Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">

                    <div class="video">
                    <img src="/img/Home/slider/multi-frame.png" className='brand-img'   alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                    
                    </div>
                    <div class="modal-body">
                        <!-- 16:9 aspect ratio -->
                        <div class="ratio ratio-16x9">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Video Start --> */}
    </>
  )
}
