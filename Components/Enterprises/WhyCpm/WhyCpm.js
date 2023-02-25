

const WhyCpm = () => {
    return (
        <div>
            <h2 className="text-xl font-medium text-center text-gray-500 mt-16">WHY CPM</h2>
            <h2 className="text-4xl font-bold  text-blue-400  text-center mt-6">Adaptable work management</h2>
            <p className="text-2xl font-semibold text-center mt-6">With CPM Enterprise, your organization has access to CPM full <br></br> suite of work management features. Implement advanced security <br></br>functionalities and powerful  admin and data controls.</p>

            <div className='grid justify-items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-6 mt-7 mb-9'>
                <div  className="ml-11">
                   <img src="https://assets.asana.biz/m/85bf4686ab3d0cf/original/enterprise-benefits-icon-4.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Connect people to purpose</h2>
                   <p className='text-left text-gray-400  mt-4'>Set goals to drive clarity, focus, and personal growth.</p>
                </div>
                <div>
                   <img src="https://assets.asana.biz/m/552295e13db02ddd/original/enterprise-benefits-icon-3.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Unify teams</h2>
                   <p className='text-left text-gray-400  mt-4'>Improve the speed and quality of work between <br></br> teams  with integrated workflows.</p>
                </div>
                <div className="ml-9">
                   <img src="https://assets.asana.biz/m/510d8846a3053286/original/enterprise-benefits-icon-2.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Make data-backed decisions</h2>
                   <p className='text-left text-gray-400  mt-4'>Keep business initiatives on track<br></br> with real-time work data through universal reporting.</p>
                </div>
                <div>
                   <img src="https://assets.asana.biz/m/2ae7999a2a0b383e/original/enterprise-benefits-icon-1.svg" alt="" /> 
                   <h2 className='text-left text-xl mt-4'>Secure at scale</h2>
                   <p className='text-left text-gray-400  mt-4'> Trust your work is secure and scalable  with our  <br></br>  robust infrastructure.</p>
                </div>
            </div>

        </div>
    );
};

export default WhyCpm;