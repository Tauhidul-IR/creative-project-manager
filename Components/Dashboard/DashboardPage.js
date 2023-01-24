import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
import { HiBell, HiChartPie, HiExclamationCircle, HiOutlineTrendingUp, HiShieldCheck } from "react-icons/hi";


const DashboardPage = () => {
    return (


        <div>





            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
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
                            <Link href={'/Components/Goal/Goal'} className="font-bold"> <HiOutlineTrendingUp className="text-cyan-400 text-2xl" ></HiOutlineTrendingUp>Goals</Link>
                        </li>

                        <  li />

                    </ul>

                </div>
            </div>
        </div >




    );
};

export default DashboardPage;