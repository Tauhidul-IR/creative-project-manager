import Banner from "../Components/banner/banner";
import Client from "../Components/Client/Client";
import ContactForm from "../Components/ContactForm/ContactForm";
import Product from "../Components/Product/Product";
import Testimonial from "../Components/Testimonial/Testimonial";
import MyTab from "../Components/MyTab/MyTab";
import Footer1 from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import CoreConcept from "../Components/CoreConcept/CoreConcept";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      <Banner></Banner>
      <Product></Product>
      <Client></Client>
      <div className="bg-slate-300">
        <div >
          <MyTab />
        </div>
        <CoreConcept></CoreConcept>

        <Testimonial></Testimonial>
        <ContactForm></ContactForm>
        <Footer1 />


      </div>
    </div>
  )
}
