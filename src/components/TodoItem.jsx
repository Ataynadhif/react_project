import React from 'react';

const TodoItem = ({todo, toggleBtn}) => {
  const todoTitleStyle = () => {
    if (todo.completed === true) {
      return {textDecoration: 'line-through'}
    } else {
      return {textDecoration: 'none'}
    }
  }
  
  return (
          <div style={styles.todoItem}>
            <input type="checkbox" style={styles.checkBox} onChange={() => toggleBtn(todo.id)}/>
            <p style={todoTitleStyle()}>{todo.title}</p>
          </div>
        )
}

const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
      padding: '0 12px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkBox: {
      marginRight: '10px',
      height: '18px',
      width: '18px',
    }
  }
export default TodoItem;