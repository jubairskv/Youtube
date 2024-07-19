import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    //API or Long polling
    const i = setInterval(() => {
      //console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {
        // !disclaimer : dont use key as index
        chatMessage.map((c, index) => (
          <ChatMessage name={c.name} message={c.message} key={index} />
        ))
      }
    </div>
  );
};

export default LiveChat;
