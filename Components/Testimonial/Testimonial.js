import React from 'react';

const Testimonial = () => {
  return (
    <div className='' >
      <div>
        <h2 className='text-center text-2xl font-semibold mt-10 mb-4 '>Testimonial</h2>
        <h2 className='text-center text-4xl text-black  mb-5'>What Our Client Say About Us</h2>
      </div>



<div className='grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
<div>
<figure class="snip1390">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
  <figcaption>
    <h2>Eleanor Crisp</h2>
    <h4>Deputy Editor of Billing Magazine</h4>
    <blockquote>Creative Project Manager solution helps us meet requirements for order management supporting number portability with no single hour of delay.</blockquote>
  </figcaption>
</figure>
</div>

<div>
<figure class="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
  <figcaption>
    <h2>Gordon Norman</h2>
    <h4>Deputy Architect in It Development</h4>
    <blockquote>Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.  </blockquote>
  </figcaption>
</figure>

</div>
<div>
<figure class="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
  <figcaption>
    <h2>Sue Shei</h2>
    <h4>IT manager, NetOne Angona</h4>
    <blockquote>Creative Project Manager solution helps us meet requirements for order management supporting number portability with no single hour of delay.</blockquote>
  </figcaption>
</figure>

</div>
</div>






      
    </div>
  );
};

export default Testimonial;