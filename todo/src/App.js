import React, { useReducer } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Tasks Pending...</h1>
      <TodoForm state = {state} dispatch = {dispatch} />
      <TodoList state = {state} dispatch = {dispatch} />
    </div>
  );
}

export default App;
