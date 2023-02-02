import React from 'react';
import { AiOutlineDelete, } from 'react-icons/ai';

const User = ({users}) => {
    console.log(users);
    
    const  handleDelete = async (id)=>{
        console.log(id);
        
          const res = await fetch(`https://creative-project-manager-server.vercel.app/allusers/${id}`,{
              
              method:"DELETE"
          });
          const deleteData = await res.json();
          console.log(deleteData);
        //   const deletes = await res.json();
    
        
        }
    return (
        <tr>
        <th><button onClick={ ()=>handleDelete(users?._id)} className="text-red-400"><AiOutlineDelete/></button></th>
        <td>{users?.name}</td>
        <td>{users?.email}</td>
        {/* <td>Blue</td> */}
      </tr>
    );
};

export default User;