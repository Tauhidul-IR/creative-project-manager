import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useContext } from "react";
import Background from '../../Components/Backgroud/Background';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from "../../Others/AuthProvider/AuthProvider";

const MyAllProjects = () => {

    const { user } = useContext(AuthContext);

    const url = `https://creative-project-manager-server-d0d44dts8.vercel.app/project?email=${user?.email}`;
    const { data: projects = [] } = useQuery({
        queryKey: ['projects', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div>
            <div>


                <div className="overflow-x-auto">

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
                                        <button class="btn btn-outline text-sky-500 mt-5 py-2 px-4 ">
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