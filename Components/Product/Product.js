import Link from 'next/link';
import React from 'react';

const Product = () =>
{
  return (
    <div className='mb-10'>
      <div >
        <div>
          <h2 className='text-center mt-10 text-black text-4xl font-semibold'>
            Creative Project Manager Unified Platform
          </h2>
          
        </div>


        <div data-aos="zoom-in-up" data-aos-duration="1500" className='grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
       <Link href='/SalesTeam/SalesTeam'>
       <div class="testimotionals ">
            <div id='card1' class="card">
              <div class="layer">

              </div>
              <div class="content">
                <p className='text-left'>Looking for more information or want to try one of our paid CPM plans? Submit your information and an CPM representative will follow up with you as soon as possible. Have a simple question?</p>
              
                <div class="details">
                  <h2 className='text-white text-3xl'>Features</h2>
                </div>
              </div>
            </div>
          </div>


       </Link>



        <Link href='/Enterprise/Enterprise'>
        
        <div class="testimotionals">
            <div id='card2' class="card">
              <div class="layer">

              </div>
              <div class="content">
                <p className='text-left'>
                With CPM Enterprise, your organization has access to CPM full
suite of work management features. Implement advanced security
functionalities and powerful admin and data controls.
                  
                  
                  </p>
               
                <div class="details">
                  <h2 className='text-white text-3xl'> Enterprises</h2>
                </div>
              </div>
            </div>
          </div>
        
        </Link>



<Link href='/resources/workmanresource'>

<div class="testimotionals">
            <div id='card3' class="card">
              <div class="layer">

              </div>
              <div class="content">
                <p className='text-left'>Discover what work management is and what it looks like in practice with resources from Creative Project manager.Get resources to plan and execute your business with CPM. </p>
                <div class="details">
                  <h2 className='text-white text-center text-3xl'>Resources</h2>
                </div>
              
              </div>
            </div>
         
          </div>

</Link>





        
        </div>
      </div>
    </div>
  );
};

export default Product;