import React, { useState } from 'react';
import Popup from './Popup';

function ToDo({text, todo, todos, setTodos}) {
    var showDate = new Date();
    var displayDate = showDate.toDateString();
    // var displaytime = showDate.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

    const [isOpen, setIsOpen] = useState(false);

    /*

    function areEqual(prevProps, nextProps) {
        return prevProps.displaytime === nextProps.displaytime
    };

    const timeMemo = React.memo(displaytime, areEqual);
    */

    const handleDeleteClick = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
        setIsOpen(!isOpen);
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
        <div className = 'dateTimeContainer'>
            Added on: {displayDate} 
            <div className='todo'>
                <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
                <div>
                    <button onClick={handleComplete} className="complete-btn">
                        Complete
                    </button>
                    <button onClick={handleDeleteClick} className="trash-btn">
                        X
                    </button>
                    {isOpen && <Popup
                        handleClose={handleDeleteClick}
                        handleDelete={handleDelete}
                        content = {<div>
                            <p>Are you sure you want to delete "{text}"?</p>
                        </div>}
                    />}
                </div>
            </div>
        </div>
    );
};

export default ToDo;
