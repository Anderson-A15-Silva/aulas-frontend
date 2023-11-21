import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
        <ul>
                <li>
                <Link to="/inicial" className="buttonMenu">Inicial</Link>
                </li>
                <li>
                <Link to="/profile" className="buttonMenu">Profile</Link>
                </li>
        </ul>
        </nav>
    )
}

export default Menu;