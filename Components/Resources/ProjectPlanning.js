import React, { useEffect, useState } from 'react';

const ProjectPlanning = () => {
    const [proPlnningData, setPrPlDat] = useState()
    useEffect(() => {

        fetch("https://creative-project-manager-server.vercel.app/project-planning").then(res => res.json())
            .then(data => setPrPlDat(data))
    }, [])
    console.log(proPlnningData)
    return (
        <div>
            <div>
                <div>

                    {/* img add  */}
                    <div className=' mx-3 my-3 grid justify-center items-center'>
                        <div className="card  lg:flex-row-reverse bg-base-100 shadow-xl ">
                            <figure><img src="https://assets.asana.biz/transform/3a769a69-befe-4953-adc7-3b20e91aa01e/hub-project-planning-2x?io=transform:fill,width:768&format=webp" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> Project planning resources</h2>
                                <p>Track your work—and get results. With project planning, organize and track everything to set each project up for success. Then, move work across the finish line and hit your deadlines.</p>

                            </div>

                        </div>
                    </div>

                    {/* database data loade  */}
                    <div>
                        <h1 className='text-3xl mx-5 my-8'>Browse all project planning resources</h1>
                    </div>

                    <div className='grid mx-2 my-3 justify-center items-center'>
                        <div className='grid gap-4 lg:grid-cols-2 grid-cols-1'>
                            {
                                proPlnningData?.map((planning) => <div>
                                    <div className="card lg:card-side bg-base-100 shadow-xl">
                                        <figure><img src={planning?.picture} alt="Album" /></figure>
                                        <div className="card-body">
                                            <h1 ><span className='text-white px-2 py-1 bg-green-500'>ARTICLE</span></h1>
                                            <h2 className="card-title">{planning?.title}</h2>
                                           
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">See Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPlanning;