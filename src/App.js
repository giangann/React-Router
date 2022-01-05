import "./App.css";
import React, { useState } from "react";
import FormInput from "./Components/FormInput";
import ShowList from "./Components/ShowList";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { MockTask } from "./MockTask";
import { useSelector } from "react-redux";


const App = () => {
  // state to save work need to do
  const [todos, setTodos] = useState(MockTask);

  const todos2 = useSelector(state => state.todoList)

  // partition data:
  const partition = _.partition(todos2, "isCompleted");

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
