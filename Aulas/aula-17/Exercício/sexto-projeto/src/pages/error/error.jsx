import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <p>Ops, página não encontrada!</p>
            <Link to="/inicial">Voltar</Link>
        </>
    )
}

export default Error;