import Image from 'next/image';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useContext } from 'react';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import Loading from '../../Components/Loading/Loading';

const updateProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { user } = useContext(AuthContext)

    const { data: singleUser, refetch, isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://creative-project-manager-server.vercel.app/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(singleUser);


    const handleUpdateUser = (data) => {
        // console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=1d1e77a53a5d9e586aa1731efba2a018`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const userProfile = {
                        name: data.name,
                        email: data.email,
                        img: imgData.data.url
                    }

                    // console.log(singleUser._id);
                    // console.log(userProfile);

                    fetch(`https://creative-project-manager-server.vercel.app/users/${singleUser._id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                toast.success('Data Updated')
                                console.log(data);
                                refetch()
                            }
                        })
                        .catch(error => console.log(error))

                }
            })
            .catch(error => console.log(error))
    }


    // 1d1e77a53a5d9e586aa1731efba2a018

    return (
        <div>
            <div className='mb-5 w-2/4 mx-auto'>
                <h1 className='text-4xl font-bold my-7'>User Info.</h1>
                <form onSubmit={handleSubmit(handleUpdateUser)}>
                    {/* --------------email---------------------------------- */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-bold">Email</span></label>
                        <input
                            {...register("email", {
                                required: "Email is Required"
                            })}
                            type="email" className="input input-bordered w-full " defaultValue={singleUser?.email} readOnly />
                    </div>
                    {/* --------------email---------------------------------- */}


                    {/* --------------Name---------------------------------- */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-bold">Name</span></label>
                        <input
                            {...register("name", {
                                required: 'Name Must Given.'
                            })}
                            type="text" className="input input-bordered w-full" defaultValue={singleUser?.name} />

                    </div>
                    {/* --------------Name---------------------------------- */}



                    {/* --------------Upload photo---------------------------------- */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-bold">Photo</span></label>
                        <input
                            {...register("image", {
                                required: 'Photo is required.'
                            })}
                            type="file" className="input input-bordered w-full" required />
                        {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}

                    </div>
                    {/* --------------Upload photo---------------------------------- */}


                    {/* --------------Submit Btn---------------------------------- */}
                    <input className='btn btn-info btn-sm mt-5' type="submit" value={'Update'} />
                    {/* display Error */}
                    <div>
                        {
                            // signUpError && <p className='text-red-600'>{signUpError}</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default updateProfile;