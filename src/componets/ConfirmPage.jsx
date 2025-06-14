import React, { useEffect, useState } from 'react'
import {  useLocation, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

export default function ConfirmPage() {
    const [bookingID, setBookingID] = useState('');
     const { state } = useLocation();
     let navigate = useNavigate()
      
    //   const location = useLocation();
    //   const data = location.state;
        // console.log(state);
        
    //    console.log(data);
     
    // get data 
    // function getData(){
    //     let item = roomstate.find(x=>x?._id?.toString()=== _id?.toString())
    //     if(item){
    //         setRoom(item)
    //     }
    //     else
    //     console.log("record not found ");
        
    // }

    //  day count
    // function dayCount(){
    //     const checkIn = new Date(state.checkIn);
    //     const checkOut = new Date(state.checkOut);
    //     const timeDifference = checkOut - checkIn;
    //     var day = timeDifference / (1000 * 60 * 60 * 24);
    //     console.log(dayCount);
        
    // }
        // console.log(data);
        
      
    // useEffect(()=>{
    //     if(roomstate.length){
    //         // getData()
    //         // dayCount()
    //     }
    // },[roomData])
   async function postAPIData(){

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let id = "";
      for (let i = 0; i < 6; i++) {
        id += letters.charAt(Math.floor(Math.random() * letters.length));
      }
        const newID = id;
        setBookingID(newID);
          const allData = { ...state, bookingID: newID };
        try {
         let res = await fetch("https://tomerhospitality-backend.onrender.com/api/roomquery",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(allData)
         })
         res = await res.json()
         if(res.result==="Done"){
            toast.success("Your BooKing has been Confirme")
           
            navigate("/success", {state:allData})
         }
         else{
            console.log("Result Not found");
            
         }

        } catch (error) {
            console.log("Internal Server Error");
        }
    }

    
  return (
    <>
    <div className="container">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 confirm-page-parent">
                    <div className="confirm-page-child">
                        <h5 className='text-center mb-3 mt-2'>Your Details</h5>
                          <form >
                                <div className="row g-3 ">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input disabled type="text"  name='name' value={state.name} className="form-control" id="name" />
                                            <label for="name">Your Name</label>
                                            {/* {show && errorMessage ?<p className='text-danger'>{errorMessage.name}</p>:""} */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input disabled type="number"  name='phone' value={state.phone} className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Phone</label>
                                            {/* {show && errorMessage ?<p className='text-danger'>{errorMessage.phone   }</p>:""} */}
                                        </div>
                                    </div>
                                     <div className="col-md-12">
                                        <div className="form-floating">
                                            <input disabled type="email"  name='email' value={state.email} className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                            {/* {show && errorMessage ?<p className='text-danger'>{errorMessage.email   }</p>:""} */}

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 col-sm-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input disabled
                                                 value={state.checkIn}
                                                    type="date"
                                                    className='form-control'
                                                    id="checkin"
                                                    name='checkIn'
                                                    
                                                />
                                                <label htmlFor="checkin">Check In</label>
                                                {/* {show && errorMessage.checkIn && (
                                                    <p className='text-danger'>{errorMessage.checkIn}</p>
                                                )} */}
                                            </div>
                                        </div>

                                          <div className="col-md-6 col-6 col-sm-6">
                                              <div className="form-floating date" id="date4" data-target-input="nearest">
                                                  <input disabled
                                                      type="date"
                                                    value={state.checkOut}
                                                      className='form-control'
                                                      id="checkout"
                                                      name='checkOut'
                                                     
                                                      
                                                  />
                                                  <label htmlFor="checkout">Check Out</label>
                                                  {/* {show && errorMessage.checkOut && (
                                                      <p className='text-danger'>{errorMessage.checkOut}</p>
                                                  )} */}
                                              </div>
                                          </div>

                                    <div className="col-md-4 col-6 col-sm-6">
                                        <div className="form-floating">

                                          {/* <select class="form-select form-select-sm" value={state.adult} disabled  name='adult' aria-label="Small select example">
                                              <option selected  >select  Adult</option>
                                              <option  >1 Adult</option>
                                              <option >2 Adult</option>
                                            </select> */}
                                            <input disabled type="number"  name='adult' placeholder={`${state?.adult} `} className="form-control datetimepicker-input" />
                                           <label for="select3">{`${state?.adult} `}</label>    
                                            {/* {show && errorMessage ?<p className='text-danger'>{errorMessage.adult   }</p>:""} */}

                                          </div>
                                    </div>
                                    <div className="col-md-4 col-6 col-sm-6">
                                        <div className="form-floating">
                                            <input disabled type="number"  name='child' placeholder={state?.child}  className="form-control datetimepicker-input" />
                                            {/* <select class="form-select form-select-sm" value={state.child} disabled  name='child'  aria-label="Small select example">
                                              <option selected  >selecet Child</option>
                                              <option  >1 Child </option>
                                              <option >2 Child</option>
                                            </select> */}
                                            <label for="select3">{`${state?.child} `}</label>    
                                            {/* {show && errorMessage ?<p className='text-danger'>{errorMessage.child   }</p>:""} */}

                                          </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="form-floating">
                                            {/* <select class="form-select form-select-sm" value={state?.room} disabled name='room'  aria-label="Small select example">
                                              <option selected >selecet A room</option>
                                               <option value="1">1 Room</option>
                                               <option value="2">2 Room</option>
                                               <option value="3">3 Room</option>
                                               <option value="4">4 Room</option>
                                               <option value="5">5 Room</option>
                                               <option value="6">6 Room</option>
                                               <option value="7">7 Room</option>
                                               <option value="8">8 Room</option>
                                               <option value="9">9 Room</option>
                                               <option value="10">10+ Room</option>
                                            </select> */}
                                            <input disabled type="number"   name='room' placeholder={state?.room} className="form-control datetimepicker-input" />
                                            <label for="select3">{`${state?.room} Room`}</label>
                                            {/* {show && errorMessage ?<p className='text-danger'>{errorMessage.room}</p>:""} */}
                                          </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" value={state.message} disabled  name='message' placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                            <label for="message">Your Message</label>
                                            {/* {show && errorMessage ?<p className='text-danger'>{errorMessage.message   }</p>:""} */}
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" >Book Now</button>
                                    </div> */}
                                </div>
                            </form>

                         {/* <div className="row">
                            <div className="col-md-4 ">
                                   <div>
                                <strong>Your Name</strong>
                                <p>{state?.name}</p>
                            </div>
                            
                            </div>
                             <div className="col-md-4">
                            <div>
                                <strong>Your Phone</strong>
                                <p> +91 {state?.phone}</p>
                            </div>
                            
                            </div>
                            <div className="col-md-4">
                                <div>
                                <strong>Your Email</strong>
                                <p>{state?.email}</p>
                            </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <strong>Check-in</strong>
                                <p>{state?.checkIn}</p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <strong>Check-out</strong>
                                <p>{state?.checkOut}</p>
                              </div>
                            </div>
                         </div> */}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="confirm-page-right-parent">
                         <div className="confirm-page-room-details-parent">
                             <h5>{state?.roomname}</h5>
                              <h6>Your Booking Details</h6>
                              <div className="confirm-page-check-parent">
                                <div className="confirm-page-checkIn">
                                     <p>Check-in <br /><strong>{new Date (state.checkIn).toLocaleDateString("en-GB").replaceAll("/","-")}</strong></p>
                                     <div></div>
                                   </div>
                                   <div className="confirm-page-checkIn">
                                       <p>Check-out <br /><strong>{new Date(state.checkOut).toLocaleDateString("en-GB").replaceAll("/","-")}</strong></p>
                                    </div>
                                 

                              </div>
                                 <p>Total Night of Stay <br /><strong>{state?.day} night</strong></p>
                                 
                         </div>
                         
                    </div>
                    <div className="confirm-page-price-parent">
                            <div className="confirm-page-price-child">
                                <h5>Your price summary</h5>
                                <div className="confirm-page-price-sub-child">
                                    <div className="confirm-page-price-total">
                                        <span className='price-total'>Total</span> 
                                        <span>&#8377; {state?.totalPrice}
                                        </span>
                                            
                                    </div>
                                    <div className="confirm-page-price-gst">
                                        <small >Includes all taxes and charges</small>
                                    </div>

                                      <div className="col-12 mt-4">
                                        <button className="btn btn-primary w-100 py-3" onClick={postAPIData} type="submit" >Book Now</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
