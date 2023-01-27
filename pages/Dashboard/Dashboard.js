import DashboardPage from "../../Components/Dashboard/DashboardPage";
import DashboardPageCover from "../../Components/Dashboard/DashboardPageCover";

import Navbar from "../../Components/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div>
           
        <Navbar></Navbar>
        <DashboardPageCover></DashboardPageCover>
        <DashboardPage></DashboardPage>
        
           
        </div>
    );
};

export default Dashboard;