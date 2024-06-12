import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoData() {
  let [activity,setactivity]=useState([
    {id:1,activity:"go for walk"},
    {id:2,activity:"go ask Tea"}
])
  return (
    <div>
      <div className="flex  gap-5 flex-wrap ">
        <AddTodoForm activityArr={activity} setactivityArr={setactivity} ></AddTodoForm>
        <TodoList activityArr={activity} setactivityArr={setactivity}></TodoList>
      </div>
    </div>
  );
}

export default TodoData;
