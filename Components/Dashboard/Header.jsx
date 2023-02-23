import React from 'react'

function Header() {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2 className='font-bold text-info uppercase text-2xl'>Welcome <span className='text-primary'>Dashboard</span></h2>
      {/* <h2 className='font-bold text-primary text-2xl'>Welcome</h2> */}
    </div>
  )
}

export default Header