import React from 'react';

const Testimonial = () => {
  return (
    <div >
      <div>
        <h2 className='text-left text-2xl font-semibold mt-10 mb-4 ml-9'>Testimonial</h2>
        <h2 className='text-left text-4xl text-black ml-9 mb-5'>What Our Client Say About Us</h2>
      </div>

      <div data-aos="fade-up" data-aos-duration="1900" class="outerdiv">
        <div class="innerdiv">
          <div class="div1 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="" />
              </div>
              <div class="detbox">
                <p class="name">Daniel Clifford</p>
                <p class="designation">Deputy Editor of Billing Magazine</p>
              </div>
            </div>
            <div class="review">
              <h4>Awesome tech support</h4>
              <p>“ Creative Project Manager solution helps us meet requirements for order management supporting number portability with no single hour of delay. We also felt pleasure and easiness working with ZIRA thoughtful professionals and we intend to continue that way with our full confidence. ”</p>
            </div>
          </div>

          <div class="div2 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
              </div>
              <div class="detbox">
                <p class="name">Jonathan Walters</p>
                <p class="designation">Deputy & Enterprise Architect in It Development</p>
              </div>
            </div>
            <div class="review">
              <h4>The team was very supportive and kept me motivated</h4>
              <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
            </div>
          </div>

          <div class="div3 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="" />
              </div>
              <div class="detbox">
                <p class="name dark">Kira Whittle</p>
                <p class="designation dark">IT manager, NetOne Angona</p>
              </div>
            </div>
            <div class="review dark">
              <h4>Such a life-changing experience. Highly recommended!</h4>
              <p>“ Creative Project Manager solution helps us meet requirements for order management supporting number portability with no single hour of delay. We also felt pleasure and easiness working with ZIRA thoughtful professionals and we intend to continue that way with our full confidence.”</p>
            </div>
          </div>

          <div class="div4 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
              </div>
              <div class="detbox">
                <p class="name dark">Jeanette Harmon</p>
                <p class="designation dark">HR, ITC Communication </p>
              </div>
            </div>
            <div class="review dark">
              <h4>An overall wonderful and rewarding experience</h4>
              <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
            </div>
          </div>

          <div class="div5 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
              </div>
              <div class="detbox">
                <p class="name">Patrick Abrams</p>
                <p class="designation">Project manager, PLUS Communication</p>
              </div>
            </div>
            <div class="review">
              <h4>Getting guidance from this company and learning from their experiences was easy.</h4>
              <p>“Creative Project Manager solution helps us meet requirements for order management supporting number portability with no single hour of delay. We also felt pleasure and easiness working with  thoughtful professionals and we intend to continue that way with our full confidence.”</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;