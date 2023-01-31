import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

// import { toast } from "react-hot-toast";
// import { async } from "@firebase/util";


const User = ({users,handleDelete}) => {

  
   
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
