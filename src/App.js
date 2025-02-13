import Navbar from "./componets/partials/Navbar";
import Home from "./componets/Home"
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from "react-router-dom"
import Footer from "./componets/partials/Footer";

import AboutUs from "./componets/AboutUs"
import ServicesPage from "./componets/ServicesPage";
import RoomPage from "./componets/RoomPage";
import BookingPage from "./componets/BookingPage";
import TeamPage from "./componets/TeamPage";
import TestimonialPage from "./componets/TestimonialPage";
import ContactUsPage from "./componets/ContactUsPage";

function App() {
  return (
    <>
  <BrowserRouter>
   <Navbar/>
   {/* <Slider/> */}
   {/* <Home/> */}
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/service" element={<ServicesPage/>}/>
        <Route path="/room" element={<RoomPage/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/testimonial" element={<TestimonialPage/>}/>
        <Route path="/contact" element={<ContactUsPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
