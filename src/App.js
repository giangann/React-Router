import "./App.css";
import React, { useState } from "react";
import FormInput from "./Components/FormInput";
import ShowList from "./Components/ShowList";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";


const App = () => {
  // state to save work need to do
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      work: "Brush Teeth",
      deadline: "2021-12-18",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      work: "Learn Japaneses",
      deadline: "2021-12-17",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      work: "Practice React",
      deadline: "2021-12-21",
      isCompleted: false,
    },
  ]);

  // partition data:
  const partition = _.partition(todos, "isCompleted");

  // sort todos data:
  const taskCompleted = _.orderBy(partition[0], ["deadline"], ["asc"]);
  const taskNotCompleted = _.orderBy(partition[1], ["deadline"], ["asc"]);

  // funtion delete specifies work
  const handleDelete = (e, index) => {
    e.target.closest(`[data-index="${index}"]`).remove();
  };

  // function handle when add work
  const handleAdd = (value, deadline) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        work: value,
        deadline: deadline,
      },
    ]);
    
  };

  // function handle when check
  const handleCheck = (id, value) => {
    const tempTodos = todos.map((todo) =>
      todo.id === id ? {...todo, isCompleted: value } : todo
    );
    setTodos(tempTodos);
  };

  console.log(todos)
  console.log("task completed",taskCompleted)
  console.log("task not completed",taskNotCompleted)

  return (
    <div>
      <FormInput handleAdd={handleAdd} />
      <div>
        <h1>Task Completed</h1>
        {taskCompleted.map((item) => (
          <ShowList
            key={item.id}
            index={item.id}
            todos={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div>
        <h1>Task Not Completed</h1>
        {taskNotCompleted.map((item) => (
          <ShowList
            key={item.id}
            index={item.id}
            todos={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
