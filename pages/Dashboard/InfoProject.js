
import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
import GetProjects from '../GetProjects/GetProjects';
const InfoProject = () => {
    return (
        <Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
            <div className='ml-8'>
             <GetProjects></GetProjects>
            </div>
        </Sidebar>
    );
};

export default InfoProject;
