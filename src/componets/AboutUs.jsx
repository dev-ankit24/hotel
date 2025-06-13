import React from 'react'
import About from './partials/About'

import Team from './Team'
// import { HelmetProvider } from 'react-helmet-async'
import HelmetLayout from "./HelmetLayout"

export default function AboutUs() {
  return (
    <>
    {/* <HelmetLayout
                title ="tomar|Abouts page"
                description="Lorem1 jkfdsfjk kljslfj slfkjlkj slkfj lkjs flksdjf "
                pageLink="https://www.tomarhospitality.com/about"
      
   > */}
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(/img/Home/slider/Room-small-slider4.jpg)"}}>
            <div className="container-fluid  py-5">
                <div className="container text-center pb-5">
                    <h1 className=" text-white mb-3 " style={{fontFamily: "Playfair Display ", }}>About Us</h1>
                    <nav aria-label="breadcrumb">
                        {/* <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol> */}
                    </nav>
                </div>
            </div>
        </div>
        {/* <Booking/> */}
        <About/>
        <Team/>
        {/* <Subscribe/> */}
    
    {/* </HelmetLayout> */}
    </>
  )
}
