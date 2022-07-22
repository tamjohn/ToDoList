import React, { useState } from "react";
import './App.css';
import EntryBar from './Components/EntryBar';
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>
        Johnathan's To-Do List
        </h1>
      </header>
      <EntryBar 
      inputText = {inputText}
      todos = {todos} 
      setTodos = {setTodos} 
      setInputText = {setInputText} 
      />
      <TodoList 
      todos = {todos}
      setTodos = {setTodos}
      />
    </div>
  );
}

export default App;
