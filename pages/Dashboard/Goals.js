import React from 'react';
import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';

const Goals = () => {
    return (
        <Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
            <div>
                <h2>Goals</h2>
                
            </div>
        </Sidebar>
    );
};

export default Goals;