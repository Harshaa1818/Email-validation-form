import React from "react"
import { useState } from "react"




function App() {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[pass,setPass]=useState("");


  const click=(e)=>{
    setEmail(e.target.value);
  }

  const clickpass=(e)=>{
    setPassword(e.target.value);
  }

  const clickpass2=(e)=>{
    setPass(e.target.value);


  }

  const show=()=>{
    let newEmail=email;
    let hs=new Set();
    for(let i=0;i<newEmail.length;i++) hs.add(newEmail[i]);

    if(!hs.has('@')) alert("email must contain '@'");

    let newPassword=password;
    let hs2=new Set();

    for(let i=0;i<newPassword.length;i++) hs2.add(newPassword[i]);

    if(!(hs2.has('~') ||
    hs2.has('!') ||
    hs2.has('@') ||
    hs2.has('#') ||
    hs2.has('$') ||
    hs2.has('%') ||
    hs2.has('^') ||
    hs2.has('&') ||
    hs2.has('*') ||
    hs2.has('(') ||
    hs2.has(')') 
    ))
    {
      alert("password must contain one special character")
    }

    if(password!==pass) alert("Both password should match")

    else{
      console.log(`email is ${email}`);
    console.log(`password is ${password}`);
  }
}
  
  
  

  return (
    <>
      
  <form>
    <h1>Register User</h1>
   <div>
    <label >Email: </label>
    <input type="email" placeholder="Enter mail id" onChange={click}></input>
      
    </div>
    <br></br> 
    <div>
    <label >Password: </label>
    <input type="password" placeholder="Enter password" onChange={clickpass}></input>
    </div>

    <br></br> 
    <div>
    <label > Confirm Password: </label>
    <input type="password" placeholder="Confirm password" onChange={clickpass2}></input>
    </div>
    <br></br> 
    <div id='btn'><button type="success" onClick={show}>Verify Email and password</button></div>

  </form>
     
      
  
      
    </>
  )
}

export default App
