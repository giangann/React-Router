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

const TodoService = {
  GetTodos,
  PostTodo,
};
export default TodoService;
