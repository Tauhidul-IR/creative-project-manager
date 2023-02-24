const BlogDetails = ({article}) => {
    return (
        <div>
<div>

 <img  style={{height:'400px'}} className='flex mt-11 mx-auto rounded ' src={article.img} alt="" />

          <div className="mt-10">
  <div className=" text-center">
    <div>
      <h1 className="text-4xl font-semibold">{article.title}</h1>
      <p className='mt-5'>- By <span className='text-blue-600'>{article.writer}</span></p>
      <p className='mt-3 mb-5'> <span className='text-blue-600'>{article.date}</span></p>
      <p className='text-left ml-10 mr-10' >{article.description}</p><br></br>
      <br></br>
      <p className='text-left ml-10 mr-10' >{article.description2}</p>
    </div>
  </div>
</div>  
</div>



        </div>
    );
};



export const getStaticProps = async (context)=>{
    const {params}= context;
const res = await fetch(`https://creative-project-manager-server.vercel.app/blog-article/${params?. BlogId}`)
const data = await res.json()
return{
    props:{
        article:JSON.parse(JSON.stringify(data))
    }
}
}

export  const getStaticPaths = async () => {

    const res = await fetch("https://creative-project-manager-server.vercel.app/blog-article");
    const data = await res.json();
    const paths = data.map(data =>{
    
       return {params:{
        BlogId:`${data?._id}`
       }} 
    })
    return{
        paths,
        fallback:false
    }

    }


export default BlogDetails;