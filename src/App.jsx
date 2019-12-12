import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.scss';

export default function App() {
  return (
      <div className="App">
        <h1>Todo App</h1>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </div>
  )
}