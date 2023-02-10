import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { AiFillCustomerService, AiOutlineTeam, RiTeamLine } from 'react-icons/ai';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import AdminRole from '../Adminhook/AdminRole';
import User from './user';
const Allusers = () => {
    const { user, loader } = useContext(AuthContext)
    const [allusers, setAllusers] = useState()
    if (loader) {
        return <h1>Loader</h1>
    }
    const [isAdminRole] = AdminRole(user?.email)
    useEffect(
        () => {
            fetch("http://localhost:5000/allusers").then(res => res.json()).then(data => setAllusers(data))
        }
        , [])

    return (
        <div>

            <div className="grid justify-center items-center ">
                <div className=" grid grid-cols-3 gap-2 my-4">
                    <div>
                        <div className="card rounded-full w-30 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><AiFillCustomerService /></h2>
                                <h1>{allusers?.length}</h1>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card rounded-full w-30 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><AiOutlineTeam /></h2>
                                <h1>5</h1>
                                <p>Team Member</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card rounded-full w-30 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><AiFillCustomerService /></h2>
                                <h1>{user?.displayName}</h1>
                                {isAdminRole ? <h1 className='text-3xl'>Admin</h1> : <p>Active User</p>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    {/* <th>Favorite Color</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allusers?.map(users =>

                                        <User users={users} key={users?._id} ></User>

                                    )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Allusers;
