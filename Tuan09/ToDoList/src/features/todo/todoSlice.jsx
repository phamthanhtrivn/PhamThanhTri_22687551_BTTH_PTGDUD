import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  list: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, {id: Date.now(), text: action.payload.text, completed: false}]
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer