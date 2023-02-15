import React from 'react';
import Link from 'next/link';
const GoalsBlogsResources = ({ goalsBlog}) => {
    return (
        <div>
            
            <div className='grid justify-center items-center'>
                <div className='mx-14 my-4 gap-4'>
                    <div className="card lg:card-side  bg-base-100 shadow-xl">
                        <figure><img src="https://assets.asana.biz/transform/5895eaa5-578e-4068-aeb6-c1bc36c0d7dc/article-goals-goals-2x?io=transform:fill,width:375&format=webp" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Goals resources</h2>
                            <p>Teams that have clear goals achieve high-impact results. Set goals to help team members understand the impact of their work and get their best work done.</p>

                        </div>
                    </div>

                </div>
            </div>


            {/* database data loade  */}
            <div>
                <h1 className='text-3xl mx-5 my-8'>Browse all goals resources</h1>
            </div>


            <div className='grid justify-center items-center'>
                <div className='grid gap-5 my-2 mx-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        goalsBlog?.map( goalsBlog => <div key={goalsBlog?._id}>
{/* lg:card-side */}

                           <Link className='hover:border-spacing-3' href={`/resources/goals-blog/${ goalsBlog?._id}`}>
                           
                           <div className="card w-96 h-96  bg-base-100 shadow-xl">
                                <figure><img src={ goalsBlog?.picture} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{ goalsBlog?.title}</h2>
                                    <p>Click the button to listen on Spotiwhy app.</p>
                                    <div className="card-actions justify-center">
                                        <Link className='btn btn-primary' href={`/resources/goals-blog/${ goalsBlog?._id}`}>See Details</Link>
                                    </div>
                                </div>
                            </div></Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};


export const getStaticProps = async () => {

    const res = await fetch("https://creative-project-manager-server.vercel.app/goals-blog");
    const data = await res.json()
    return {
        props: {
            goalsBlog: data
        }
    }
}

export default GoalsBlogsResources;