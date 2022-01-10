import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useSelector } from "react-redux";

const ShowList = ({ index, todos, handleDelete, handleCheck }) => {
  console.log(todos);
  console.log("hi")

  const checkValues = useSelector(state => state.value)
  console.log(checkValues)
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
