import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(()=> {
            // console.log("API Polling");

            dispatch(addMessage({
                name : generateRandomName(),
                 message : makeRandomMessage(20) + " 👐"
            }))

        },2000);
        return () => clearInterval(i);
    }, [])

  return (
    <div>
        <div className="p-2 ml-2 h-[500px] w-full border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chat, index) => 
      <ChatMessage 
        name={chat.name} 
        message={chat.message} 
        key={index}/>)}
    </div>
    <form className="w-full p-2 mt-1 ml-2 border border-black" 
        onSubmit={(e)=>{
            e.preventDefault();
            console.log("on Form Submit", liveMessage);
            dispatch(addMessage({
                name : "Shravak Choudhary",
                 message : liveMessage,
            }))
            setLiveMessage("");;
        }}>
        <input className="w-[350px] border border-black p-2" type="text" 
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}/>
        <button className="px-2 m-2 bg-green-100">Send</button>
    </form>
    </div>
  )
}

export default LiveChat
