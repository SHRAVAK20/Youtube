import user_logo from "../images/user.png";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex item-center shadow-lg p-2">
      <img className="h-8 col-span-1" src={user_logo} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
