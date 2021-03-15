import React, {useState} from 'react'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
  const [listTodo, setListTodo] = useState([])
  const [todo, setTodo] = useState("")

  const handleClick = () => {
    const newTodo = {
      id: new Date().getTime().toString(),
      todoo: todo
    }
    setListTodo([...listTodo, newTodo])
    setTodo("")
    console.log(listTodo)
    console.log(newTodo)
  }
  
  return (
    <div title="Todo">
      <h1>Todo</h1>
      <input 
        type="text"
        title="textTodo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button 
        onClick={handleClick}
        title="buttonTodo"
      >
        Add
      </button>
      <TodoList listTodo={listTodo}/>
    </div>
  )
}

export default Todo
