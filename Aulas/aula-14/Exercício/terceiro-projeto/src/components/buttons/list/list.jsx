import './index.css'

function List(name, title) {
    let valor = 0;

    const usarAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    
    return (
    <input type="button" className={name} onClick={usarAPI} value={title}></input>
    )
};

export default List;
