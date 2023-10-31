import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let tasks=[]

  const addTask = (e) => {
    e.preventDefault()
    let task = document.getElementById('task').value 
    tasks.push(task)
    //console.log(tasks)
      
    
      // let form = document.createElement('form')
      let item = document.createElement('input')
      let label = document.createElement('label')
      
      item.type='checkbox'
      item.value=task
      item.id = 'checkboxes'
      item.checked = false
      // item.onclick = checkBox()

      
      // let removeButton = document.createElement('button')
      // removeButton.name = 'remove task'
      // removeButton.onclick = removeTask()
       
      
      // li.appendChild(checkbox)
      label.appendChild(document.createTextNode(task));
      label.append(item)
      // form.appendChild(label)
      
      // label.appendChild(removeButton)



      //item.innerText = task
      console.log(label)
  
      document.getElementById("task-list").appendChild(label)
    
  }


  const checkBox = (e) => {
    let item = e.target;
    console.log(item)

    if (item.type==='checkbox' && item.checked===true) {
        let message = item.innerText
        console.log(message)
        item.innerText = 'Complete!'
        item.replaceWith(document.createTextNode(' DONE'))

    }
  }

  
  
  

  return (
    <>
      <h1>To-Do List</h1>
      
      <form onSubmit={(e)=>addTask(e)}>
        <input id='task' type='text' placeholder='enter a task'></input>
        <button id="submit-button" type="submit">Submit</button>
      </form>
      <form >

      <ul id='task-list' onClick= {(e)=>checkBox(e)}>

      </ul>
      </form>
     
    </>
  )
}

export default App
