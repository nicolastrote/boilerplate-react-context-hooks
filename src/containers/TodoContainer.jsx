import React from 'react';

import { TodoForm, TodoList } from '../components/Todo';

import './TodoContainer.scss';

const TodoContainer = () => {
    return (
        <div className="TodoContainer">
            <div className="TodoCard">
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
};

export default TodoContainer;