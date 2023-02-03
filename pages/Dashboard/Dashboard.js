import BarChart from "../../Components/Dashboard/BarChart";

import DashboardPageCover from "../../Components/Dashboard/DashboardPageCover";
import Header from "../../Components/Dashboard/Header";
import RecentOrders from "../../Components/Dashboard/RecentOrders";
import Sidebar from "../../Components/Dashboard/Sidebar";
import TopCards from "../../Components/Dashboard/TopCards";

import Navbar from "../../Components/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div>
        <Sidebar>
               
        <Navbar></Navbar>
        <DashboardPageCover></DashboardPageCover>
        <main className="bg-gray-100 min-h-screen">
        <Header></Header>
        <TopCards/>
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart/>
            <RecentOrders/>
        </div>
        </main>
        </Sidebar>
        
           
        </div>
    );
};

export default Dashboard;