import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import AdminRole from '../Adminhook/AdminRole';
const AdminNavber = () => {
  const { user, loader } = useContext(AuthContext)
  const deshbord = <React.Fragment>
    <ul>
      <li>
        <Link className='text-black mx-3' href='/admindashboard/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link className='text-black mx-3' href='/'>Home</Link>
      </li>
      <li>
        <Link className='mx-3' href='/admin/alluser'>All User</Link>
      </li>



      {/* <Link className='mx-3' href='/integration/integrations'>Integration</Link> */}
    </ul>
  </React.Fragment>
  const lgDashboard = <React.Fragment>
    <ul>
      {/* <Link className='text-black mx-3' href='/admindashboard/dashboard'>Dashboard</Link> */}
      <Link className='text-black mx-3' href='/'>Home</Link>
      <Link className='mx-3' href='/admin/alluser'>All User</Link>
      {/* <Link className='mx-3' href='/integration/integrations'>Integration</Link> */}
    </ul>
  </React.Fragment>
  return (
    <div>
      <div className="navbar bg-green-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

              {deshbord}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">CPM</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {lgDashboard}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">

            {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

              {/* <Link className='text-black mx-3' href='/admindashboard/dashboard'>Dashboard</Link> */}
            {/* </ul> */} 
            <div><label  htmlFor="drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            </div>
          </div>

        </div>
      </div>
    </div>
   
  );
};

export default AdminNavber;