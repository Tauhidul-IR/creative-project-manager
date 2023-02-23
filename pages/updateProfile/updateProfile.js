
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useContext } from 'react';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import Loading from '../../Components/Loading/Loading';
import UpdateUserModal from '../../Components/UpdateUserModal/UpdateUserModal';
import { useState } from 'react';

const updateProfile = () => {
    const [aboutUser, setAboutUser] = useState(null);

    const { user } = useContext(AuthContext)

    const handlesetuser = () => {
        setAboutUser(singleUser)
    }

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

    return (
        <div>
            <div className='mb-16 w-2/4 mx-auto'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className='text-4xl font-bold mb-7'>User Info.</h1>
                <div className=''>

                    <div className='flex flex-col sm:flex-row items-center'>
                        <div className='w-16 mr-4'>
                            <img src={singleUser?.profilePhoto} alt="" />
                        </div>
                        <div>
                            <h2>Name : {singleUser?.name}</h2>
                            <h2>Email : {singleUser?.email}</h2>
                        </div>
                    </div>
                    <div className='mt-10 '>

                        {/* The button to open modal */}
                        <label htmlFor="updateUserModal" onClick={handlesetuser} className="rounded p-2 font-bold buttonColor">Edit Profile</label>
                    </div>
                </div>
                {
                    aboutUser && <UpdateUserModal singleUser={singleUser} refetch={refetch} setAboutUser={setAboutUser}></UpdateUserModal>
                }

            </div>

        </div>
    );
};

export default updateProfile;