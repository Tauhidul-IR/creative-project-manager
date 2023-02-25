import Link from 'next/link';
import React from 'react';
import WorkManaReource from '../../Components/Resources/WorkManaReource';

const workmanresource = ({ allResorces }) => {

    return (
        <div>
            <WorkManaReource></WorkManaReource>



            <div className='grid justify-center my-5 items-center'>
                <div className='grid gap-5 my-2 mx-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        allResorces?.map(allReData => <div key={allReData?._id}>



                            <div className="card w-96 h-96  bg-base-100 shadow-xl">
                                <figure><img className='w-96 h-52' src={allReData?.picture} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{allReData?.title}</h2>
                                    <p>Click the button to listen on Spotiwhy app.</p>
                                    <div className="card-actions justify-center">
                                        <Link className='buttonColor rounded font-bold px-3 py-1' href={`/resources/allresource/${allReData?._id}`}>See Details</Link>
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

    const res = await fetch("https://creative-project-manager-server.vercel.app/all-resources");
    const data = await res.json()
    return {
        props: {
            allResorces: data
        }
    }
}

export default workmanresource;
