import { Card as CardForm, CardContent } from "@mui/material";
import { useState } from "react";
import "./home.css";
import "../components/card/card"
import axios from "axios";
import Card  from '../components/card/card';


const Home = () => {
    // Cria o useState para armazenar os estados (ex: post, setPost).
    const [name, setName] = useState("");
    const [repositors, setRepositors] = useState([]);

    // Recebe os dados (value) da caixa de texto (input).
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Realiza a requisição dos dados da API (get).
        try {
       const response = await axios.get(`https://api.github.com/users/${name}/repos`);
                // Coloca os dados no segundo elemento do array (useState).
                setRepositors(response.data);
                setName("");
            } catch(error) {
                console.log(error)
            }
        
        };
    // Recebe as alterações feitas na caixa de texto (input).
    const handleChange = (event) => {
        // Armazena os dados (value) com o target e compara com o estado original ( useState("") ).
        const nameValue = event.target.value;
        if (nameValue !== "") {
        setName(event.target.value);
        }          
    }
               
    return (
        <>
        <div>
            {/* Componente Card e CardContent de Material UI. */}
            <CardForm>
            <CardContent>
                {/* Informações do Card (caixa de bsuca/texto e botão). */}
                <h1>Buscador de GitHub</h1>
                {/* Recebe os dados e os envia para o handleSubmit depois do clique no botão (devido ao onSubmit).*/}
            <form onSubmit={handleSubmit}>
                {/* Caixa de texto com os dados monitorados pelo handleChange(onChange). */}
                <input type="text" value={name} onChange={handleChange} placeholder='Digite o nome do usuário...'/>
                <button type="submit">Buscar</button>
            </form>
            </CardContent>
            </CardForm>
        </div>
        <div>
            {/* Busca o dado principal pelo index. */}
            {
            repositors.map((repositors, index) => {
                return <Card key={index} repositors={repositors}/>
            })
            }
        </div>
        </>
            )
        };

        export default Home;