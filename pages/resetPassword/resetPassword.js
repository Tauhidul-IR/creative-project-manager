import React from 'react';
import LoginpageBanner from '../../Components/Login/LoginpageBanner';
import ResetPasswordPage from '../../Components/Login/ResetPasswordPage';
import Navbar from '../../Components/Navbar/Navbar';

const resetPassword = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoginpageBanner></LoginpageBanner>
            <ResetPasswordPage></ResetPasswordPage>
        </div>
    );
};

export default resetPassword;