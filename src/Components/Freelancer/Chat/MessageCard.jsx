import React from "react";

const MessageCard = ({
    msg,
    userId,
    isNewMessage,
    setIsNewMessage,
    index,
    totalMessages,
}) => {
    return (
        <div
            key={index}
            className={`p-4 rounded-lg shadow transition-transform 
                duration-300 ${
                    msg.senderId === userId
                        ? "bg-blue-100 transform translate-x-2"
                        : "bg-gray-100 transform -translate-x-2"
                } ${
                isNewMessage && index === totalMessages - 1
                    ? "transform translate-y-[-10px] opacity-0"
                    : ""
            }`}
            onAnimationEnd={() => {
                if (index === totalMessages - 1) {
                    setIsNewMessage(false);
                }
            }}
        >
            <p className="w-fit break-all">{msg.message}</p>
        </div>
    );
};

export default MessageCard;
