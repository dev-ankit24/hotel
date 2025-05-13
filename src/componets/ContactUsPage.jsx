import React from 'react'
import Booking from './partials/Booking'
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
export default function ContactUsPage() {
  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/ban3.png)"}}>
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                    <nav aria-label="breadcrumb">
                        {/* <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol> */}
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        {/* <Booking/> */}
        {/* <!-- Contact Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Contact Us</h6>
                    <h1 class="mb-5"><span class="text-primary text-uppercase">Contact</span> For Any Query</h1>
                </div>
                <div class="row g-4">
                    <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Phone</h6>
                                <p><FaPhoneAlt  className='text-dark fs-5 me-2'/>
                                 <a href="tel:+919899145516">+91 9899145516 </a>,
                                 <a href="tel:+91011-43466861">011-43466861</a>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Email</h6>
                                <p> <MdEmail  className='text-dark fs-5 me-2'/>
                                <a href="mailto:tomarhospitality@gmail.com">tomarhospitality@gmail.com</a>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Address</h6>
                                <p><IoLocationSharp className='text-dark fs-5 me-2' />
                                <a href="https://www.google.com/maps/place/Conference+Halls+in+Delhi+-+Tomar+Hospitality/@28.6449278,77.189695,20z/data=!4m6!3m5!1s0x390d029f3f257f9d:0xf56901a212d914e4!8m2!3d28.6449761!4d77.1897419!16s%2Fg%2F11j8k958nd?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" target='_blank'> 17A/2, W.E.A. Karol Bagh, New Delhi, 110005</a>
                                
                                 </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe class="position-relative rounded w-100 h-100"
                            src="https://maps.google.com/maps?q=Conference+Halls+in+Delhi+-+Tomar+Hospitality++17A%2C+Block+7%2C+Block+8A%2C+WEA%2C+Karol+Bagh%2C+New+Delhi%2C+Delhi%2C+110005&output=embed"
                            frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}
    </>
  )
}
