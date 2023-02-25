import Link from 'next/link';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const GetProductivities = ({ productivities }) => {

  return (

    <div>
      <div id='height' className='mb-32 ml-3 mr-3 bg-sky-100 ' >

        <h2 className='text-2xl font-bold ml-9 p-5'>Productivities</h2>
        <div className='mb-5'>
          <div className='p-5'>
            <h2 className='text-2xl font-bold ml-9'>Information Productivities</h2>
            <Link href='/Productivities/Productivities'>
              <button className="bg-sky-400 hover:bg-green-400 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline rounded-full ml-9 mt-5 ">Create New</button>
            </Link>
          </div>
        </div>

        <div class="justify-center justify-items-center text-black ">
          <div className='text-center  ml-9 mr-9  p-5' >
            <Table className='border-2 border-black '>
              <Thead className='border-2 border-l-2 text-sky-400 border-black '>
                <Tr>
                  <Th></Th>
                  <Th>Project</Th>
                  <Th>Subject</Th>
                  <Th>Duration</Th>
                  <Th>Status</Th>

                </Tr>
              </Thead>
              <Tbody >
                {productivities?.map((productivity, i) => {
                  return (
                    <tr key={productivity._id}>
                      <td>{i + 1}</td>
                      <td>{productivity.project}<br></br>
                        {productivity.task}
                      </td>
                      <td>{productivity.subject}</td>
                      <td>{productivity.status}</td>
                      <td>{productivity.date}<br></br>
                        {productivity.start}<br></br>
                        {productivity.end}
                      </td>

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
  const res = await fetch('https://creative-project-manager-server.vercel.app/productivity');
  const data = await res.json();
  return {
    props: {
      productivities: JSON.parse(JSON.stringify(data))
    }
  }
}





export default GetProductivities;
