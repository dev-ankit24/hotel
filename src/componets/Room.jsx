import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Room() {
      const [modalId, setModalId] = useState(null);

  const openModal = (id) => {
    setModalId(id);
  };

  const closeModal = () => {
    setModalId(null);
  };
  return (
    <>
    
    {/* <!-- Room Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative" height={"110px"}>
                                <img className="img-fluid" src="/img/room/classic/classic1.jpg" height={"110px"} width={"100%"} alt=""/>
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">&#8377; 1010/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Classic Room</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <a className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => openModal(2)}>Explore</a>
                                    <Link to="/booking" className="btn btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative"  >
                                <img className="img-fluid" src="/img/room/deluxe/deluxe4.jpg"    width={"100%"} alt=""/>
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">&#8377; 1158/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Deluxe Room</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <a class="btn btn-primary  py-2 px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="">Explore</a>
                                    <Link  to="/booking" className="btn btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative" >
                                <img className="img-fluid" src="/img/room/super/super-room3.jpg"  alt=""/>
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">&#8377; 1521/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Super Deluxe Room</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <a   class="btn btn-primary  py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal" href="">Explore</a>
                                    <Link to="/booking" className="btn btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Room End --> */}


        {/* model 1 */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Super Deluxe Room</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">



<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/room/super/super-room1.jpg" class="d-block w-100" alt="super deluxe room image"/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/super/super-room2.jpg" class="d-block w-100" alt="super deluxe room image slider"/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/super/super-room3.jpg" class="d-block w-100" alt="super deluxe room slider"/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/super/super-room4.jpg" class="d-block w-100" alt="super deluxe room slider"/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/super/washrrom.jpg" class="d-block w-100" alt="super deluxe room slider"/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>






      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


{/* modal second */}


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Deluxe Room</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/room/deluxe/deluxe1.jpg" class="d-block w-100" alt="super deluxe room image"/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/deluxe/deluxe2.jpg" class="d-block w-100" alt="super deluxe room image slider"/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/deluxe/deluxe3.jpg" class="d-block w-100" alt="super deluxe room slider"/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/deluxe/deluxe-washroom.jpg" class="d-block w-100" alt="super deluxe room slider"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div>

<p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


{/* third modal */}
 {modalId === 2 && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Classic Room</h1>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                



<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/room/classic/classic1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/classic/classic2.jpg" class="d-block w-100" alt="..2."/>
    </div>
    <div class="carousel-item">
      <img src="/img/room/classic/classic3.jpg" class="d-block w-100" alt="3..."/>
    </div>
     <div class="carousel-item">
      <img src="/img/room/classic/classic-washroom.jpg" class="d-block w-100" alt="3..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>





              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
