import React from 'react'
import { Link } from 'react-router-dom'
// import ms1 from "/img/"
export default function CorporatePage() {
  return (
     <>
      <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(/img/corpo/corpo-hero.jpg)"}}>
            <div className="container-fluid  py-5">
                <div className="container text-center  pb-5">
                     <div className="corporate-hero-bg-parnet">
                        <h3 className=" fs-3 text-dark mb-3  ">
                        <span >Corporate </span>Event Organisers in Delhi
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
                            <div className="corporate-page-left">
                                <img src="/img/corpo/corpo.jpg" alt="Tomar Hospitality corporate page" />
                            </div>
                       </div>  
                       <div className="col-md-6">
                           <div className="corporate-page-right">
                            <h1>Corporate Event Organiser Delhi Event Management Company</h1>
                                <p>Tomar Hospitality deals corporate event management and event organisation in Delhi. In Delhi, all type of business meeting hall requirement, business meeting events, company conference program & corporate events are organised by us. Our Hotel S.P.B 87 is just close to metro station karol bagh in New Delhi. All types of company business events are planed by our company in hotel conference hall. A newly designed conference hall is available in karol bagh for booking. Our location is perfect according to guest who come by metro, cab, bus or private vehicle. We have car parking in front of our hotel .</p>
                           </div>
                       </div> 
                    </div> 

                    <h2 className='text-center corporate-membership-heading'>MEMBERSHIP</h2>
                    <p className='text-center'>Welcome to The Grand Shoba a Delhi of tailored privileges and benefits, designed to enhance and enrich your experience.</p>
                   <div className="corporate-membership-pass ">
                       <div className="col-md-4">
                        <div className="corporate-silver-pass  m-auto">
                        <img src="/img/pass/silver.png" height={100} width={100}/>
                        </div>
                       </div>
                    <div className="col-md-4">
                        <div className="corporate-gold-pass m-auto">
                        <img src="/img/pass/gold.jpg" height={100} width={100}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="corporate-platinum-pass m-auto ">
                        <img src="/img/pass/platinum.jpg" height={100} width={100}/>
                        </div>
                    </div>
                    
                   </div>
                   <div className="corporate-membership-btn">
                        <Link to="/contact">
                          <button className='btn '>Join Now</button>
                        </Link>
                    </div>


                    {/* confrence and events */}
                    <div className="conference-and-event-parent">
                        <h2 className='text-center'>CONFERENCES AND <span style={{color:"#FEA116"}}>EVENTS</span></h2>
                        <p className='text-center'>At Tomar Hospitality, we specialize in corporate event management and business conference planning in Delhi. Whether you're organizing a board meeting, corporate seminar, training session, or a large company conference, our expert team ensures seamless execution from start to finish.
                          Our dedicated venue, Hotel S.P.B 87, is conveniently located near the Karol Bagh Metro Station in New Delhi, offering easy access by metro, cab, bus, or private vehicle. We also provide on-site car parking for added convenience.</p>
                         <p>We offer a newly designed conference hall in Karol Bagh, equipped with modern amenities to accommodate all types of business events, including:</p>

                     </div>
                     <div className="row">
                       
                        <div className="col-md-3">
                         <div className="conference-service">
                           <img src="/img/corpo/service/Corporate.jpg" alt="" /> 
                             <div className="conference-service-details">
                                <h6>Corporate Meetings</h6>
                                <p>Corporate Meetings are formal gatherings organized by businesses or companies to discuss goals, strategies, updates, or performance</p>
                             </div>
                         </div>
                       </div>
                       <div className="col-md-3">
                         <div className="conference-service">
                           <img src="/img/corpo/service/Seminars.jpg" alt="" />
                            <div className="conference-service-details">
                                <h6>Seminars </h6>
                                <p>Seminars are usually speaker-led sessions focused on delivering information or insights on a specific topic.</p>
                             </div>
                            </div>
                       </div>
                       <div className="col-md-3">
                         <div className="conference-service">
                           <img src="/img/corpo/service/Product.jpg" alt="" />   
                           <div className="conference-service-details">
                                <h6>Product Launches</h6>
                                <p>Product Launches are events organized to introduce a new product or service to the market. These events create buzz.</p>
                             </div> 
                            </div>
                       </div>
                    
                       <div className="col-md-3 ">
                         <div className="conference-service">
                           <img src="/img/corpo/service/Annual.jpg" alt="" />                        
                             <div className="conference-service-details">
                                <h6>Annual General Meetings </h6>
                                <p>Annual General Meetings (AGMs) are yearly gatherings where a company's directors present financial performance, strategic .</p>
                             </div> 
                             </div>
                       </div>
                      

                      </div>

                   
                

                   <div className="row">
                     <div className="col-md-12 w-100 " style={{height:"30rem",marginTop:"15px"}}>
                       <img src="/img/corpo/corpo.jpg" className='rounded-1' width={"100%"} height={"100%"} alt="" />
                      </div>
                         <div className="corporate-membership-btn">
                        <Link to="/contact">
                          <button className='btn '>ENQUIRE NOW</button>
                        </Link>
                    </div>
                   </div>

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
     
     </>

)
}
