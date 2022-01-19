import { MockTask } from "../MockTask";
import { v4 as uuidv4 } from "uuid";

export default function reducer(
  state = { todoList: MockTask, value: "",isLoggedIn: false},
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
        deadline: action.payload.deadline,
        isCompleted: false,
      };
      return {
        ...state,
        todoList: [...state.todoList, tempNewTask],
        value: ""
      };

    case "HANDLE_CHECK":
      const tempTodoList = state.todoList.map(
        (todo => (todo.id === action.payload.id) ? {
          ...todo, isCompleted: action.payload.value
        }: todo)
      )
      return{
        ...state,
        todoList: tempTodoList
      }

    case "HANDLE_DELETE":
      const tempDeleteList = state.todoList.filter(
        todo => todo.id !== action.payload.id
      ) 
      return{
        ...state,
        todoList: tempDeleteList
      }
    case "SIGN_IN":
      return{
        ...state,
        isLoggedIn:true
      }
    case "SIGN_OUT":
      return{
        ...state,
        isLoggedIn:false
      }
    default:
      return state;
  }
}
