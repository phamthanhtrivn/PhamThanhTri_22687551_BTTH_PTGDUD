import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todo/todoSlice'

const TodoList = () => {
  const todos = useSelector(state => state.todos.list)
  const dispatch = useDispatch()

  return (
    <ul className="space-y-2">
    {todos.map((todo) => (
      <li key={todo.id} className="flex items-center justify-between p-2 border rounded">
        <div
          className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          onClick={() => dispatch(toggleTodo({id: todo.id}))}
        >
          {todo.text} 
        </div>
        <button
          onClick={() => dispatch(removeTodo({id: todo.id}))}
          className="bg-red-500 text-white px-2 py-1 rounded ml-2"
        >
          Xóa
        </button>
      </li>
    ))}
  </ul>
  )
}

export default TodoList