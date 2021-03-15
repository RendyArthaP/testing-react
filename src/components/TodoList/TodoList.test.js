import { render } from '@testing-library/react';
import TodoList from './TodoList';

const listTodo = [
  {
    id: 0,
    todoo: "makan"
  }
]

test('component todo list rendering', () => {
  const { queryByTitle } = render(<TodoList listTodo = {listTodo}/>)
})