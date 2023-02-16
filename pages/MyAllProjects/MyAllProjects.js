import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useContext } from "react";
import Background from '../../Components/Backgroud/Background';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from "../../Others/AuthProvider/AuthProvider";

const MyAllProjects = () => {

    const { user } = useContext(AuthContext);

    const url = `https://creative-project-manager-server.vercel.app/project?email=${user?.email}`;
    const { data: projects = [], refetch } = useQuery({
        queryKey: ['projects', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
                  refetch()
            return data;
        }
    })
    return (
        <div>
            <div>


                <div className="overflow-x-auto mt-11 ">

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Project Name</th>
                                <th>Add details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.map((project, i) => <tr key={project._id}>
                                    <th>{i + 1}</th>
                                    <td>{project.project}</td>
                                    <td> <Link href='/ProjectDetails/ProjectDetails'>
                                        <button class="btn btn-outline text-green-500 mt-5 py-2 px-4 hover:btn-success">
                                            Add Details
                                        </button>

                                    </Link></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};



export default MyAllProjects;