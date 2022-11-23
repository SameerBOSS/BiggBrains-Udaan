import axios from 'axios';
import React from 'react'



function onSubmit(e){
  
  const form = e.current.Target;
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  //alert(`${username} , ${password}`)

  axios.post("login", {
    username: username,
    password: password
  }).then(res=>{
    alert(JSON.stringify(res.data.message))
  }).catch(er=>{
    //alert(er.message)
    alert("Invalid credentials")
  })
}

export const Login = () => {
  return (
    <div className="login">
    <span className='card'>
        <h2 style={{color: "red"}}><b><i>RAGISTER PAGE</i></b></h2>
        <form onSubmit={onSubmit}>
            <input className='username' type= "text" id="username" placeholder ="username"/> 
            <br>
            </br>         
            <input type= "password" id="password" placeholder ="password"/>
            <br>
            </br>
            <button type='submit'>submit</button>
        </form>
    </span>
</div>
  )
}