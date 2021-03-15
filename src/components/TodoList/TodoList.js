import React from 'react'

const TodoList = ({listTodo}) => {
  return (
    <div title="Todolist">
      {listTodo.map((todos) => (
        <div key={todos.id}>
          <span>{todos.todoo}</span>
        </div>
      ))}
    </div>
  )
}

export default TodoList
