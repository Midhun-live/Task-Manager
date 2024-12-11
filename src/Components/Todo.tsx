import React, { useEffect, useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    tasks:string[];
    setTasks:(msg:string[])=>void;
  }

function Todo({tasks,setTasks}:Props) {
  const [todo,setTodo]=useState<string[]>([]);
  const [inProgress,setInProgress]=useState<string[]>([]);
  const [completed,setCompleted]=useState<string[]>([]);

  useEffect(()=>{
    setTodo(tasks);
  },[tasks])

  const handleDelete=(t:string)=>{
    const temp=tasks.filter(task=>task!==t)
    setTasks(temp)
    console.log(todo)
  }

  const handleEdit=()=>{

  }


  return (
    <div>
      {/* Todo */}
      <div className='todo-container'>
        {
          todo.map((task,i)=>{
            return (
            <div key={i}>
                <div>{task}</div>
                <div onClick={()=>handleEdit()}><EditNoteIcon/></div>
                <div onClick={()=>handleDelete(task)}><DeleteIcon/></div>
            </div>
            )
          })
        }
      </div>
      {/* inprogress */}
      <div>
        {/* {
          todo.map((task,i)=>{
            return (
            <div key={i}>
                {task}
            </div>
            )
          })
        } */}
      </div>
      {/* Completed */}
      <div>
        {/* {
          todo.map((task,i)=>{
            return (
            <div key={i}>
                {task}
            </div>
            )
          })
        } */}
      </div>
    </div>
  )
}

export default Todo