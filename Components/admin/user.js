import React, { useContext } from 'react';
import { AiOutlineDelete, } from 'react-icons/ai';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
import AdminRole from '../Adminhook/AdminRole';

const User = ({users}) => {
   
    
    const  handleDelete = async (id)=>{
       const {user}= useContext(AuthContext)
     
        
        //   fetch(`http://localhost:5000/allusers/${id}`,{
              
        //       method:"DELETE"
        //   }).then(res.json()).then(dat)
        //  res.json();
        //   console.log(deleteData);
        // //   const deletes = await res.json();
    
        
        }
    return (
        <tr>
        <th><button onClick={ ()=>handleDelete(users?._id)} className="text-red-400"><AiOutlineDelete/></button></th>
        <td>{users?.name}</td>
        <td>{users?.email}</td>
       
        
       
      </tr>
    );
};

export default User;