import Link from 'next/link';
import React, { useContext } from 'react';
import { AiFillCustomerService,AiOutlineTeam,RiTeamLine } from 'react-icons/ai';
import User from '../../Components/admin/user';
import AdminNavber from '../../Components/AdminRoles/AdminNavber';

import { AuthContext } from '../../Others/AuthProvider/AuthProvider';

const Alluser = ({alluser}) => {
    const {user,loader}=useContext(AuthContext)
    if(loader){
        return<h1>Loader</h1>
    }
  
    console.log(user?.email);
    
   
    return (
        <div>
            <AdminNavber></AdminNavber>
        <div className="grid justify-center items-center ">
            <div className=" grid grid-cols-3 gap-2 my-4">
                <div>
                    <div className="card rounded-full w-30 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><AiFillCustomerService /></h2>
                            <h1>{alluser?.length}</h1>
                            <p>Customer</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card rounded-full w-30 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><AiOutlineTeam/></h2>
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
                            <p>Active User</p>

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
                                alluser.map(users =>

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

export default Alluser;
export const getStaticProps = async () => {
    const res = await fetch("https://creative-project-manager-server.vercel.app/allusers");
    const data = await res.json();

    return {
        props: {
            alluser: data
        }
    }
}
