import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "../messages/messages";
import Input from "../input/input";
import "./chat.css";
const Chat = ({ location }: any) => {
  const ENDPOINT = "http://127.0.0.1:5000/"||"https://server-8chat.herokuapp.com/";
  
  const { Name, Room }: any = queryString.parse(location.search);
  const [socket, setsocket] = useState<any>();
  useEffect(() => {
    let sockets: any;
    sockets = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });
    setsocket(sockets);
    sockets.emit("join", { Name, Room });
  }, [ENDPOINT, location.search]);

  return (
    <div className="container">
      <div className="header"><div className="room"><span className="cercle"></span>  {Room}</div></div>
      {socket ? <Messages socket={socket} /> : null}
      {socket ? <Input socket={socket} Room={Room} Name={Name} /> :null}
    </div>
  );
};

export default Chat;
