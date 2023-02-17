import GetAllProjects from '../../../pages/GetAllProjects/GetAllProjects';

const CreateProductivities = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const project = form.project.value;
    const task = form.task.value;
    const subject= form.subject.value;
    const status = form.status.value;
    const date = form.date.value;
    const start = form.start.value;
    const end = form.end.value;
    const description = form.description.value;

    const productivities = {
      project,task,subject,status,date,start,end,description
    }
    console.log(productivities);

    const url = 'https://creative-project-manager-server.vercel.app/productivity'


    fetch(url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productivities)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledge) {
          toast.success('Productivity added successfully')
          form.reset()
        }
      })
      .catch(err => console.log(err));
  }
    return (
        <div>
          <h2 className="text-2xl text-sky-500 font-bold ml-9 p-5 ">Create Productivity </h2>
            <div class=" mx-auto ">
  <form  onSubmit={formHandler} class="mt-8 mx-auto bg-sky-100 shadow-lg rounded-lg py-8 px-6 w-9/12">
 {/* grid 1 */}

<div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>

<div class="mb-4" >
     
      <GetAllProjects></GetAllProjects>
   
    </div>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="task">
        Task
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="task" type="text" name='task' placeholder="Enter task name"/>
    </div>
</div>


{/* grid2 */}

    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="subject">
        Subject
      </label>
      
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-sky-500 leading-tight focus:outline-none focus:shadow-outline"
        id="subject" type="text" name='subject' placeholder="Enter subject"/>
    </div>



    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="status">
        Status
      </label>
      <select 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="status" name='status'>
        <option value="">Select status</option>
        <option value="not-started">Not started</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
    </div>

{/* grid3 */}
<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'> 

<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="date">
        Date
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="date" name='date' type="date"/>
    </div>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="start-time">
        Start Time
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="start-time" name='start'  type="time"/>
    </div>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="end-time">
        End Time
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="end-time" name= 'end' type="time"/>
    </div>

</div>

   
<div class="mb-4">
    <label class="block text-sky-500 font-medium mb-2" for="description">
      Description
    </label>
    <textarea 
      class=" appearance-none border-2 border-sky-400 rounded w-full py-2 px-4 text-sky-500 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="description" 
      name='description'
      rows="5"
    ></textarea>
  </div>

  <div class="flex items-center justify-center">
    <button class="bg-sky-400 hover:bg-green-400 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline rounded-full ml-9 mt-5">
     Create
    </button>
  </div>
  </form>
  </div>

        
 </div>
 
 
 
   
     
        
    );
};

export default CreateProductivities;