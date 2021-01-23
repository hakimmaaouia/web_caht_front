import React, { useState, useEffect } from "react";
import  Message from "./message"
import "./message.css"

const Messages=({socket}:any)=>{
    const [messages, setmessages] = useState<any[]>([]);
    useEffect(() => {
    socket?.on("messages", (message: any) => {
        setmessages(messages => [...messages, message]);
      })
    },[])
    
    return(
        <div className="chatbox"> 
        {messages.map((message:any, i:any) =><Message  key={i} message={message}/>)}
        </div>
    )
}
export default Messages;
