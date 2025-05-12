import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const alert1 = () => {
        alert("Sorry !! Login Not Allow");
    };

    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 992;
            const dropdowns = document.querySelectorAll('.navbar .dropdown');

            dropdowns.forEach(dropdown => {
                if (isDesktop) {
                    // Hover open for desktop
                    dropdown.addEventListener('mouseenter', () => {
                        dropdown.classList.add('show');
                        dropdown.querySelector('.dropdown-menu').classList.add('show');
                    });
                    dropdown.addEventListener('mouseleave', () => {
                        dropdown.classList.remove('show');
                        dropdown.querySelector('.dropdown-menu').classList.remove('show');
                    });
                } else {
                    // Remove listeners for mobile
                    dropdown.removeEventListener('mouseenter', () => {});
                    dropdown.removeEventListener('mouseleave', () => {});
                }
            });
        };

        handleResize(); // Call on load
        window.addEventListener('resize', handleResize); // Call on resize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="container-fluid bg-dark px-0" >
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <NavLink to=" " className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 text-primary text-uppercase">
                                <img src="/img/logotomar.png" alt="tomar logo image" height={150} width={150} />
                            </h1>
                        </NavLink>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-dark me-2"></i>
                                    <p className="mb-0"><a href="mailto:tomarhospitality@gmail.com">tomarhospitality@gmail.com</a></p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-dark me-2"></i>
                                    <p className="mb-0"><a href="tel:+919899145516">+91 9899145516</a></p>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <a className="me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="me-3" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="me-3" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="" href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>

                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">
                                    <img src="/img/logotomar.png" alt="tomar logo image" height={80} width={100} />
                                </h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>

                                    <div className="nav-item dropdown">
                                        <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Hotel</NavLink>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <NavLink to="/service" className="dropdown-item ">Hotel SPB-87</NavLink>
                                            <NavLink to="/service1" className="dropdown-item">Hotel Siam International</NavLink>
                                            
                                        </div>
                                    </div>

                                    <NavLink to="/room" className="nav-item nav-link">Rooms</NavLink>
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>
                                <button className='btn btn-primary login' onClick={alert1}>Book Now</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
