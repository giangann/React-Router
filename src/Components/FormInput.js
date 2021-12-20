import { useState } from "react";
import "../App.js";

const FormInput = ({ handleAdd }) => {
  // state to save user input
  const [values, setValue] = useState("");

  const handleSubmit = () => {
    console.log({values})
    handleAdd({values});
  };

  // function handle change
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
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
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default FormInput;
