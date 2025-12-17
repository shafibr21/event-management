import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="shrink-0">
                        <h1 className="text-2xl font-bold text-blue-600">
                            MyLogo
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                            Home
                        </NavLink>
                        <NavLink to="/signUp" className="text-gray-700 hover:text-blue-600 font-medium">
                            SignUp
                        </NavLink>
                        <NavLink to="/signIn" className="text-gray-700 hover:text-blue-600 font-medium">
                            SignIn
                        </NavLink>
                        <NavLink to="/otp-verification" className="text-gray-700 hover:text-blue-600 font-medium">
                            OTP
                        </NavLink>
                        <NavLink to="/reset-password" className="text-gray-700 hover:text-blue-600 font-medium">
                            Reset Password
                        </NavLink>
                        <NavLink to="/set-new-password" className="text-gray-700 hover:text-blue-600 font-medium">
                            Set New Password
                        </NavLink>
                    </div>

                    {/* Button */}
                    <div className="hidden md:block">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <NavLink to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                        Home
                    </NavLink>
                    <NavLink to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                        About
                    </NavLink>
                    <button className="w-full text-left px-4 py-2 text-blue-600 font-semibold hover:bg-gray-100">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
