import './index.css';

function Get(name, title) {
    let valor = 0;

    const usarAPI = () => {
            valor++

            fetch(`https://jsonplaceholder.typicode.com/todos/${valor}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }
    
    return (
    <input type="button" className={name} onClick={usarAPI} value={title}></input>
    )
};

export default Get;