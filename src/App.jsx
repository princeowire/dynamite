import { useState } from 'react'
import './App.css'
import AppRoutes from './Routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
