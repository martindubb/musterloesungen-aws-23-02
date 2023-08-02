import './App.css';
import React from 'react';


function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleClick = () => {
    const task = {
      text: inputValue,
      checked: false    
    }
    setTodos([...todos, task]);
    setInputValue('');
  }

  const toogleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }

  return (
    <>
      <h1>My ToDo List</h1>
      <input type="text" placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleClick}>ToDo hinzufügen</button>
      <button onClick={() => setTodos([])}>Alle löschen</button>
      <br />
      <ul >
        {todos.map((task, index) => {
          return (
            <li>
              <label className={task.checked ? "done" : ""}><input type="checkbox" onClick={() => toogleCheck(index)}/> {task.text}</label>
            </li>
          );})}
      </ul>
    </>
  );
}

export default App;
