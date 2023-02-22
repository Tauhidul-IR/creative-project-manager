import Image from "next/image";

import Link from 'next/link';
import img from '../../public/images/signUp1.png'
import google from '../../public/images/google.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Others/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";


const SignUpPage = () => {
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const [singUpError, setSingUpError] = useState(null);
    const router = useRouter();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password)
        setSingUpError('')


        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success('SignUp successfully')
                        saveUser(email, name);
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



    const saveUser = (email, name) => {
        const user = { email, name };
        console.log(user);
        fetch('https://creative-project-manager-server.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // form.reset()
                    router.push('/');
                }
            })
            .catch(error => console.error(error))
    }





    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                toast.success('SignUp successfully')
                console.log(user?.email, user?.displayName);
                // router.push('/');
                saveUser(user?.email, user?.displayName)
            })
            .catch(error => {
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
                            <h1 className="text-4xl font-bold text-black text-center">Sign Up</h1>
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
                                <input className="btn btn-info" type="submit" value="Sign Up" />
                            </div>
                            {singUpError && <p className='text-red-500'>{singUpError}</p>}
                        </form>

                        <div>
                            <div className="divider my-0 text-black">OR</div>
                            <h1 className='text-black text-center font-3xl font-bold mt-5'>Sign up with</h1>
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