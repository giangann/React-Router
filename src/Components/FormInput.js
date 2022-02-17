import "../App.js";
import "../../src/App";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { OnChange, HandleAdd } from "../Redux/ActionCreator.js";
import TodoService from "../Services/TodoService.js";

const FormInput = () => {
  // Declare for send action to reducer
  const dispatch = useDispatch();

  // HANDLE WHEN USER TYPE WORK IN INPUT FIELD
  const values = useSelector((state) => state.value);
  const handleChange = (e) => {
    dispatch(OnChange(e.target.value));
  };

  // HANDLE WHEN USER CHOOSE DATE
  var deadline = "";
  const onChange = (date, dateString) => {
    deadline = dateString;
  };

  // HANDLE WHEN USER SUBMIT FORM
  const handleSubmit = async(e) => {
    e.preventDefault();

    await TodoService.PostTodo(values)
    dispatch(HandleAdd(values));
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
        {/* <AxiosTestPage handleChange = {handleChange}/> */}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default FormInput;
