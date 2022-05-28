import React from 'react'

const tasks = [];
const taskViews = [];

function addTaskInList(newTask){
    if(!newTask) return;
    const length = tasks.length
    for(let i=0; i<length; i++){
        const oldTask = tasks[i];
        if(newTask.title === oldTask.title){
            return;
        }
    }
    const item = newTask ? <tr>
        <td>{newTask.title}</td>
        <td>{newTask.desc}</td>
        </tr>
        : "";
    tasks.push(newTask)
    taskViews.push(item)
}

const TaskList = ({newTask}) => {
    addTaskInList(newTask)
  return (
    <div>
        <div>
            <table id="myTable">
                <thead>	
                    <tr id="headRow">
                    <th>Title</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {taskViews}
                </tbody>
            </table> 
        </div>
    </div>
  )
}

export default TaskList