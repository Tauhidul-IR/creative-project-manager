import Link from 'next/link';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const  GetAllProjects = ({project}) => {
   

    return (
       <div id='height' className='mb-32 ml-4 mr-5 bg-sky-100' >

<h2 className='text-2xl font-bold ml-9 p-5'>Project</h2>
<div className='mb-5 '>
  <div className='p-5'>
    <h2 className='text-2xl font-bold ml-9'>Information Projects</h2>
  <Link href='/CreateProject/CreateProject' >
  <button className="bg-sky-400 hover:bg-green-400 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline rounded-full ml-9 mt-5 ">Create New</button></Link>
  </div>

 
  
</div>

<div className='text-center  ml-9 mr-9  p-5'>
<Table className='border-2 border-black '>
      <Thead className='border-2 border-l-2 text-sky-400 border-black '>
        <Tr >
          <Th>Project Name</Th>
          <Th>Project Manager</Th>
          <Th>Category</Th>
          <Th>Start Date</Th>
          <Th>End Date</Th>
          <Th>Priority</Th>
          <Th>Status</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody >
        <Tr>
          <Td>{project.projectName}</Td>
          <Td>{project.projectManager}</Td>
          <Td>{project.category}</Td>
          <Td>{project.startDate}</Td>
          <Td>{project.endDate}</Td>
          <Td>{project.priority}</Td>
          <Td >{project.status}</Td>
          <Td> <button class="bg-red-400 hover:bg-red-700 mt-2 mb-2 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
     Delete
    </button></Td>
        </Tr>
        
      </Tbody>
    </Table>
</div>
       </div>

    )
}
export default GetAllProjects;