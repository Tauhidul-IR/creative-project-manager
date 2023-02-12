import Banner from "../Components/banner/banner";
import Client from "../Components/Client/Client";
import ContactForm from "../Components/ContactForm/ContactForm";
import Product from "../Components/Product/Product";
import Testimonial from "../Components/Testimonial/Testimonial";
import CoreConcept from "../Components/CoreConcept/CoreConcept";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import KommunicateChat from "./Chat/Chat";
import Footer from "../Components/Footer/Footer";
import CreateProjects from "../Components/Projects/CreateProject/CreateProjects";







export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-white">
      <Banner></Banner>
      <Product></Product>
      <Client></Client>
      <CoreConcept></CoreConcept>
      <KommunicateChat></KommunicateChat>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
      <CreateProjects></CreateProjects>
    </div>


  )
}
