import './index.css'


const Form = ({task, handleChangeInput, handleAddItemToList }) => {
    return (
    <div className="todo-wrapper">
    <h1>ToDo List</h1>
    <form onSubmit={handleAddItemToList}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        onChange={handleChangeInput}
        value={task}
      />
      <button type="submit">Adicionar</button>
      </form>
      </div>
    );
};

export default Form;
