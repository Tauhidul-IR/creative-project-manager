import CreateProductivities from '../../Components/Productivities/CreateProductivities/CreateProductivities';
import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';

const Productivities = () => {
    return (
        <div>

<Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
            <div className='ml-8'>
            <CreateProductivities></CreateProductivities>
            </div>
        </Sidebar>
            
        </div>
    );
};

export default Productivities;