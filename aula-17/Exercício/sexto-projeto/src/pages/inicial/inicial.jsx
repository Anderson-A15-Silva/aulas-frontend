import { Link } from "react-router-dom";
import "./inicial.css"

const Inicial = () => {
    return (
        <>
        <div className="telaInicial">
            <h1>Tela Inicial</h1>
            <hr />
        <Link to="/login" className="button">Entrar</Link>
        </div>
        </>
    )
}

export default Inicial;