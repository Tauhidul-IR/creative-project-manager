import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
import { HiBell, HiChartPie, HiExclamationCircle, HiOutlineTrendingUp, HiShieldCheck } from "react-icons/hi";


const DashboardPage = () => {
    return (


        <div>


          


            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
               
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-indigo-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>

                           
                            <Link href='/Dashboard/Home' className="font-bold"> <AiTwotoneHome className="text-cyan-400 text-2xl" ></AiTwotoneHome>Home</Link>
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

                    <  li />

                </ul>

            </div>
        </div>
        </div >



        
    );
};

export default DashboardPage;