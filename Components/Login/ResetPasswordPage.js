import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import img from '../../public/images/Reset.png'

const ResetPasswordPage = () => {

    const { resetPassword, user } = useContext(AuthContext);

    console.log(user);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email);


        resetPassword(email)
            .then(() => {
                toast.success('Send Password reset Email.')
                form.reset();
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <Image src={img} alt='#'></Image>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered text-black" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Reset Password" />
                            </div>
                        </form>
                        <Link className='btn btn-link text-black' href={'/'}>Go to Home</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;