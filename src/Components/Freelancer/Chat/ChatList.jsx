// src/components/ChatList.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../../AppContext";
import chat_icon from "../../../../public/chat.png";
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
                console.log(response.data);
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
        <div className="">
            {chats.length === 0 ? (
                <p className="text-sm font-semibold text-gray_v pt-12">
                    No chats available.
                </p>
            ) : (
                <div className=" flex ">
                    {" "}
                    <div className=" w-full md:w-[30%] shrink-0">
                        <ul className="space-y-4 w-full">
                            {chats.map((chat) => (
                                <li
                                    key={chat.id}
                                    className="p-4 bg-gray-100 rounded-lg shadow"
                                >
                                    <Link
                                        to={`/Freelancer/${user.id}/chats/${chat.id}`}
                                    >
                                        <h3 className="text-lg font-semibold">
                                            {`${chat?.Clinet?.firstName} ${chat?.Client?.lastName}`}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {chat?.lastMessage[0]?.message}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                        <div className=" w-[70%]  flex-col items-center
                        pt-12  h-screen hidden md:flex gap-6">
                        <div className=" text-gray_v font-semibold">please select a room to start chat</div>
                        <img src={chat_icon} className=" w-32" alt="" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatList;
