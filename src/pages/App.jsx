import { Menu } from 'lucide-react';
import { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/sidebar/Header';
import MetricsCard from '../components/sidebar/MetricsCard';
import UserActivityChart from '../components/sidebar/UserActivityChart';
import TopOrganizersTable from '../components/sidebar/TopOrganizersTable';
import VerificationRequestList from '../components/sidebar/VerificationRequestList';
import reveneuIcon from '../assets/images/revenue-icon.svg'

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-[#F0F9FF]">
            <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

            {/* Main Content Area */}
            <div
                className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0 sm:ml-20'}`}
               >
                <div className="flex items-center p-4 bg-[#F0F9FF] shadow-md sticky top-0 z-10">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 mr-4 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                        title={isSidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    
                    <Header isCollapsed={!isSidebarOpen} />
                </div>

                {/* Dashboard Grid Content */}
                <div className="p-6 roboto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-13">
                        <MetricsCard title="Total Revenue" icon={reveneuIcon} value="$12,869" change="+3.67%" type="revenue" bgColor="bg-[#E5FFF1]" />
                        <MetricsCard title="Total Revenue" icon={reveneuIcon} value="$12,869" change="+3.67%" type="revenue" bgColor="bg-[#E5FFF1]" />
                        <MetricsCard title="Total Revenue" icon={reveneuIcon} value="$12,869" change="+3.67%" type="revenue" bgColor="bg-[#E5FFF1]" />
                        <MetricsCard title="Total Revenue" icon={reveneuIcon} value="$12,869" change="+3.67%" type="revenue" bgColor="bg-[#E5FFF1]" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-13">
                        <div className="lg:col-span-2">
                            <UserActivityChart />
                        </div>
                        <TopOrganizersTable />
                    </div>

                    <div className="mt-6">
                        <VerificationRequestList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;