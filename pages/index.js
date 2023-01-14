import Banner from "../Components/banner/banner";
import Client from "../Components/Client/Client";
import Product from "../Components/Product/Product";
import Testimonial from "../Components/Testimonial/Testimonial";
import MyTab from "../Components/MyTab/MyTab";
import Footer1 from "../Components/Footer/Footer";




export default function Home() {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <Product></Product>
      <Client></Client>
      <MyTab />
      <Testimonial></Testimonial>
      <Footer1 />
    </div>
  )
}
