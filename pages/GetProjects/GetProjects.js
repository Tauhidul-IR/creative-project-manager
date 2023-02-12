import GetAllProjects from "../../Components/Projects/GetAllProjects/GetAllProjects";

const  GetProjects = ({projects,i}) => {

console.log(projects);

    return (
        <div>
 {
    projects.map(project=><GetAllProjects
    key={project._id}
    project={project}
    
    ></GetAllProjects>)
  }

        </div>

    )
}


export const getStaticProps = async () => {

    const res = await fetch('https://creative-project-manager-server.vercel.app/create-project');
    const data = await res.json();
    return {
        props: {
            projects: JSON.parse(JSON.stringify(data))
        }
    }
}

export default  GetProjects ;