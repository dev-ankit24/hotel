import React, { useState } from 'react'
import Booking from './partials/Booking'
import Subscribe from './partials/Subscribe'
import toast from 'react-hot-toast';
import Formvalidators from './validation/Formvalidators';
export default function BookingPage() {
    let [data, setData]= useState({
        name:"",
        phone:"",
        email:"",
        checkIn:"",
        checkOut:"",
        adult:"",
        child:"",
        room:"",
        message:""
    })
    let [show, setShow] = useState(false)
    let [errorMessage, setErrorMessage]= useState({
        name:"Name Field is Required",
        phone:"Phone Field Is Required",
        email:"Email Field Is Required",
        checkIn:"CheckIn Field Is Required",
        checkOut:"ChekOut Field Is Required ",
        adult:"Adult Field Is Required",
        child:"Child Field Is Required",
        room :"Room Field Is Required",
        message:"Message Field Is Required"
    })

    function getInputData(e){
        let{value,name}= e.target;
        if(name==="name"||name==="phone"||name==="email"||name==="checkIn"|| name==="checkOut"||name==="adult"||name==="child"|| name==="room"||name==="message"){
            setErrorMessage((x)=>{
                return{
                    ...x,
                    [name]:Formvalidators(e)
                }
            })
        }
        setData((x)=>{
            return{
                ...x,
                [name]:value
            }
        })
        console.log(data);
        
    }
async function postData(e) {
  e.preventDefault();

  let error = Object.values(errorMessage).find((x) => x.length > 0);
  console.log(error);

  if (error) {
    setShow(true);
    console.log(error);
  } else {
    console.log("Sending request...");

    try {
      let res = await fetch("http://localhost:5000/api/roomquery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ Fixed here
        },
        body: JSON.stringify({ ...data }),
      });

      res = await res.json();
      console.log(res);

      if (res.result === "Done") {
        toast.success("Room Booked Successfully");
        window.location.reload();
      } else {
        console.log("Error: Record not Found");
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  }
}




  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/ban2.png)"}}>
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                    <nav aria-label="breadcrumb">
                        {/* <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Booking</li>
                        </ol> */}
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        {/* <Booking/> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Room Booking</h6>
                    <h1 class="mb-5">Book A <span class="text-primary text-uppercase">Luxury Room</span></h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="row g-3">
                             <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/img/room/classic/classic1.jpg" style={{marginTop: "25%"}}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/img/room/deluxe/deluxe3.jpg"/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/img/room/super/Super-room4.jpg"/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/img/room/all-room/room7.webp"/>
                            </div>
                           
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={postData}>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" onChange={(getInputData)} name='name' class="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.name}</p>:""}
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="number" onChange={(getInputData)} name='phone' class="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Phone*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.phone   }</p>:""}
                                        </div>
                                    </div>
                                     <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="email" onChange={(getInputData)} name='email' class="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.email   }</p>:""}

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="date" className='form-control' name='checkIn' onChange={getInputData} />
                                            <label for="checkin">Check In*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.checkIn   }</p>:""}
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating date" id="date4" data-target-input="nearest">
                                            <input type="date" className='form-control' name='checkOut' onChange={getInputData} />
                                            <label for="checkout">Check Out*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.checkOut}</p>:""}

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="number" onChange={(getInputData)} name='adult' class="form-control datetimepicker-input" />
                                            <label for="select1">Enter Adult*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.adult   }</p>:""}

                                          </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="number" onChange={(getInputData)} name='child' class="form-control datetimepicker-input" />
                                            <label for="select2">Enter Child*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.child   }</p>:""}

                                          </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="number" onChange={(getInputData)} name='room' class="form-control datetimepicker-input" />
                                            <label for="select3">Enter A Room*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.room}</p>:""}
                                          </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" onChange={(getInputData)} name='message' placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                            <label for="message">Special Request</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.message   }</p>:""}
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // <!-- Booking End -->s */}
        {/* <Subscribe/> */}
    </>
  )
}
