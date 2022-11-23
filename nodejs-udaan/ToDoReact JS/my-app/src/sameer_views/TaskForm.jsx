import React from 'react'


const TaskForm = ({onAddTask}) => {
    function onSubmit(e){
        e.preventDefault();
        const form = e.currentTarget;
        const title = form.title.value;
        const desc = form.desc.value;
        const obj = {
            title: title,
            desc: desc
        }
        onAddTask(obj)
        form.title.value = "";
        form.desc.value = "";
    }
  return (
    <div>
        <div className='card'>
            <label>Add New task</label>   
            <form
                onSubmit={onSubmit}>
                <input type="text" id="title" placeholder ="Task"/>           
                <input type="text" id="desc" placeholder="Description"/>  
                <button type='submit' >Add</button>
            </form>
            
        </div>
    </div>
  )
}

export default TaskForm