import { AiTwotoneHome } from "react-icons/ai";
import { HiBell, HiChartPie, HiExclamationCircle, HiOutlineTrendingUp, HiShieldCheck } from "react-icons/hi";


const DashboardPage = () => {
    return (
        <div>


            <div className="drawer drawer-start">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary font-bold  "> <HiChartPie className="text-cyan-400 text-2xl" /> Open Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    
                    <ul className="menu p-4 w-80 bg-indigo-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li> 
                            
                            <a className="font-bold"> <AiTwotoneHome className="text-cyan-400 text-2xl" ></AiTwotoneHome>Home</a>
                        </li>
                        <li>
                             <a className="font-bold"> <HiShieldCheck className="text-cyan-400 text-2xl" ></HiShieldCheck>My Task</a>
                        </li>
                        <li>
                             <a className="font-bold"> <HiBell className="text-cyan-400 text-2xl" ></HiBell>Inbox</a>
                        </li>
                        <li>
                             <a className="font-bold"> <HiExclamationCircle className="text-cyan-400 text-2xl" ></HiExclamationCircle>Reporting</a>
                        </li>
                        <li>
                             <a className="font-bold"> <HiOutlineTrendingUp className="text-cyan-400 text-2xl" ></HiOutlineTrendingUp>Goals</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;