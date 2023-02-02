import React, { useContext } from 'react';
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';
const NewPortfolio = () => {
    const { user } = useContext(AuthContext);
    const formHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const user = form.user.value;
        const project = form.project.value;
      
        
        const projectData = {
           email,user, project
        }
        console.log(projectData);

        const url = 'https://creative-project-manager-server-d0d44dts8.vercel.app/project'


        fetch(url,{
            method: "POST",
            headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(projectData)
        }).then(res=>res.json())
        .then(data =>{
          console.log(data)
          if(data.acknowledge){
            alert('Task added')
            form.reset()
          }
        })
        .catch(err =>console.log(err));
    }

    return (
        <div>
<h2 className='text-center text-4xl text-gray-500 mt-16'> Create Portfolio</h2>
<div className="card mx-auto mt-20 w-96 bg-sky-300 ">
  <div className="card-body">
    
  <form  onSubmit={formHandler}>
            <input name="user" defaultValue={user?.displayName} disabled  className="shadow  appearance-none border rounded  py-2 px-3 mr-4  mb-3 text-black" placeholder="User name" />

<input name="email" defaultValue={user?.email} disabled  className="shadow  appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker " placeholder="User email" />
            <input type="text" 
            name= 'project'
            placeholder="Project name" className="input input-bordered w-full max-w-xs mt-5 mb-3" /><br></br>
            <button class="mt-3  btn btn-outline text-white py-2 px-4 ">
              Create
           </button>
            </form>
  </div>
</div>








        </div>
    );
};

export default NewPortfolio;