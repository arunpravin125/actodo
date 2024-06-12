import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'

function Login(props) {
    let navigate=useNavigate()
let [enterName,setenterName]=useState()
let [enterPass,setenterPass]=useState()
let [rusers,setrusers]=useState(true)
let users=props.users

   
    function checkUser(){
        var userfound=false

        users.forEach(function(item){
            if(item.username===enterName && item.password===enterPass){
                console.log("Login Sucess")
                userfound=true
                navigate("/landing",{state:{userName:enterName}})

            }
        })
        if(userfound===false){
            console.log('login failed')
            setrusers(false)
        }


    }
    function handleUserInput(eve){
        setenterName(eve.target.value)

    }
    function handlePassInput(eve){
        setenterPass(eve.target.value)
        
    }
  return (
    <div>
         <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {rusers?<p>I help your activities after you Login :)</p>:<p className="text-red-600">Please signup before you login</p>}

            <div className="flex flex-col gap-2 my-3">
                <input type="text" value={enterName} onChange={handleUserInput} className="w-52 border border-black p-1 bg-transparent border rounded-md" placeholder='Username'></input>
                <input type="text" value={enterPass} onChange={handlePassInput} className="w-52 border border-black p-1 bg-transparent border rounded-md" placeholder='Password'></input>

<button className="bg-[#8272DA] w-24 rounded-md" onClick={checkUser}>Login</button>


<p>Don't have an Account?<Link className="underline" to={"/signup"}>Signup</Link></p>

            </div>


        </div>
        
      
    </div>
      
    </div>
  )
}

export default Login
