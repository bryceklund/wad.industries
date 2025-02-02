import { useState } from 'react'
import AsciiElement from './components/AsciiElement';
import Nav from './components/Nav';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <AsciiElement asset="iii" />
    </>
  )
}

export default App
