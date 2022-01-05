// import { useState } from "react";
import "../App.js";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Store } from "../Redux/Store.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { OnChange,HandleAdd } from "../Redux/ActionCreator.js";


const FormInput = () => {

  // Declare for send action to reducer
  const dispatch = useDispatch()

// HANDLE WHEN USER TYPE WORK IN INPUT FIELD
  const values = useSelector(state => state.value)
  const todoItem = useSelector(state=>state.todoList)
  const handleChange = (e) =>{
    dispatch(OnChange(e.target.value))
  }

  
// HANDLE WHEN USER CHOOSE DATE
  var deadline = ''
  const onChange =(date, dateString) => {
    console.log(date, dateString);
    deadline = dateString
  }

// HANDLE WHEN USER SUBMIT FORM
  const handleSubmit = (e) => {

    e.preventDefault()
    dispatch(HandleAdd(values))
    console.log(values)
    console.log(todoItem)
    // setValue('')
  };


  useSelector(state => state)

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          value={values}
          name="input"
        />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} picker="week" />
          <DatePicker onChange={onChange} picker="week" />
          <DatePicker onChange={onChange} picker="quarter" />
          <DatePicker onChange={onChange} picker="year" />
        </Space>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default FormInput;
