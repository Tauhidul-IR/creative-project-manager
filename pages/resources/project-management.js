import Link from 'next/link';
import React from 'react';

const ProjectManament = ({ ProjMangeData }) => {
    console.log(ProjMangeData);
    return (
        <div>

            <div className=' mx-9 my-5 grid justify-center items-center'>
                <div className="card mx-4 my-3 lg:flex-row-reverse bg-base-100 shadow-xl ">
                    <figure><img className='w-96'     src="https://assets.asana.biz/transform/eb713e7c-d19a-4675-bdcf-a51b75e7b02f/hub-project-management-2x?io=transform:fill,width:768&format=webp" alt="Album" /></figure>
                    <div className="card-body w-96">
                        <h2 className="card-title">Project management resourcess</h2>
                        <p>Collaborate effortlessly, no matter where you are. With project management, you can track and manage all of your team’s work—from day one to deadline.</p>

                    </div>

                </div>

            </div>
            {/* database data loade  */}
            <div>
                <h1 className='text-3xl mx-5 my-8'>Browse all project management resources</h1>
            </div>

            <div className='grid justify-center items-center'>
                <div className='grid gap-5 my-2 mx-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        ProjMangeData?.map(projectData => <div key={projectData?._id}>


                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={projectData?.picture} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{projectData?.title}</h2>
                                    <p>Click the button to listen on Spotiwhy app.</p>
                                    <div className="card-actions justify-center">
                                        <Link className='buttonColor rounded font-bold py-1 px-2' href={`/resources/projectManagement/${projectData?._id}`}>See Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectManament;
export const getStaticProps = async () => {

    const res = await fetch("https://creative-project-manager-server.vercel.app/project-management");
    const data = await res.json()
    return {
        props: {
            ProjMangeData: data
        }
    }
}