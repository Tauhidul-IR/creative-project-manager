import Link from 'next/link';
import React from 'react';
import AdminNavber from '../../Components/AdminRoles/AdminNavber';
import Banner from '../../Components/banner/banner';

const dashboard = () => {
  return (
    <div>
      <AdminNavber></AdminNavber>
      <div className='grid  grid-cols-2'>
        <div>
        <div className="drawer drawer-mobile">
        <input id="drawers" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        </div>
        <div className="drawer-side">
          <label htmlFor="drawers" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <select className="select select-error w-full max-w-xs">
                <option disabled selected>Dashboard</option>
                <option>Dashboard Light</option>
                <option>Dashboard Balack</option>
              </select>
              <span><Link href=""></Link></span>
            </li>
            <li><Link href="/admin/alluser">All Users</Link></li> 
            <li> <select className="select select-error w-full max-w-xs">
              <option disabled selected>Charts</option><option>RechartJs</option>
              <option>Spark Line</option>
              <option>Apex Chart</option>
            </select>
              <span><Link href=""></Link></span></li>
            <li>
              <select className="select select-error w-full max-w-xs">
                <option disabled selected>Project Report</option>
                <option>Day Report</option>
                <option>Weekly Report</option>
              </select>
              <span><Link href=""></Link></span>
            </li>
          </ul>
        </div>
      </div>
        </div>
        <div>
        </div>
      </div>
     

    </div>
  );
};

export default dashboard;