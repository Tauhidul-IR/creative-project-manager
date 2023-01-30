import NewPortfolio from "../../Components/Portfolio/NewPortfolio";
import ProjectCard from "../../Components/Portfolio/ProjectCard";



const features = () => {
    return (
        <div>
            <h2 className="text-center text-3xl mb-28">Features is coming</h2>
            {/* <AddGantt></AddGantt> */}
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