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
            className={` rounded-lg  transition-transform
                duration-300 flex ${
                    msg.senderId === userId ? "justify-end" : "justify-start"
                }
                ${
                    isNewMessage && index === totalMessages - 1
                        ? "transform translate-y-[-10px] opacity-0"
                        : ""
                }
            `}
            onAnimationEnd={() => {
                if (index === totalMessages - 1) {
                    setIsNewMessage(false);
                }
            }}
        >
            <div
                className={` rounded-lg ${
                    msg.senderId === userId ? "bg-blue-100" : "bg-gray-100"
                }`}
            >
                <p className="break-all p-2">{msg.message}</p>
            </div>
        </div>
    );
};

export default MessageCard;
