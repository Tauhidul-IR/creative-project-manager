import React from 'react';
import Link from 'next/link';
const InspireImpact = ({ inspireImacp }) => {
    console.log(inspireImacp);
    return (
        <div>
            <div className='grid justify-center items-center'>
                <div className='mx-14 my-4 gap-4'>
                        <div className="card lg:card-side  bg-base-100 shadow-xl">
                            <figure><img src="https://assets.asana.biz/transform/c018cebf-e680-42c3-a795-7f79a64ba663/hub-EMIM-2x?io=transform:fill,width:768&format=webp" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Inspire & Impact collection</h2>
                                <p>Your employees are your most valuable resource. But giving them the tools they need to succeed is only the beginning—you also need to create a supportive, inspiring workplace where they can see their impact. Learn how.</p>
                               
                            </div>
                        </div>
                    
                </div>
            </div>


            {/* database data loade  */}
<div>
                        <h1 className='text-3xl mx-5 my-8'>Browse the Creative Project Management Inspire & Impact collection</h1>
                    </div>



            <div className='grid justify-center items-center'>
                <div className='grid gap-5 my-2 mx-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        inspireImacp?.map(inspireImpact => <div>


                            <div className="card w-96 lg:card-side bg-base-100 shadow-xl">
                                <figure><img src={inspireImpact?.picture} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{inspireImpact?.title}</h2>
                                    <p>Click the button to listen on Spotiwhy app.</p>
                                    <div className="card-actions justify-center">
                                        <Link className='btn btn-primary' href={`/resources/instpire/${inspireImpact?._id}`}>See Details</Link>
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

export default InspireImpact;
export const getStaticProps = async () => {

    const res = await fetch("http://localhost:5000/inspire-impact");
    const data = await res.json()
    return {
        props: {
            inspireImacp: data
        }
    }
}