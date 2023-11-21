import './index.css';

function Delete(name, title) {
    const usarAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
          });
        }
        
    return (
    <input type="button" className={name} onClick={usarAPI} value={title}></input>
    )
};

export default Delete;