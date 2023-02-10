import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson ,FcManager, RxCardStackMinus} from "react-icons/rx"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'

function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed  w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col item-center'>
            <Link href="/Dashboard/Dashboard">
              <div className='bg-purple-800 text-white p-3 rounded-lg inline-block '>
                <RxCardStackMinus size={20}/>
              </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

            <Link href="/Dashboard/Dashboard">
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
                <RxDashboard size={20}/>
              </div>
            </Link>
            <Link href="/Dashboard/portfolio">
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
                <RxPerson size={20}/>
              </div>
            </Link>
            <Link href="/Dashboard/Goals">
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
                <HiOutlineShoppingBag size={20}/>
              </div>
            </Link>
            <Link href="/">
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block '>
                <AiFillSetting size={20}/>
              </div>
            </Link>

        </div>
        </div>
        <main className='ml-20 w-full '>{children}</main>
    </div>
  )
}

export default Sidebar