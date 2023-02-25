
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import EditModal from '../../Components/teamMemberEdit/EditModal';


const teamMembers = ({ data }) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState(data)
    const [isOpen, setIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleToggleModal = (rowData) => {
        setSelectedData(rowData)
        setIsOpen(true);
    }
    // console.log(data)

    const handleDelete = (id) => {
        // console.log(id)
    }

    //close modal
    const handleCloseModal = () => {
        setSelectedData(null);
        setIsOpen(false)
    }



    const columns = [
        {
            name: 'Image',
            selector: (row) => <img className='rounded' width={50} height={50} src={row.imgUrl} alt="team member image" />,
            sortable: true,
        },
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row) => row.address,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: (row) => row.pNumber,
            sortable: true,
        },
        {
            name: 'Designation',
            selector: (row) => row.designation,
            sortable: true,
        },
        {
            name: 'Category',
            selector: (row) => row.category,
            sortable: true,
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='flex gap-2'>

                    <button onClick={() => handleToggleModal(row)} className="btn btn-outline btn-primary"  >Edit</button>

                    <button onClick={handleDelete(row._id)} className="btn btn-outline btn-secondary"  >Delete</button>

                </div >
            )
        }
    ];


    useEffect(() => {
        setDomLoaded(true);
    }, []);

    // for searching
    useEffect(() => {
        const value = data.filter((info) => {
            return (info.name && info.email && info.pNumber).toLowerCase().match(search.toLowerCase())
        })
        setFilteredData(value)
    }, [search])
    // custom title
    const CustomTitle = () => (
        <div>
            <h2 className='text-4xl font-semibold hover:text-slate-500'>Team Member Info</h2>
        </div>
    );


    return (
<<<<<<< HEAD
        <div>
=======
        <div className='pt-20'>
>>>>>>> 57251e59d59d7c9bb7003a0a9ae77f806a215a4c

            {
                domLoaded && (

                    <DataTable
                        columns={columns}
                        data={filteredData}
                        pagination
                        paginationPerPage={10}
                        title={<CustomTitle />}
                        fixedHeader
                        responsive={true}
                        fixedHeaderScrollHeight='450px'
                        highlightOnHover
                        style={{ zIndex: 2 }}
                        subHeader
                        subHeaderComponent={
                            <input type='text' placeholder='Search...' className='w-30 h-8 p-4 border-2 rounded-sm  border-green-700  border-spacing-2' value={search} onChange={(e) => setSearch(e.target.value)} />
                        }
                    />
                )
            }



            {
                isOpen && (<EditModal isOpen={isOpen} handleCloseModal={handleCloseModal} modalData={selectedData} />
                )
            }

        </div>
    );
}


export const getStaticProps = async () => {
    const res = await fetch('https://creative-project-manager-server.vercel.app/create_member')
    let data = await res.json()

    return {
        props: {
            data: data
        }
    }
}


export default teamMembers;