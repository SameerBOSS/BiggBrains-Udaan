import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from '../commonModals/DeleteModal';
import EditModal from '../commonModals/EditModal';
import ShowDetailsModal from '../commonModals/ShowDetils';


export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  
  
  function getTasksFromApi () {
      axios.get("task").then(res=>{
          setTasks(res.data)
        }).catch(er=>{
          alert (er)
        })
  }

  function onSubmit(e){
      const form = e.currentTarget;
      e.preventDefault();
      const title = form.title.value;
      const desc = form.desc.value;

    
      axios.post("task", {
        title: title,
        desc: desc
      }).then(res=>{
        alert(JSON.stringify(res.data.message))
      }).catch(er=>{
        alert (er.response.data.message)
        alert (JSON.stringify(er.response, null, 2))
      })
    }

  useEffect(() => {
      if(!tasks || tasks.length===0){
          getTasksFromApi();
      }
    return () => {}
  }, [tasks])
  
return (
  <div>
      <div>
          <div>
          <button onClick={()=>{getTasksFromApi()}} style={{textAlign:'right'}} >Refresh</button>
          </div>
          <div className='card'>
              <form
                  onSubmit={onSubmit}>
              <h3 style={{color: "red"}}>Tasks</h3>

              <input type="text" id="title" placeholder ="Title"/>
              <br/>
              <input type="text" id="desc" placeholder ="Description"/>
              <br/>           
              <button type='submit'>Submit</button>     
              </form>
          </div>
          <div className='card'>
          <table >
                  <tr>
                  <th>done</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>delete</th>
                  <th>edit</th>
                  <th>ShowDetails</th>
                  </tr>
              <tbody >
                  {tasks && tasks.map((task, index)=>{
                      return (<tr>
                      <td><input type={"checkbox"}/></td>
                      <td>{task.title}</td>
                      <td>{task.desc}</td>
                      <td><DeleteModal task={task} /></td>   
                      <td><EditModal /></td>
                      <td><ShowDetailsModal /></td>
                      </tr>);
                  })}
              </tbody>
          </table>
          <form>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" /><br><br>
  <input type="submit" value="Submit">
</form> 
          </div>
          
      </div>
  </div>
  
)
}

export default TaskList




