// import Background from "../../Components/Backgroud/Background";
import DashboardPage from "../../Components/Dashboard/DashboardPage";
import Navbar from "../../Components/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div>

            <div>
                <Navbar></Navbar>
                <Background></Background>
                <DashboardPage></DashboardPage>
            </div>

        </div>
    );
};

export default Dashboard;