import React from 'react';
import Todo from './Todo';


function TodoList({todos, setTodos}) {
    console.log(todos);
    return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo 
          id = {todo.id} 
          text = {todo.text} 
          setTodos = {setTodos}
          todos = {todos}
          todo = {todo}
          />
        ))}
      </ul>
    </div>
    );
};

export default TodoList;