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
            <div>
                <h2>Portfolio</h2>
                <Features></Features>
            </div>
        </Sidebar>
    );
};

export default portfolio;