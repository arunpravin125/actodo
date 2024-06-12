import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'

function Signup(props) {
    let navigateSignup=useNavigate()
let users=props.users
let setusers=props.setusers
let [enterName,setenterName]=useState()
let [enterPass,setenterPass]=useState()

function handleUserInput(eve){
    setenterName(eve.target.value)

}
function handlePassInput(eve){
    setenterPass(eve.target.value)
    
}
function addUser(){
   
    // setusers([...users,{username:enterName,password:enterPass}])
    setusers([...users,{username:enterName,password:enterPass}])
    navigateSignup("/")

}
  return (
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>I help your activities after you SingUp :)</p>

            <div className="flex flex-col gap-2 my-3">
                <input type="text" value={enterName} onChange={handleUserInput} className="w-52 border border-black p-1 bg-transparent border rounded-md" placeholder='Username'></input>
                <input type="text" value={enterPass} onChange={handlePassInput} className="w-52 border border-black p-1 bg-transparent border rounded-md" placeholder='Password'></input>
                <input type="text" className="w-52 border border-black p-1 bg-transparent border rounded-md" placeholder='Confirm password'></input>
<button className="bg-[#ecc94b] w-24 rounded-md" onClick={addUser} >SignUp</button>


<p>Already have an account?<Link className="underline" to={"/"}>Login</Link></p>

            </div>


        </div>
        
      
    </div>
  )
}

export default Signup
