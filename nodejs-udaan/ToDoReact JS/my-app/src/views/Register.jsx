import axios from 'axios';
import React from 'react'


function onSubmit(e){
  const form = e.currentTarget;
  e.preventDefault();
  const name = form.name.value;
  const username = form.username.value;
  const password = form.password.value;

  axios.post("register",{
    name: name,
    username: username,
    password, password
  }).then(res=>{
    alert(JSON.stringify(res.data.message))
  }).catch(er=>{
    alert("invalid credintial ")
  })
}



export const Register = () => {
  
  return (
    <div className="register">
    <h2 style={{color: "white"}}><b><i>ragister</i></b></h2>
    <form onSubmit={onSubmit}>
    <input className='name' type= "text" id="name" placeholder ="name"/> 
        <br>
        </br> 
        <br>
        </br>       
        <input className='username' type= "text" id="username" placeholder ="username"/> 
        <br>
        </br> 
        <br>
        </br>         
        <input type= "password" id="password" placeholder ="password"/>
        <br>
        </br>
        <br>
        </br>
        <button type='submit'>submit</button>
    </form>
</div>
  )
} 
export default Register