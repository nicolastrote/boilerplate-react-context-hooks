import React, { createContext, useReducer } from 'react';

const initialState = {
    todoList: [],
};

export const Store = createContext(initialState);

const addTodo = (state, todoText) => {
    const newTodo = {
        id:
            (state.todoList.length > 0 && state.todoList[state.todoList.length - 1].id + 1) ||
            0,
        text: todoText,
        tag: 'active',
    };

    return { ...state, todoList: [...state.todoList, newTodo] };
};

const removeTodo = (state, todoId) => {
    const newTodoList = state.todoList.filter(todo => todo.id !== todoId);

    return { ...state, todoList: newTodoList }
};

const editTodoTag = (state, todoId, tag) => {
    const todo = state.todoList.find(todo => todo.id === todoId);
    const todoIndex = state.todoList.indexOf(todo);
    const newTodo = { ...todo, tag };

    const newTodoList = [
        ...state.todoList.slice(0, todoIndex),
        newTodo,
        ...state.todoList.slice(todoIndex + 1),
    ];

    return { ...state, todoList: newTodoList }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action.todoText);
        case 'REMOVE_TODO':
            return removeTodo(state, action.todoId);
        case 'EDIT_TODO_TAG':
            return editTodoTag(state, action.todoId, action.tag);
        default:
            return state;
    }
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};