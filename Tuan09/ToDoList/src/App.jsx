import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => { 

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App