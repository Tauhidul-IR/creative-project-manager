import DashboardPageCover from '../../Components/Dashboard/DashboardPageCover';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Features from '../Features/features';

const portfolio = () => {
    return (
        <Sidebar>
            {/* <Navbar></Navbar> */}
            <DashboardPageCover></DashboardPageCover>
            <div className='ml-14'>
                <Features></Features>
            </div>
        </Sidebar>
    );
};

export default portfolio;