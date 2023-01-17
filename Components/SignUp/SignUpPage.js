import Image from "next/image";

import Link from 'next/link';
import img from '../../public/images/signUp1.png'
import imgBG from '../../public/images/hidden.png'
import google from '../../public/images/google.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Others/AuthProvider/AuthProvider";


const SignUpPage = () => {
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const [singUpError, setSingUpError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password)


        createUser(email, password)
        setSingUpError('')
            .then(result => {
                const user = result.user;
                // console.log(user);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                    })
                    .catch(error => {
                        console.error(error);
                        setSingUpError(error.message)
                    })
            })
            .catch(error => {
                console.log(error);
                setSingUpError(error.message)
            })

    }

    console.log(singUpError);

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => {
                // console.log(error);
                setSingUpError(error.message)
            })
    }
    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <Image src={img}></Image>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-4xl font-bold text-black">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="SignUp" />
                            </div>
                            {singUpError && <p className='text-red-500'>{singUpError}</p>}
                        </form>

                        <div>
                            <div className="divider my-0 text-black">OR</div>
                            <h1 className='text-black text-center font-3xl font-bold mt-5'>SignUp with</h1>
                            <div className='flex justify-around py-4'>
                                <Image onClick={handleGoogle} className='w-8 h-8' src={google}></Image>
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