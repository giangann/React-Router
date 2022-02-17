import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import styles from "../ShowList.module.css";
import TodoService from "../Services/TodoService";
import { AiFillHeart } from "react-icons/ai";
import { HandleFavourite } from "../Redux/ActionCreator";

const ShowList = ({
  index,
  todos,
  handleDelete,
  handleCheckCompleted,
  handleCheckFavourite,
}) => {
  return (
    <div>
      <div className={styles.todo_item}>
        {todos.taskName}
        <div className={styles.actions}>
          <AiFillHeart
            // className={styles.heart}
            // style={{width: 500}}
            style={{ color: todos.isFavorite ? "orange" : "green" }}
            size={24}
            onClick={(e) => {
              handleCheckFavourite(todos.id, !todos.isFavorite);
            }}
          />
          <Checkbox
            defaultChecked={todos.isCompleted}
            onChange={(e) => {
              handleCheckCompleted(todos.id, !todos.isCompleted);
              console.log(todos.taskName);
              console.log("is Completed", !todos.isCompleted);
            }}
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
