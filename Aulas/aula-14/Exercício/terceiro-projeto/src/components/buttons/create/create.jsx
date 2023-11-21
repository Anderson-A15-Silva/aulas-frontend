import './index.css';

function Create(name, title) {
    const usarAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    
    return (
    <input type="button" className={name} onClick={usarAPI} value={title}></input>
    )
};

export default Create;