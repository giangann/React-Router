import React, { useEffect, useState } from "react";
import ShowList from "./ShowList";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { HandleCheck, HandleDelete } from "../Redux/ActionCreator";
import TodoService from "../Services/TodoService";
import { Input } from "antd";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
</style>;
const TodoList = () => {
  const tempData = [
    {
      completedDate: "2022-02-14T16:15:55.2200121Z",
      createdDate: "2021-01-14T12:57:32.319456+07:00",
      id: "66dd5d0a-fc85-403f-85b7-84414be6b571",
      isCompleted: true,
      isFavorite: false,
      taskName: "Nop ho so",
    },
    {
      completedDate: "2022-02-14T16:15:55.2200121Z",
      createdDate: "2021-01-14T12:57:32.319456+07:00",
      id: "66dd6d0a-fc85-403f-85b7-84414be6b571",
      isCompleted: true,
      isFavorite: false,
      taskName: "Phong van",
    },
    {
      completedDate: "2022-02-14T16:15:55.2200121Z",
      createdDate: "2021-01-14T12:57:32.319456+07:00",
      id: "66dd7d0a-fc85-403f-85b7-84414be6b571",
      isCompleted: true,
      isFavorite: false,
      taskName: "Di lam",
    },
  ];
  const [todos2, setTodos2] = useState(tempData);
  const [amountRequest, setAmountRequeset] = useState(0)
  const delay = time => new Promise((res)=>setTimeout(res,time));

  useEffect(() => {
    const fetchData = async () => {
      const resonse = await TodoService.GetTodos();
      setTodos2(resonse.data.data);
      console.log(resonse.data.data)
    };
    fetchData();
  }, [amountRequest]);

  // partition data:
  const partition = _.partition(todos2, "isCompleted");

  // sort todos data:
  const taskCompleted = _.orderBy(partition[0], ["deadline"], ["asc"]);
  const taskNotCompleted = _.orderBy(partition[1], ["isFavorite","taskName"], ["desc","asc"]);


  // function handle when check
  const dispatch = useDispatch();
  const handleCheckCompleted = async (id, value) => {
    const resonseChecked = await TodoService.ChangeTaskCompleted(id, value);
    setAmountRequeset(amountRequest+1)
  };

  const handleCheckFavourite = async (id,value) =>{
    const resonseFav = await TodoService.ChangeTaskFavourite(id,value)
    setAmountRequeset(amountRequest+1)
    console.log(amountRequest)
    console.log(todos2)
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
