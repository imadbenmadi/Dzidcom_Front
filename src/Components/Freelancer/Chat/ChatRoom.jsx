import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../../AppContext";

const ChatRoom = () => {
    const { user } = useAppContext();
    const userId = user.id;
    const { chatId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isNewMessage, setIsNewMessage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const chatApiUrl = `http://localhost:3000/Messages/freelancer/${userId}/chats/${chatId}`;
    const postApiUrl = `http://localhost:3000/Messages/freelancer/${userId}/chats/${chatId}`;

    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(chatApiUrl, {
                    withCredentials: true,
                    validateStatus: () => true,
                });
                console.log(response.data);
                if (response.status === 200) {
                    setMessages(response.data);
                } else {
                    throw new Error("Failed to fetch messages");
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [chatApiUrl]);
    if (loading) {
        return (
            <div className="w-screen h-[80vh] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-screen h-[80vh] flex items-center justify-center">
                <div className="text-red-600 font-semibold">{error}</div>
            </div>
        );
    }
    const handleSendMessage = async () => {
        if (newMessage.trim() === "") return;

        try {
            const response = await axios.post(postApiUrl, {
                message: newMessage,
            });
            setMessages([...messages, response.data]);
            setNewMessage("");
            setIsNewMessage(true);
            setTimeout(() => setIsNewMessage(false), 500); // Reset the new message state after the transition
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="h-[calc(100vh-60px)] flex flex-col justify-between  w-full ">
            <div className="space-y-4 mb-4 flex-grow overflow-y-auto h-[calc(100vh-60px-70px)] px-6">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow transition-transform duration-300 ${
                            msg.senderId === userId
                                ? "bg-blue-100 transform translate-x-2"
                                : "bg-gray-100 transform -translate-x-2"
                        } ${
                            isNewMessage && index === messages.length - 1
                                ? "transform translate-y-[-10px] opacity-0"
                                : ""
                        }`}
                        onAnimationEnd={() => {
                            if (index === messages.length - 1) {
                                setIsNewMessage(false);
                            }
                        }}
                    >
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-4  w-full h-[70px] bg-white border-t px-6">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow p-2 border rounded-lg"
                    placeholder="Type a message"
                />
                <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue-500 text-white rounded-lg"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
