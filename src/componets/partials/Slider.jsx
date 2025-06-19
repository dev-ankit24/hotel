import React from 'react'
import { Link } from 'react-router-dom'

export default function Slider() {
    return (
        <>
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/img/Home/slider/classic-slider.jpg" alt="Room Image for Tomer Hospitality" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "700px" }}>
                                    <h6 className="section-title  text-uppercase mb-3 "style={{color:"#b37e48"}}>Meeting Room</h6>
                                    <h1 className="  mb-4 " style={{color:"#b37e48"}}>Discover A Brand Luxurious Meeting Room</h1>
                                    <Link to="/room" className="btn btn-primary py-md-3 px-md-5 me-3 slideInLeft">Book Room</Link>
                                    {/* <Link to="/contact" href="" className="btn btn-light py-md-3 px-md-5 slideInRight">Book A Room</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/img/Home/slider/deluxe-slider.jpg" alt="Room Image for Tomer Hospitality" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "700px" }}>
                                    <h6 className="section-title  text-uppercase mb-3 " style={{color:"#b37e48"}}>Luxury Living</h6>
                                    <h1 className="  mb-4 " style={{color:"#b37e48"}}>Discover A Brand Luxurious Hotel</h1>
                                    <Link to="/room" className="btn btn-primary py-md-3 px-md-5 me-3 slideInLeft">Book Room</Link>
                                    {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 slideInLeft">Our Rooms</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 slideInRight">Book A Room</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/img/Home/slider/super-slider.jpg" alt="Room Image for Tomer Hospitality" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "700px" }}>
                                    <h6 className="section-title  text-uppercase mb-3 " style={{color:"#b37e48"}}>Luxury Living</h6>
                                    <h1 className="  mb-4 " style={{color:"#b37e48"}}>Discover A Brand Luxurious Hotel</h1>
                                    <Link to="/room" className="btn btn-primary py-md-3 px-md-5 me-3 slideInLeft">Book Room</Link>
                                    {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 slideInLeft">Our Rooms</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 slideInRight">Book A Room</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
