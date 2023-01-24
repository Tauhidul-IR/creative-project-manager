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
          <p className='text-center mt-3 text-gray-500'>
            Single platform across industry verticals, technologies and lines of business that focuses on optimizing integration, deployment and management costs.


          </p>
        </div>


        <div data-aos="zoom-in-up" data-aos-duration="1500" className='grid justify-items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>
          <div class="testimotionals ">
            <div id='card1' class="card">
              <div class="layer">

              </div>
              <div class="content">
                <p className='text-left'>Revenue Management Line of Business  incorporates Wholesale and Retail domains and  Retail Billing.</p>
                <div class="image">
                  <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qmbAyhcnqyPDzW3vcV6x8EK9zEjfU-kKgshYrn1hbC9VrFe8U3XsMbgYkEzuqXCo5fc&usqp=CAU" alt="" />

                </div>
                <div class="details">
                  <h2 className='text-white text-3xl'>Revenue Management</h2>
                </div>
              </div>
            </div>
          </div>



          <div class="testimotionals">
            <div id='card2' class="card">
              <div class="layer">

              </div>
              <div class="content">
                <p className='text-left'>Centralized place of handling all Customer and Partner business relations needs for stable and satisfied relationship.</p>
                <div class="image">
                  <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SzRoe4VXc5mdYuvWMEjUdbMXUBgh_yKstA&usqp=CAU" alt="" />

                </div>
                <div class="details">
                  <h2 className='text-white text-3xl'> Product Management</h2>
                </div>
              </div>
            </div>
          </div>



          <div class="testimotionals">
            <div id='card3' class="card">
              <div class="layer">

              </div>
              <div class="content">
                <p className='text-left'>Partners and customers in the digital ecosystem play a critical role in the success of service providers. </p>
                <div class="image">
                  <img align="center" width="140px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJK2luBhrCHFWI1m1nMCjjHrWkcPb5T83Fg&usqp=CAU" alt="" />

                </div>
                <div class="details">
                  <h2 className='text-white text-3xl'> Customer  Management</h2>
                </div>
              </div>
            </div>
          </div>



          <div class="testimotionals">
            <div id='card4' class="card">
              <div class="layer">

              </div>
              <div class="content">
                <p className='text-left'>Cross-channel Order Management platform with CPQ capabilities, driven by Product Catalog</p>
                <div class="image">
                  <img align="center" width="140px" src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/om-salesforce-order-management/38ed8125bcfe393e860f73b3b6c1e863_badge.png" alt="" />

                </div>
                <div class="details">
                  <h2 className='text-white text-3xl'>Order Management</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;