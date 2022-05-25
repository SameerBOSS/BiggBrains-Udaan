import { Button } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="my-body">
      <div className='card'>
        <label>Add New task</label>                         
        <input type="text" id="title" placeholder ="Title"/>           
        <input type="text" id="desc" placeholder="Description"/>  
        <Button onClick={()=>{}}>Add</Button>
      </div>
    <div>
      <table id="myTable">
        <thead>	
          <tr>
            <th>s.no</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Homework</td>
            <td>Krna hai hai</td>
          </tr>	
        </tbody>
        </table> 
      </div>
    </div>
  );
}

export default App;
