import React from 'react'


function TodoItems(props) {
  let activity=props.activityArr
  let setactivity=props.setactivityArr

    function handleDelete(id){

      let tempArr=activity.filter(function(item){
        if(item.id===id){
          return false
        }
        else{
          return true
        }
      })
      
      setactivity(tempArr)

    }
    
  return (
    <div className='flex justify-between'>
      <p>{props.itemNo}.{props.itemName}</p>
      <button className="text-red-700" onClick={()=>handleDelete(props.Id)}>Delete</button>
    </div>
  )
}

export default TodoItems
