import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const TaskView = () => {
   const [task, setTask] = useState()
    
  return (
    <div className="hom">
        <TaskForm onAddTask={(obj)=>{
            setTask(obj)
        }}/>
        <TaskList newTask={task}/>
    </div>
  )
}

export default TaskView