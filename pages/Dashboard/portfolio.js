import React from 'react';
import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
<<<<<<< HEAD
=======
import Navbar from '../../Components/Navbar/Navbar';
>>>>>>> 83a2dc62a0e882e0a09d6a26452ac7384c7ac7ac
import Features from '../Features/features';

const portfolio = () => {
    return (
        <Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
<<<<<<< HEAD
            <div>
                <Features></Features>
=======
            <div className='ml-20'>
                <div className='flex justify-between px-4 pt-4'>
                    <h2 className='font-bold bg-purple-800 text-white rounded-lg'>Portfolio</h2>

                </div>

                <Features />
>>>>>>> 83a2dc62a0e882e0a09d6a26452ac7384c7ac7ac
            </div>
        </Sidebar>
    );
};

export default portfolio;