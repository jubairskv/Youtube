import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    //API or Long polling
    const i = setInterval(() => {
      //console.log("API polling");
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="jubair kasim" message="hi this is jubiar🚀" />
    </div>
  );
};

export default LiveChat;
