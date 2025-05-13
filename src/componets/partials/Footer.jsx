import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    
    
    {/* // <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light footer wow fadeIn mt-5" data-wow-delay="0.1s">
        <div className="container pb-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-4">
                    <div className="bg-primary rounded p-4">
                        <Link to= "/"><h1 className="text-white text-uppercase ">
                            <img src="/img/logotomar.png" alt="footer logo image" height={100} width={150}  />
                            </h1></Link>
                        <p className="text-white mb-0">
          Welcome to Tomar Hospitality, one of the best hospitality service providers in the capital city New Delhi. We are popular among our beloved clients for we shower them with happiness through our quality services Corporate Meeting Rooms, Indian Holiday Packages, Local Sightseeing Delhi, Car Rental services and Same Day Tours in Delhi at affordable Prices
          </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                    <p className="mb-2"><IoLocationSharp className='text-primary fs-5 me-2' />
                                                    <a className='text-light' href="https://www.google.com/maps/place/Conference+Halls+in+Delhi+-+Tomar+Hospitality/@28.6449278,77.189695,20z/data=!4m6!3m5!1s0x390d029f3f257f9d:0xf56901a212d914e4!8m2!3d28.6449761!4d77.1897419!16s%2Fg%2F11j8k958nd?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" target='_blank'> 17A/2, W.E.A. Karol Bagh, New Delhi, 110005</a>
                                                     </p>
                    <p className="mb-2"><FaPhoneAlt  className='text-primary fs-5 me-2'/>
                                                     <a href="tel:+919899145516" className='text-light'>+91 9899145516 </a>
                                                    
                                                    </p>
                    <p className="mb-2"><MdEmail  className='text-primary fs-5 me-2'/>
                                                    <a href="mailto:tomarhospitality@gmail.com" className='text-light'>tomarhospitality@gmail.com</a>
                                                    </p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="https://x.com/TomarConference" target='_blank'><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/tomarhospitality" target='_blank'><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/channel/UC_FGfQHKHQZGlDCFFGAtiUw" target='_blank'><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/tomarhospitality/" target='_blank'><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="row gy-5 g-4">
                        {/* <div className="col-md-6">
                            <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Privacy Policy</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div> */}
                        <div className="col-md-6">
                            <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                            <Link to="/" className="btn btn-link" >Home</Link>
                            <Link to="/about" className="btn btn-link" >About</Link>
                            <Link to="/room" className="btn btn-link" >Room</Link>
                            <Link to="/gallery" className="btn btn-link" >Gallery</Link>
                            <Link to="/contact" className="btn btn-link" >Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy;2025 Tomar Hospitality. All Right Reserved. Developed by <a href="https://www.perfectconsultancy.co/" target="_blank" rel="noopener noreferrer" className='text-primary' >PGC LLP</a> 
          
          {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> */}
                        {/* <br/>Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a> */}
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        {/* <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
{/* </div> */}
    </>

  )
}
