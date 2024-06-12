import React from "react";
import Header from "./components/header";
import Card from "./components/card";
// import TodoContainer from "./TodoContainer";
import TodoData from "./todoData";
import {BrowserRouter} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { Route, Routes} from "react-router-dom";
import {useState} from "react"
function App(){
  let [users,setusers]=useState(
      [
          {
              username:"arun",
              password:"123"
          }
      ]
  )
  return(
      <BrowserRouter>
  <Routes>
      <Route path="/" element={<Login users={users} setusers={setusers}></Login>}></Route>
      <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
     
  </Routes>
  </BrowserRouter>

  )
}
export default App


// root.render(
// <div>
//   <App></App>
   
// </div>
// );

{/* <div className="bg-black p-16">
<div className="p-10 bg-[#EFEFEF] border rounded-md">
  <Header></Header>
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
{/* <TodoData></TodoData>
</div>
</div>
// ); */}