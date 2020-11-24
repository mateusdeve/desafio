import React from 'react'
import './App.css'

const App = () => {

  function handleClick(){
    console.log("oi");
  }
  
  return (
    <div>
      <button onClick={handleClick}>oi</button>
    </div>
  )
}

export default App
