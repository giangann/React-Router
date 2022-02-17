import React, { useEffect, useState } from "react";
import ShowList from "./ShowList";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { GetDataApi, HandleCheck, HandleDelete, HandleFavourite } from "../Redux/ActionCreator";
import TodoService from "../Services/TodoService";
import { Input } from "antd";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
</style>;
const TodoList = () => {

  const [todo, setTodo] = useState([]);
  const [amountRequest, setAmountRequeset] = useState(0)

  const delay = time => new Promise((res)=>setTimeout(res,time));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async()=>{
      const data = await TodoService.GetTodos()
      setTodo(data.data.data)
      console.log("data: ",data.data)
    }
    fetchData()
  }, [amountRequest]);

  // partition data:
  const partition = _.partition(todo, "isCompleted");

  // sort todos data:
  const taskCompleted = _.orderBy(partition[0], ["deadline"], ["asc"]);
  const taskNotCompleted = _.orderBy(partition[1], ["isFavorite","taskName"], ["desc","asc"]);


  // function handle when check
  const handleCheckCompleted = async (id, value) => {
    const resonseChecked = await TodoService.ChangeTaskCompleted(id, value);
    setAmountRequeset(amountRequest+1)
  };

  // function handle when check favourite button
  const handleCheckFavourite = (id, value) =>{
    dispatch(HandleFavourite(id, value))
    setAmountRequeset(amountRequest+1)
  }
  // funtion delete specifies work
  const handleDelete = (index) => {
    dispatch(HandleDelete(index));
  };

  return (
    <div className="outer">
      <h1 className="title">TODO APP</h1>

      <div>
        <h2 className="title">Task Completed</h2>

        {taskCompleted.map((item) => (
          <ShowList
            key={item.id}
            index={item.id}
            todos={item}
            handleCheckCompleted ={handleCheckCompleted}
            handleDelete={handleDelete}
            handleCheckFavourite = {handleCheckFavourite}
          />
        ))}
      </div>

      <div>
        <h2 className="title">Task Not Completed</h2>

        {taskNotCompleted.map((item) => (
          <ShowList
            key={item.id}
            index={item.id}
            todos={item}
            handleCheckCompleted = {handleCheckCompleted}
            handleDelete={handleDelete}
            handleCheckFavourite = {handleCheckFavourite}

          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
