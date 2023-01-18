import Banner from "../Components/banner/banner";
import Client from "../Components/Client/Client";
import ContactForm from "../Components/ContactForm/ContactForm";
import Product from "../Components/Product/Product";
import Testimonial from "../Components/Testimonial/Testimonial";
import MyTab from "../Components/MyTab/MyTab";
import Footer1 from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";




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
<<<<<<< HEAD
      <Footer1 />
=======
      <ContactForm></ContactForm>

>>>>>>> c7dde53cafd30953273d0d3c7fef2328962a651d
    </div>
  )
}
