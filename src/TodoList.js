
import TodoItems from "./TodoItems";


function TodoList(props) {
    let activity=props.activityArr
    let setactivity=props.setactivityArr

    

  return (
    
      <div className="bg-[#BDB4EA] border rounded-md p-2  flex-grow">
        <h1 className="text text-2xl font-medium">Todays Activity</h1>
        {activity.length===0?<p>you haven't added any activity yet</p>:
       "" }
        
    
        {
            activity.map(function(items,index){
                return <TodoItems Id={items.id} itemNo={index+1} itemName={items.activity} activityArr={activity} setactivityArr={setactivity}></TodoItems>
            })
        }

      </div>
    
  );
}

export default TodoList;
