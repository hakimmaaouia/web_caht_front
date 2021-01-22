import React, { useState} from "react";
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import "./input.css";
const Input = ({ socket, Room, Name }: any) => {
    
  const [message, setmessage] = useState("");
  const sendmessage = (event:any) => {
    
      socket?.emit("sendmessage", { message, Room, Name });
    setmessage("");
      
    
  };
  return (
    <div className="send">
     <InputBase
       placeholder="Message"
       inputProps={{ 'aria-label': 'Message' }}
       onChange={(event) => setmessage(event.target.value)}
       onKeyDown={event => event.key === 'Enter' ? sendmessage(event) : null
       }
       value={message}
      className="inputmessage"
     />


<Button
        variant="contained"
        color="primary"
        className="sendbuttom"
        onClick={(e)=>sendmessage(e)
        }
      >
        Send
      </Button>
      
    </div>
  );
};
export default Input;
