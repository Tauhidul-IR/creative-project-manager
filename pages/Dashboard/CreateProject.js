import CreateProjects from '../../Components/Projects/CreateProject/CreateProjects';
import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
const CreateProject = () => {
    return (
        <Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
            <div className='ml-8'>
              <CreateProjects></CreateProjects>
            </div>
        </Sidebar>
    );
};

export default CreateProject;