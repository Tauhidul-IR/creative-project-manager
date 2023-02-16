import { useContext } from "react";
import { AuthContext } from "../../../Others/AuthProvider/AuthProvider";
import GetMembers from "../../../pages/GetMembers/GetMembers";

const CreateProjects = () => {
  
  const { user } = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const projectName = form.projectName.value;
    const category = form.category.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const projectManager = form.projectManager.value;
    const email = form.email.value;
    const teamMembers = form.teamMembers.value;
    const priority = form.priority.value;
    const status = form.status.value;
    const description = form.description.value;

    const projects = {
      projectName,category,startDate,endDate,projectManager,email,teamMembers,priority,status, description
    }
    console.log(projects);

    const url = 'https://creative-project-manager-server.vercel.app/create-project'


    fetch(url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(projects)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledge) {
          toast.success('Project added successfully')
          form.reset()
        }
      })
      .catch(err => console.log(err));
  }
    return (
        <div >
          <h2 className="text-2xl text-sky-500 font-bold ml-9 p-5 ">Create Project </h2>
 <div className=" mt-8 mx-auto bg-sky-100 shadow-lg rounded-lg py-8 px-6 w-9/12">
  
  <form  onSubmit={formHandler}>
    {/* div 1 */}
<div className="grid justify-center place-content-center lg:grid-cols-2 md:grid-cols-1 gap-5">

<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="project-name">
        Project Name
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="text"
        id="project-name"
        name="projectName"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="category">
        Category
      </label>
      <select
        class="w-full border border-sky-400 rounded-lg p-2"
        id="category"
        name="category"
        required
      >
        <option value="">Select a category</option>
        <option value="web-development">Web Development</option>
        <option value="mobile-development">Mobile Development</option>
        <option value="design">Design</option>
        <option value="other">Other</option>
      </select>
    </div>


</div>


{/* div 2 */}
<div className="grid justify-center place-content-center lg:grid-cols-2 md:grid-cols-1 gap-5">
<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="start-date">
        Start Date
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="date"
        id="start-date"
        name="startDate"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="end-date">
        End Date
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="date"
        id="end-date"
        name="endDate"
        required
      />
    </div>

</div>


{/* div 3 */}

<div  className="grid justify-center place-content-center lg:grid-cols-2 md:grid-cols-1 gap-5">
<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="project-manager">
        Project Manager
      </label>
      <input
     defaultValue={user?.displayName}
        class="w-full border border-sky-400 rounded-lg p-2"
        type="text"
        id="project-manager"
        name="projectManager"
        disabled
   
      />
    </div>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="project-email">
        Manager Email
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="text"
        id="project-email"
        name="email"
        defaultValue={user?.email} disabled 
      />
    </div>



   
</div>
  

  {/* div 4 */}
   
<div className="grid justify-center place-content-center lg:grid-cols-2 md:grid-cols-1 gap-5">

<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="priority">
        Priority
      </label>
      <select
        class="w-full border border-sky-400 rounded-lg p-2"
        id="priority"
        name="priority"
        required
      >
        <option value="">Select a priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="status">
        Status
      </label>
      <select
        class="w-full border border-sky-400 rounded-lg p-2"
        id="status"
        name="status"
        required
      >
        <option value="">Select a status</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="not-started">Not Started</option>
      </select>
    </div>
</div>

 {/* div 5*/}
<div  className="grid justify-center place-content-center lg:grid-cols-2 md:grid-cols-1 gap-5">

<GetMembers></GetMembers>

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

export default CreateProjects;