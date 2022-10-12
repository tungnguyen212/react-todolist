import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { useState, useEffect } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [changeTodo, setChangeTodo] = useState([]);
  useEffect(() => {
    filterStatus();
  }, [todos, status]);
  function filterStatus() {
    switch (status) {
      case 'done':
        setChangeTodo(
          todos.filter((todo) => {
            return todo.completed === true;
          })
        );
        break;

      case 'todo':
        setChangeTodo(
          todos.filter((todo) => {
            return todo.completed === false;
          })
        );
        break;

      default:
        setChangeTodo(todos);
        break;
    }
  }
  return (
    <div className='App'>
      <div className='header'>
        <h1>Les's add what you have to do</h1>
        <p>
          Fill the input and click button or "Enter" to add a new task into the
          list. To mark as completed, just click directly to the task.
        </p>
      </div>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        changeTodo={changeTodo}
        setChangeTodo={setChangeTodo}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
