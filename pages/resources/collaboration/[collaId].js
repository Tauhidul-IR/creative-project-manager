
const CollaborationDetails = ({collaboration}) => {
  
    return (
        <div>
           <div className='grid justify-center items-center  '>
                <div className='' >
                    {/* title ,nameImagt ,,name ,,picture add  */}


                    <div className="card w-96  bg-base-100 shadow-xl my-6 lg:min-w-max">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{collaboration?.title}</h2>
                            <div>
                                <div>
                                    <p className='flex my-6'><img src={collaboration?.imgname} className="w-16 h-14 mx-3" alt="" />  <span className='mx-4 px-4 '>{collaboration?.name}</span></p>
                                    <p>{collaboration?.time}</p>
                                </div>
                            </div>

                        </div>
                        <figure><img src={collaboration?.picture} alt="Shoes" /></figure>
                    </div>
                    {/* ------------------------ */}


                    <div className='grid justify-center items-centers'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                         
                    {/* question 1 & details  1  */}
                    <div className="card w-96  bg-base-100 shadow-xl  lg:max-w-full">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">
                                {collaboration?.q1}</h2>
                            <p>{collaboration?.d1}</p>
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
                                {collaboration?.q2}</h2>
                            <p>{collaboration?.d2}</p>
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
                                {collaboration?.q3}</h2>
                            <p>{collaboration?.d3}</p>
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
                                {collaboration?.q4}</h2>
                            <p>{collaboration?.d4}</p>
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
                        <figure><img src={collaboration?.img2} alt="Shoes" /></figure>
                    </div>
                    {/* ----------------------------- */}
                </div>
            </div>
        </div>
    );
};







export const getStaticProps = async (context)=>{
    const {params}= context;
const res = await fetch(`https://creative-project-manager-server.vercel.app/collaboration/${params?.collaId}`)
const data = await res.json()
return{
    props:{
        collaboration:data
    }
}
}

export  const getStaticPaths = async ()=>{

    const res = await fetch("https://creative-project-manager-server.vercel.app/collaboration");
    const datas = await res.json();
    const paths = datas.map(data =>{
    
       return {params:{
        collaId:`${data?._id}`
       }} 
    })
    return{
        paths,
        fallback:false
    }
    
    
    }

export default CollaborationDetails;