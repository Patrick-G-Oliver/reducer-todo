import React, { useState, useReducer } from "react";

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const clearForm = () => {
        setNewTodo("");
    };

    const addTodo = e => {
        e.preventDefault();
        props.dispatch({ type: "ADD_TODO", payload: newTodo })
        clearForm();
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input  
                    type="text"
                    name="newTodo"
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button>
                    Add Task
                </button>
                <button 
                    type="button"
                    onClick={() => {
                        props.dispatch({type: "DELETE_DONE"})}}>
                    Remove
                </button>
            </form>
        </div>
    );
};

export default TodoForm;