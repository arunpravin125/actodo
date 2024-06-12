import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from "../components/header"
import Card from "../components/card"
import TodoData from '../todoData'

function Landing() {
    let data=useLocation()
    console.log(data)
  return (
    <div>
    <h1>Hii {data.state.userName}</h1>
    <div className="bg-black p-16">
      <div className="p-10 bg-[#EFEFEF] border rounded-md">
        <Header name={data.state.userName}></Header>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card background={"#8272DA"} title={"23"} subtitle={"chennai"}></Card>
          <Card
            background={"#FD6663"}
            title={"December 31"}
            subtitle={"14:03:22"}
          ></Card>
          <Card
            background={"#FCA201"}
            title={"Built Using"}
            subtitle={"Research"}
          ></Card>
        </div>
        {/* <div>
          <div className="font-medium text-2xl">AddTodoForm</div>
          <div>TodoList</div>
          <TodoContainer></TodoContainer>
          
        </div> */}
      <TodoData></TodoData>
      </div>
    </div>
  
      
    </div>
  )
}

export default Landing
