import { useForm } from "react-hook-form";
import otpImage from "../../assets/images/verification-otp.png";
import signInLogo from "../../assets/images/linkup.png";

const OtpVerification = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const otpCode = data.otp.join("");
        console.log("OTP Code:", otpCode);
    };

    const handleResend = () => {
        console.log("Handle Resend Btn");
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Image */}
            <div className="bg-[#0369A1] w-full lg:w-1/2 flex justify-center items-center h-[80vh] md:h-screen">
                <img src={otpImage} alt="OTP" className="max-w-full h-auto" />
            </div>

            {/* Right Form */}
            <div className="bg-[#F0F9FF] w-full lg:w-1/2 flex justify-center items-center py-16 px-4 md:px-10">
                <div className="w-full max-w-148.5">
                    <div className="max-w-62.5 mx-auto flex justify-center mb-8">
                        <img src={signInLogo} alt="Logo" className="w-full" />
                    </div>

                    <div className="bg-white rounded-2xl px-6 md:px-15 py-15 shadow-lg w-full max-w-148.75 mx-auto">
                        <h2 className="text-xl font-bold text-[#171717]">
                            Verify Your Account
                        </h2>
                        <p className="text-sm text-[#262626] mt-2">
                            Enter the 6 digit code sent to you at{" "}
                            <span className="font-medium text-[#262626]">
                                gmail@linkup.com
                            </span>
                        </p>

                        {/* OTP Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="flex justify-between gap-1 mb-6">
                                {[...Array(6)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        inputMode="numeric"
                                        {...register(`otp.${index}`, { required: true })}
                                        className="w-9 sm:w-12 h-9 sm:h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-[#0052CC]"
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0052CC] text-white py-3.5 rounded-lg font-medium text-base hover:bg-[#003D99] transition-colors"
                            >
                                Confirm
                            </button>
                        </form>

                        <button onClick={handleResend} className="block mx-auto mt-5 text-sm text-[#0284C7] hover:underline">
                            Resend code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;
