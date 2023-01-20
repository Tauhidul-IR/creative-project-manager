import Banner from "../Components/banner/banner";
import Client from "../Components/Client/Client";
import ContactForm from "../Components/ContactForm/ContactForm";
import Product from "../Components/Product/Product";
import Testimonial from "../Components/Testimonial/Testimonial";
import MyTab from "../Components/MyTab/MyTab";

import Navbar from "../Components/Navbar/Navbar";
import Mytask from "../Components/MyTask/Mytask";
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner></Banner>
      <Product></Product>
      <Client></Client>
      <div className="bg-blue-800">
        <MyTab />
      </div>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
      <Mytask></Mytask>

    </div>
  )
}
