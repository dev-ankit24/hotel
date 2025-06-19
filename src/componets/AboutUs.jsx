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
        <div className="container-fluid page-header mb-2 p-0" style={{backgroundImage: "url(/img/Home/slider/Room-small-slider4.jpg)"}}>
            <div className="container-fluid  py-5">
                <div className="container text-center pb-5">
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
                            <h1 className=" text-center" style={{fontFamily: "Playfair Display ", color:"#b37e48" }}>About Us</h1>
        {/* <Booking/> */}
        <About/>
        <Team/>
        {/* <Subscribe/> */}
    
    {/* </HelmetLayout> */}
    </>
  )
}
