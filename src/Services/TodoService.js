import axios from "axios";

const apiEndPoint = "http://localhost:5000";

const GetTodos = () => {
  return axios.get(apiEndPoint + "/Todo/GetTodos", {
    params: {
      user: "sylk",
    },
  });
};
const PostTodo = (inputValue) => {
  axios.post(apiEndPoint + "/Todo/AddTodo", {
    user: "sylk",
    taskName: inputValue,
  });
};

const ChangeTaskCompleted = (todoID, status)=>{
  axios.post(apiEndPoint+"/Todo/ChangeTaskCompletedState",{
    taskID: todoID,
    isCompleted: status
  })
}

const ChangeTaskFavourite = (todoID, isFavourite)=>{
  axios.post(apiEndPoint+"/Todo/ChangeTaskFavoriteState",{
    taskID: todoID,
    isFavorite: isFavourite
  })
}

const TodoService = {
  GetTodos,
  PostTodo,
  ChangeTaskCompleted,
  ChangeTaskFavourite
};
export default TodoService;
