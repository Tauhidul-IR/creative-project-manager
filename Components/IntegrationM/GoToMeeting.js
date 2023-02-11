import Link from 'next/link';
import React from 'react';

const GoToMeeting = () => {
    return (
        <div className='mb-16'>
            <div  className='mb-16'>
                    <didv className="grid mt-4 justify-center items-center">
                        <div className="card w-72 ">
                            <div>
                                <div className='grid grid-cols-3'>
                                    <div>
                                        <figure><img src="https://www.cpmintl.com/wp-content/uploads/2022/04/CPM-Logo.png" alt="Album" /></figure>
                                    </div>
                                    <div>
                                        <figure><img src="https://www.cloudou.net/wp-content/uploads/2021/10/aad138.png" alt="Album" /></figure>
                                    </div>
                                    <div>
                                        <figure><img src="https://play-lh.googleusercontent.com/krVeVUWndHhbfgSLzl3BxoiV6KTiDFGpucjlbNUsWXHJpKUo0wDqvVzj4OebrAhssQ" alt="Album" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </didv>
                    <div className="grid justify-center items-center">
                        <h1 className='text-center text-3xl mx-3 my-3'>Creative Project Manager works with GoToMeeting</h1>
                        <div className='justify-center items-center grid'>
                            <p className='mx-2 text-xl text-center my-1 '>Schedule and launch your meetings directly from Podio. Add structure to all your pre and post meeting discussions, files and follow up tasks – to really make the most of your meetings.</p>
                        </div>


                    </div>
                    <div className='justify-center items-center'>
                        <div className='card   my-3 mx-3' >
                            <div>
                                <figure><img src="https://i.ibb.co/vv6PxB7/Go-To-Meeting.png" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center text-xl'>How combining GoToMeeting and Podio gets more from your meetings:</h1>
                        <div>
                            <div className='grid justify-center items-center  my-3 mx-5'>
                                <div className="card lg:card-side ">
                                    <figure><img className='w-60 h-80' src="https://i.etsystatic.com/20686786/c/1276/1014/392/294/il/247bdd/4484970935/il_340x270.4484970935_gwq3.jpg" alt="Album" /></figure>
                                    <div className="card-body ">

                                        <p className='text-center text-lg'>
                                            	
Inviting participants to your GoToMeeting session on Creative Project Manager gets everyone together on the same page – helping them prepare before the meeting starts.

Set a structured agenda and attach relevant files like presentations, you can even link meetings to your projects on CPM to add extra context. Then, launch the session in one click.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='grid justify-center items-center  my-3 mx-5'>
                                <div className="card lg:card-side ">
                                    <figure><img className='w-52 h-52' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJWTdRMxZMswDMBCwsFifEnvaYxLSGrhNRQ&usqp=CAU" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl text-center'>


                                       	
Continue the discussion after your meeting with comments and assign follow up tasks based on your meeting’s action points. Creative Project Manager will keep everything organized in one place.</p>

                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center mx-3'>
                        Connecting your GoToMeeting and Podio is done in just a couple of clicks. Need a hand? Check out the <span className='hover:text-sky-300 text-emerald-500'> Help Center section article.</span>
                        </h1>
                        <h1 className='my-5 mx-4 text-center'>
                            See first-hand how CPM can transform the way your team works together.
                        </h1>
                        <div className='text-center mb-4'>
                            <Link className='btn rounded px-2 py-1' href="">Sign Up now-its free</Link>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default GoToMeeting;