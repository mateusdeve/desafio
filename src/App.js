import React from 'react'
import { GlobalStorage } from './context/GlobalContext'
import './App.css'
import Home from './pages/Home'

const App = () => {
  return (
    <GlobalStorage>
      <Home/>
    </GlobalStorage>
  )
}

export default App
