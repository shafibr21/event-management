import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;