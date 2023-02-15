
import Navbar from '../../Components/Navbar/Navbar';
import ProjectPlanning from '../../Components/Resources/ProjectPlanning';

const  projectplanning= ({ proPlnningData}) => {
    return (
        <div>
            <Navbar></Navbar>
            <ProjectPlanning  proPlnningData={ proPlnningData}></ProjectPlanning>
        </div>
    );
};

export default projectplanning;
export const getStaticProps = async()=>{
   
const res = await fetch("https://creative-project-manager-server.vercel.app/project-planning");
const data = await res.json()
return {
    props: {
        proPlnningData:data
    }
}
}