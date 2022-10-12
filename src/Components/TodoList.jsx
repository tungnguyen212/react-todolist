import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, setStatus, changeTodo }) => {
  function handlerStatus(e) {
    setStatus(e.target.value);
  }
  return (
    <div className='todo-container'>
      <div className='todo-list'>
        <div className='wrapper'>
          <h1>List:</h1>
          <div className='select'>
            <select
              name='todo'
              onChange={handlerStatus}
              className='filter-todo'
            >
              <option value='all'>All</option>
              <option value='todo'>Todo</option>
              <option value='done'>Done</option>
            </select>
          </div>
        </div>
        {changeTodo.map((todo, index) => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
