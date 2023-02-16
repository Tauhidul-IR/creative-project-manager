import Background from "../../Components/Backgroud/Background";
import Navbar from "../../Components/Navbar/Navbar";
import NewPortfolio from "../../Components/Portfolio/NewPortfolio";
import MyAllProjects from "../MyAllProjects/MyAllProjects";

const Features = ({ projects }) => {
    console.log(projects);

    return (
        <div className="featuresBg">
            <div className="featuresBg mb-32">

                <div>

                    <div className="grid lg:grid-cols-2 mb-36 md:grid-cols-2 sm:grid-cols-1 justify-center place-content-center mt-16 ">
                        <div className="mr-10 ml-10">
                            <NewPortfolio></NewPortfolio>
                        </div>

                        <div className='mr-10 ml-10  '>
                            <h2 className='text-center text-4xl  text-black font-semibold  mt-20 mb-10'>My  Project</h2>

                            <MyAllProjects></MyAllProjects>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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




export default Features;