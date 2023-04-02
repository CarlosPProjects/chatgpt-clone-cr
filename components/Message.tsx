import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const isChatGPT = message.user.name === "Carlos-IA";
  
  return (
    <div className={`py-5 text-gray-50 ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-h8" />
        <p>{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
