import React from 'react'

import Room from './Room'
import Team from './Team'
import roomData from "./roomData"
export default function RoomPage() {
  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header mb-1 p-0" style={{backgroundImage: "url(img/ban2.png)"}}>
            <div className="container-fluid  py-5">
                <div className="container text-center pb-5">
                    <nav aria-label="breadcrumb">
                        {/* <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Rooms</li>
                        </ol> */}
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        {/* <Booking/> */}
                    <h1 className=" text-center mb-1 animated slideInDown" style={{color:"#B37E48"}}>Rooms</h1>
        <Room/>
       
       
                    
        <Team/>
        {/* <Subscribe/> */}

    </>
  )
}
