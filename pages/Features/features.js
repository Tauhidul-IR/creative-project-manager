import Background from "../../Components/Backgroud/Background";
import Navbar from "../../Components/Navbar/Navbar";
import NewPortfolio from "../../Components/Portfolio/NewPortfolio";
import MyAllProjects from "../MyAllProjects/MyAllProjects";

const features = ({ projects }) => {
    console.log(projects);

    return (
        <>
            <Navbar></Navbar>
            <Background></Background>
            <div className="">

                <div>
                    <div>
                        <NewPortfolio></NewPortfolio>
                    </div>
                    <h2 className='text-center text-4xl text-gray-500 mt-16 mb-8'>My  Project</h2>
                </div>


                <div>
                    <MyAllProjects></MyAllProjects>
                </div>
            </div>
        </>
    );
};



export const getStaticProps = async () => {

    const res = await fetch(`https://creative-project-manager-server.vercel.app/project`);
    const data = await res.json();
    return {
        props: {
            projects: data
        }
    }
}




export default features;