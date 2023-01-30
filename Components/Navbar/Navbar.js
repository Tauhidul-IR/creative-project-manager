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
        
          <ul class="menu menu-horizontal px-1">
     
      <li tabindex="0">
        <Link href='/'>
         Features
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul class="p-2 bg-base-100 text-black ">
          <li><Link href= '/Features/features'>Task Management</Link></li>
          <li><Link href= '/Integration/Management'>Management</Link></li>
          <li><Link href= '/Integration/Report3'>Report Generator</Link></li>

        </ul>
      </li>
   
    </ul>


          <li className='p-4'>
            <Link href='/work'>Services</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>About us</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Careers</Link>
          </li>
          {
            user?.email ? <li className='p-4'>
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
              <Link href='/'>Products</Link>
            </li>
            <ul class="menu menu-vertical px-1">
     
     <li tabindex="0">
       <Link href='/' className='p-4 text-4xl hover:text-gray-500'>
        Features
         <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
       </Link>
       <ul class="p-2 bg-base-100 text-black ">
         <li><Link href= '/Features/features'>Task Management</Link></li>
       </ul>
     </li>
  
   </ul>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;