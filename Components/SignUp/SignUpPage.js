import Image from "next/image";

import Link from 'next/link';
import img from '../../public/images/signUp1.png'
import imgBG from '../../public/images/hidden.png'
import google from '../../public/images/google.png'


const SignUpPage = () => {
    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <Image src={img}></Image>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-4xl font-bold text-black">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="SignUp" />
                            </div>
                        </form>

                        <div>
                            <div className="divider my-0 text-black">OR</div>
                            <h1 className='text-black text-center font-3xl font-bold mt-5'>SignUp with</h1>
                            <div className='flex justify-around py-4'>
                                <Image className='w-8 h-8' src={google}></Image>
                            </div>
                            <p className='text-center text-black mb-5'>Already Have an Account<Link href={'/Login/login'} className='text-orange-500 font-bold ml-2'>Login</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUpPage;