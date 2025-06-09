import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SuccessBookingPage() {
    let {state}= useLocation()
    let navigate = useNavigate()
    function anotherRes(){
       navigate("/room")
    }
    
  return (
    <div className="container">
        <div className="container-flulid">
            <div className="success-booking-page-parent">
                <div className="success-booking-page-subchild">

                <h2 className='text-center'>Thank You For Your Reservation</h2>
                        <hr />
                  <div className="success-booking-user-details">
                      <div className="success-booking-user-details-left">
                        
                         <p>Reservation Confirmation For</p>
                          <strong>{state?.name}</strong>
                      </div>
                       <div className="success-booking-user-details-right">
                         <p>Reservation Id</p>
                          <strong>{state?.bookingID}</strong>
                      </div>
                  </div>
                    <div className="row">
                        <hr />
                        <div className="col-md-6">
                             <h6>Your Reservation has been Confirmed.</h6>
                             <p>We look forward to seeing you at our hotel soon.</p>
                             <div className="col-md-6 mt-4">
                                        <button className="btn btn-primary w-100 py-3"  onClick={anotherRes} type="submit" >Another Reservation</button>
                                    </div>
                        </div>
                         
                        <div className="col-md-6">
                    <div className="success-booking-page-main-left">
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
                    <div className="success-booking-page-main-right">
                            <div className="confirm-page-price-child">
                                <hr />
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
                                    </div>
                                </div>
                            </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
