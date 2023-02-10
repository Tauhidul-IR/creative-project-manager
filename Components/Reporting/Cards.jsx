import React from 'react'

function TopCards() {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-blue-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>Weeks</p>
                    <p className='text-gray-600'>Last 7 Days</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg font-bold'>+40</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-pink-200 flex justify-between w-full border p-4 rounded-lg' >
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>Total Projects Sales</p>
                    <p className='text-gray-600'>YTD Revenue</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg font-bold'>+35</span>
                </p>
            </div>
            <div className=' bg-blue-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>300</p>
                    <p className='text-gray-600'> Customers</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg font-bold'>+11</span>
                </p>
            </div>

        </div>
    )
}

export default TopCards