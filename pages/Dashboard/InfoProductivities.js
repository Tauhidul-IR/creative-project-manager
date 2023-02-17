import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
import GetProductivities from '../GetProductivities/GetProductivities';

const InfoProductivities = () => {
    return (
        <div>

<Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
            <div className='ml-8'>
           <GetProductivities></GetProductivities>
            </div>
        </Sidebar>
            
        </div>
    );
};

export default InfoProductivities;