import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
    Link
  } from "react-router-dom";

  const Login=()=>{
    const [Name,setName]=useState("");
   const [Room,setRoom]=useState("");  
    return (
      <div style={{lineHeight:"50px"}}>
      <div style={{color:"#ffffff",fontSize:"35px",fontWeight:"bold"}}>join</div>
      
<hr style={{height:"1px",background:"#000", border:"1px solid #000", width:"65%"}}></hr>
   <div>
        <TextField id="Room" label="Room" style={{width:"65%"}}  onChange={(evet)=>setRoom(evet.target.value)}/>
        </div>
        <div>
        <TextField id="Name" label="Name" style={{width:"65%"}}  onChange={(evet)=>setName(evet.target.value)}/>
        </div>
        <div>
        <Link to={`/chat?Room=${Room}&Name=${Name}`}>
        <Button variant="contained"  style={{width:"65%"}} >Sign in</Button>
        </Link>
        </div>
      </div>
    );
  }
  
  export default Login;