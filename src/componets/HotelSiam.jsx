import { useState } from "react";
import Formvalidators from "./validation/Formvalidators"
import toast  from "react-hot-toast"
import { Ri24HoursFill } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import  roomData from "./roomData"
import { Link } from "react-router-dom";
export default function HotelSiam() {
  let [data, setData] = useState({
    name:"",
    email:"",
    phone:"",
    checkIn:"",
    checkOut:"",
    hotel:"",
    guest:"",
    message:""
  })
 
  let [show,setShow]=useState(false)
  let [errorMessage,setErrorMessage]= useState( {
    name:"Name Field Is Required",
    email:"Email Field Is Required",
    phone:"Phone Field Is Required",
    checkIn:"CheckIn Date Field  Is Required",
    checkOut:"CheckOut Date Field Is Required",
    hotel:"Select Hotel Field Is Required ",
    guest:"Number Of Attendess Field Is Required",
    message:"Message Field Is Required"
  })


 function getInput(e){
  let {value,name}=e.target;
  if(name==="name"||name==="email"||name==="phone"|| name==="checkIn"||name==="checkOut"||name==="hotel"||name==="guest"|| name==="message"){
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
    
 }

 async function postData(e){
      e.preventDefault()
      let error= Object.values(errorMessage).find((x)=>x.length>0)
      if(error){
        setShow(true)
        console.log(error);
        
      }
      else{
        let res = await fetch("http://localhost:5000/api/bookroom",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({...data})
        })
        res = await res.json()

        if(res.result==="Done"){
          toast.success("Hotel Query Has Been Submitted")
          window.location.reload()
        }
        else
         console.log(error, "Record Not Found");
         
      }
 }

  return (
    <>
      {/* Header Section */}
      <div className="container-fluid page-header mb-1 p-0" style={{ backgroundImage: "url(/img/Home/slider/Room-small-slider1.jpg)" }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Hotel Siam</h1>
          </div>
        </div>
      </div>

    <div id="carouselExample hotel-slider" className="carousel slide">
  <div className="carousel-inner hotel-slider " >
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


  <div className="container hotel-main">
      <div className="container-fluid">
        <div className="row">

   <div className="container hotel-main mt-5 mb-5">
        <div className="text-center">
          <h2 className="mb-3">About Hotel Siam</h2>
          <div className="hotel-siam-line m-auto mb-3"></div>
          <p className="mx-auto" style={{ maxWidth: "1000px" }}>
           
            Welcome to <strong>Hotel Siam</strong> by <strong>Tomar Hospitality</strong>, where comfort meets elegance. Located in the heart of the city,
            we offer premium rooms, exceptional service, and modern amenities to make your stay truly memorable. Whether
            you're here for business or leisure, our staff ensures a warm and personalized experience. Relax, unwind,
            and enjoy the hospitality you deserve—only at <strong>Hotel Siam.</strong>


          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container ">
        <h3 className="text-center ">Why Choose Us</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <Ri24HoursFill className=" fs-3 mb-2" style={{color:"#FEA116"}} />
            <h5>24/7 Service</h5>
            <p>Round-the-clock assistance for all your needs.</p>
          </div>
          <div className="col-md-4 mb-3">
            <IoBedOutline className=" fs-3 mb-2" style={{color:"#FEA116"}} />
            <h5>Luxury Rooms</h5>
            <p>Spacious, stylish, and fully equipped rooms.</p>
          </div>
          <div className="col-md-4 mb-3">
            <FaWifi className=" fs-3 mb-2" style={{color:"#FEA116"}}  />
            <h5>Free Wi-Fi</h5>
            <p>Stay connected with complimentary high-speed internet.</p>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
          </div>
          <div className="row g-4">

            <div className="col-md-12 col-sm-12 col-12 text-center">
              <p>
                We don't provide just rooms at Tomar Hospitality — we provide a space where you can unwind and feel at ease. Whether you are visiting on business, on a quick getaway, or with family, we have planned each area to make your stay easy and restful.
                <br />
                Our hotel is located in the bustling middle of Karol Bagh, just a short walk from the metro. Which means you're within reach of everything the city can give you, but you also have a quiet place to return to at night.
              </p>
            </div>



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
                    {/* <a className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => openModal(2)}>Explore</a> */}
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
                  <div className="col-lg-4 mt-4  m-auto col-md-6 wow fadeInUp"  key={index} data-wow-delay="0.1s">
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
                    {/* <a className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => openModal(2)}>Explore</a> */}
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

         

        <div className="hotel-spb-87">
          <h2 className="text-center">Request For <span>Hotel Siam </span>Room Booking</h2>
          <div className="hotel-spb-87-line m-auto "></div>
          <p className="text-center">Please leave us your requirements here and we will get back to you. You may also call us at +91-9899145516</p>
        </div>

          <div className="col-md-12 ">
                      <div className="hotel-spb-form">
                            <h3 className="text-center">Query Form </h3>
                            <form onSubmit={postData}>


                  <div className="row">
                     <div className="mb-3 col-md-4 col-sm-4 col-12  hotel-input-row-div">
                         <label for="exampleInputEmail1" className="form-label hotel-label ">Name*</label>
                         <input type="text" name="name" onChange={getInput} className={`form-control ${show && errorMessage.name ?"border-danger ":""}`} id="exampleInputEmail1" placeholder="Enter Your Full Name....."/>
                       </div>
                       <div className="mb-3 col-md-4 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label hotel-label">Email*</label>
                         <input type="email"onChange={getInput} name="email" className={`form-control ${show && errorMessage.email ?"border-danger ":""}`} id="exampleInputPassword1" placeholder="Enter Your Email Address..... "/>
                       </div>
                       <div className="mb-3 col-md-4 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label hotel-label">Phone*</label>
                         <input type="number"onChange={getInput}  name="phone" className={`form-control ${show && errorMessage.phone ?"border-danger ":""}`} id="exampleInputPassword1" placeholder="Enter Your Phone ....."/>
                       </div>
                  </div>
                  <div className="row">
                     <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputEmail1" className="form-label hotel-label">Check In*</label>
                         <input type="date" onChange={getInput} name="checkIn" className={`form-control ${show && errorMessage.checkIn ?"border-danger ":""}`} id="exampleInputEmail1"/>
                       </div>
                       <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label hotel-label">Check Out*</label>
                         <input type="date" onChange={getInput} name="checkOut" className={`form-control ${show && errorMessage.checkOut ?"border-danger ":""}`} id="exampleInputPassword1"/>
                       </div>
                       <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className={`form-label hotel-label `}>Select Hotel*</label>
                         <select className={`form-select ${show && errorMessage.hotel?"border-danger":""}`} onChange={getInput} name="hotel"  aria-label="Default select example">
                           <option selected>Select Hotel  </option>
                           <option>Hotel Siam</option>
                           <option > Hotel Amrit Villa</option>
                           <option>Other</option>
                         </select>
                       </div>
                       <div className="mb-3 col-md-3 col-sm-4 col-12">
                         <label for="exampleInputPassword1" className="form-label hotel-label">No Attendees*</label>
                         <input type="text" onChange={getInput} name="guest" className={`form-control ${show && errorMessage.guest ?"border-danger ":""}`} id="exampleInputPassword1" placeholder="No. of Attendess...."/>
                       </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" name="message"  className="form-label hotel-label">Message*</label>
                      <textarea className={`form-control ${show && errorMessage.message ?"border-danger ":""}`} name="message" onChange={getInput} id="exampleFormControlTextarea1" rows="3" placeholder="Write a Message ....."></textarea>
                    </div>
                  </div>
  
             <button type="submit" className="btn btn-primary ms-3">Submit</button>
                          </form>
                      </div>
          </div>
      </div>
      </div>
  </div>

    </>
  );
}
