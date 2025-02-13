import React from 'react'
import About from './partials/About'
import Booking from './partials/Booking'
import Brand from './partials/Brand'
import Slider from './partials/Slider'
import Subscribe from './partials/Subscribe'
import Testimonials from './partials/Testimonials'
import Room from './Room'
import Services from './Services'
import Team from './Team'

export default function Home() {
  return (
    <>
    <Slider/> 
    <Booking/>
    <About/>
    <Room/>
    <Brand/>
    <Services/>
    {/* <Testimonials/> */}
    <Team/>
    <Subscribe/>
    </>
  )
}
