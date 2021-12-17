import './App.css';
import { uuid } from 'uuidv4';
import React, { useState } from 'react';

const App=()=>{
  const [count,setCount] = useState({number:{flag:0}})

  const handleAdd = ()=>{
    setCount(
      count =>(
        {
          ...count,
          number: {
            ...count.number,
            flag: count.number.flag+1
          }
          }
      )
    )
  }

  
  return(
    <div>
      <button onClick={handleAdd}>Add</button>
      {count.number.flag}
    </div>
  )
}
export default App;
