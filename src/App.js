import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [stateTodo, setStateTodo] = useState(JSON.parse(localStorage.getItem("stateTodo")) || [])

  localStorage.setItem("stateTodo", JSON.stringify(stateTodo))


  return (
   <>
    <TodoForm stateTodo={stateTodo} setStateTodo={setStateTodo} />
    <TodoList stateTodo={stateTodo} setStateTodo={setStateTodo}/>
   </>
    );
}

export default App;
