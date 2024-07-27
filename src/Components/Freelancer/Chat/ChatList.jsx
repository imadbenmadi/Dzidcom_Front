// src/components/ChatList.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../../AppContext";
const ChatList = ({ userId }) => {
    const { user } = useAppContext();
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = `http://localhost:3000/Messages/freelancer/${user.id}/chats`;

    useEffect(() => {
        const fetchChats = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(apiUrl, {
                    withCredentials: true,
                    validateStatus: () => true,
                });
                if (response.status === 200) {
                    setChats(response.data.rooms);
                } else {
                    throw new Error("Failed to fetch chats");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChats();
    }, [apiUrl]);

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

    return (
        <div className="p-4 flex justify-center items-center flex-col">
            {chats.length === 0 ? (
                <p className="text-sm font-semibold text-gray_v pt-12">
                    No chats available.
                </p>
            ) : (
                <ul className="space-y-4 w-full">
                    {chats.map((chat) => (
                        <li
                            key={chat.id}
                            className="p-4 bg-gray-100 rounded-lg shadow"
                        >
                            <Link
                                to={`/Freelancer/${userId}/chat/${chat.clientId}`}
                            >
                                <h3 className="text-lg font-semibold">
                                    {/* {`${chat?.client?.firstName} ${chat.client.lastName}`} */}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {/* {chat?.lastMessage} */}
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
