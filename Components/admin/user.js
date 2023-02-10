import React, { useContext } from 'react';
import { AiOutlineDelete, } from 'react-icons/ai';


const User = ({users}) => {
   
    const {user}= useContext(AuthContext)
    const  handleDelete = async (id)=>{
     
     
        
          fetch(`http://localhost:5000/allusers/${id}`,{
              
              method:"DELETE"
          }).then(res.json()).then(dat)
         res.json();
          console.log(deleteData);
        //   const deletes = await res.json();
    
        
        }
    return (
        <tr>
        <th><button className="text-red-400"><AiOutlineDelete/></button></th>
        <td>{users?.name}</td>
        <td>{users?.email}</td>
       
        
       
      </tr>
    );
};

export default User;