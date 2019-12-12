import React, { useContext } from 'react';

import Index from '../Todo/index';
import { Store } from '../../store/Store';

const TodoList = () => {
    const { state, dispatch } = useContext(Store);

    const todoList = state.todoList.map((todo) => (
        <Index
            key={todo.id}
            todoId={todo.id}
            todoText={todo.text}
            todoTag={todo.tag}
            dispatch={dispatch}
        />
    ));

    return <div className="todo-list">{todoList}</div>;
};

export default TodoList;