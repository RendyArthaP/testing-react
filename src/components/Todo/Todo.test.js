import { handleClick } from './Todo';
import Todo from './Todo'
import { fireEvent, render } from '@testing-library/react';

// Test Todo Component
test('component todo rendering', () => {
  const { queryByTitle } = render(<Todo />)
  const todoComp = queryByTitle("Todo")
})

// Test button ada atau tidak
test('button ada', () => {
  const { queryByTitle } = render(<Todo />)
  const todoComp = queryByTitle("Todo")

  const btn = queryByTitle("buttonTodo")
  expect(btn).toBeInTheDocument()
})

// Test input ada atau tidak
test('input ada', () => {
  const { queryByTitle } = render(<Todo />)
  const todoComp = queryByTitle("Todo")

  const input = queryByTitle("textTodo")
  expect(input).toBeInTheDocument()
})

// Test input punya value atau tidak
test('value ada', () => {
  const { queryByTitle } = render(<Todo />)
  const todoComp = queryByTitle("Todo")

  const input = queryByTitle("textTodo")
  expect(input.value).toBe("");
  fireEvent.change(input, {target: {value: "makan"}});
  expect(input.value).toBe("makan")
})

// Test fungsi button
test('fungsi button ada', () => {
  const { queryByTitle } = render(<Todo />)
  const todoComp = queryByTitle("Todo")

  const btn = queryByTitle("buttonTodo")
  const input = queryByTitle("textTodo")

  expect(input.value).toBe("")
  fireEvent.change(input, {target: {value: "makan"}})
  expect(input.value).toBe("makan")
  
  fireEvent.click(btn)
  expect(input.value).toBe("")
  expect(todoComp).toHaveTextContent("makan")
})
