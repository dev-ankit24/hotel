import React from 'react'
import About from './partials/About'
import Booking from './partials/Booking'
import Subscribe from './partials/Subscribe'
import Team from './Team'

export default function AboutUs() {
  return (
    <>
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-1.jpg)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <Booking/>
        <About/>
        <Team/>
        <Subscribe/>
    </>
  )
}
