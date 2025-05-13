import React from 'react'

export default function HotelAmritVilla() {
  return (
    <>
     <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(/img/Home/slider/Room-small-slider2.jpg)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Hotel Amrit villa </h1>
                    <nav aria-label="breadcrumb">
                       
                    </nav>
                </div>
            </div>
        </div>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner" style={{height:"550px"}}>
    <div className="carousel-item active">
      <img src="/img/hotel-87/hotel-87.jpg" className="d-block w-100" alt="slider Hotel  "/>
    </div>
    <div className="carousel-item">
      <img src="/img/hotel-87/hotel-871.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/img/room/all-room/room4.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/img/room/all-room/room8.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  <div className="container">
      <div className="container-fluid">
        <div className="row">
        <div className="hotel-spb-87">
          <h2 className="text-center">Request For <span>Hotel Amrit Villa </span>Room Booking</h2>
          <div className="hotel-spb-87-line m-auto "></div>
          <p className="text-center">Please leave us your requirements here and we will get back to you. You may also call us at +91-9899145516</p>
        </div>

        <div className="col-md-12 ">
                      <div className="hotel-spb-form">
                            <h3 className="text-center">Query Form </h3>
                            <form>


                  <div className="row">
                     <div className="mb-3 col-md-4 col-sm-4 col-12 ">
                         <label for="exampleInputEmail1" className="form-label">Name*</label>
                         <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Full Name....." aria-describedby="emailHelp"/>
                       </div>
                       <div className="mb-3 col-md-4 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label">Email*</label>
                         <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Email Address..... "/>
                       </div>
                       <div className="mb-3 col-md-4 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label">Phone*</label>
                         <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Phone ....."/>
                       </div>
                  </div>
                  <div className="row">
                     <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputEmail1" className="form-label">Check In*</label>
                         <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                       </div>
                       <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label">Check Out*</label>
                         <input type="date" className="form-control" id="exampleInputPassword1"/>
                       </div>
                       <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label">Select Hotel*</label>
                         <select class="form-select" aria-label="Default select example">
                           <option selected>Hotel SPB-87  </option>
                           <option value="1"> Hotel Amrit Villa</option>
                           <option value="2">Other</option>
                         </select>
                       </div>
                       <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label">No Attendees*</label>
                         <input type="text" className="form-control" id="exampleInputPassword1" placeholder="No. of Attendess...."/>
                       </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">Message*</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a Message ....."></textarea>
                    </div>
                  </div>
  
            <button type="submit" className="btn btn-primary">Submit</button>
           </form>
                      </div>
          </div>
      </div>
      </div>
  </div>

    </>
  )
}
