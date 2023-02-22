import Link from 'next/link';
import React from 'react';

const Dropbox = () => {
    return (
        <div className='mb-16'>
            <div>
                <div >
                    <didv className="grid justify-center items-center">
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
                                        <figure><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/6b/73/1b/6b731b0d-d284-e86f-302a-0a239c8309f9/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" alt="Album" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </didv>
                    <div className="grid justify-center items-center">
                        <h1 className='text-center text-3xl mx-3 my-3'>Creative Project Manager works with Dropbox</h1>
                        <div className='justify-center items-center grid'>
                            <p className='mx-2 text-xl text-center my-1 '>Attach Dropbox content to your work in CPM. Add a new level of collaboration to your documents and files by connecting them to projects, workflows and discussions.</p>
                        </div>


                    </div>
                    <div className='justify-center items-center'>
                        <div className='card   my-3 mx-3' >
                            <div>
                                <figure><img src="https://i.ibb.co/XFGL9yk/dropbox.png" alt="Album" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center text-xl'>How combining Dropbox and seamlessly with Creative Project Manager :</h1>
                        <div>
                            <div className='grid justify-center items-center  my-3 mx-5'>
                                <div className="card lg:card-side ">
                                    <figure><img className='w-52 h-52' src="https://plaky.com/learn/wp-content/uploads/2022/03/What-is-a-Work-Breakdown-Structure-WBS-in-project-management_-social.png" alt="Album" /></figure>
                                    <div className="card-body">

                                        <p className='text-center text-lg'>
                                            Structure the work around your files by attaching them to your CPM projects and workflows.

                                            Share Dropbox content with your team as part of status posts in your workspaces. You can also share them privately in chat messages.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='grid justify-center items-center  my-3 mx-5'>
                                <div className="card lg:card-side ">
                                    <figure><img className='w-52 h-52' src="https://www.shutterstock.com/image-vector/corectly-vector-icon-260nw-761476621.jpg" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl text-center'>


                                            Attach Dropbox files to tasks, for example to ask a colleague to review content you have stored in Dropbox.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-center mx-3'>
                            Connecting your Dropbox and CPM is done in a few clicks. Need a hand? Check out the <span className='hover:text-sky-300 text-emerald-500'> Help Center section article.</span>
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
        </div>
    );
};

export default Dropbox;