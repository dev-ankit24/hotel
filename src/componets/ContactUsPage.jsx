import React, { useState } from 'react'
import Booking from './partials/Booking'
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Formvalidators from './validation/Formvalidators';
import toast from 'react-hot-toast';
export default function ContactUsPage() {
 let [data, setData]= useState({
    name:"",
    email:"",
    phone:"",
    message:""
 })
let [show, setShow]= useState(false)
 let [errorMessage, setErrorMessage]= useState({
    name:"Name Field Is Requied ",
    email:"Email Address Field Is Required",
    phone:"Phone Field Is Required",
    message:"Subject Field Is Required"
 })


 function getInputData(e){
     let {name, value}= e.target;
   if(name==="name"|| name==="email"|| name==="phone"|| name==="message"){
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

 const postData =(async(e)=>{
    e.preventDefault()
    
    let error = Object.values(errorMessage).find((x)=>x.length>0)
    if(error){
        setShow(true)
        console.log(error);
        
    }
    else{
         let res = await fetch("https://tomerhospitality-backend.onrender.com/api/contact",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
         })
         res = await res.json()
         if(res.result==="Done"){
            toast.success("Message send SuccessFully")
            window.location.reload()
         }
         else{
            console.log(error, "Error Data Not Found");
            
         }
      }
 })

  return (
    <>
    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header mb-1 p-0" style={{backgroundImage: "url(img/ban3.png)"}}>
            <div className="container-fluid  py-5">
                <div className="container text-center pb-5">
                    <nav aria-label="breadcrumb">
                        {/* <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                            </ol> */}
                    </nav>
                </div>
            </div>
        </div>
                            <h1 className=" mb-0 animated slideInDown text-center" style={{color:"#B37E48", }}>Contact</h1>
        {/* <!-- Page Header End --> */}
        {/* <Booking/> */}
        {/* <!-- Contact Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Contact Us</h6>
                    <h1 className="mb-5"><span className="text-primary text-uppercase">Contact</span> For Any Query</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Phone</h6>
                                <p><FaPhoneAlt  className='text-dark fs-5 me-2'/>
                                 <a href="tel:+919899145516">+91 9899145516 </a>,
                                 <a href="tel:+91011-43466861">011-43466861</a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Email</h6>
                                <p> <MdEmail  className='text-dark fs-5 me-2'/>
                                <a href="mailto:tomarhospitality@gmail.com">tomarhospitality@gmail.com</a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Address</h6>
                                <p><IoLocationSharp className='text-dark fs-5 me-2' />
                                <a href="https://www.google.com/maps/place/Conference+Halls+in+Delhi+-+Tomar+Hospitality/@28.6449278,77.189695,20z/data=!4m6!3m5!1s0x390d029f3f257f9d:0xf56901a212d914e4!8m2!3d28.6449761!4d77.1897419!16s%2Fg%2F11j8k958nd?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" target='_blank'> 17A/2, W.E.A. Karol Bagh, New Delhi, 110005</a>
                                
                                 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://maps.google.com/maps?q=Conference+Halls+in+Delhi+-+Tomar+Hospitality++17A%2C+Block+7%2C+Block+8A%2C+WEA%2C+Karol+Bagh%2C+New+Delhi%2C+Delhi%2C+110005&output=embed"
                            frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={postData}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text"  onChange={getInputData} name="name" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name*</label>
                                            {show && errorMessage?<p className='text-danger'>{errorMessage.name}</p>:""}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" onChange={getInputData}  name='email' className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email*</label>
                                            {show && errorMessage?<p className='text-danger'>{errorMessage.email}</p>:""}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="number" onChange={getInputData}  name='phone' className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Phone*</label>
                                            {show && errorMessage?<p className='text-danger'>{errorMessage.phone}</p>:""}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" onChange={getInputData}  name='message' placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Subject*</label>
                                            {show && errorMessage?<p className='text-danger'>{errorMessage.message}</p>:""}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}
    </>
  )
}
