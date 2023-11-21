import { useParams } from "react-router-dom";
import Menu from "../../components/menu/menu";
import "./profile.css"
import { Link } from "react-router-dom";

const Profile = () => {
    const { slug } = useParams();
    return (
        <>
        <Menu />
        <p>Profile de {slug}</p>
        <Link to="/home">Voltar para Home.</Link>
        </>
    )
}

export default Profile;