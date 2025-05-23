import React from 'react'
import { Link } from 'react-router-dom'

export default function Slider() {
  return (
    <>
    <div class="container-fluid p-0 mb-5">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="/img/Home/slider/classic-slider.jpg" alt="Room Image for Tomer Hospitality"/>
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{maxWidth: "700px"}}>
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Meeting Room</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Meeting Room</h1>
                                <Link to="/room" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Room</Link>
                                {/* <Link to="/contact" href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="/img/Home/slider/deluxe-slider.jpg" alt="Room Image for Tomer Hospitality"/>
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{maxWidth: "700px"}}>
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                <Link to="/room" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Room</Link>
                                {/* <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="/img/Home/slider/super-slider.jpg" alt="Room Image for Tomer Hospitality"/>
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{maxWidth: "700px"}}>
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                <Link to="/room" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Room</Link>
                                {/* <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
  )
}
