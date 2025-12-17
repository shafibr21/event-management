import { useState } from 'react';
import signImage from '../../assets/images/signin-image.png';
import signInLogo from '../../assets/images/linkup.png';
import instagramIcon from '../../assets/images/Social_Icons.svg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const signInData = {
            email: data.email,
            password: data.password,
        };
        console.log(signInData);
    };

    const handleInstagramLogin = () => {
        console.log("Instagram login clicked");
    };

    const handleForgetPassword = () => {
        console.log("Forget Password");
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Image */}
            <div className="bg-[#0369A1] w-full lg:w-1/2 flex justify-center items-center h-[80vh] md:h-screen">
                <img src={signImage} alt="Sign In" className="max-w-full h-auto" />
            </div>

            {/* Right Form */}
            <div className="bg-[#F0F9FF] w-full lg:w-1/2 flex justify-center items-center py-16 px-4 md:px-10">
                <div className="w-full max-w-148.5">
                    <div className="max-w-62.5 mx-auto flex justify-center mb-8">
                        <img src={signInLogo} alt="Logo" className="w-full" />
                    </div>
                    <div className="bg-white rounded-2xl px-6 md:px-10 py-19 shadow-lg">
                        <div className="text-center mb-8">
                            <h4 className="text-xl font-bold">Sign In</h4>
                            <p className="mt-2 text-gray-600">Welcome Back, Admin 👋</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email Field */}
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#696767] placeholder:font-medium border-0 outline-0"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                            </div>

                            {/* Password Field */}
                            <div className="mb-4 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm laceholder-[#696767]  placeholder:font-medium border-0 outline-0"
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
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
                        <div className='flex justify-between items-center'>
                            <label className='flex items-center gap-1'>
                                <input type="checkbox" />
                                <span className='text-[#262626] text-sm'>Remember me</span>
                            </label>
                            <label className="label mt-2" onClick={handleForgetPassword}>
                                <a href="#" className="text-sm link link-hover font-semibold text-[#0052CC]">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-4 text-center">
                            <Link to='/signUp' className="text-[#262626] hover:underline">Don&apos;t Have an account? <span className='text-[#0052CC]'>Sign Up</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
