import "./App.css";
import React from "react";
import FormInput from "./Components/FormInput";
import ShowList from "./Components/ShowList";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { HandleCheck, HandleDelete } from "./Redux/ActionCreator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/add_todo">Add Todo Task</Link>
        <br></br>
        <Link to="/home">ShowList</Link>
      </div>
      <Switch>
        <Route path = "/add_todo">
          <FormInput/>
        </Route>
        <Route path="/home">
          <TodoList/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
