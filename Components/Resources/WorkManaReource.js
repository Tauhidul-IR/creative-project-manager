import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const WorkManaReource = () => {
    return (
        <div className=''>

            <Navbar></Navbar>


            <div className='grid '>
                <div>
                    {/* resource heading */}
                    <div className='mt-16 mx-6'>
                        <h1 className=' text-4xl mt-16 '>Work management Resources</h1>
                        <p className='mt-7'>Discover what work management is and what it looks like in practice with resources from Creative Project manager.</p>
                    </div>
                    {/* collaboration and business  */}
                    <div className='grid my-9 justify-center items-center'>
                        <div className='grid gap-2 grid-cols-1 lg:grid-cols-2'>
                            <div>
                                <div className="hero  bg-base-200">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src="https://assets.asana.biz/transform/5f9973e8-0a51-499d-84dc-ac66431a3c55/hub-collaboration-2x?io=transform:fill,width:960&format=webp" className="max-w-sm rounded-lg shadow-2xl" />
                                        <div>
                                            <h1 className="text-2xl font-bold">Collaboration resources</h1>
                                            <p className="py-3">Collaboration is the cornerstone of great teamwork. Get resources on how to unlock collaboration and empower team members to work together effortlessly.</p>
                                            <div className='text-center'>
                                                <button className="btn btn-primary">See Details</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="hero  bg-base-200">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src="https://assets.asana.biz/transform/f42e809b-eb5d-467b-8f5a-442eb3a51b4c/hub-work-management-2x?io=transform:fill,width:768&format=webp" className="max-w-sm rounded-lg shadow-2xl" />
                                        <div>
                                            <h1 className="text-2xl font-bold">Business strategy resources</h1>
                                            <p className="py-3">Craft your business strategy, improve operational processes, and do more of the work you love. Get resources to plan and execute your business with Asana.</p>
                                            <div className='text-center'>
                                                <button className="btn btn-primary">See Details</button>
                                            </div>
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
                                <div className="card w-96 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href="/resources/project-planning">Project planning <span></span></Link></h2>


                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-96 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href=" ">Inspire & Impact Collection <span></span></Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-96 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href=" ">Project Management<span></span></Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-96 bg-base-100 shadow-xl border">
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-3xl"><Link href=" ">Goals <span></span></Link></h2>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




{/* All Resource  */}
                          <div>
                            <h1>All resources</h1>
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