import React, { useEffect, useState } from 'react'
import roomData from "./roomData"
import toast from 'react-hot-toast';
import Formvalidators from './validation/Formvalidators';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaWheelchair, FaWifi } from 'react-icons/fa';
import { TbAirConditioning } from 'react-icons/tb';
import { LuCircleParking } from "react-icons/lu";
import { FiCoffee } from "react-icons/fi";
import { Ri24HoursFill } from "react-icons/ri";
import { MdOutlineLocalOffer } from 'react-icons/md';
import Team from './Team';

export default function BookingPage() {
    let [singelRoom, setSingleRoom]=useState([])
    let navigate = useNavigate()
    // let [roomPostData,setRoomPostData]= useState({})
    let [relatedRoom, setRelatedRoom]= useState([])
    let {_id}= useParams()
     
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

 function getInputData(e) {
    let { value, name } = e.target;

    // Update form data
    setData((prevData) => {
        const updatedData = {
            ...prevData,
            [name]: value
        };

        // Check-in/check-out validation logic
        if (name === "checkIn" || name === "checkOut") {
            setErrorMessage((prevErrors) => {
                const errors = { ...prevErrors };

                const checkInDate = name === "checkIn" ? value : updatedData.checkIn;
                const checkOutDate = name === "checkOut" ? value : updatedData.checkOut;
                const today = new Date().toISOString().split("T")[0];

                // Check-in validations
                if (!checkInDate) {
                    errors.checkIn = "Check-in date is required.";
                } else if (checkInDate < today) {
                    errors.checkIn = "Check-in date cannot be in the past.";
                } else {
                    delete errors.checkIn;
                }

                // Check-out validations
                if (!checkOutDate) {
                    errors.checkOut = "Check-out date is required.";
                } else if (checkOutDate <= checkInDate) {
                    errors.checkOut = "Check-out must be after check-in.";
                } else {
                    delete errors.checkOut;
                }

                return errors;
            });
        }

        // Run Formvalidators for basic fields
        if (
            name === "name" || name === "phone" || name === "email" ||
            name === "adult" || name === "child" || name === "room" || name === "message"
        ) {
            setErrorMessage((prevErrors) => ({
                ...prevErrors,
                [name]: Formvalidators(e)
            }));
        }

        return updatedData;
    });

  
}

 function postData(e) {
  e.preventDefault();

  let error = Object.values(errorMessage).find((x) => x.length > 0);

  if (error) {
    setShow(true);

  } else {
       let diffrent = new Date(data.checkOut)- new Date(data.checkIn)
       let day = diffrent/(1000*60*60*24)
      //  total price
      let totalPrice = singelRoom?.price*day* Number(data.room)
      
      navigate("/confirm/"+_id,{state:{...data, roomPrice:singelRoom?.price ||0, roomtype:singelRoom?.name||"NA", day:day, totalPrice:totalPrice,}})
      
  }


}
 
 
//   single room 
function getSingleRoomData() {
  const item = roomData.find((x) => x._id?.toString() === _id?.toString());
  if (item) {
    setSingleRoom(item);
  } else {
    console.log("Single room record not found");
    
  }
}

// related room
function getRelatedRoom(){
    const room = roomData.filter((x)=>x?._id.toString() !==_id?.toString())
    if(room){
        setRelatedRoom(room)
    }
    else{
        console.log("Related Room Data font found");
    }
    
    
}

useEffect(() => {
  if (roomData.length) {
    getSingleRoomData();
     getRelatedRoom()
  }
}, [roomData]);

 
 


  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header mb-5 p-0" >
            <div className="container-fluid ">
               {
                singelRoom?.img?.[0]?(
                     <img src={singelRoom.img[0]} alt={singelRoom.name} title={singelRoom.name} className='singleRoom-hero-img' />
                ):
                (<p>Loading image...</p>)
               }
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        {/* <Booking/> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Room Booking</h6>
                    <h1 className="mb-5">Book A <span className="text-primary text-uppercase">{singelRoom.name}</span></h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="row g-3">
                             {singelRoom?.img?.length > 0 ? (
                                 <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                                 <div className="carousel-inner">
                                   {singelRoom.img.map((imgUrl, index) => (
                                     <div
                                       className={`carousel-item ${index === 0 ? "active" : ""}`}
                                       key={index}
                                     >
                                       <img src={imgUrl} className="d-block w-100 single-room-slider-img"  alt={`Slide ${index}`} />
                                     </div>
                                   ))}
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
                             ) : (
                               <p>No images available.</p>
                             )}
                                                        
                        </div>
                        <div className="single-page-description">
                           <div>
                             <p><strong>About this property  </strong> <br />{singelRoom.description + "Perfect for couples or solo travelers, this spacious room offers a luxurious retreat with premium comfort and refined elegance. Enjoy modern amenities including high-speed Wi-Fi, plush bedding, a well-appointed en-suite bathroom, and stylish décor that blends sophistication with warmth. Whether you're relaxing after a day of sightseeing or catching up on work, this room provides the ideal balance of comfort and convenience for a memorable stay."}</p>
                            <p><strong>Comfortable Accommodations:</strong> Rooms feature air-conditioning, private bathrooms, bathrobes, and city views. Additional amenities include free WiFi, flat-screen TVs, and work desks.</p>
                              
                              <div>
                                <p><strong>Most popular facilities</strong></p>
                                <div className="row">
                                    <div className="col-md-4 col-6 mt-3">
                                       <span className='me-3 '><FaWifi className='fs-4'/> Wifi</span>
                                    </div>
                                    <div className="col-md-4 col-6 mt-3">
                                       <span className='me-1'><TbAirConditioning className='fs-4'/> Air Conditioning</span>
                                    </div>
                                    <div className="col-md-4 col-6 mt-3">
                                       <span className='me-2'><FaWheelchair className='fs-4'/> Wheel chair</span>
                                    </div>
                                    <div className="col-md-4 col-6 mt-3">
                                       <span className='me-2'><LuCircleParking className='fs-4'/> Free parking</span>
                                    </div>
                                    <div className="col-md-4 col-6 mt-3">
                                       <span className='me-2'><FiCoffee className='fs-4'/> Breakfast</span>
                                    </div>
                                    <div className="col-md-4 col-6 mt-3">
                                       <span className='me-2'><Ri24HoursFill  className='fs-4'/> front desk</span>
                                    </div>
                                </div>
                              </div>

                            
                           
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-light">
                        <div className="wow fadeInUp " data-wow-delay="0.2s">
                            <div className='single-room-price-card-parent'>
                               <div className='single-room-price-card-sub-parent'>
                                 <h6>{singelRoom.name} with Complimentary Wi-fi</h6>
                                <div className='single-room-price-card-child'>
                                   <p className='single-room-price-card-child-left'><MdOutlineLocalOffer className='me-2' />Couple Friendly</p>
                                    <p className='text-success single-room-price-card-child-right '> &#8377; <strong>{singelRoom.price}/night</strong></p>
                                </div>
                               </div>
                            </div>
                            <form onSubmit={postData}>
                                <div className="row g-3 ">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" onChange={(getInputData)} name='name' className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.name}</p>:""}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="number" onChange={(getInputData)} name='phone' className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Phone*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.phone   }</p>:""}
                                        </div>
                                    </div>
                                     <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email" onChange={(getInputData)} name='email' className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.email   }</p>:""}

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 col-sm-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input
                                                    type="date"
                                                    className='form-control'
                                                    id="checkin"
                                                    name='checkIn'
                                                    onChange={getInputData}
                                                />
                                                <label htmlFor="checkin">Check In*</label>
                                                {show && errorMessage.checkIn && (
                                                    <p className='text-danger'>{errorMessage.checkIn}</p>
                                                )}
                                            </div>
                                        </div>

                                          <div className="col-md-6 col-6 col-sm-6">
                                              <div className="form-floating date" id="date4" data-target-input="nearest">
                                                  <input
                                                      type="date"
                                                      className='form-control'
                                                      id="checkout"
                                                      name='checkOut'
                                                      onChange={getInputData}
                                                  />
                                                  <label htmlFor="checkout">Check Out*</label>
                                                  {show && errorMessage.checkOut && (
                                                      <p className='text-danger'>{errorMessage.checkOut}</p>
                                                  )}
                                              </div>
                                          </div>

                                    <div className="col-md-4 col-6 col-sm-6">
                                        <div className="form-floating">
                                          <select class="form-select form-select-sm"  onChange={(getInputData)} name='adult' aria-label="Small select example">
                                              <option selected >select  Adult</option>
                                              <option  >1 Adult</option>
                                              <option >2 Adult</option>
                                            </select>
                                            {/* <input type="number" onChange={(getInputData)} name='adult' className="form-control datetimepicker-input" /> */}
                                            <label for="select1">Select Adult*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.adult   }</p>:""}

                                          </div>
                                    </div>
                                    <div className="col-md-4 col-6 col-sm-6">
                                        <div className="form-floating">
                                            {/* <input type="number" onChange={(getInputData)} name='child'  className="form-control datetimepicker-input" /> */}
                                            <select class="form-select form-select-sm" name='child' onChange={(getInputData)} aria-label="Small select example">
                                              <option selected >selecet Child</option>
                                              <option  >1 Child </option>
                                              <option >2 Child</option>
                                            </select>
                                            <label for="select2">Select Child*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.child   }</p>:""}

                                          </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="form-floating">
                                            <select class="form-select form-select-sm" name='room' onChange={(getInputData)} aria-label="Small select example">
                                              <option selected >selecet A room</option>
                                              <option value="1"  >1 Room </option>
                                              <option value="2"   >2 Room</option>
                                              <option value="3"   >3 Room</option>
                                              <option value="4"   >4 Room</option>
                                              <option value="5"   >5 Room</option>
                                              <option value="6"   >6 Room</option>
                                              <option value="7"   >7 Room</option>
                                              <option value="8"   >8 Room</option>
                                              <option value="9"   >9 Room</option>
                                              <option value="10"   >10 Room</option>
                                            </select>
                                            {/* <input type="number" onChange={(getInputData)} name='room' className="form-control datetimepicker-input" /> */}
                                            <label for="select3">Select A Room*</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.room}</p>:""}
                                          </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" onChange={(getInputData)} name='message' placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                            <label for="message">Special Request</label>
                                            {show && errorMessage ?<p className='text-danger'>{errorMessage.message   }</p>:""}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" >Reserve</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                    {/* map */}
                   <div className='single-room-map-parent'> 
                       <div className='single-room-map-child'>
                        <h5>Location of Tomar Hospitality {singelRoom.name}</h5>
                           <iframe class="position-relative rounded w-100 " 
                            src="https://maps.google.com/maps?q=Conference+Halls+in+Delhi+-+Tomar+Hospitality++17A%2C+Block+7%2C+Block+8A%2C+WEA%2C+Karol+Bagh%2C+New+Delhi%2C+Delhi%2C+110005&output=embed"
                            frameborder="0" style={{minHeight: "400px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"/>
                        </div>                              
                    </div>



                    {/* related room */}
                    <div className="single-page-related-room-parent">
                        
                            <h5>Related Room of Tomar Hospitality</h5>
                       
                           {/* <div className="row mb-5">
                             {
                     relatedRoom?.map((item,index)=>{
                       return(
                        <>
                         <div className="col-lg-4 col-md-6 mt-3 m wow fadeInUp"  key={index} data-wow-delay="0.1s">
                                   <div className="room-item shadow rounded overflow-hidden " >
                                     <div className="position-relative" >
                                       <img className="img-fluid" src={item.img[0]} height={"110px"} width={"100%"} alt="" />
                                       <small className="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">&#8377;{item.price}/night</small>
                                     </div>
                                     <div className="p-4 mt-2">
                                       <div className="d-flex justify-content-between mb-3">
                                         <h5 className="mb-0">{item.name}</h5>
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
                                       <p className="text-body mb-3" style={{ textAlign: "justify" }}> {item.description}</p>
                                       <div className="d-flex justify-content-between">
                                         
                                         <Link to={`/booking/${item._id} `} className="btn btn-sm btn-dark w-100 rounded py-2 px-4" >Book Now</Link>
                                       </div>
                                     </div>
                                   </div>
                                      </div>
                        </>
                    )
                })
                 }
                           </div> */}
                            <div className="row g-4">

             {
              roomData?.slice("0","3").map((item,index)=>{
                return(
                  <>
                  <div className="col-lg-4 col-md-6 wow fadeInUp"  key={index} data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden " >
                <div className="position-relative" >
                  <img className="img-fluid" src={item.img[0]} height={"110px"} width={"100%"} alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">&#8377;{item.price}/night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{item.name}</h5>
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
                  <p className="text-body mb-3" style={{ textAlign: "justify" }}> {item.description}</p>
                  <div className="d-flex justify-content-between">
                  
                    <Link to={`/booking/${item._id}`} className="btn w-100 btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                  </div>
                </div>
              </div>
                 </div>
                  </>
                )
              })
             }




            
           

          </div>

             <div className="row ">
             {
              roomData?.slice("3","5").map((item,index)=>{
                return(
                  <>
                  <div className="col-lg-4 mt-4 mb-3  m-auto col-md-6 wow fadeInUp"  key={index} data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden " >
                <div className="position-relative" >
                  <img className="img-fluid" src={item.img[0]} height={"110px"} width={"100%"} alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">&#8377;{item.price}/night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{item.name}</h5>
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
                  <p className="text-body mb-3" style={{ textAlign: "justify" }}> {item.description}</p>
                  <div className="d-flex justify-content-between">
                   
                    <Link to={`/booking/${item._id}`} className="btn w-100 btn-sm btn-dark rounded py-2 px-4" >Book Now</Link>
                  </div>
                </div>
              </div>
                 </div>
                  </>
                )
              })
             }


            
          

          </div>
                    </div>


                </div>
            </div>
        </div>
             <div className="single-room-testimonials">
            <Team/>
           </div>

        
        {/* // <!-- Booking End -->s */}
        
    </>
  )
}
