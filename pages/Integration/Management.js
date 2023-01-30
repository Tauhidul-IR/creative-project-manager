import Link from 'next/link';
import React from 'react';



const Management = () => {
    return (
        <div className='grid justify-center items-center my-10'>
           
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"><Link className='btn' href='/Integration/Fileshare'> Files Share</Link></h2>
    
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
{/*          
             <Link href="/Integration/Projectchart">Integration</Link>
             <Link href="/Integration/Monitorcontrol">Integration</Link>
             <Link href="/Integration/Performchnge">Integration</Link> */}
        </div>
    );
};

export default Management;