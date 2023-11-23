import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./login .css"

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === "usuario" && password === "senha") {
            localStorage.setItem('authenticated', 'true');
            navigate("/home");
        } else {
            alert("Os dados estão incorretos.")
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" onChange={handleChangeUser} value={user} placeholder="Digite o usuário" className="itemLogin"/>
            <input type="password" onChange={handleChangePassword} value={password} placeholder="Digite sua senha" className="itemLogin"/>
            <br />
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}

export default Login;