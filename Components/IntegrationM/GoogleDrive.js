import Link from 'next/link';
import React from 'react';

const GoogleDrive = () => {
    return (
        <div>
            <div>
                <div className="grid justify-center items-center">
                    <div className="card w-72 ">
                        <div>
                            <div className='grid grid-cols-3  mt-24'>
                                <div>
                                    <figure><img src="https://www.cpmintl.com/wp-content/uploads/2022/04/CPM-Logo.png" alt="Album" /></figure>
                                </div>
                                <div>
                                    <figure><img src="https://www.cloudou.net/wp-content/uploads/2021/10/aad138.png" alt="Album" /></figure>
                                </div>
                                <div>
                                    <figure><img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Drive.max-1100x1100.png" alt="Album" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center items-center">
                    <h1 className='text-center text-3xl mx-3 my-3'>Creative Project Manager works with Google Drive </h1>
                    <div className='justify-center items-center grid'>
                        <p className='mx-5  my-3 text-center'>Bringing your Google Docs – and files stored in Drive – into Creative Project Manager adds structure and makes your content central to your projects and workflows. Simply connect your account to access and share anything from Google Drive in CPM.</p>
                    </div>


                </div>
                <div className='justify-center items-center'>
                    <div className='card   my-3 mx-3' >
                        <div>
                            <figure><img src="https://i.ibb.co/tCQYjJh/google-driv-Scrinsoot.png" alt="Album" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-xl'>How Creative Project Manager adds a new level of organization to your Google Drive content and Docs:</h1>
                    <div>
                        <div className='grid justify-center items-center  my-3 mx-5'>
                            <div className="card lg:card-side ">
                                <figure><img className='w-52 h-52 lg:w-1/3' src="https://cdn-icons-png.flaticon.com/512/272/272446.png" alt="Album" /></figure>
                                <div className="card-body">

                                    <p className='text-xl text-center'>
                                        Attach anything from Drive to your CPM projects – adding business context like deadlines and responsibilities to make teamwork easier.</p>

                                </div>
                            </div>
                        </div>
                        <div className='grid justify-center items-center  my-3 mx-5'>
                            <div className="card lg:card-side ">
                                <figure><img className='w-52 h-52' src="https://play-lh.googleusercontent.com/9nL28cqDO2KToe16cR1jSojnIpJEUYuePCFK1O7yABpY-RjwaVCyVScmZjKsuJSwV_w" alt="Album" /></figure>
                                <div className="card-body">
                                    <p className='text-xl text-center'>

                                        Quickly share from Drive to your Creative Project Manager activity streams. Discuss ongoing work with your team, without relying on email.</p>

                                </div>
                            </div>
                        </div>
                        <div className='grid justify-center items-center  my-3 mx-5'>
                            <div className="card lg:card-side ">
                                <figure><img className='w-60 h-56' src="https://e7.pngegg.com/pngimages/495/149/png-clipart-finland-faq-theme-correct-miscellaneous-hand-thumbnail.png" alt="Album" /></figure>
                                <div className="card-body">

                                    <p className='text-xl text-center'>
                                        Create CPM tasks with attached content from Drive to streamline your feedback or sign-off process.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center mx-3'>
                        Connecting your Google Drive and Creative Project Manager accounts is done in just a couple of clicks. Need a hand? Check out <span className='hover:text-sky-300 text-emerald-500'> Help Center CPM article.</span>
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

export default GoogleDrive;