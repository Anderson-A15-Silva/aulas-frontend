import './todo.css'
import React, { useEffect, useState } from "react";
import Form from '../components/form';
import List from '../components/list';

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
    console.log(event)
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    localStorage.setItem('tasks', JSON.stringify([... itemsList, task]))
    setTask("");
    console.log(event)
  };

  return (
    <div className="todo-wrapper">
      <div className='itemOne'>
      <Form task={task} handleAddItemToList={handleAddItemToList} handleChangeInput={handleChangeInput}/>
      </div>
      <div className='itemTwo'>
      <List itemsList={itemsList} />
      </div>
    </div>
  );
};

export default Todo;