import { useState } from "react";
import Formvalidators from "./validation/Formvalidators"
import toast  from "react-hot-toast"
export default function HotelSPB() {
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
            <h1 className="display-3 text-white mb-3 animated slideInDown">Hotel SPB-87</h1>
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
        <div className="hotel-spb-87">
          <h2 className="text-center">Request For <span>Hotel SPB-87 </span>Room Booking</h2>
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
                         <select class={`form-select ${show && errorMessage.hotel?"border-danger":""}`} onChange={getInput} name="hotel"  aria-label="Default select example">
                           <option selected>Select Hotel  </option>
                           <option>Hotel SPB-87</option>
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
