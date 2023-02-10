import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { AiFillCustomerService,AiOutlineTeam,RiTeamLine } from 'react-icons/ai';
import User from '../../Components/admin/user';
import AdminRole from '../../Components/Adminhook/AdminRole';

import AdminSideV from '../../Components/AdminRoles/AdminSideV';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';







const UserAll = () => {
    const {user,loader}=useContext(AuthContext)
    
    const [allusers,setAllusers]=useState()
 
   const [isAdminRole]= AdminRole(user?.email)
      if(loader){
        return<h1>Loader</h1>
    }
    useEffect(
        ()=>{
             fetch("https://creative-project-manager-server.vercel.app/allusers").then(res=>res.json()).then(data =>{
                setAllusers(data)
               
             }) 
                }
    ,[])
 
    return (
        <AdminSideV>
            
 <div className='bg-gray-500'>
           
           <div className="grid justify-center items-center w-auto ">
               <div className=" grid lg:grid-cols-3 grid-col-1 gap-2 my-4">
                   <div>
                       <div className="card rounded-full w-30 bg-neutral text-neutral-content w-auto">
                           <div className="card-body items-center text-center">
                               <h2 className="card-title"><AiFillCustomerService /></h2>
                               <h1>{allusers?.length}</h1>
                               <p>Customer</p>
   
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className="card rounded-full w-30 bg-neutral text-neutral-content w-auto">
                           <div className="card-body items-center text-center">
                               <h2 className="card-title"><AiOutlineTeam/></h2>
                               <h1>5</h1>
                               <p>Team Member</p>
   
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className="card rounded-full w-30 bg-neutral text-neutral-content w-auto">
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
                   <div className="overflow-x-auto  w-full">
                       <table className="table  w-full">
   
                           <thead>
                               <tr>
                                   <th>Delete</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   {/* <th>Favorite Color</th> */}
                               </tr>
                           </thead>
                           <tbody className=''>
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
       
        </AdminSideV>
       
    )

                                }

export default UserAll;


// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:5000/allusers/allusers");
//     const data = await res.json();
    

//     return {
//         props: {
//             alluser: data
//         }
//     }
// }