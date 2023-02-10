import LoginpageBanner from "../../Components/Login/LoginpageBanner";
import Navbar from "../../Components/Navbar/Navbar";
import SignUpPage from "../../Components/SignUp/SignUpPage";


const signUp = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <LoginpageBanner></LoginpageBanner>
            <SignUpPage></SignUpPage>
        </div>
    );
};

export default signUp;