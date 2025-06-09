import React from 'react'

import Room from './Room'
import Team from './Team'
import roomData from "./roomData"
export default function RoomPage() {
  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/ban2.png)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Rooms</h1>
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
        <Room/>
       
       
                    
        <Team/>
        {/* <Subscribe/> */}

    </>
  )
}
