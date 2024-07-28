// src/components/ChatRoom.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChatRoom = ({ userId, userType }) => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const chatApiUrl = `http://localhost:3000/Messages/client/${userId}/rooms/${roomId}`;

    const postApiUrl = `http://localhost:3000/Messagess/client/${userId}/rooms/${roomId}`;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(chatApiUrl);
                setMessages(response.data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim() === "") return;

        try {
            const response = await axios.post(postApiUrl, {
                message: newMessage,
            });
            setMessages([...messages, response.data]);
            setNewMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Chat Room</h2>
            <div className="space-y-4 mb-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow ${
                            msg.senderId === userId
                                ? "bg-blue-100"
                                : "bg-gray-100"
                        }`}
                    >
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-4">
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
