import { useState } from "react";
import "../App.js";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const FormInput = ({ handleAdd }) => {

// HANDLE WHEN USER TYPE WORK TO DO
  // state to save user input
  const [values, setValue] = useState("");
  
  // function handle change
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
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
    
    setValue('')
  };
  return (
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
