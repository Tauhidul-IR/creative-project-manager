import React from 'react';
import AdminBanar from '../../Components/AdminRoles/AdminBanar';

import AdminSideV from '../../Components/AdminRoles/AdminSideV';
import Navbar from '../../Components/Navbar/Navbar';



const Dashboard = () => {
  return (
    <div className=''>
      <AdminSideV>



        <main className="bg-gray-100 min-h-screen">

          <AdminBanar></AdminBanar>

          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">


          </div>
        </main>

      </AdminSideV>
    </div>
  );
};

export default Dashboard;