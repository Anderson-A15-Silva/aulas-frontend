import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu/menu";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();
    const authenticated = JSON.parse(localStorage.getItem("authenticated"));

    useEffect(() => {
        if (!authenticated) {
            navigate("/")
        }
    }, [])

    const handleLogout = () => {
        localStorage.setItem("authenticated", "false");
        navigate("/inicial")
    }

    return (
        <>
        <Menu/>
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home;