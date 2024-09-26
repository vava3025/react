import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to React Learning</h2>
      <Home/>
      <br />
      <Add/>
    </>
  )
}

export default App
