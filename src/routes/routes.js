import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import ChangePasswordPage from "../pages/loginPage/ChangePasswordPage";
import SignUpPage from "../pages/signInPage/SignUpPage";
import VerficatioPage from "../pages/signInPage/VerficatioPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import LandingPage from "../pages/landingPage/LandingPage";
import ViewAllFloor from "../components/landingComponent/interior-cladding-sections/floors/ViewAllFloor";
import FloorInformation from "../components/landingComponent/interior-cladding-sections/floors/FloorInformation";
export const router=createBrowserRouter([
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
        path:'/sign-up',
        element:<SignUpPage/>
    },
    {
        path:'/verfication',
        element:<VerficatioPage/>
    },
    {
        path:'/profile',
        element:<ProfilePage/>
    },
    {
        path:'/landscaping',
        element:<LandingPage/>
    },
    {
        path:'/landscaping/floors',
        element:<ViewAllFloor/>
    },
    {
        path: '/floors/:shade/:type',
        element:<FloorInformation/>
    }
])