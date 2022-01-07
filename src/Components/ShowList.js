import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import "../App.js";

const ShowList = ({ index, todos, handleDelete, handleCheck }) => {
  console.log(todos);
  return (
    <div >
      {todos.work} - {todos.deadline}
      <Checkbox
        defaultChecked={todos.isCompleted}
        onChange={(e) => handleCheck(todos.id, e.target.checked)}
      ></Checkbox>
      <Button onClick={() => handleDelete(index)}>Delete</Button>
    </div>
  );
};

export default ShowList;
