import { AiFillCustomerService } from "react-icons/ai";
import User from "../../Components/Admin/user";



const Alluser = ({ alluser }) => {
    const  handleDelete =async(id)=>{
        
    //   const res = await fetch(`http://localhost:5000/allusers/${id}`,{
          
    //       method:"DELETE"
    //   });
    //   const deletes = await res.json();

    
    }

    return (
        <div>
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
                                <h2 className="card-title"><AiFillCustomerService /></h2>
                                <h1>{alluser?.length}</h1>
                                <p>Customer</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card rounded-full w-30 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><AiFillCustomerService /></h2>
                                <h1>{alluser?.length}</h1>
                                <p>Customer</p>

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

                                        <User users={users} key={users?._id} handleDelete={handleDelete}></User>

                                    )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Alluser;
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/allusers");
    const data = await res.json();

    return {
        props: {
            alluser: data
        }
    }
}



