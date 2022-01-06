import "./App.css";
import React from "react";
import FormInput from "./Components/FormInput";
import ShowList from "./Components/ShowList";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { HandleCheck } from "./Redux/ActionCreator";


const App = () => {
  // state to save work need to do

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

  
  // function handle when check
  const dispatch = useDispatch()
  const handleCheck = (id, value) => {
    dispatch(HandleCheck(id,value))
  };


  return (
    <div>
      <FormInput/>
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
