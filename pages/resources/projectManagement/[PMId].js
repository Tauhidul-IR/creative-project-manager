import { useRouter } from 'next/router';
import React from 'react';

const ProjectManagementDetails = ({ projectManagement}) => {
    const router= useRouter()
    const id = router.query.PMId;
    
    return (
        <div>
            <div className='grid justify-center items-center  '>
                <div className='' >
                    {/* title ,nameImagt ,,name ,,picture add  */}


                    <div className="card w-96  bg-base-100 shadow-xl my-6 lg:min-w-max">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{projectManagement?.title}</h2>
                            <div>
                                <div>
                                    <p className='flex my-6'><img src={projectManagement?.imgname} className="w-16 h-14 mx-3" alt="" />  <span className='mx-4 px-4 '>{projectManagement?.name}</span></p>
                                    <p>{projectManagement?.time}</p>
                                </div>
                            </div>

                        </div>
                        <figure><img src={projectManagement?.picture} alt="Shoes" /></figure>
                    </div>
                    {/* ------------------------ */}


                    <div className='grid justify-center items-centers'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                         
                    {/* question 1 & details  1  */}
                    <div className="card w-96  bg-base-100 shadow-xl  lg:max-w-full">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">
                                {projectManagement?.q1}</h2>
                            <p>{projectManagement?.d1}</p>
                            <div>
                            </div>
                        </div>
                        <figure></figure>
                    </div>
                    {/* ----------------------------- */}
                    {/* question two & details  two  */}
                    <div className="card w-96 my-4 bg-base-100 shadow-xl  lg:max-w-full">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">
                                {projectManagement?.q2}</h2>
                            <p>{projectManagement?.d2}</p>
                            <div>
                            </div>
                        </div>
                        <figure></figure>
                    </div>
                    {/* ----------------------------- */}
                    {/* question tree & details  tree  */}
                    <div className="card w-96  my-4 bg-base-100 shadow-xl  lg:max-w-full">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">
                                {projectManagement?.q3}</h2>
                            <p>{projectManagement?.d3}</p>
                            <div>
                            </div>
                        </div>
                        <figure></figure>
                    </div>
                    {/* ----------------------------- */}
                    {/* question four & details  four  */}
                    <div className="card w-96 my-4 bg-base-100 shadow-xl  lg:max-w-full">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">
                                {projectManagement?.q4}</h2>
                            <p>{projectManagement?.d4}</p>
                            <div>
                            </div>
                        </div>
                        <figure></figure>
                    </div>
                    {/* ----------------------------- */} 
                        </div>
                    </div>

                    {/* question four & details  four  */}
                    <div className="card w-96  bg-base-100 shadow-xl my-6 lg:min-w-max">
                        <div className="card-body">      
                            <div>        
                            </div>
                        </div>
                        <figure><img src={projectManagement?.img2} alt="Shoes" /></figure>
                    </div>
                    {/* ----------------------------- */}
                </div>
            </div>
        </div>
    );
};


export const getStaticProps = async (context)=>{
    const {params}= context;
const res = await fetch(`http://localhost:5000/project-management/${params?.PMId}`)
const data = await res.json()
return{
    props:{
        projectManagement:data
    }
}
}

export  const getStaticPaths = async ()=>{

    const res = await fetch("http://localhost:5000/project-management");
    const datas = await res.json();
    const paths = datas.map(data =>{
    
       return {params:{
        PMId:`${data?._id}`
       }} 
    })
    return{
        paths,
        fallback:false
    }
    
    
    }

export default ProjectManagementDetails;