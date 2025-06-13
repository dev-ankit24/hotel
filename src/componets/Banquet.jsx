import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function Banquet() {
  const NonVegMenu = () => {
    const pdfUrl = '/menu/Tomar-Hospitality-Non-Veg.Menu.pdf';

    // 1. Open PDF in a new tab
    window.open(pdfUrl, '_blank');

    // 2. Download PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Tomar-Hospitality-Non-Veg.Menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    const VegMenu = () => {
       const pdfUrl = '/menu/Tomar-Hospitality-Veg.-Menu.pdf';

    // 1. Open PDF in a new tab
    window.open(pdfUrl, '_blank');
    const link = document.createElement('a');
    link.href = '/menu/Tomar-Hospitality-Veg.-Menu.pdf'; 
    link.download = 'Tomar-Hospitality-Veg.-Menu.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
   <>
    <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(/img/banquet/banquet.jpg)"}}>
            <div className="container-fluid  py-5">
                <div className="container text-center  pb-5">
                     <div className="banquet-hero-bg-parnet">
                        <h3 className=" fs-3 text-dark mb-3  ">
                          Banquet Hall-Delhi-Wedding Hall Karol Bagh
                        </h3>
                     </div>
                     <nav aria-label="breadcrumb">
                        {/* <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol> */}
                    </nav>             
                </div>
            </div>
    </div>
    <div className="container">
              <div className="container-fluid">
                 <div className="row">
                            <div className="col-md-6">
                              <div className="banquet-left">
                                <img src="/img/banquet/banquet1.jpg" alt="" />
                              </div>
                            </div>

                              <div className="col-md-6">
                                <div className="banquet-right">
                                  <h2>Banquet Halls in Delhi - Tomar Hospitality</h2>
                                  <p>Banquet Hall Delhi: Hotel SPB 87 Karol Bagh
                              Tomar Hospitality offer Banquet hall delhi, wedding hall karol bagh & party venue near karol bagh metro. We provide banquet venue with decoration service like balloon & flower decoration. Party space available for Weddings/Birthday Party/Kitty Parties/Anniversaries/Receptions.</p>
                                  <p>Tomar Hospitality provide banquet hall delhi, party hall karol bagh, wedding venue near karol bagh metro & night dinner d.j party space. We known for the best event planner in Delhi and event organizer Delhi. We provide services like party hall in delhi, banquet venue near delhi metro, birthday party hall karol bagh and marriage hall in delhi. We provide full catering services like breakfast/lunch/dinner. Our restaurant cooks are specialized in North Indian, South Indian and Chinese foods. Hotel SPB 87 having two banquet halls. The capacity of people gathering of small hall is 20 to 30 persons. The big wedding hall is recently designed now and having capacity of 100 to 120 people.</p>
                                </div>
                              </div>


                          <div className="all-type-banquet ">
                              <h2 className='text-center'>Meeting Room/ Party Hall/ Banquet Hall/ Conference Venue</h2>
                              <p className='text-center'>We offer conference venue, Seminar & training hall, banquet hall karol bagh, party venue near karol bagh metro station and meeting rooms in karol bagh, New Delhi. Hotel SPB 87 event hall is perfect for birthday party hall, wedding venue, kitty party, social events, get togethers celebration and D.J party place in karol bagh. Our conference hall is more comfortable for training classes/ Corporate events/ coaching classes/ business meet. Here the space available for people gathering upto 150 Paxs. Here, we have fully furnished hall by comfort chairs with table, projector with Screen, Sound System with hand Mike, Free Wi-Fi, Tea/Coffee Snacks and veg./ N.veg. food from own Restaurant.</p>
                              <p className='text-center'>Tomar Hospitality is a figment of our imagination. It is one of best hospitality in Delhi that provides you with the best seminar halls, training halls, and conference halls. While Tomar hospitality is influenced by the latest facilities and infrastructure in Karol Bagh, Delhi, it is also very appropriate for global travellers.</p>
                              <p className='text-center'>Hotel SPB 87 must be your next venue for social gathering, wedding events, birthdays and DJ nights. Tomar Hospitality brings in for you very spacious yet comfortable and modern facilities for corporate events, coaching classes, training classes, and various professional latest meets.</p>
                              <p className='text-center'>The renowned Tomar Hospitality provides a capacity of 150 per pax for any event. The auditoriums are fully furnished with comfortable chairs tied with red ribbons and round tables wrapped in white tablecloths. This area is also facilitated with projectors and white screens, HD sound systems with hands-free mic or lapel mics. Free Wi-Fi is provided with complimentary tea and snacks on behalf of the restaurants.</p>
                          </div>
                             {/* pary-hall  */}
                          <div className="col-md-6">
                             <div className="party-hall-left">
                              <img src="/img/banquet/part-hall.jpg" alt="" />
                             </div>
                          </div>
                          <div className="col-md-6">
                            <div className="party-hall-right ">
                              <h2>Best Party Halls in Delhi - Book Now!</h2>
                              <p>Tomar Hospitality provides one of the “best hospitality services” in India for the past one decade. We offer the venue for every event that you need, from birthdays to get together parties with DJ in Venue. This glorious posh party venue is located near Karol Bagh and renowned event planners plan big events for this location. The hotel arranges a full catering facility in breakfast, lunch and dinner. There are two banquets which provide facilities for 20 to 30 people for various events.
                      <table class="table table-striped table-bordered mt-2 banquet-table ">
                      <tbody>
                        <tr>
                            <td>Veg Plate - INR 700/- per person</td>
                        </tr>
                           <tr>
                            <td>Non-Veg Plate - INR 800/- per person</td>
                           </tr>
                           <tr>
                            <td>DJ with floor lights - INR 5000/-</td>
                            
                           </tr>
                    </tbody>
                    </table> 
                                 <strong>Facilities: </strong> Veg - Non-Veg Meal, Laptop with Wi-Fi and Sound, Projectors, Video conference facility, television and satellite</p>
                            </div>
                          </div>

                              {/* party venue for desktop */}
                        <div className="party-venue-desktop">
                          <div className="col-md-6">
                            <div className="party-venue-left">
                              <h2>Party Venue in Delhi- Tomar Hospitality</h2>
                              <p>Tomar Hospitality is incessantly working in “Delhi Hospitality Services” from last Ten Years. We make available birthday party hall in delhi, get together party hall, Budget Hotels Delhi, 3-Star Hotel, conference halls Delhi, Birthday Party Venue, D.J Party Hall, business hotel near karol bagh, business meeting hall, Conference Venue near karol bagh metro, Corporate Meeting Rooms, family get together party, Local Sightseeing Delhi, Car Rental services and Same Day Tours in Delhi at affordable Prices. In Karol Bagh, we have 3 Budget Hotels near Karol Bagh Metro Station named as: Hotel SPB 87, Hotel Universe Inn, Hotel Delhi Pride are Budget Hotels Karol Bagh, New Delhi.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="party-venue-right">
                              <img src="/img/banquet/party-venue.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/* party venue for mobile */}
                      <div className="party-venue-mobile">
                       <div className="col-md-6">
                             <div className="party-venue-mob-left">
                              <img src="/img/banquet/party-venue.jpg" alt="" />
                             </div>
                          </div>
                          <div className="col-md-6">
                            <div className="party-venue-mob-right">
                              <h2>Party Venue in Delhi Tomar Hospitality</h2>
                              <p>Tomar Hospitality is incessantly working in “Delhi Hospitality Services” from last Ten Years. We make available birthday party hall in delhi, get together party hall, Budget Hotels Delhi, 3-Star Hotel, conference halls Delhi, Birthday Party Venue, D.J Party Hall, business hotel near karol bagh, business meeting hall, Conference Venue near karol bagh metro, Corporate Meeting Rooms, family get together party, Local Sightseeing Delhi, Car Rental services and Same Day Tours in Delhi at affordable Prices. In Karol Bagh, we have 3 Budget Hotels near Karol Bagh Metro Station named as: Hotel SPB 87, Hotel Universe Inn, Hotel Delhi Pride are Budget Hotels Karol Bagh, New Delhi. </p>
                     
                            </div>
                          </div>
                        </div>


                        {/* seminar / training */}
                            <div className="col-md-6">
                             <div className="seminar-training-left">
                              <img src="/img/banquet/seminar.jpg" alt="" />
                             </div>
                          </div>
                          <div className="col-md-6">
                            <div className="seminar-training-right ">
                              <h2>Seminars/ Training Hall in Delhi- Tomar Hospitality</h2>
                              <p>We have small conference room capacity of 20 people avail for corporate event Hall in delhi, company seminars, business meetings and projector conference. For students group party, company annual function and family party program we have big hall capacity 120 peoples.</p>
                               <h6>
                                Quick Contact
                                </h6>
                               <CiPhone className='fs-5 me-2'/>      <a className='text-dark' href="tel:+91 9899145516">+91 9899145516</a> <br />
                              <MdOutlineMailOutline className='fs-5 me-2' />   <a className='text-dark' href="mailto:tomarhospitality@gmail.com">tomarhospitality@gmail.com</a>
                            </div>
                          </div>



                       {/* Tomar Hospitality- Banquet Halls In Delhi for desktop */}
                        <div className="party-venue-desktop">
                          <div className="col-md-6">
                            <div className="party-venue-left">
                              <h2>Tomar Hospitality- Banquet Halls In Delhi</h2>
                              <p>Tomar Hospitality known for the best delhi event planner and wedding planner delhi. Contact us for the perfect planning of your anniversary party or birthday party in delhi. Here you get the best price rate easily for party hall booking, banquet halls, birthday party hall and marriage hall near karol bagh metro station in hotel SPB 87 karol bagh.</p>
                             <CiPhone className='fs-5 me-2'/>      <a className='text-dark' href="tel:+91 9899145516">+91 9899145516</a> <br />
                              <MdOutlineMailOutline className='fs-5 me-2' />   <a className='text-dark' href="mailto:tomarhospitality@gmail.com">tomarhospitality@gmail.com</a></div>
                          </div>
                          <div className="col-md-6">
                            <div className="party-venue-right">
                              <img src="/img/banquet/banquet3.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/* Tomar Hospitality- Banquet Halls In Delhi     for mobile */}
                      <div className="party-venue-mobile">
                       <div className="col-md-6">
                             <div className="party-venue-mob-left">
                              <img src="/img/banquet/banquet3.jpg" alt="" />
                             </div>
                          </div>
                          <div className="col-md-6">
                            <div className="party-venue-mob-right">
                              <h2>Tomar Hospitality Banquet Halls In Delhi</h2>
                              <p>Tomar Hospitality known for the best delhi event planner and wedding planner delhi. Contact us for the perfect planning of your anniversary party or birthday party in delhi. Here you get the best price rate easily for party hall booking, banquet halls, birthday party hall and marriage hall near karol bagh metro station in hotel SPB 87 karol bagh. </p>
                     
                            </div>
                          </div>
                        </div>

                       {/* banquet hall */}
                            <div className="col-md-6">
                             <div className="banquet-hall-left">
                              <img src="/img/banquet/meeting-hall.jpg" alt="" />
                             </div>
                          </div>
                          <div className="col-md-6">
                            <div className="banquet-hall-right ">
                              <h2>Meeting Halls in Delhi- Tomar Hospitality</h2>
                              <p>Meeting Halls Delhi- We take part in event planning like festival, ceremony, competition, party, concert, or convention. Event planning can include budgeting, establishing dates and alternate dates, selecting and reserving the event site, acquiring permits (alcohol permits, insurance licenses, etc), coordinating transportation and parking, developing a theme or motif for the event, arranging for speakers and alternate speakers, coordinating location support (such as electricity and other utilities), and arranging decor, event support and security, catering, emergency plans, aid stations, and cleanup. Event management is the application of project management to this process.</p>
                            </div>
                          </div>


                           {/* party venue for desktop */}
                            <div className="party-venue-desktop">
                          <div className="col-md-6">
                            <div className="party-venue-left">
                              <h2>Tomar Hospitality- Banquet Halls In Delhi</h2>
                              <p>Tomar Hospitality plans the best events in Hotel SPB 87 for festivals, competitions, parties, ceremonies and concerts. The arrangement and the planning for the day are done by Tomar hospitality which looks after the needs of the clients.</p>
                              <strong>Planning Includes:</strong>
                               <table class="table table-striped table-bordered mt-2 banquet-table ">
                             
                        <tbody>
                        <tr>
                            <td>Budgeting</td>
                            <td>Establishing dates</td>
                        </tr>
                           <tr>
                            <td>Alternative dates</td>
                            <td>Selection of texture and fabric</td>
                           </tr>
                           <tr>
                            <td>Reservation of the site</td>
                            <td>Deciding the theme of the event</td>
                           </tr>
                           <tr>
                            <td>Coordination with guests</td>
                            <td>Catering facility</td>
                           </tr>
                    </tbody>
                               </table> 
                              </div>
                          </div>
                          <div className="col-md-6">
                            <div className="party-venue-right">
                              <img src="/img/banquet/meeting-room.jpg" alt="" />
                            </div>
                          </div>
                            </div>
                        {/* party venue for mobile */}
                            <div className="party-venue-mobile">
                       <div className="col-md-6">
                             <div className="party-venue-mob-left">
                              <img src="/img/banquet/meeting-room.jpg" alt="" />
                             </div>
                          </div>
                          <div className="col-md-6">
                            <div className="party-venue-mob-right">
                              <h2>Tomar Hospitality- Banquet Halls In Delhi</h2>
                             <p>Tomar Hospitality plans the best events in Hotel SPB 87 for festivals, competitions, parties, ceremonies and concerts. The arrangement and the planning for the day are done by Tomar hospitality which looks after the needs of the clients. </p>
                              <strong>Planning Includes:</strong>
                            
                      <table class="table table-striped table-bordered mt-2 banquet-table ">
                             
                        <tbody>
                        <tr>
                            <td>Budgeting</td>
                            <td>Establishing dates</td>
                        </tr>
                           <tr>
                            <td>Alternative dates</td>
                            <td>Selection of texture and fabric</td>
                           </tr>
                           <tr>
                            <td>Reservation of the site</td>
                            <td>Deciding the theme of the event</td>
                           </tr>
                           <tr>
                            <td>Coordination with guests</td>
                            <td>Catering facility</td>
                           </tr>
                    </tbody>
                               </table> 
                            </div>
                          </div>
                            </div>



                      <div className="col-md-12">
                        <div className="banquet-hall-menu">
                          <h5 className='text-center'>
                          <strong  > <sup className='sup-menu' style={{color:"#FEA116"}}>______________</sup> Wedding <strong className='text-success'>Veg. Food </strong> Menu <sup className='sup-menu' style={{color:"#FEA116"}} >______________</sup> </strong>
                          </h5>

                           <div className="banquet-hall-menu-child">
                                <div className="banquet-hall-menu-sub-child">
                                    <p><strong> <u>Veg. Snacks: (Select any Four)</u></strong></p>
                           <table className='table table-striped  table-bordered' >
                            <tbody>
                              <tr><td>Spring Roll</td></tr>
                              <tr><td>Chilli Paneer</td></tr>
                              <tr><td>Chilli Potato</td></tr>
                              <tr><td>Aloo Roll</td></tr>
                              <tr><td>Cutlet Roll</td></tr>
                              <tr><td>Finger Chips</td></tr>
                              <tr><td>Harabhara Kaba</td></tr>
                              <tr><td>Mix Veg. Pakoda</td></tr>
                              <tr><td>Veg. Sandwich</td></tr>
                              <tr><td>Dry Veg. Manchurian</td></tr>
                              <tr><td>Paneer Tikaa</td></tr>
                              <tr><td>Including- Tea, Coffee + Soft Drink</td></tr>
                            </tbody>
                           </table>
                              
                              <div className="banquet-hall-menu-sub-child-btn">
                                 <a href="" target="_blank" rel="noopener noreferrer">
                                 <button className='btn btn-primary ' onClick={VegMenu}> View Menu</button>
                                </a>
                              </div>

                              {/* <p><strong > <u>Vegetarian Lunch</u> </strong></p>
                              <table className='table table-striped  table-bordered' >
                            <tbody>
                              <tr><td><strong>Dal -</strong> Dal Fry, Dal Makhani, Dal Tadka, Mix Dal (Select Any One)</td></tr>
                              <tr><td> <strong>Paneer - </strong>Kadai Paneer, Matar Paneer, Shahi Paneer, Butter Paneer Masala, Chili Gravi Paneer, Palak Paneer (Select Any One)</td></tr>
                              <tr><td><strong>Special -</strong> Rajma, Choole, Kadhi Pakoda (Select Any One)</td></tr>
                              <tr><td> <strong>Veg.-</strong> Mix. Veg, Aloo Ghobi, Dam Aloo, Aloo Jeera (Select Any One)</td></tr>
                              <tr><td><strong>Raita -</strong> Boondi Raita, Mix Veg Raita (Select Any One)</td></tr>
                              <tr><td> <strong>Bread-</strong> Tandoori Roti, Plan Naan, Butter Naan (Select Any one)</td></tr>
                              <tr><td>Including Green Salad, Papad, Mix Pickle.</td></tr>
                              <tr><td> <strong>Dessert -</strong> Gulab Jamun, Ice Cream (Select Any One)</td></tr>
                              <tr><td>Veg. Sandwich</td></tr>
                              <tr><td>Dry Veg. Manchurian</td></tr>
                              <tr><td>Paneer Tikaa</td></tr>
                              <tr><td>Including- Tea, Coffee + Soft Drink</td></tr>
                            </tbody>
                            </table> */}
                                </div>

                           </div>


                           {/* wedding non-veg */}
                             <h5 className='text-center'>
                          <strong  > <sup className='sup-menu' style={{color:"#FEA116"}}>______________</sup>Wedding <strong className='text-danger'>Non-Veg. Food</strong> Menu <sup  className='sup-menu' style={{color:"#FEA116"}} >______________</sup> </strong>
                          </h5>
                           <div className="banquet-hall-menu-child">
                                <div className="banquet-hall-menu-sub-child">
                                    <p><strong> <u>Non-Veg. Snacks- (Select any Two)</u></strong></p>
                           <table className='table table-striped  table-bordered' >
                            <tbody>
                              <tr><td>Chilli Chicken</td></tr>
                              <tr><td>Chicken Pakoda</td></tr>
                              <tr><td>Shikh Kabab</td></tr>
                              <tr><td>Tandoori Chicken</td></tr>
                              <tr><td>Chicken Tikaa</td></tr>
                              
                            </tbody>
                           </table>
                              
                              <div className="banquet-hall-menu-sub-child-btn">
                              <a href=''  target='_blank' >
                                 <button className='btn btn-primary ' onClick={NonVegMenu}> View Menu</button>
                                </a>
                              </div>

                            
                                </div>

                           </div>



                           {/*  */}
                           <table class="table table-striped table-bordered corprorate-table ">

                    <thead>
                        <tr style={{backgroundColor:"black", color:"white"}} className='corporate-table-row'>
                            <th>
                             Different Mode of Conference / Meeting Hall Sitting Arrangement</th>
                            <th>Facilities Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Theatre Sitting Mode about 100-110 People</td>
                            <td>Meals (Veg & Non-Veg).</td>
                        </tr>
                           <tr>
                            <td>Cluster Sitting Mode 80-90 People.</td>
                            <td>Laptop with Wi-Fi, Sound systems.</td>
                           </tr>
                           <tr>
                            <td>Class Room Sitting Mode 90-100 People.</td>
                            <td>Slide projector with screen.</td>
                           </tr>
                           <tr>
                            <td>Board Room Sitting Mode 20-30 People.</td>
                            <td>Video conferencing system.</td>
                           </tr>
                           <tr>
                            <td>U-Shape Sitting Mode 50-60 People.</td>
                            <td>Overhead projector with screen.</td>
                           </tr>
                            <tr>
                            <td>Banquet Hall Sitting Mode 90-100 people.</td>
                            <td>Television with satellite channels.</td>
                           </tr>
                    </tbody>
                    </table>

                        </div>
                      </div>



                 </div>
                </div> 
    </div>
   </>
  )
}
