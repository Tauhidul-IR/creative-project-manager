// import { AiTwotoneHome } from "react-icons/ai";
// import { HiBell, HiChartPie, HiExclamationCircle, HiOutlineTrendingUp, HiShieldCheck } from "react-icons/hi";

import TaskManagement from './../../pages/TaskManagement/TaskManagement';
import { Link } from 'next/link';

import {
    UserCircleIcon, ChartBarSquareIcon,
    ServerStackIcon,
    CalendarDaysIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/solid';

const DashboardPage = () => {
    return (

        <div className=" inset-y-0 left-0 bg-white w-40">
            <h1 className="flex items-center justify-center text-2xl
        h-16 bg-purple-600 text-white font-bold">hussle</h1>

            <ul className="flex flex-col text-lg h-full">
                <li className="flex justify-center items-center flex-col
            py-7 text-gray-500">
                    <UserCircleIcon className="w-7 h-7" />
                    Manage
                </li>
                <li className="flex justify-center items-center flex-col
            py-7 border-l-4 border-purple-500 text-purple-500
            font-bold">
                    <ServerStackIcon className="w-7 h-7 text-purple-500" />
                    <Link href="/">
                        <p>Task Board</p>
                    </Link>

                </li>
                <li className="flex justify-center items-center flex-col
            py-7 text-gray-500">
                    <CalendarDaysIcon className="w-7 h-7" />
                    Schedule
                </li>
                <li className="flex justify-center items-center flex-col
            py-7 text-gray-500">
                    <ChartBarSquareIcon className="w-7 h-7" />
                    Report
                </li>

                <li className="flex justify-center items-center flex-col
            py-7 text-gray-500 mt-auto mb-16">
                    <Cog6ToothIcon className="w-7 h-7" />
                    Settings
                </li>
            </ul>
        </div>




    );
};

export default DashboardPage;