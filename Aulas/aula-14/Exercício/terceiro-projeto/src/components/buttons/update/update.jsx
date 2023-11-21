import './index.css';

function Update(name, title) {
    const usarAPI = () => {
      /* */
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
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

export default Update;