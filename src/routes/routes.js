import {  createHashRouter,Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import ChangePasswordPage from "../pages/loginPage/ChangePasswordPage";
import SignUpPage from "../pages/signInPage/SignUpPage";
import VerficatioPage from "../pages/signInPage/VerficatioPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import LandingPage from "../pages/landingPage/LandingPage";
import ViewAllFloor from "../components/landingComponent/interior-cladding-sections/floors/ViewAllFloor";
import FloorInformation from "../components/landingComponent/interior-cladding-sections/floors/FloorInformation";
import LandingComponent from "../components/landingComponent/LandingComponent";
import VerficationChange from "../components/loginComponent/changepassword/verficationChange/VerficationChange";
import ConfirmPassword from "../components/loginComponent/changepassword/verficationChange/cofirmPassword/ConfirmPassword";
function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem("token");
    return isLoggedIn ? children : <Navigate to="/login" />;
  }
  
export const routes=(setMyMode)=>createHashRouter([
    {
        path:'',
        element:''
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/change-password',
        element:<ChangePasswordPage/>
    },
    {
        path:'/verfication-change',
        element:<VerficationChange/>
    },
    {
        path:'/cofirm-password',
        element:<ConfirmPassword/>
    },
    {
        path:'/sign-up',
        element:<SignUpPage/>
    },
    {
        path:'/verfication',
        element:<VerficatioPage/>
    },
    {
        path:'/profile',
        element:<ProtectedRoute>

            <ProfilePage setMyMode={setMyMode}/>
        </ProtectedRoute>
    },
    {
        path:'/landscaping',
        element:<LandingPage setMyMode={setMyMode}/>
    },
    {
        path:'/landscaping/floors',
        element:<ViewAllFloor setMyMode={setMyMode}/>
    },
    {
        path: '/floors/:shade/:type',
        element:<FloorInformation setMyMode={setMyMode}/>
    }
])