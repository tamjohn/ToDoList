import React from 'react';

function ToDo({text, todo, todos, setTodos}) {
    const handleDelete = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };

    const handleComplete = () => {
        setTodos(
            todos.map((element) => {
                if(element.id === todo.id) {
                    return {
                        ...element, completed: !element.completed
                    }
                };
                return element;
            })
        );
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <div>
                <button onClick={handleComplete} className="complete-btn">
                    Complete
                </button>
                <button onClick={handleDelete} className="trash-btn">
                    X
                </button>
            </div>
        </div>
    );
};

export default ToDo;
