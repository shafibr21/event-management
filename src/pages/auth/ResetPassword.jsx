import resetImage from '../../assets/images/resetPassword.png';
import signInLogo from '../../assets/images/linkup.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const resetPassword = {
            email: data.email,
        };
        console.log(resetPassword);
    };

    const backToHome = () => {
        console.log("Back To Home");
    }


    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Image */}
            <div className="bg-[#0369A1] w-full lg:w-1/2 flex justify-center items-center h-[80vh] md:h-screen">
                <img src={resetImage} alt="Sign In" className="max-w-full h-auto" />
            </div>

            {/* Right Form */}
            <div className="bg-[#F0F9FF] w-full lg:w-1/2 flex justify-center items-center py-17 px-4 md:px-12">
                <div className="w-full max-w-148.5">
                    <div className="max-w-62.5 mx-auto flex justify-center mb-8">
                        <img src={signInLogo} alt="Logo" className="w-full" />
                    </div>
                    <div className="bg-white rounded-2xl px-6 md:px-10 py-19 shadow-lg">
                        <div className="text-center mb-8 max-w-93 mx-auto">
                            <h4 className="text-xl font-bold text-[#262626]">Reset Password</h4>
                            <p className="mt-2 text-[#262626] text-sm">Enter the email associated with your account and we'll send an email with instructions to reset your password.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email Field */}
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email", { required: true })}
                                    className="px-2.5 py-3.5 rounded-[10px] w-full mt-2 bg-[#E0F2FE] text-sm placeholder-[#262626] placeholder:font-medium border-0 outline-0"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#0052CC] text-white py-3.5 rounded-lg font-medium text-base hover:bg-[#003D99] transition-colors"
                            >
                                Sent Reset Link
                            </button>
                        </form>
                        <Link to="/" onClick={backToHome} className="block mx-auto mt-5 text-sm text-[#0284C7] hover:underline text-center"> Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
