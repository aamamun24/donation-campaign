import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='container mx-auto px-6 md:px-12 lg:px-20'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;