import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/dashboard/UserHome";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import OtpVerification from "../pages/auth/OtpVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import SetNewPassword from "../pages/auth/SetNewPassword";
import App from "../pages/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/',
                element: <UserHome />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/otp-verification',
                element: <OtpVerification />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />
            },
            {
                path: '/set-new-password',
                element: <SetNewPassword />
            },
            {
                path: '/app',
                element: <App />
            },
        ]
    }
]);
