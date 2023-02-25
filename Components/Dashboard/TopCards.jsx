import { useEffect, useState } from 'react'

function TopCards() {
    const [projects, setProjects] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('https://creative-project-manager-server.vercel.app/create-project')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    useEffect(() => {
        fetch('https://creative-project-manager-server.vercel.app/allusers')
            .then(res => res.json())
            .then(data => setAllUsers(data));
    }, []);

    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4 mt-10'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>{allUsers.length}</p>
                    <p className='text-gray-600'>All Users</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg font-bold'>+5</span>
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
           

        </div>
    )
}

export default TopCards