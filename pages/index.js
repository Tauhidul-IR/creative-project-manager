import Banner from "../Components/Banner/banner";
import Client from "../Components/Client/Client";
import Product from "../Components/Product/Product";
import Testimonial from "../Components/Testimonial/Testimonial";


export default function Home() {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <Product></Product>
      <Client></Client>
      <Testimonial></Testimonial>

    </div>
  )
}
