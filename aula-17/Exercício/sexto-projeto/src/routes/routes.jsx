import { Routes, Route } from "react-router-dom";
import Inicial from "../pages/inicial/inicial";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Profile from "../pages/profile/profile";
import Error from "../pages/error/error";

const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:slug" element={<Profile/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<Error/>} />
    </Routes>
    )
}

export default AppRoutes;