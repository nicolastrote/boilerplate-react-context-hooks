import React, { useState, useContext } from 'react';

import { addTodo } from '../../store/Actions';
import { Store } from '../../store/Store';

import './TodoForm.scss';

const TodoForm = () => {
    const { dispatch } = useContext(Store);
    const [todo, setTodo] = useState('');

    const handleTodoInput = (event) => {
        setTodo(event.target.value)
    };

    const handleTodoSubmit = (event) => {
        event.preventDefault();
        todo.trim().length > 0 && addTodo(todo, dispatch);
        setTodo('');
    };

    return (
        <form onSubmit={ handleTodoSubmit } className="todo-form">
            <input type="text" value={ todo } onChange={ handleTodoInput } />
            <button type="submit">Add Todo</button>
        </form>
    )
};

export default TodoForm;