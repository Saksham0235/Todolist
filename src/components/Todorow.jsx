import React, { useState } from 'react'
import Button from './Button';
import Checkbox from './Checkbox';

function Todorow({task,deleteTask}) {
  const [completed,setcompleted]=useState(false)
  const handleDelete=(id)=>{
    console.log(id);
    deleteTask(id)
}
const checkboxHandle=(e)=>{
  setcompleted(e.target.checked)
}
let size={
  width:"40px",
  height:'40px'
}
  return (
    <div style={{display:'flex',width:300,justifyContent:'space-between',alignItems:'center'}}>
      <div className="div" style={{display:'flex',width:90,justifyContent:"space-between"}}>
      <Checkbox onChange={checkboxHandle} completed={completed} />
      <h3>{task.title}</h3>
      </div>
      {/* <button onClick={()=>handleDelete(task.id)} style={{width:50,height:50,cursor:'pointer'}} className='common'>X</button> */}
      <Button title='X' size={size}  handleClick={() => handleDelete(task.id)}/>
    </div>
  )
}

export default Todorow
