import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useSelector } from "react-redux";
import styles from "../ShowList.module.css";

const ShowList = ({ index, todos, handleDelete, handleCheck }) => {
  console.log(todos);
  console.log("hi");

  const checkValues = useSelector((state) => state.value);
  console.log(checkValues);
  return (
    <div>
      <div className={styles.todo_item}>
        {todos.work}
        <div className={styles.actions}>
          <Checkbox
            defaultChecked={todos.isCompleted}
            onChange={(e) => handleCheck(todos.id, e.target.checked)}
          ></Checkbox>
          <Button style={styles.Button} onClick={() => handleDelete(index)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
