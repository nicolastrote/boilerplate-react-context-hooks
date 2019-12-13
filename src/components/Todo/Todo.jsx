import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

import { editTag, removeTodo } from '../../actions';

import './Todo.scss';

export const Todo = memo(
    (props) => {
        const { todoId, todoText, todoTag, dispatch } = props;

        const handleTodoTag = () => {
            const newTag = todoTag === 'active' ? 'complete' : 'active';
            editTag(todoId, newTag, dispatch);
        };

        const handleRemoveTodo = () => {
            removeTodo(todoId, dispatch)
        };

        const todoStyle = {
            color: (todoTag === 'complete' && '#90a4ae') || '#01579b',
            textDecoration: (todoTag === 'complete' && 'line-through') || 'none',
        };

        return (
            <div className="todo">
              <span style={todoStyle} onClick={handleTodoTag}>
                {todoText}
              </span>
              <button onClick={handleRemoveTodo}><FontAwesomeIcon icon={faTrash} size="lg"/></button>
             </div>
        )
    }
);