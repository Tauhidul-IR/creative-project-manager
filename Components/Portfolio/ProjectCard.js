import Link from 'next/link';
import React from 'react';

const ProjectCard = ({project}) => {
  
    return (
      <div>
    
      <div className="mt-16 bg-sky-300 card w-96  shadow-xl">
  <div className="card-body">
  <h2 className="text-center text-3xl text-black">{project.project}</h2>
  <p></p>
  <div className="card-actions justify-center">
  
  <Link href='/ProjectDetails/ProjectDetails'>
  <button class="mt-3  btn btn-outline text-white py-2 px-4 ">
         Add Task
       </button>
  
  </Link>
  
  </div>
  </div>
  </div>  
    </div>
    );
};

export default ProjectCard;