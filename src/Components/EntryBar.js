import React from 'react';

function EntryBar({setInputText, todos, setTodos, inputText}) {
    const handleInputMsg = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    };

    const handleSubmitToDo = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000},
        ]);
        setInputText("");
    };
    return (
    <form>
      <input 
        value = {inputText} 
        onChange = {handleInputMsg} 
        type="text" 
        className="todo-input" 
        placeholder="Add a new task" 
        />
      <button onClick = {handleSubmitToDo} className="enter-button">
        Enter
      </button>
    </form>
    );
};

export default EntryBar;
