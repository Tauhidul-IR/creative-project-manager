import React from 'react'

function Header() {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2 className='font-bold bg-purple-800 text-white rounded-lg'>Dashboard</h2>
        <h2 className='font-bold bg-green-800 text-white rounded-lg'>Welcome</h2>
    </div>
  )
}

export default Header