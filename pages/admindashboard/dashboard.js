import React from 'react';
import AdminBanar from '../../Components/AdminRoles/AdminBanar';

import AdminSideV from '../../Components/AdminRoles/AdminSideV';
import Navbar from '../../Components/Navbar/Navbar';
import UserAll from './userall';



const Dashboard = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <AdminSideV>


        {/* <Navbar></Navbar> */}
        {/* <DashboardPageCover></DashboardPageCover> */}
        <main className="bg-gray-100 min-h-screen">
          {/* <Header></Header> */}
          <AdminBanar></AdminBanar>
          {/* <UserAll></UserAll> */}
          {/* <TopCards /> */}
          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">

            {/* <BarChart />
                        <RecentOrders /> */}
          </div>
        </main>

      </AdminSideV>
    </div>
  );
};

export default Dashboard;