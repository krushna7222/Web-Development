import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoApp from './ToDoApp'
import ToDoHeading from './component/ToDoHeading'
import ToDoTask1 from './component/ToDoTask1'
import ToDoTask2 from './component/ToDoTask2'
import ToDoTask3 from './component/ToDoTask3'

function App() {

  return (
    <div id="outer">
    <div id="parent">
      <ToDoHeading></ToDoHeading>
      <div class="container text-center">

      <ToDoTask1></ToDoTask1>

      <ToDoTask2></ToDoTask2>
      <ToDoTask3></ToDoTask3>

      </div>
      {/* <ToDoApp></ToDoApp> */}
      
    </div>
    </div>
  )
}

export default App
