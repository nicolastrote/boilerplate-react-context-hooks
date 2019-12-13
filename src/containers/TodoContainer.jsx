import React from 'react';

import { TodoForm, TodoList } from '../components/Todo';

import './TodoContainer.scss';

const TodoContainer = () => {
    return (
        <div className="TodoContainer">
            <h1>Todo App</h1>
            <div>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
};

export default TodoContainer;