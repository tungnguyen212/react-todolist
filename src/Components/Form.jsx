import React from 'react';
import '../App.css';

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  function handlerInput(e) {
    setInputText(e.target.value);
  }

  function submitTodo(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  }
  return (
    <form onSubmit={submitTodo}>
      <input
        value={inputText}
        type='text'
        onChange={handlerInput}
        className='todo-input'
      />
      <button className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
    </form>
  );
};
export default Form;
