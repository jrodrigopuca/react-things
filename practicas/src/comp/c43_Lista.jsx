import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({id, text, completed, onClick})=>(
    <li onClick={onClick} style={{backgroundColor: completed?'green':''}}>
        {text}
    </li>
)

Todo.propTypes={
    id: PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired,
    onClick:PropTypes.func.isRequired
}

const TodoList = ({todosElementos, evtRealizar})=>(
    <ul>
        {todosElementos.map(todo=>(
            <Todo key={todo.id} {...todo} onClick={()=>evtRealizar(todo.id)} />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired,
        })
    )
}

export default TodoList;