import Link from 'next/link';
import React from 'react';
import { AiFillSetting, AiOutlineRadiusSetting, AiTwotoneHome, AiTwotoneMessage, AiTwotoneSetting ,} from 'react-icons/ai';
import {RxSketchLogo, RxDashboard, RxPerson ,FcManager, RxCardStackMinus,} from "react-icons/rx"
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';

const AdminSideV = ({children}) => {
    return (
     <div >
        <Navbar></Navbar>
        <div className='flex mt-16' id="drawer">
            <div  clcassName='fixed  p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col item-center'>
                <Link href="/admindashboard/Dashboard">
                  <div className='bg-teal-300 text-white p-3 rounded-lg inline-block '>
                    <AiTwotoneHome size={20}/> 
                  </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href="/admindashboard/userall">
                  <div className='bg-teal-500 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-full inline-block '>
                    <RxPerson size={20}/>
                  </div>
                </Link>
                <Link href="">
                  <div className='bg-teal-500 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-full inline-block '>
                    <AiTwotoneMessage size={20}/>
                  </div>
                </Link>
                <Link href="">
                  <div className='bg-teal-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-full inline-block '>
                    <AiTwotoneSetting size={20}/>
                  </div>
                </Link>
            </div>
            </div>
            <main className='ml-20 w-full '>{children}</main>
        </div>
     </div>
      )
};

export default AdminSideV;