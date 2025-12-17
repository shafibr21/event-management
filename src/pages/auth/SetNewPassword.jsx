import { useState } from 'react';
import resetImage from '../../assets/images/resetPassword.png';
import signInLogo from '../../assets/images/linkup.png';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SetNewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const signInData = {
            password: data.password,
            newPassword: data.newPassword
        };
        console.log(signInData);
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Image */}
            <div className="bg-[#0369A1] w-full lg:w-1/2 flex justify-center items-center h-[80vh] md:h-screen">
                <img src={resetImage} alt="Sign In" className="max-w-full h-auto" />
            </div>

            {/* Right Form */}
            <div className="bg-[#F0F9FF] w-full lg:w-1/2 flex justify-center items-center py-16 px-4 md:px-10">
                <div className="w-full max-w-148.5">
                    <div className="max-w-62.5 mx-auto flex justify-center mb-8">
                        <img src={signInLogo} alt="Logo" className="w-full" />
                    </div>
                    <div className="bg-white rounded-2xl px-6 md:px-10 py-19 shadow-lg">
                        <div className="text-center mb-8 max-w-93 mx-auto">
                            <h4 className="text-xl font-bold text-[#262626]">Set New Password</h4>
                            <p className="mt-2 text-[#262626] text-sm">Create a new, secure password for your account.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Password Field */}
                            <div className="mb-4 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
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
                            {/* New Password Field */}
                            <div className="mb-4 relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder="New Password"
                                    {...register("newPassword", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">New password is required</p>}
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                                >
                                    {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#0052CC] text-white py-3.5 rounded-lg font-medium text-base hover:bg-[#003D99] transition-colors"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;
