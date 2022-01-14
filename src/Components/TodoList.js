import React from "react";
import ShowList from "./ShowList";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { HandleCheck, HandleDelete } from "../Redux/ActionCreator";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
</style>;
const TodoList = () => {
  const todos2 = useSelector((state) => state.todoList);

  // partition data:
  const partition = _.partition(todos2, "isCompleted");

  // sort todos data:
  const taskCompleted = _.orderBy(partition[0], ["deadline"], ["asc"]);
  const taskNotCompleted = _.orderBy(partition[1], ["deadline"], ["asc"]);

  // function handle when check
  const dispatch = useDispatch();
  const handleCheck = (id, value) => {
    dispatch(HandleCheck(id, value));
  };
  // funtion delete specifies work
  const handleDelete = (index) => {
    dispatch(HandleDelete(index));
  };

  return (
    <div className="outer">
      <h1 className="title">TODO APP</h1>
      <div>
        <h2 className="title">Task Completed</h2>

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
        <h2 className="title">Task Not Completed</h2>

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

export default TodoList;
