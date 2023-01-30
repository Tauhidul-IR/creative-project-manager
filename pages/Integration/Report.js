




const Report = ({datass}) => {
    const data = datass;
    

      
    return (
        <div className="grid justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">


          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={data?.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {data?.message}
      {/* <div className="badge badge-secondary"></div> */}
    </h2>
    <p></p>
    
  </div>
</div>
    
    </div>
        </div>
    );
};

export default Report;