import { useEffect, useState } from "react";
import TodoService from "../Services/TodoService";
import { useSelector, useDispatch } from "react-redux";
import { OnChange } from "../Redux/ActionCreator";
import { Input } from "antd";

export default function AxiosTestPage() {
  const [res, setRes] = useState([]);
  const [retry, setRetry] = useState([]);

  const values = useSelector((state) => state.value);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(OnChange(e.target.value));
  };
  const handleSubmit = (e) => {
    // postData(e.target.value)
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await TodoService.GetTodos();
        setRes(response.data.data);
      } catch (err) {
      } finally {
      }
    };

    getData();
  }, [retry]);

  // Create Input, allow user add newTask and reload task after submit
  const postData = (e) =>{
    TodoService.PostTodo(e.target.value)
    setRetry(retry+1)
  }

  return (
    <>
      <Input
        onPressEnter={postData}
        onChange={(e) => handleChange(e)}
        type="text"
        value={values}
        name="input"
        placeholder="Type new work to do"
      />
      {res.map((todo) => (
        <p key={todo.id}>{todo.taskName}</p>
      ))}

      {/* <button onSubmit={getData}>Get Data</button> */}
    </>
  );
}
