import React from 'react'
import Booking from './partials/Booking'
import Subscribe from './partials/Subscribe'
import Testimonials from './partials/Testimonials'
import Services from './Services'

export default function ServicesPage() {
  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/ban3.png)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        <Booking/>
        <Services/>
        <Testimonials/>
        <Subscribe/>
    </>
  )
}
