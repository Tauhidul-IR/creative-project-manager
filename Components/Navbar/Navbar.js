import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const { user, logOutUser } = useContext(AuthContext);


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
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

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
          <li className='p-4'>
            <Link href='/#'>Products</Link>
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
                <ul className="list-reset">
                  <li><Link href="/TaskManagement/TaskManagement" className="px-2 py-2  bg-black block  text-white ">Task Management</Link></li>
                  <li> <Link className="px-2 py-2  bg-black block  text-white " href='/Features/features'>Portfolios</Link></li>
                  <li> <Link className="px-2 py-2  bg-black block  text-white " href='/AllProjects/AllProjects'>My Projects</Link></li>


                </ul>

              </div>
            </div>

          </li>

          <li className='p-4'>
            <Link href='/Dashboard/Dashboard'>Dashboard</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>About us</Link>
          </li>


          {
            user?.email ?
              <li className='p-4 '>


                <Link onClick={handlelogOut} href='/Login/login'>Log Out</Link>
              </li> :
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
                    <li> <Link className="px-2 py-2 block bg-base-200  text-black text-xl " href='/Features/features'>Portfolios</Link></li>
                    <li> <Link className="px-2 py-2 block bg-base-200  text-black text-xl " href='/AllProjects/AllProjects'>My Projects</Link></li>
                  </ul>
                </div>
              </div>

            </li>

            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>

              <Link href='/work'>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>About us</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Careers</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Login</Link>
            </li> */}

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