import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import TaskManagement from './../../pages/TaskManagement/TaskManagement';
import AdminRole from '../Adminhook/AdminRole';
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const { user, logOutUser } = useContext(AuthContext);
  const [isAdminRole] = AdminRole(user?.email)
  // console.log(isAdminRole)
  const handlelogOut = () => {
    logOutUser()
      .then(() => { })
      .catch(error => console.error(error))
  }
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#1C82AD');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  // console.log(user);

  const { data: singleUser, refetch, isLoading } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://creative-project-manager-server.vercel.app/users?email=${user?.email}`);
      const data = await res.json();
      return data;
    }
  })




  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            CP<span className='text-sky-300'>M</span>
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>

          </li>


          <li>

            <div className="relative group">
              <div className="flex items-center cursor-pointer py-1">
                <button className="bg-blue p-3 inline-flex justify-center items-center ">
                  <span>Features</span>
                  <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
              </div>
              <div className="items-center absolute  invisible group-hover:visible">
                <ul className="list-reset bg-blue-400 text-black">
                  <li><Link href="/TaskManagement/TaskManagement" className="px-2 py-2   block">Task Management</Link></li>
                  <li><Link href="/teamManagement/createMember" className="px-2 py-2   block">Create Team</Link></li>
                  <li><Link href="/teamManagement/teamMembers" className="px-2 py-2   block">TeamMember</Link></li>

                  <li> <Link className="px-2 py-2   block" href='/integration/integrations'>Integration</Link></li>
                  <li> <Link className="px-2 py-2   block" href="/myGoals">Goals</Link></li>





                </ul>

              </div>

            </div>

          </li>
          <li className='p-4'>
            <Link href='/Enterprise/Enterprise'>Enterprises</Link>
          </li>
          <li>

            <div className="relative group">
              <div className="flex items-center cursor-pointer py-1">
                <button className="bg-blue p-3 inline-flex justify-center items-center ">
                  <span>    Resources</span>
                  <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
              </div>
              <div className="items-center absolute  invisible group-hover:visible">
                <ul className="p-2 bg-base-200 text-black">
                  <li><Link href='/BlogPage/BlogPage'>Blog</Link></li>
                  <li> <Link className="" href='/resources/workmanresource'>Work management resources</Link></li>
                </ul>
              </div>

            </div>



          </li>


          {/* <ul className="menu menu-horizontal px-1">

            <li tabIndex={0}>

              <a className='p-4 mb-5'>
                Resources
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2 bg-base-200 text-black">
                <li><Link href='/BlogPage/BlogPage'>Blog</Link></li>
                <li> <Link className="" href='/resources/workmanresource'>Work management resources</Link></li>

              </ul> */}
          {/* </li>

          </ul> */}
          <li className='p-4'>
            <Link href='/Dashboard/Dashboard'>Dashboard</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>About us</Link>
          </li>
          {isAdminRole &&
            <li className='p-4'>
              <Link href='/admindashboard/dashboard'>Admin</Link>
            </li>
          }

          {
            user?.email ?

              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex={0} className="btn btn-circle m-1">
                  {
                    singleUser?.profilePhoto ? <img className='rounded-full w-6 h-6' src={singleUser?.profilePhoto} alt="" /> :
                      <>
                        <div className="w-7 h-7 rounded-full bg-sky-400 flex justify-center items-center ">
                          <h6 className="uppercase font-bold text-sm">{singleUser?.name.split(' ')[0][0] + singleUser?.name.split(' ')[0][1]}</h6>
                        </div>
                      </>
                  }
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li className='p-4 text-white'>
                    <Link className='buttonColor rounded px-3 py-1 font-bold' onClick={handlelogOut} href='/Login/login'>Log Out</Link>
                  </li>
                  <li className='p-4 text-white btn-xm'>
                    <Link className='buttonColor rounded px-3 py-1 font-bold' href='/updateProfile/updateProfile'>Update Profile</Link>
                  </li>
                </ul>
              </div>

              :
              <li className='p-4'>
                <Link href='/Login/login'>Login</Link>
              </li>
          }
        </ul>

        {/* Mobile Button */}

        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}


        </div>
        {/* Mobile Menu */}

        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }

        >

          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Products</Link>
            </li>
            {/* sub button */}
            <li className='text-4xl'>
              <div className="relative group">
                <div className="flex items-center cursor-pointer py-1">
                  <button className="bg-blue p-3 text-white inline-flex justify-center items-center ">
                    <span>Features</span>
                    <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                </div>
                <div className="items-center absolute text-white  invisible group-hover:visible">
                  <ul className="list-reset">
                    <li><Link href="/TaskManagement/TaskManagement" className="px-2 py-2 block bg-base-200  text-black text-xl">Task Management</Link></li>

                    <li> <Link className="px-2 py-2 block bg-base-200  text-black text-xl " href='/CreateProject/CreateProject'>Create Projects</Link></li>


                    <li> <Link className="px-2 py-2 block bg-base-200  text-black text-xl " href='/integration/integrations'>Integraion M</Link></li>
                    <li> <Link className="px-2 py-2 block bg-base-200  text-black text-xl " href='/myGoals'>Goals</Link></li>
                  </ul>
                </div>
              </div>

            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/Enterprise/Enterprise'>Enterprises</Link>
            </li>

            <li className='text-4xl'>
              <div className="relative group">
                <div className="flex items-center cursor-pointer py-1">
                  <button className="bg-blue p-3 text-white inline-flex justify-center items-center ">
                    <span>Features</span>
                    <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                </div>
                <div className="items-center absolute text-white  invisible group-hover:visible">
            <ul className="menu menu-vertical px-1">

              <li tabIndex={0}>
                <a className='p-4 text-4xl hover:text-gray-500'>
                  Resources
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2 bg-base-200 text-black">
                  <li><Link href='/BlogPage/BlogPage'>Blog</Link></li>
                  <li> <Link className="" href='/resources/workmanresource'>Work management resources</Link></li>

                </ul>
                
              </li>

            </ul>
            </div>
              </div>

            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>About us</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Careers</Link>
            </li>

            {
              user?.email ? <li className='p-4 text-4xl hover:text-gray-500'>
                <Link onClick={handlelogOut} href='/Login/login'>Log Out</Link>
              </li> :
                <li className='p-4'>
                  <Link href='/Login/login'>Login</Link>
                </li>
            }
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Navbar;