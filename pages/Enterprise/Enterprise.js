import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Backgroud/Background"
import EnterprisesBanner from "../../Components/Enterprises/EnterprisesBanner/EnterprisesBanner";
import BusinessValue from "../../Components/Enterprises/BusinessValue/BusinessValue";
import FosterWave from "../../Components/Enterprises/FosterWave/FosterWave";
import ControlData from "../../Components/Enterprises/ControlData/ControlData";
import Scalability from "../../Components/Enterprises/Scalability/Scalability";
import WhyCpm from "../../Components/Enterprises/WhyCpm/WhyCpm";
const Enterprise = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Background></Background>
           <EnterprisesBanner></EnterprisesBanner>
           <BusinessValue></BusinessValue>
           <ControlData></ControlData>
           <WhyCpm></WhyCpm>
           <FosterWave></FosterWave>
           <Scalability></Scalability>
          
        </div>
    );
};

export default Enterprise;