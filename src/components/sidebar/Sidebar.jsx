import { Link } from 'react-router-dom';
import signInLogo from '../../assets/images/linkup.png';
import {
    Users, Settings, LogOut, UserCircle, Menu, X,
    LayoutDashboard,
    CalendarDays,
    ShieldQuestionMark,
    ShieldCheck,
    ChartNoAxesCombined,
} from 'lucide-react';

const navItems = [
    { id: 1, name: 'Dashboard', icon: LayoutDashboard, active: true, route: '#' },
    { id: 2, name: 'Events', icon: CalendarDays, active: false, route: '#' },
    { id: 3, name: 'User & Organizers', icon: Users, active: false, route: '#' },
    { id: 4, name: 'Revenue', icon: ShieldQuestionMark, active: false, route: '#' },
    { id: 5, name: 'Verification Management', icon: ShieldCheck, active: false, route: '#' },
    { id: 6, name: 'Analytics', icon: ChartNoAxesCombined, active: false, route: '#' },
    { id: 7, name: 'Settings', icon: Settings, active: false, route: '#' },
];

// Added isOpen and toggle props
const Sidebar = ({ isOpen }) => {
    const sidebarWidthClass = isOpen ? 'w-64' : 'w-0 sm:w-20';
    const showTextClass = isOpen ? 'block' : 'hidden';
    const justifyClass = isOpen ? 'justify-start' : 'justify-center';

    return (
        <div className={`fixed h-screen top-0 left-0 transition-all duration-300 ${sidebarWidthClass} flex flex-col bg-[#0C4A6E] text-white shadow-xl z-20`}>

            <div className={`flex items-center justify-center ${justifyClass} py-6`}>
                {isOpen && <div className='max-w-38 flex items-center justify-center mt-6'>
                    <img className='w-full' src={signInLogo} alt="" />
                </div>}

            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-3">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.route}
                        className={`flex items-center text-lg font-medium py-3 ml-4 px-4 rounded-l-[10px] transition-colors 
              ${item.active
                                ? 'bg-white text-[#0284C7] text-center'
                                : 'text-[#FFFFFF] hover:bg-[#0A1930]/50 border-l-4 border-transparent'
                            } 
              ${justifyClass}`
                        }
                        title={!isOpen ? item.name : ''}
                    >
                        <item.icon className={`w-5 h-5 font-bold ${isOpen ? 'mr-1' : 'm-0'}`} />
                        <span className={`${showTextClass} whitespace-nowrap`}>{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* Admin Profile and Logout */}
            <div className={`mt-auto p-4 border-t border-gray-700 ${isOpen ? 'block' : 'flex justify-center'}`}>
                {isOpen && (
                    <button className={`flex items-center text-base text-[#FFFFFF] hover:text-red-400 transition-colors  ${isOpen ? 'mb-4' : 'mb-0'}`}>
                        <LogOut className="w-5 h-5 mr-2" />
                        Log out
                    </button>
                )}
                <div className={`flex items-center`}>
                    <UserCircle className="w-8 h-8 text-[#FFFFFF]" />
                    <div className={`${showTextClass} ml-3`}>
                        <p className="text-base font-semibold whitespace-nowrap">Ahmed Jumaa</p>
                        <p className="text-base text-gray-400">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;