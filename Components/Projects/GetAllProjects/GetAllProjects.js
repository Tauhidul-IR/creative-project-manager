import Link from 'next/link';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const  GetAllProjects = ({project}) => {
   

    return (
       <div className='mb-32 ml-4 mr-5 mt-10' >

<h2 className='text-2xl font-bold ml-5'>Project</h2>
<div className='mt-11 mb-5 '>
  <div>
    <h2 className='text-2xl font-bold ml-5'>Information Projects</h2>
  <Link href='/CreateProject/CreateProject' >
  <button className="btn btn-info normal-case font-bold rounded-full ml-5 mt-5">Create New</button></Link>
  </div>

 
  
</div>

<div className='text-center '>
<Table className='border-2 border-sky-200'>
      <Thead>
        <Tr className='border-2 border-l-2 border-sky-200'>
          <Th>Project Name</Th>
          <Th>Project Manager</Th>
          <Th>Category</Th>
          <Th>Start Date</Th>
          <Th>End Date</Th>
          <Th>Priority</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr  >
          <Td>{project.projectName}</Td>
          <Td>{project.projectManager}</Td>
          <Td>{project.category}</Td>
          <Td>{project.startDate}</Td>
          <Td>{project.endDate}</Td>
          <Td>{project.priority}</Td>
          <Td>{project.status}</Td>
          
          
       
        </Tr>
        
      </Tbody>
    </Table>
</div>
       </div>

    )
}
export default GetAllProjects;