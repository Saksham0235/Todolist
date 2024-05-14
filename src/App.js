import { nanoid } from 'nanoid';
import './App.css';
import { useEffect, useState } from 'react';
import Todorow from './components/Todorow';
import Button from './components/Button';


function App() {
  const[input,setinput]=useState('')
  const todos=[
    {
    title:'Dinner',
    id: nanoid(),
    isCompleted:false
   },
   {
    title:'Gym',
    id: nanoid(),
    isCompleted:true
   }
  ]

  const addTask=(e)=>{
    e.preventDefault();
    const newtask={
      title:input,
      id:nanoid(),
      isCompleted:false
    }
    settasks([...tasks,newtask]);
    setinput('');
  }

  const deleteTask=(id)=>{
    settasks((tasks.filter(t=>t.id!==id)));
  }
  const [tasks,settasks]=useState(todos)
  const activeTasks=tasks.filter(t=>!(t.isCompleted))

  let size={
    height:'50px',
    width:'100px',

  }
  return (
    <>
    <h1>Todo</h1>
    {
      activeTasks.map((task)=>
        (
          <Todorow task={task} deleteTask={deleteTask}/>
        )
      )
    }
    <form onSubmit={addTask} style={{width:300}}>
        <input type='text' value={input} style={{height:50,fontSize:'20px',border:'none',borderRadius:'5px',background:'rgb(240,241,241)',paddingLeft:'10px',outline:'none',width:188}} placeholder='Add task here ...' onChange={(e)=>setinput(e.target.value)} />
        <Button size={size} title='Add' handleClick={addTask}/> 
    </form>

    </>
  );
}

export default App;
