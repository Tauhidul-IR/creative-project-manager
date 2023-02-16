import React from 'react';
import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Cards from '../../Components/Reporting/Cards';
import LineChart from "../../Components/Reporting/LineChart.jsx"
import PiChart from '../../Components/Reporting/PiChart';


const Reporting = () => {
    return (
        <Sidebar>
            {/* <Navbar></Navbar> */}
            <div className='ml-20'>
            <DashboardPageCover></DashboardPageCover>
            <div className='flex justify-between px-4 pt-4'>
                <h2 className='font-bold bg-purple-800 text-white rounded-lg'>Projects Reporting</h2>

            </div>
            <Cards />
            <div className='mt-20'>
            <LineChart />
            </div>
            <PiChart/>
            </div>
        </Sidebar>
    );
};

export default Reporting;