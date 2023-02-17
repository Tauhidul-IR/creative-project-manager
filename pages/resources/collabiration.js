import React from 'react';
import Link from 'next/link';
const Collabiration = ({ collabiration }) => {

    console.log(collabiration);
    return (
        <div>

            <div className='grid justify-center items-center'>
                <div className='mx-14 my-4 gap-4'>
                    <div className="card lg:card-side  bg-base-100 shadow-xl">
                        <figure><img src="https://assets.asana.biz/transform/5f9973e8-0a51-499d-84dc-ac66431a3c55/hub-collaboration-2x?io=transform:fill,width:375&format=webp" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Collaboration resources</h2>
                            <p>Collaboration is the cornerstone of great teamwork. Get resources on how to unlock collaboration and empower team members to work together effortlessly.</p>

                        </div>
                    </div>

                </div>
            </div>


            {/* database data loade  */}
            <div>
                <h1 className='text-3xl mx-5 my-8'>Browse all collaboration resources</h1>
            </div>


            <div className='grid justify-center items-center'>
                <div className='grid gap-5 my-2 mx-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                    collabiration?.map(collabor => <div key={collabor?._id}>


                            <div className="card w-96 h-96  bg-base-100 shadow-xl">
                                <figure><img src={collabor?.picture} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{collabor?.title}</h2>
                                    <p>Click the button to listen on Spotiwhy app.</p>
                                    <div className="card-actions justify-center">
                                        <Link className='btn btn-primary' href={`/resources/collaboration/${collabor?._id}`}>See Details</Link>
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



export const getStaticProps = async () => {

    const res = await fetch("https://creative-project-manager-server.vercel.app/collaboration");
    const data = await res.json()
    console.log(data);
    return {
        props: {
            collabiration: data
        }
    }
}
export default Collabiration;