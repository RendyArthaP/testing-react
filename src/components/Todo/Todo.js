import React, {useState} from 'react'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
  const [listTodo, setListTodo] = useState([])
  const [todo, setTodo] = useState("")
  return (
    <div>
      <h1>Todo</h1>
      <input />
      <button>Add</button>
      <TodoList />
    </div>
  )
}

export default Todo
