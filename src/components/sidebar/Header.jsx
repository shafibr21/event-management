import searchIcon from '../../assets/images/search-icon.svg'
const Header = () => {
    return (
        <div className="poppins w-full flex flex-col lg:flex-row gap-3 lg:justify-between items-start lg:items-center   py-4 px-0 sm:px-2 bg-[#F0F9FF]">
            {/* Dashboard Title */}
            <div>
                <h2 className="text-2xl md:text-[32px] font-medium text-gray-800">Dashboard Overview</h2>
                <p className="text-base md:text-lg text-[#262626]">Welcome back! Here's what's happening with your platform today.</p>
            </div>
            <div className="bg-[#FFFFFF] py-5 px-3.75 rounded-[10px] w-full md:w-auto">
                <div className="flex items-center justify-between">
                    <input
                        className="w-full border-0 outline-none"
                        type="text"
                        placeholder="Search..."
                    />
                    <div>
                        <img src={searchIcon} alt="Search Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;