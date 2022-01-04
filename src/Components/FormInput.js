// import { useState } from "react";
import "../App.js";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Store } from "../Redux/Store.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { OnChange } from "../Redux/ActionCreator.js";

const FormInput = ({ handleAdd }) => {

// HANDLE WHEN USER TYPE WORK TO DO
  // state to save user input
  // const [values, setValue] = useState("");
  
  // function handle change
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  
// HANDLE WHEN USER CHOOSE DATE
  var deadline = ''
  const onChange =(date, dateString) => {
    console.log(date, dateString);
    deadline = dateString
  }

// HANDLE WHEN USER SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(values,deadline);
    
    // setValue('')
  };
  const dispatch = useDispatch()

  const values = useSelector(state => state.value)
  const handleChange = (e) =>{
    dispatch(OnChange(e.target.value))
  }

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
