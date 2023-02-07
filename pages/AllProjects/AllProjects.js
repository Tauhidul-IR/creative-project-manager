import { useQuery } from '@tanstack/react-query';
import { useContext } from "react";
import Background from '../../Components/Backgroud/Background';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from "../../Others/AuthProvider/AuthProvider";

const AllProjects = () => {
    const { user } = useContext(AuthContext);
    const url = `https://creative-project-manager-server.vercel.app/project-edited?email=${user?.email}`;
    const { data: projects = [] } = useQuery({
        queryKey: ['projects', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);

            return data;
        }

    })
    return (
        <div>
            {/* <Navbar></Navbar>
            <Background></Background> */}

            <div className="overflow-x-auto mt-24">
                <h2 className=" text-center text-4xl mt-9 mb-9 font-semibold text-gray-500">All My Projects</h2>

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th>Task</th>
                            <th>Date</th>
                            <th>Priority</th>
                            <th>Owner</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, i) => <tr key={project._id}>
                                <th>{i + 1}</th>
                                <td className='text-black'>{project.editProject}</td>

                                <td className='text-black'>{project.description}</td>
                                <td className='text-black'>{project.task}</td>
                                <td className='text-black'>{project.date}</td>
                                <td className='text-black'>{project.priority}</td>
                                <td className='text-black'>{project.email}</td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllProjects;