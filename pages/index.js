import ApiData from "../Components/APi test/ApiData";
import Client from "../Components/Client/Client";
import MyTab from "../Components/MyTab/MyTab";




export default function Home() {
  return (
    <div className="bg-white">
      <h1 className="text-black">Navbar coming</h1>
      <h1 className="text-black">Banner Coming</h1>
      <Client></Client>
     <div className="bg-blue-400">
     <MyTab/>
     </div>
     <ApiData></ApiData>
    
    </div>
  )
}
