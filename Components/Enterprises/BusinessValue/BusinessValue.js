import enterprise1 from '../../../public/enterprises/enterprise1.svg'

const BusinessValue = () => {
    return (
        <div>
            <div>
                <p className='text-gray-300 text-center text-xl'>RIO</p>
                <h2 className='text-center text-5xl mt-3 mb-5'>Business value of CPM</h2>
                <p className='text-center text-3xl mt-3 mb-3'>IDC's research demonstrates the impact Asana has on employee <br></br>  productivity and customer satisfaction.</p>
            </div>

<div className='text-center text-xl mt-9 mb-9 font-bold hover:text-red-500'>
    <h2>Read the full report</h2>
</div>
            <div className='grid  justify-center place-content-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-9 mb-9 lg:ml-16 '>
                <div >
                   <img src="https://assets.asana.biz/m/1f9218e948142e9f/original/enterprise-stats-icons-3.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Increased employee <br></br> satisfaction</h2>
                </div>
                <div>
                   <img src="https://assets.asana.biz/m/1f9218e948142e9f/original/enterprise-stats-icons-3.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Faster execution</h2>
                </div>
                <div>
                   <img src="https://assets.asana.biz/m/44610aa77fd4d834/original/enterprise-stats-icons-2.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Increased on-time project<br></br> completion</h2>
                </div>
                <div>
                   <img src="https://assets.asana.biz/m/44d08a9dc18a662b/original/enterprise-stats-icons-1.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Decreased time on admin <br></br> tasks</h2>
                </div>
            </div>
        </div>
    );
};

export default BusinessValue;