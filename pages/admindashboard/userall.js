
import { useContext,  useState } from 'react';
import {AiOutlineDelete,AiOutlineTeam,AiOutlineUsergroupAdd,AiOutlineUserSwitch,RiTeamLine } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import AdminSideV from '../../Components/AdminRoles/AdminSideV';
import ConfirmModals from '../../Components/ConfirmsModal/ConfirmModals';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const UserAll = () => {
    const {data: allusers =[],refetch}= useQuery({
        queryKey:["allusers"],
        queryFn:async()=>{
            const res = await fetch("https://creative-project-manager-server.vercel.app/allusers");
            const data = await res.json();
            return data ;
        }
        
    })
    console.log(allusers);
    const {user,loader}=useContext(AuthContext)
    const [deleteUser,setDeleteUser]= useState(null)
    const [makeAdmin,setAdminUser]=useState(null)
   const closeModale = ()=>
   {
    setDeleteUser(null)
    setAdminUser(null)
   }
   const handleMakeAdminUser= (adminData)=>{
    fetch(`http://localhost:5000/user/admin/${adminData?._id}`,
    {
        method:"PUT"
    }).then(res=>res.json())
    .then(admindatas =>{

        console.log(admindatas);
        if (admindatas?.modifiedCount > 0){
            toast.success("Admin Sucess Full Create")
            refetch()
        }
    })
   
   }

   const handleDeleteUser = (userData)=>{
    fetch(`http://localhost:5000/allusers/${userData?._id}`,{
        method:"DELETE"
    }).then(res=>res.json()).then(
        data=>{
            if(data?.deletedCount > 0){
                toast.error(`Delete ${userData?.name} Sucessfull`)
                refetch()
                
            }
     
        } )
   }
    return (
        <AdminSideV>
            
 <div className='bg-gray-500'>
           
           <div className="grid justify-center items-center w-auto ">
               <div className=" grid lg:grid-cols-3 grid-col-1 gap-2 my-4">
                   <div>
                       <div className="card rounded-full w-30 bg-neutral text-neutral-content w-auto">
                           <div className="card-body items-center text-center">
                               <h2 className="card-title"><AiOutlineUsergroupAdd /></h2>
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
                               <h2 className="card-title"><AiOutlineUserSwitch /></h2>
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
                                   
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Make Admin</th>
                                   <th>Delete</th>
                                   {/* <th>Favorite Color</th> */}
                               </tr>
                           </thead>
                           <tbody className=''>
                               {
                                   allusers?.map(users =>
                                    <tr>
                                      
                                    <td>{users?.name}</td>
                                      <td>{users?.email}</td>
                                      <th>
                                    { users?.role !== "admin" &&   <label htmlFor="confirm-modal" className=" btn btn-primary" onClick={()=>setAdminUser
                                    (users)}>Make Admin</label>}
                                       </th>
                                      <th>
                                      <label htmlFor="confirm-modal" className=" text-red-400" onClick={()=>setDeleteUser
                                    (users)}><AiOutlineDelete/></label>
                                       </th>
                                  </tr>
                                   )}
                           </tbody>
                       </table>
                   </div>
                   {/* admin modals */}
                   {
                    makeAdmin && <ConfirmModals 
                    title={`Are you sure you want to ${makeAdmin?.name} Admin ?`}
                    message= {`If you Admin ${makeAdmin?.email} .It can Confirm Click Admin `}
                    closeModale={closeModale}
                    sucesseceModal= {handleMakeAdminUser}
                    modalData = {makeAdmin}
                    confirmDelete = "Admin"
                    
                    >

                    </ConfirmModals>
                   }
                   {/* delete user modals */}
                  { deleteUser && <ConfirmModals
                  
                  title={`Are you sure you want to ${deleteUser?.name} Delete ?`}
                  message= {`If you delete ${deleteUser?.email} .It cannot be undone`}
                  closeModale={closeModale}
                  sucesseceModal= {handleDeleteUser}
                  modalData = {deleteUser}
                  confirmDelete = "Delete"
                  >
                    
                    
                    </ConfirmModals>}
               </div>
           </div>
   
   
            </div>
       
        </AdminSideV>
       
    )

                                }

export default UserAll;


export const getStaticProps = async () => {
    const res = await fetch("https://creative-project-manager-server.vercel.app/allusers");
    const data = await res.json();
    console.log(data)
    

    return {
        props: {
            allusers: data
        }
    }
}