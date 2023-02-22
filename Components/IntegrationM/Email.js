import Link from 'next/link';
import React from 'react';

const Email = () => {
    return (
        <div>
            <div>
                <div className="grid  justify-center items-center">
                    <div className="card w-72 ">
                        <div>
                            <div className='grid grid-cols-3 mt-24'>
                                <div>
                                    <figure><img src="https://www.cpmintl.com/wp-content/uploads/2022/04/CPM-Logo.png" alt="Album" /></figure>
                                </div>
                                <div>
                                    <figure><img src="https://www.cloudou.net/wp-content/uploads/2021/10/aad138.png" alt="Album" /></figure>
                                </div>
                                <div>
                                    <figure><img src="https://fonts.gstatic.com/s/i/productlogos/gmail_2020q4/v10/192px.svg" alt="Album" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center items-center">
                    <h1 className='text-center text-3xl mx-3 my-3'>Creative Project Manager works with Email</h1>
                    <div className='justify-center items-center grid'>
                        <p className='mx-2 text-xl text-center my-1 '>What happens in your inbox shouldn’t stay in your inbox. Creative Project Manager enables you to easily turn emails into actionable and collaborative tasks, status posts, or even the beginnings of a new project. You can simply reply to activity on CPM via email, too.</p>
                    </div>


                </div>
                <div className='justify-center items-center'>
                    <div className='card   my-3 mx-3' >
                        <div>
                            <figure><img src="https://i.ibb.co/mF4FYpt/emailss.png" alt="Album" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-xl'>Here’s how you can use email seamlessly with Creative Project Manager :</h1>
                    <div>
                        <div className='grid justify-center items-center  my-3 mx-5'>
                            <div className="card lg:card-side ">
                                <figure><img className='w-52 h-52' src="https://img.freepik.com/premium-vector/checkmark-icon-check-mark-tick-correct-symbol-ok-approved-sign-isolated-vector-illustration_108855-2760.jpg" alt="Album" /></figure>
                                <div className="card-body">

                                    <p className='text-center text-lg'>
                                        Add your CPM task list to your email address book to create tasks by simply forwarding an email to it’s address</p>

                                </div>
                            </div>
                        </div>
                        <div className='grid justify-center items-center  my-3 mx-5'>
                            <div className="card lg:card-side ">
                                <figure><img className='w-52 h-52' src="http://10xinteractive.com/wp-content/uploads/2018/08/icp-contentm.png" alt="Album" /></figure>
                                <div className="card-body">
                                    <p className='text-xl text-center'>


                                        Create status messages by sending an email to the unique email address of each workspace.</p>

                                </div>
                            </div>
                        </div>
                        <div className='grid justify-center items-center  my-3 mx-5'>
                            <div className="card lg:card-side ">
                                <figure><img className='w-52 h-52' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWkp76CpvaudL-xq9xpyfaU-68T-hbm9RPA&usqp=CAU" alt="Album" /></figure>
                                <div className="card-body">

                                    <p className='text-xl text-center'>
                                        Forward emails to any of your Creative Project Manager, for example to start a new project or add a new lead to your CRM.

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center mx-3'>
                        For comprehensive, step-by-step guides to these features, see the <span className='hover:text-sky-300 text-emerald-500'> Help Center CPM Email section article.</span>
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

export default Email;