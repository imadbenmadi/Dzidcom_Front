import React from "react";

const MessageCard = ({
    msg,
    userId,
    isNewMessage,
    setIsNewMessage,
    index,
    totalMessages,
}) => {
    const breakTheWordStyle = {
        wordBreak: "break-word",
        overflowWrap: "break-word",
    };

    return (
        <div
            key={index}
            className={`rounded-lg transition-transform duration-300 flex text-sm  ${
                msg.senderId === userId ? "justify-end" : "justify-start"
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
            <div
                className={`rounded-lg ${
                    msg.senderId === userId
                        ? "bg-blue-500 text-white"
                        : "bg-gray-600 text-white"
                }`}
            >
                <p className="break-words p-2 text-xs" style={breakTheWordStyle}>
                    {msg.message}
                </p>
            </div>
        </div>
    );
};

export default MessageCard;