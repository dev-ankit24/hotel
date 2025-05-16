
export default function About() {
  return (
    <>
     {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Tomar Hospitality</span></h1>
                        <p className="mb-1 " style={{textAlign:"justify"}}>
                            At Tomar Hospitality we offer comfortable room accommodations hourly rooms for meetings and versatile event spaces including conference halls seminar rooms banquet halls and party venues in Karol Bagh near Karol Bagh Metro Station New Delhi.
                            Our two hotels Hotel Amrit Villa and Hotel Siam International are perfect for business and leisure stays corporate events training sessions weddings parties and social gatherings.
                            All venues are fully equipped with ergonomic seating projectors sound systems free Wi-Fi and refreshments including vegetarian and non-vegetarian options from our in-house restaurant.
                            Whether you need a room to stay a meeting space by the hour or a hall for your event Tomar Hospitality guarantees comfort and quality service.
                            
                            </p>
                        {/* <p className="mb-1">Hotel SPB 87 must be your next venue for social gathering, wedding events, birthdays and DJ nights. Tomar Hospitality brings in for you very spacious yet comfortable and modern facilities for corporate events, coaching classes, training classes, and various professional latest meets.</p> */}
                       {/* <p className="mb-1">The renowned Tomar Hospitality provides a capacity of 150 per pax for any event. The auditoriums are fully furnished with comfortable chairs tied with red ribbons and round tables wrapped in white tablecloths. This area is also facilitated with projectors and white screens, HD sound systems with hands-free mic or lapel mics. Free Wi-Fi is provided with complimentary tea and snacks on behalf of the restaurants.</p> */}
                        {/* <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">34</h2>
                                        <p className="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">23</h2>
                                        <p className="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">634 +</h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a> */}
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12 " >
                        <div className="row g-3">
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
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
    </>
  )
}
