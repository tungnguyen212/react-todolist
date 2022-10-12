import React from 'react';

const Todo = ({ index, todo, text, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(
      todos.filter((el) => {
        return el.id !== todo.id;
      })
    );
  };
  function handlerComplete() {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  }
  return (
    <div className='todo'>
      <div className='todo-item' onClick={handlerComplete}>
        <div className={` ${todo.completed ? 'completed' : ''}`}>
          {index + 1}.{text}
        </div>
      </div>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
