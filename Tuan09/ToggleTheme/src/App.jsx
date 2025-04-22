import React from 'react'
import { useSelector } from 'react-redux'
import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} style={{ minHeight: '100vh' }}>
      <div className="flex flex-col items-center justify-center h-screen space-y-6">
        <h1 className="text-4xl font-bold">Toggle Theme App</h1>
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default App