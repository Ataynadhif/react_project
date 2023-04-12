import React from 'react'
import TodoItem from './TodoItem';

const Todos = ({todos, toggleBtn}) => {
    return(
        <div>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} toggleBtn={toggleBtn}/>
            })}
        </div>
    )
}

export default Todos;