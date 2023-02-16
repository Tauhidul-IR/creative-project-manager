import React from 'react';
import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Features from '../Features/features';

const portfolio = () => {
    return (
        <Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
            <div className='ml-20'>
                <div className='flex justify-between px-4 pt-4'>
                    <h2 className='font-bold bg-purple-800 text-white rounded-lg'>Portfolio</h2>

                </div>

                <Features />
            </div>
        </Sidebar>
    );
};

export default portfolio;