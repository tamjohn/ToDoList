import React, {useState} from 'react';

function EntryBar({setInputText, todos, setTodos, inputText}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleInputMsg = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmitToDo = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000},
        ]);
        setInputText("");
        setIsOpen(!isOpen);
    };

    return (
    <div>
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
    </div>
    );
};

export default EntryBar;
