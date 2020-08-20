import React, { useReducer } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, Reducer } from "./Reducers/Reducer";

function App() {
  [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div className="App">
      <TodoForm state = {state} dispatch = {dispatch} />
      <TodoList state = {state} dispatch = {dispatch} />
    </div>
  );
}

export default App;
