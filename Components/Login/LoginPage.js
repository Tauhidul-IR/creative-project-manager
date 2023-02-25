import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/images/login.png'
import google from '../../public/images/google.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
// import img2 from 'Privacy.svg'

const LoginPage = () => {
    const { googleSignIn, loginUser, user } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const router = useRouter();

    console.log(user);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        loginUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('Login Successfully.')
                router.push('/');
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })

    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                router.push('/');
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }


    return (
        <div>
            {/* <br />
            <br /> */}
            <div className="hero min-h-screen pt-20 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <Image src={img} alt='#'></Image>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-4xl font-bold text-black text-center">Login Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered text-black" />
                                <label className="label">
                                    <Link href={'/resetPassword/resetPassword'} className="label-text-alt link link-hover text-red-400">Forgot password?</Link>
                                </label>
                            </div>
                            {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Login" />
                            </div>
                        </form>

                        <div>
                            <div className="divider my-0 text-black">OR</div>
                            <h1 className='text-black text-center font-3xl font-bold mt-5'>Sign in with</h1>
                            <div className='flex justify-around py-4'>
                                <Image onClick={handleGoogle} className='w-8 h-8' src={google}></Image>
                            </div>
                            <p className='text-center text-black mb-5'>New to CRM <Link href={'/signUp/signUp'} className='text-orange-500 font-bold'>Sign Up</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;