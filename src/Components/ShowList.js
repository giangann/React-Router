import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import styles from "../ShowList.module.css";

const ShowList = ({ index, todos, handleDelete, handleCheck }) => {

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
