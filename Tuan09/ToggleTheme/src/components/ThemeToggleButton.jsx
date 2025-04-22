import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/theme/themeSlice'

const ThemeToggleButton = () => {
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-6 py-2 rounded-full font-semibold 
                 transition duration-300 ease-in-out 
                 bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg"
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  )
}

export default ThemeToggleButton