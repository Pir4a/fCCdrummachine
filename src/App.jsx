import { useState } from 'react'
import Piano from './components/piano.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Piano />
    </>
  )
}

export default App
