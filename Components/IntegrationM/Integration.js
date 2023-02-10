import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Integration = () => {
    return (
        <div>
            {/* <Navbar className="text-black"></Navbar> */}
            {/* intergration heading */}
            <div className='grid justify-center items-center my-5 mt-16 text-center mx-3'>
                <h1 className='text-3xl'>Out of the box, Create Project Management works seamlessly with these servies:</h1>
            </div>
            {/* card create */}
            <div className='grid justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
                    {/* google drive */}
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968523.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Google Drives</h2>
                            <p>Bring your Google Docs and more into your workflows.</p>
                            <div className="card-actions">
                                <Link className='hover:text-teal-300 text-blue-500' href="/integration/googledrive">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    {/* emails */}
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Email</h2>
                            <p>Create tasks, reply to statuses and more - all from your inbox.</p>
                            <div className="card-actions">
                                <Link className='hover:text-teal-300 text-blue-500' href="/integration/email">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/dropbox_tile_logo_icon_168230.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Dropbox</h2>
                            <p>Access and share any of your Dropbox content in Podio</p>
                            <div className="card-actions">
                                <Link className='hover:text-teal-300 text-blue-500' href="">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://iconarchive.com/download/i86942/uiconstock/round-edge-social/sharethis.ico" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">ShareFile</h2>
                            <p>Securely access files, share data and create time-saving workflows.</p>
                            <div className="card-actions">
                                <Link className='hover:text-teal-300 text-blue-500' href="">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://play-lh.googleusercontent.com/33hYI8jfhTOvoocwbLwW0BXeReUbksTuwBkfCxB5NY1123v1F_maVF-gVpVucQNJJhU" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">GoToMeeting</h2>
                            <p>Schedule and launch GoToMeeting sessions in Podio.</p>
                            <div className="card-actions">
                                <Link className='hover:text-teal-300 text-blue-500' href="">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn-icons-png.flaticon.com/512/906/906310.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Excel</h2>
                            <p>Turn a spreadsheet into a Podio App in minutes or vice versa.</p>
                            <div className="card-actions">
                                <Link className='hover:text-teal-300 text-blue-500' href="">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Integration;