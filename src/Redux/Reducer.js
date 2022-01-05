import { MockTask } from "../MockTask";
import { v4 as uuidv4 } from "uuid";

export default function reducer(
  state = { todoList: MockTask, value: "" },
  action
) {
  switch (action.type) {
    case "ON_CHANGE":
      return {
        ...state,
        value: action.payload.value,
      };
    case "HANDLE_ADD":
      const tempNewTask = {
        id: uuidv4(),
        work: action.payload.value,
        deadline: "",
        isCompleted: false,
      };
      return {
        ...state,
        todoList: [...state.todoList, tempNewTask]
      };
    default:
      return state;
  }
}
