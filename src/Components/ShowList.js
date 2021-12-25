import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import "../App.js";

const ShowList = ({ index, todos, handleDelete, handleCheck }) => {
  return (
    <div data-index={index} key={index}>
      &lt;{todos.id}&gt;   {todos.work} - {todos.deadline}
      <Checkbox
        defaultChecked={todos.isCompleted}
        onChange={e => (handleCheck(todos.id, e.target.checked))}
      ></Checkbox>
      <Button onClick={(e) => handleDelete(e, index)}>Delete</Button>
    </div>
  );
};

export default ShowList;
