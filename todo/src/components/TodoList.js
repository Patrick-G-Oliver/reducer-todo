import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
        <div>
            {props.state.map(todo => {
                return (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        onClick={() => props.dispatch({
                            type: "TOGGLE_DONE", payload: todo.id})} />)
            })};
        </div>
    );
};

export default TodoList;