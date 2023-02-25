import { useEffect, useState } from 'react'

function TopCards() {
    const[projects,setProjects] = useState([]);

    useEffect(() => {
        fetch('https://creative-project-manager-server.vercel.app/create-project')
        .then(res=>res.json())
        .then(data => setProjects(data));
    },[]);
    
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$10,890</p>
                    <p className='text-gray-600'>Daily Projects Task Revenue</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg font-bold'>+20</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg' >
            <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>{projects.length}</p>
                    <p className='text-gray-600'>Total Projects</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg font-bold'>10+</span>
                </p>
            </div>
            <div className=' bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>890</p>
                    <p className='text-gray-600'> Customers</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg font-bold'>+10</span>
                </p>
            </div>

        </div>
    )
}

export default TopCards