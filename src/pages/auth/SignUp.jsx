import { useState } from 'react';
import signUpImage from '../../assets/images/signup-image.png';
import signInLogo from '../../assets/images/linkup.png';
import instagramIcon from '../../assets/images/Social_Icons.svg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const signUpData = {
            fName: data.fName,
            lName: data.lName,
            email: data.email,
            password: data.password,
            conPassword: data.conpassword,
        };
        console.log(signUpData);
    };

    const handleInstagramLogin = () => {
        console.log("Instagram login clicked");
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Image */}
            <div className="bg-[#0369A1] w-full lg:w-1/2 flex justify-center items-center h-[80vh] md:h-screen">
                <img src={signUpImage} alt="Sign In" className="max-w-full h-auto" />
            </div>

            {/* Right Form */}
            <div className="bg-[#F0F9FF] w-full lg:w-1/2 flex justify-center items-center py-16 px-4 md:px-10">
                <div className="w-full max-w-148.5">
                    <div className="max-w-62.5 mx-auto flex justify-center mb-8">
                        <img src={signInLogo} alt="Logo" className="w-full" />
                    </div>
                    <div className="bg-white rounded-2xl px-6 md:px-10 py-19 shadow-lg">
                        <div className="text-center mb-8">
                            <h4 className="text-xl font-bold">Sign Up</h4>
                            <p className="mt-2 text-gray-600">Create Admin Account</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name Fields */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    {...register("fName", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lName", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-4 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-6 relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm Password"
                                    {...register("conpassword", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                                >
                                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#0052CC] text-white py-3.5 rounded-lg font-medium text-base hover:bg-[#003D99] transition-colors"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="flex items-center my-6">
                            <hr className="flex-1 border-gray-300" />
                            <span className="mx-2 text-neutral/800 font-medium">OR</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Instagram Login */}
                        <button
                            onClick={handleInstagramLogin}
                            className="w-full bg-[#E0F2FE] text-neutral/800  py-3.5 rounded-[10px] text-sm font-medium hover:bg-[#CFE7FF] transition-colors flex justify-center items-center gap-2.5"
                        >
                            Continue with Instagram
                            <img className='w-6 h-6' src={instagramIcon} alt="Instagram Icon" />
                        </button>
                        <div className="mt-4 text-center">
                            <Link to='/signIn' className="text-[#262626] hover:underline">Already have an account? <span className='text-[#0052CC]'>Sign In</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
