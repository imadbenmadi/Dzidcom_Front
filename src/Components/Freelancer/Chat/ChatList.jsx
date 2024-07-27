// src/components/ChatList.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ChatList = ({ userId, userType }) => {
    const [chats, setChats] = useState([]);

    const apiUrl = `http://localhost:3000/${userType}/${userId}/chats`;

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await axios.get(apiUrl);
                setChats(response.data);
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };

        fetchChats();
    }, [apiUrl]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Chat List</h2>
            {chats.length === 0 ? (
                <p>No chats available.</p>
            ) : (
                <ul className="space-y-4">
                    {chats.map((chat, index) => (
                        <li
                            key={index}
                            className="p-4 bg-gray-100 rounded-lg shadow"
                        >
                            <Link
                                to={`/${userType}/${userId}/chat/${
                                    userType === "freelancer"
                                        ? chat.clientId
                                        : chat.freelancerId
                                }`}
                            >
                                <h3 className="text-lg font-semibold">
                                    {userType === "freelancer"
                                        ? chat.client.name
                                        : chat.freelancer.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {chat.lastMessage}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChatList;
