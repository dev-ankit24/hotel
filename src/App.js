import Navbar from "./componets/partials/Navbar";
import Home from "./componets/Home"
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from "react-router-dom"
import Footer from "./componets/partials/Footer";

import AboutUs from "./componets/AboutUs"
import RoomPage from "./componets/RoomPage";
import BookingPage from "./componets/BookingPage";
import TeamPage from "./componets/TeamPage";
import TestimonialPage from "./componets/TestimonialPage";
import ContactUsPage from "./componets/ContactUsPage";
import Error404 from "./componets/Error404";
import Gallery from "./componets/Gallery";
import HotelSPB from "./componets/HotelSPB";
import HotelAmritVilla from "./componets/HotelAmritVilla";
import ScrollToTop from "./componets/partials/ScrollToTop";
import  { Toaster } from 'react-hot-toast';
function App() {

  
  return (
    <>
  <BrowserRouter>
  <ScrollToTop/>
      <Toaster position="top-right"
  reverseOrder={false} />
   <Navbar/>
   {/* <Slider/> */}
   {/* <Home/> */}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/hotel-spb-87" element={<HotelSPB/>}/>
         <Route path="/hotel-amrit-villa" element={<HotelAmritVilla/>}/>
        <Route path="/room" element={<RoomPage/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/testimonial" element={<TestimonialPage/>}/>
        <Route path="/contact" element={<ContactUsPage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/*" element={<Error404/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
