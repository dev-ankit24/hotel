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
import HotelAmritVilla from "./componets/HotelAmritVilla";
import ScrollToTop from "./componets/partials/ScrollToTop";
import  { Toaster } from 'react-hot-toast';
import ConfirmPage from "./componets/ConfirmPage";
import SuccessBookingPage from "./componets/SuccessBookingPage";
import HotelSiam from "./componets/HotelSiam";
import HotelMarbleArl from "./componets/HotelMarbleArl";
import HotelSPB from "./componets/HotelSPB.jsx";
import CorporatePage from "./componets/CorporatePage.jsx";
import CorporateQuery from "./componets/CorporateQuery.jsx";
// import "./componets/asserts/css/style."
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
        <Route path="/hotel-siam" element={<HotelSiam/>}/>
        <Route path="/hotel-marble-arl" element={<HotelMarbleArl/>}/>
        <Route path="/hotel-spb-87-delhi" element={<HotelSPB/>}/>
        <Route path="/hotel-amrit-villa" element={<HotelAmritVilla/>}/>
        <Route path="/room" element={<RoomPage/>}/>
        <Route path={`/booking/:_id`} element={<BookingPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/testimonial" element={<TestimonialPage/>}/>
        <Route path="/contact" element={<ContactUsPage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/corporate" element={<CorporatePage/>}/>
        <Route path="/corporate-query" element={<CorporateQuery/>}/>


        <Route path="/confirm/:_id" element={<ConfirmPage/>}/>
        <Route path="/success" element={<SuccessBookingPage/>}/>

        <Route path="*" element={<Error404/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
