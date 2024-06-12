// import React from 'react'
// import { useState } from 'react'

// function TodoContainer() {
//     let [enter,setenter]=useState("")
//     let [data,setdata]=useState([])
//     let [updatebtn,setupdatebtn]=useState(false)
//     let [indexvalue,setindexvalue]=useState()

//     function handleChange(eve){
//         setenter(eve.target.value)
//     }

//     function handleClick(){

        

//         if(updatebtn){
//             setupdatebtn(false)
            
//             setdata(data.map((text,ind)=>ind===indexvalue?enter:text))
//         }else{
//             setdata([...data,enter])


//         }



       
//         setenter("")
//     }
//     function handleDelete(index){
//         setdata(data.filter((d,ind)=>ind !==index)
//         )
//     }
//     function handleEdit(index){
//         setenter(data[index]
//         )
//         setupdatebtn(true)
//         setindexvalue(index)
//     }

//   return (
//     <div className="flex justify-between">
//         <div>
//         <input className="bg-black text-white" type="text" value={enter} onChange={handleChange}></input>
//         <button onClick={handleClick} className="bg-blue-500 p-1 border rounded-md font-bold">{updatebtn?"Update":"Add"}</button>

//         </div>
        
//         <ul className="">
//         {
//             data.map(function(item,index){
//                 return <li className="bg-sky-400 my-3 p-4" key={index}>{item}<button className="bg-lime-400 p-1 font-bold border rounded-md" onClick={()=>handleEdit(index)}>Edit</button><button className="bg-red-300 p-1 font-bold border rounded-md" onClick={()=>handleDelete(index)}>Delete</button></li>
//             })
//         }

//         </ul>
      
      
//     </div>
//   )
// }

// export default TodoContainer
