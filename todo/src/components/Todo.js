import React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <div 
            onClick={props.onClick} 
            className={`todo ${props.todo.completed ? " done": ""}`}>
            {props.todo.item}
        </div>
    )
}

export default Todo;