import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxDashboard, RxPerson, RxCardStackMinus } from "react-icons/rx"
import { GiStairsGoal } from 'react-icons/gi'

import { AiFillSetting, AiOutlineLineChart, AiTwotoneFlag, AiOutlineRotateRight } from 'react-icons/ai'

function Sidebar({ children }) {
  return (
    <div className='flex'>
      <div className='fixed  w-36 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col item-center'>
          <Link href="/Dashboard/Dashboard">
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block '>
              <RxCardStackMinus size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

          <Link href="/Dashboard/Dashboard">
            <div className='bg-gray-100 hover:bg-purple-200 cursor-pointer  my-4  p-3 rounded-lg inline-block '>
              <RxDashboard size={20} />
              <h2 className='font-semibold'>Dashboard</h2>
            </div>
          </Link>
          <div>
            <div className='bg-gray-100 hover:bg-purple-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
              <AiTwotoneFlag size={20} />

              <div className="dropdown dropdown-top ">
                <label tabIndex={0} className="font-semibold ">Projects</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 bg-gray-100  rounded-box w-52">
                  <Link href='/Dashboard/CreateProject'>
                    <li className='hover:bg-purple-200 '><h2>Create Project</h2></li>

                  </Link>
                  <Link href='/Dashboard/InfoProject'>
                    <li className='hover:bg-purple-200 '><h2>Show Projects</h2></li>
                  </Link>

                </ul>
              </div>

            </div>
          </div>
          <div>
            <div className='bg-gray-100 hover:bg-purple-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
              <AiOutlineRotateRight size={20} />

              <div className="dropdown dropdown-top ">
                <label tabIndex={0} className="font-semibold ">Productivity</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 bg-gray-100  rounded-box w-52">
                  <Link href='/Dashboard/Productivities'>

                    <li className='hover:bg-purple-200 '><h2 >Create New</h2></li>
                  </Link>
                  <Link href='/Dashboard/InfoProductivities'>
                    <li className='hover:bg-purple-200 '><h2>Show Productivities</h2></li>
                  </Link>


                </ul>
              </div>

            </div>
          </div>
          <Link href="/Dashboard/portfolio">
            <div className='bg-gray-100 hover:bg-purple-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
              <RxPerson size={20} />
              <h2 className='font-semibold'>Portfolio</h2>
            </div>
          </Link>
          <Link href="/Dashboard/Goals">
            <div className='bg-gray-100 hover:bg-purple-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
              <GiStairsGoal size={20} />
              <h2 className='font-semibold'>Goals</h2>
            </div>
          </Link>
          <Link href="/Dashboard/Reporting">
            <div className='bg-gray-100 hover:bg-purple-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
              <AiOutlineLineChart size={20} />
              <h2 className='font-semibold'>Reporting</h2>
            </div>
          </Link>

          <Link href="/">
            <div className='bg-gray-100 hover:bg-purple-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
              <AiFillSetting size={20} />
              <h2 className='font-semibold'>Settings</h2>
            </div>
          </Link>

        </div>
      </div>
      <main className='ml-20 w-full '>{children}</main>
    </div>
  )
}

export default Sidebar