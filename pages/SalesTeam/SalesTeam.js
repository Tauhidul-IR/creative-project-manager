import emailjs from '@emailjs/browser';

const SalesTeam = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_kptk7p9', 'template_1jbxn0l', e.target, 'LLV7xYubBmuxyE1nV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (

    <div>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="mt-16" src="https://luna1.co/new-branding-sales-form-exp/lifestyle/sales-form-lifestyle-1x.jpg" alt="" />
            <h1 className="text-5xl font-bold">Talk with our sales team</h1>
            <p className="py-6 text-xl mt-9 mb-6">Looking for more information or want to try one of our paid CPM plans? Submit your information and an CPM representative will follow up with you as soon as possible. Have a simple question?</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  font-semibold text-2xl ">
            <div className="card-body">
              <h2 className="text-yellow-400">Fields marked with an asterisk (*) are required.</h2>

              {/* div 1 */}
              <form onSubmit={sendEmail} >


                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name <span className="text-red-500">*</span></span>
                    </label>
                    <input type="text" placeholder="e.g.. John" name='firstName' className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name <span className="text-red-500">*</span></span>
                    </label>
                    <input type="text" placeholder="Smith" name='lastName' className="input input-bordered" />
                  </div>
                </div>



                {/* div 2 */}


                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Company Email <span className="text-red-500">*</span></span>
                    </label>
                    <input type="text" placeholder="name@company.com" name='email' className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" placeholder="+15556555" name='phone' className="input input-bordered" />
                  </div>
                </div>

                {/* div 3 */}
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Country  <span className="text-red-500">*</span></span>
                    </label>
                    <input type="text" placeholder="Country" name='country' className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Company Size  <span className="text-red-500">*</span></span>
                    </label>
                    <input type="text" placeholder="Size" name='companySize' className="input input-bordered" />
                  </div>
                </div>




                <div className="form-control">
                  <label className="label">
                    <span className="label-text">What would you link to discuss?  <span className="text-red-500">*</span></span>
                  </label>
                  <textarea className="textarea textarea-bordered" name='description' placeholder="Tell us"></textarea>

                </div>


                <div className="form-control mt-6">
                  <button className="btn btn-outline btn-error normal-case">Submit</button>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTeam;