import NewPortfolio from "../../Components/Portfolio/NewPortfolio";
import ProjectCard from "../../Components/Portfolio/ProjectCard";



const features = ({projects}) => {
console.log(projects)

    return (
        <div className="bg-sky-100">
           
            <div>
                <div>
                    <NewPortfolio></NewPortfolio>
                </div>
                <h2 className='text-center text-4xl text-gray-500 mt-16'>New Project</h2>
            </div>

            <div className="grid  place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

{
    projects.map(project => <ProjectCard project={project}
    
    ></ProjectCard>)
}


</div>

        </div>
    );
};



export const getStaticProps = async () => {

    const res = await fetch(`https://creative-project-manager-server-d0d44dts8.vercel.app/project`);
    const data = await res.json();
    return {
        props: {
            projects: data
        }
    }
}

export default features;