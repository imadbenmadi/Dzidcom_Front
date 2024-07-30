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
            className={`rounded-lg transition-transform duration-300 flex text-sm  font-semibold ${
                msg.senderType === "client" ? "justify-end" : "justify-start"
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
                    msg.senderType === "client"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-black_text"
                }`}
            >
                <p
                    className="break-words p-2 text-sm leading-6"
                    style={breakTheWordStyle}
                >
                    {msg.message}
                </p>
            </div>
        </div>
    );
};

export default MessageCard;
