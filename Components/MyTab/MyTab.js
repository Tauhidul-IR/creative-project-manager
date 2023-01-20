
// import { Tab } from '@headlessui/react'
import { Tab } from '@headlessui/react';
import React from 'react';
import classNames from 'classname'

const MyTab = () => {
    return (

        <div className='className="w-full max-w-md px-2 py-16 mx-auto sm:px-0'>
            <Tab.Group manual>
                <Tab.List className="flex space-x-5 rounded-xl bg-blue-900/20 p-1">
                    <Tab className={({ selected }) => classNames("w-full rounded-lg py-5 text-xl font-medium leading-5 text-white", selected ? "bg-blue-600 text-black " : "text-blue-700")}>Advantage</Tab>
                    <Tab className={({ selected }) => classNames("w-full rounded-lg py-5 text-xl font-medium leading-5 text-white", selected ? "bg-blue-600 text-black " : "text-blue-700")}>Otherness</Tab>
                    <Tab className={({ selected }) => classNames("w-full rounded-lg py-5 text-xl font-medium leading-5 text-white", selected ? "bg-blue-600 text-black " : "text-blue-700")}>Team Up With CPM</Tab>

                </Tab.List>
                <Tab.Panels className="mt-5  ">
                    <Tab.Panel className="rounded-xl bg-slate-300 ">
                        <h1 className='text-center m-5 font-bold '>Advantage  with <strong className='text-indigo-700'>Creative Projects Manager</strong></h1>
                        <div className=' sm:flex '>

                            <div className="card w-96  text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-12 text-cyan-400">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>


                                    </h2>
                                    <p className="font-bold">
                                        Improved customers experience <br />
                                        <small>PC driven BSS & OSS</small>
                                    </p>

                                </div>
                            </div>
                            <div className="card w-96  text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-12 text-cyan-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                        </svg>

                                    </h2>

                                    <p className="font-bold" >Cost efficient digital transformation <br />
                                        <small>digitalization growth</small></p>

                                </div>
                            </div>
                            <div className="card w-96  text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-12 text-cyan-400">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                                        </svg>

                                    </h2>
                                    <p className="font-bold">Resources operational agility
                                        <br />  <small>processes automation</small></p>

                                </div>

                            </div>

                        </div>
                        <button class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            About us
                        </button>
                    </Tab.Panel>


                    <Tab.Panel className="rounded-xl bg-slate-300 p-3">
                        <h1 className='text-center m-5 font-bold '>Why Creative Projects Manager is  <strong className='text-indigo-700'>Otherness</strong></h1>
                        <div className='lg:flex '>

                            <div className="card w-96  text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-12 text-cyan-400">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                        </svg>



                                    </h2>
                                    <p className="font-bold">
                                        Functional gaps-filling projects <br />
                                        <small>improve and co-exist with legacy</small>
                                    </p>

                                </div>
                            </div>
                            <div className="card w-96  text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-12 text-cyan-400">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                        </svg>



                                    </h2>

                                    <p className="font-bold" >Free of charge workshop <br />
                                        <small>detailing objectives blueprint</small></p>

                                </div>
                            </div>
                            <div className="card w-96  text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-12 text-cyan-400">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>



                                    </h2>
                                    <p className="font-bold">Tailored DEMO <br />
                                        <small>sessions validate with no commitment required</small></p>

                                </div>

                            </div>
                        </div>
                        <button class=" mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Schedule a personalized Demo
                        </button>
                    </Tab.Panel>
                    <Tab.Panel className="rounded-xl bg-slate-300 p-3">
                        <h1 className='text-center m-5 font-bold '>Team up with  <strong className='text-indigo-700'>Creative Projects Manager</strong></h1>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">

                                    Teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.

                                </h2>


                            </div>
                        </div>
                        <button class=" flex items-center mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Partner with CPM
                        </button>
                    </Tab.Panel>

                </Tab.Panels>


            </Tab.Group>


        </div>

    );
};

export default MyTab;