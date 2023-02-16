import Link from 'next/link';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const  GetProjects = ({projects}) => {

console.log(projects);

    return (
        <div>
 <div id='height' className='mb-32 ml-3 mr-3 bg-sky-100 ' >

<h2 className='text-2xl font-bold ml-9 p-5'>Project</h2>
<div className='mb-5 '>
  <div className='p-5'>
    <h2 className='text-2xl font-bold ml-9'>Information Projects</h2>
  <Link href='/CreateProject/CreateProject' >
  <button className="bg-sky-400 hover:bg-green-400 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline rounded-full ml-9 mt-5 ">Create New</button></Link>
  </div>

 
  
</div>

<div class="justify-center justify-items-center text-black ">
<div  className='text-center  ml-9 mr-9  p-5' >
<Table className='border-2 border-black '>
      <Thead className='border-2 border-l-2 text-sky-400 border-black '>
        <Tr>
        <Th></Th>
          <Th>Project Name</Th>
          <Th>Project Manager</Th>
          <Th>Category</Th>
          <Th>Start Date</Th>
          <Th>End Date</Th>
          <Th>Priority</Th>
          <Th>Status</Th>
         
        </Tr>
      </Thead>
      <Tbody >
      {projects.map((project,i) => {
                return (
                    <tr key={project._id}>
                        <td>{i+1}</td>
                        <td>{project.projectName}</td>
                        <td>{project.projectManager}<br></br>
                        
                        {project.email}
                        </td>
                        <td>{project.category}</td>
                        <td>{project.startDate}</td>
                        <td>{project.endDate}</td>
                        <td>{project.priority}</td>
                        <td>{project.status}</td>
                       
                    </tr>
                )
            })}
      </Tbody>
    </Table>
</div>
</div>
       </div>
        </div>

    )
}


export const getStaticProps = async () => {
    const res = await fetch('https://creative-project-manager-server.vercel.app/create-project');
    const data = await res.json();
    return {
        props: {
            projects: JSON.parse(JSON.stringify(data))  
           }
    }
}

export default  GetProjects ;