import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Roots = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;