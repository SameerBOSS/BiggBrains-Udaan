import React from "react";

const Home = () => {
  return <div>   <h2 style={{color: "white"}}><b><i>ragister</i></b></h2>
  <form >
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
  </div>;

};

export default Home;