import "../App.js";
import "../../src/App";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { OnChange, HandleAdd } from "../Redux/ActionCreator.js";
import { Link, Route, Switch , BrowserRouter as Router } from "react-router-dom";

import App from "../App.js";
import ShowList from "./ShowList.js";
import TodoList from "./TodoList.js";

const FormInput = () => {
  // Declare for send action to reducer
  const dispatch = useDispatch();

  // HANDLE WHEN USER TYPE WORK IN INPUT FIELD
  const values = useSelector((state) => state.value);
  const todoItem = useSelector((state) => state.todoList);
  const handleChange = (e) => {
    dispatch(OnChange(e.target.value));
  };

  // HANDLE WHEN USER CHOOSE DATE
  var deadline = "";
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    deadline = dateString;
  };

  // HANDLE WHEN USER SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(HandleAdd(values, deadline));
    console.log(values);
    console.log(todoItem);
  };

  useSelector((state) => state);

  return (
    <div className="form_input">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          value={values}
          name="input"
          placeholder="Type new work to do"
        />
        <br></br>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <input type="submit" value="submit" />
      </form>

      
    </div>
  );
};
export default FormInput;
