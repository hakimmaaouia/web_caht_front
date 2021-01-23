import React from "react";
import "./message.css";
import Avatar from "@material-ui/core/Avatar";
import Emoji from "react-emoji-render";

const Adminmessage=({
  message: {
    Name,
    message,
    dates: { date, date_ob, hours, minutes, month, seconds, year },
  },
}: any)=>{
  return(
    <div className="message-data-time centre">
      {message}  {hours}:{minutes}:{seconds} {year}/{month}/{date}
      </div>
  )
}



const Usermessage=({
  message: {
    Name,
    message,
    dates: { date, date_ob, hours, minutes, month, seconds, year },
  },
}: any)=>{
return(
  <div className="containerMessage">
  <div style={{ display: "flex" }}>
    <Avatar>{Name[0].toUpperCase()}</Avatar>
    <div className="data_name">
      <span>{Name}</span>{" "}
      <span className="message-data-time">
        {hours}:{minutes}:{seconds} {year}/{month}/{date}
      </span>
    </div>
  </div>
  <div className="message-box">
  <Emoji text={message} />
  </div>
</div>
)
}

const Message = ({message}: any) => {
  console.log(message.Name);
  
  return (
   <div>
    {message.Name==="admin"?<Adminmessage message={message}/>:<Usermessage message={message}/>}
     </div>
  );
};
export default Message;
