import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const WorkManaReource = () => {
    return (
        <div className=''>
            <div className='grid '>
                <div>
                    {/* resource heading */}
                    <div className='mt-16 mx-6'>
                        <h1 className=' text-4xl mt-16 '>Work management Resources</h1>
                        <p className='mt-7'>Discover what work management is and what it looks like in practice with resources from Creative Project manager.</p>
                    </div>
                    {/* collaboration and business  */}
                    <div className='grid  justify-center items-center'>
                        <div className='grid gap-2 grid-cols-1 lg:grid-cols-1 md:grid-cols-1'>
                            <div className='mx-6 my-6'>
                                <div className="card lg:card-side bg-base-100 shadow-xl">
                                    <figure><img src="https://assets.asana.biz/transform/5f9973e8-0a51-499d-84dc-ac66431a3c55/hub-collaboration-2x?io=transform:fill,width:960&format=webp" alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Collaboration resources</h2>
                                        <p>Collaboration is the cornerstone of great teamwork. Get resources on how to unlock collaboration and empower team members to work together effortlessly.</p>
                                        <div className="card-actions justify-center ">
                                            <Link href="/resources/collabiration" className='buttonColor rounded font-bold px-3 py-1' > See Detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* busness project articles */}
                            <div className='mx-6 my-6'>
                                <div className="card lg:card-side bg-base-100 shadow-xl">
                                    <figure><img src="https://assets.asana.biz/transform/f42e809b-eb5d-467b-8f5a-442eb3a51b4c/hub-work-management-2x?io=transform:fill,width:768&format=webp" alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Business strategy resources</h2>
                                        <p>Craft your business strategy, improve operational processes, and do more of the work you love. Get resources to plan and execute your business with CPM.</p>
                                        <div className="card-actions justify-center">
                                            <button className="buttonColor rounded font-bold px-3 py-1">See Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------- */}
                    {/* project planning and inspire impact collection and project management and goals */}
                    <div className='grid justify-center items-center gap-4'>
                        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                            <div className='gri'>
                                <div className="card w-96 h-32 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href="/resources/project-planning">Project planning <span></span></Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-96 h-32 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href="/resources/inspire-impact">Inspire & Impact Collection <span></span></Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-96 h-32 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href="/resources/project-management">Project Management<span></span></Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-96 h-32 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href="/resources/goals-blogs ">Goals <span></span></Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkManaReource;