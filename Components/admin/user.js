import React from 'react';
import { AiOutlineDelete, } from 'react-icons/ai';

const User = ({users}) => {
    console.log(users);
    
    const  handleDelete =(id)=>{
        console.log(id);
        
        //   const res = await fetch(`http://localhost:5000/allusers/${id}`,{
              
        //       method:"DELETE"
        //   });
        //   const deletes = await res.json();
    
        
        }
    return (
        <tr>
        <th><button onClick={ ()=>handleDelete(users?._id)}><AiOutlineDelete/></button></th>
        <td>{users?.name}</td>
        <td>{users?.email}</td>
        {/* <td>Blue</td> */}
      </tr>
    );
};

export default User;