import Banner from "../Components/banner/banner";
import Client from "../Components/Client/Client";
import Product from "../Components/Product/Product";
import Testimonial from "../Components/Testimonial/Testimonial";


export default function Home() {
  return (
    <div className="bg-white">
      <Banner/>
      <Product></Product>
      <Client></Client>
      <Testimonial></Testimonial>
    </div>
  )
}
