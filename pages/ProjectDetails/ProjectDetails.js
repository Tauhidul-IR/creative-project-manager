import { useContext } from 'react';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
const ProjectDetails = () => {
  const { user } = useContext(AuthContext);
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const editProject = form.editProject.value;
    const description = form.description.value;
    const task = form.task.value;
    const date = form.date.value;
    const priority = form.priority.value;
    const email = form.owner.value;
    const projectData = {
      task, editProject, date, priority, description, email
    }
    console.log(projectData);

    const url = 'https://creative-project-manager-server.vercel.app/project-edited'


    fetch(url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(projectData)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledge) {
          alert('Task added')
          form.reset()
        }
      })
      .catch(err => console.log(err));


  }

  return (
    <div>
      <div className="card mt-20 mx-auto w-96 bg-sky-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={formHandler}

            class="bg-white p-6 rounded-lg">
            <h2 class="text-lg font-medium mb-4">Add Task</h2>
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">Owner</label>
              <input name='owner' class="bg-gray-200 p-2 rounded-lg w-full" defaultValue={user?.email} disabled type="text" placeholder="Owner email" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">Project name</label>
              <input name='editProject' class="bg-gray-200 p-2 rounded-lg w-full" type="text" placeholder="Edit Project name" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">Project Description</label>
              <input name='description' class="bg-gray-200 p-2 rounded-lg w-full" type="text" placeholder="Project description" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">Task Name</label>
              <input name='task' class="bg-gray-200 p-2 rounded-lg w-full" type="text" placeholder="Enter task name" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">Due Date</label>
              <input name='date' class="bg-gray-200 p-2 rounded-lg w-full" type="date" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">Priority</label>
              <select name='priority' class="bg-gray-200 p-2 rounded-lg w-full">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <button class="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Add Task</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default ProjectDetails;