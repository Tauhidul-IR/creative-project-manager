import { useEffect } from 'react';
import { useState } from 'react';
const GetAllProjects = () => {

  const[productivities,setProductivities] = useState([]);

useEffect(()=>{
    fetch('https://creative-project-manager-server.vercel.app/create-project')
    .then(res=>res.json())
    .then(data => setProductivities(data));
},[]);

    
    return (
        <div>
                <div >
                <label class="block text-sky-500 font-bold mb-2" for="project">
        Project
      </label>
      <select 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="status" name='project'>

{
  productivities.map(productivity => <option value="">{productivity.projectName}</option>)
}
     
        
      </select>
            
    </div>
        </div>
    );
};

export default GetAllProjects;