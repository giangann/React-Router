import './App.css';
// import { uuid } from 'uuidv4';
import React, { useState } from 'react';
import FormInput from './Components/FormInput';
import ShowList from './Components/ShowList';

const App=()=>{
  // state to save work need to do
  const [todos, setTodos] = useState([
    {
      id: 1,  
      work: "Brush Teeth"
    },
    {
      id: 1,  
      work: "Learn Japaneses"
    }
  ])

  // funtion delete specifies work
  const handleDelete = (e,index) =>{
    e.target.closest(`[data-index="${index}"]`).remove()
  }

  // function handle when add work
  const handleAdd = (value) =>{
    setTodos([
      ...todos,   
      {
        id: Math.floor(Math.random() * 1000),
        work: value
      }
    ])
    console.log(todos)
    console.log(todos[0].work)
    console.log(todos[0].id)
  }

  return(
    <div>
      <FormInput handleAdd = {handleAdd}  />
      <ShowList todos = {todos} handleDelete={handleDelete}/>
    </div>
  )
}
export default App;
