import React, { useState } from "react";

function AddTodoForm(props) {
  let activity=props.activityArr
    let setactivity=props.setactivityArr


    let [newactivity,setnewactivity]=useState("")

    function handleChange(eve){
      setnewactivity(eve.target.value)
    }
    function addActivity(){
      setactivity([...activity,{id:activity.length+1,activity:newactivity}])

      setnewactivity("")
    }
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1 className="text text-2xl font-medium">Manage Activities</h1>
        <div>

          <input
            type="text"
            className="border border-black  bg-transparent p-1"
            placeholder="Next Activity?"
            value={newactivity}
            onChange={handleChange}
          ></input>
          <button onClick={addActivity} className="bg-black text-white p-1 border border-black">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoForm;
