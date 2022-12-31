import React from 'react';
import TodoListItem from './TodoListItem'
import './NewTodoList.css'
const TodoList = ({ todos }) => {
    <div className="list-wrapper">
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
} 

export default TodoList;