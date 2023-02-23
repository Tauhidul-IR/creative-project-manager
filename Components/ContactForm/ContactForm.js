import emailjs from '@emailjs/browser';

const ContactForm = () => {

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_kptk7p9', 'template_tazkdcw',e.target, 'LLV7xYubBmuxyE1nV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };
    
    return (
        <div>
                <section data-aos="fade-up" data-aos-duration="1900" id= "contactBg" className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-blue-400">
              Contact Us
            </h1>
           
          </div>
          <form onSubmit={sendEmail}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-blue-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-blue-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-blue-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              
             
            </div>
          </div>
          <div className="p-2 w-full">
                <input type='submit' className="flex mx-auto  bg-blue-600 border-0 py-2 text-black font-semibold px-8 focus:outline-none hover:bg-gray-400 hover:text-black rounded text-lg"/>
             
              </div>
          </form>
      
        </div>
      </section>
        </div>
    );
};

export default ContactForm;